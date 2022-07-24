import type { NextApiRequest, NextApiResponse } from "next";
import { saveUser } from "../../model/user.model";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const user = {
      username: decodeURIComponent(req.query.username as string),
      password: decodeURIComponent(req.query.password as string),
    };
    const userCreated = await saveUser(user);

    if (!userCreated) {
      return res.status(401).json({ message: "User exists" });
    }

    return res.status(200).json({ message: "User created" });
  } catch {
    return res.status(500).json({ message: `Internal server error` });
  }
};

export default handler;
