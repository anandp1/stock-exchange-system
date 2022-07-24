import { Collection } from "mongodb";
import { getMongoClient } from "../middleware/mongodb";

export interface User {
  username: string;
  password: string;
  updatedAt: Date;
}

const getUser = async (username: string): Promise<User | null> => {
  const client = await getMongoClient();
  const db = client.db(process.env.MONGODB_NAME);
  const userCollection: Collection<User> = db.collection("users");

  const user = await userCollection.findOne<User>({ username });

  return user;
};

const saveUser = async (user: Omit<User, "updatedAt">): Promise<boolean> => {
  const client = await getMongoClient();
  const db = client.db(process.env.MONGODB_NAME);
  const userCollection: Collection<User> = db.collection("users");

  const userExists = await userCollection.findOne<User>({
    username: user.username,
  });

  if (userExists) {
    return false;
  }

  userCollection.insertOne({
    username: user.username,
    password: user.password,
    updatedAt: new Date(),
  });

  return true;
};

export { getUser, saveUser };
