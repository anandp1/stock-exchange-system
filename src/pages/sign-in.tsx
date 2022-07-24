import { GetServerSideProps } from "next";
import { getSession, signIn } from "next-auth/react";

const SignIn: React.FC = () => {
  return (
    <button
      onClick={() =>
        signIn("credentials", { username: "jsmith", password: "1234" })
      }
    >
      Log in with Google
    </button>
  );
};

const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export { getServerSideProps };

export default SignIn;
