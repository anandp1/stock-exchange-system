import type { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";
import { Layout } from "../components/shared/layout";

const Home: NextPage = () => {
  return (
    <Layout currentPage={"Home"}>
      <div className="">
        <div className="flex flex-row justify-evenly"></div>
      </div>
    </Layout>
  );
};

// portfolio left side has all the stocks right side has a graph with your money for the stock selected

const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export { getServerSideProps };

export default Home;
