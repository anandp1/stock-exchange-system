import type { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";

import { DollarSign } from "../components/logo/dollar-sign";
import { Layout } from "../components/shared/layout";

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

  const items = [
    {
      symbol: "APPL",
      name: "Apple Inc",
      price: 123.45,
      change: 0.45,
      changePercent: 0.45,
    },
    {
      symbol: "APPL",
      name: "Apple Inc",
      price: 123.45,
      change: 0.45,
      changePercent: 0.45,
    },

    {
      symbol: "APPL",
      name: "Apple Inc",
      price: 123.45,
      change: 0.45,
      changePercent: 0.45,
    },

    {
      symbol: "APPL",
      name: "Apple Inc",
      price: 123.45,
      change: 0.45,
      changePercent: 0.45,
    },
    {
      symbol: "APPL",
      name: "Apple Inc",
      price: 123.45,
      change: 0.45,
      changePercent: 0.45,
    },
  ];

  return (
    <Layout currentPage={"Home"}>
      <div className="flex flex-col">
        <div className="flex flex-col mt-20 ml-8">
          <p className="text-gray-500 text-sm font-bold">
            Good afternoon, Anand You have
          </p>
          <div className="flex flex-row mt-2 items-center">
            <DollarSign />
            <p className="text-black text-4xl mb-1 font-bold">100,000.32</p>
          </div>
        </div>
        <div className="flex flex-row mt-20">
          <div className="flex flex-col ml-8">
            <p className="text-gray-500 text-sm font-bold mb-3">All Time</p>
            <Chart type="line" data={data} />
          </div>
          <div className="flex flex-col ml-80">
            <p className="text-gray-500 text-sm font-bold mb-3">
              Your Watchlist
            </p>
            <div className="rounded-lg bg-white shadow-md w-full">
              <ul
                role="list"
                className="divide-y max-h-80 scrollbar-hide overflow-y-auto w-80 divide-gray-200"
              >
                {items.map((item) => (
                  <li key={item.symbol} className="px-6 py-5">
                    <div className="flex flex-row justify-between">
                      <div className="flex flex-col">
                        <p className="text-gray-800 text-sm font-bold">
                          {item.symbol}
                        </p>
                        <p className="text-gray-500 text-xs font-medium">
                          {item.name}
                        </p>
                      </div>
                      <div className="flex flex-col">
                        <p className="ml-auto text-gray-800 text-sm font-bold">
                          ${item.price}
                        </p>
                        <div className="flex flex-row text-xs font-medium">
                          <p className="text-gray-500">-${item.change} | </p>{" "}
                          <p className="ml-1 text-gray-500">
                            {item.changePercent}%
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
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
