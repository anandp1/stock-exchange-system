import type { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";

import { DollarSign } from "../components/logo/dollar-sign";
import { Layout } from "../components/shared/layout";
import { WatchList } from "../components/home/watch-list";
import { Chart } from "../components/shared/chart";

const Home: NextPage = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [33, 53, 85, 41, 44, 65],
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  return (
    <Layout currentPage={"Home"}>
      <div className="flex flex-col mx-72">
        <div className="flex flex-col mt-40">
          <p className="text-gray-500 text-sm font-bold">
            Good afternoon, Anand. You have
          </p>
          <div className="flex flex-row mt-2 items-center">
            <DollarSign />
            <p className="text-black text-4xl mb-1 font-bold">100,000.32</p>
          </div>
        </div>
        <div className="flex flex-row mt-20">
          <div className="flex flex-col basis-2/3">
            <p className="text-gray-500 text-sm font-bold mb-3">All Time</p>
            <div className="w-full ">
              <Chart />
            </div>
          </div>
          <div className="flex flex-col ml-auto mr-8">
            <p className="text-gray-500 text-sm font-bold mb-3">
              Your Watchlist
            </p>
            <WatchList />
          </div>
        </div>
      </div>
    </Layout>
  );
};

// at the bottom put top movers
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
