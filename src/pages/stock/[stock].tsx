/* eslint-disable react/no-unescaped-entities */
import { DollarSign } from "../../components/logo/dollar-sign";
import { Chart } from "../../components/shared/chart";
import { Layout } from "../../components/shared/layout";

const Stock: React.FC = () => {
  return (
    <Layout currentPage="Stock">
      <div className="flex mx-72 h-full">
        <div className="flex flex-col my-40 border rounded-lg shadow-md w-full">
          <div className="grid grid-cols-5 divide-x-2 mt-20">
            <div className="flex flex-col">
              <p className="text-gray-500 text-sm font-bold ml-10">
                Account Value
              </p>
              <div className="flex flex-row mt-2 items-center ml-8">
                <DollarSign />
                <p className="text-black text-4xl mb-1 font-bold">100,000.32</p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-gray-500 text-sm font-bold ml-8">
                Available Funds
              </p>
              <div className="flex flex-row mt-2 items-center ml-6">
                <DollarSign />
                <p className="text-black text-4xl mb-1 font-bold">10,000.82</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row mt-auto">
            <div className="flex flex-col ml-8">
              <div className="flex flex-row gap-14">
                <div className="flex flex-col">
                  <p className="text-gray-800 text-lg font-bold">AAPL</p>
                  <p className="text-gray-500 text-sm font-medium">
                    Apple Inc - NASDAQ
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-gray-800 text-lg font-bold">117.76</p>
                  <p className="text-gray-500 text-sm font-medium">
                    Nov 19, 12:57PM EST - Disclaimer
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-4 mt-8">
                <ul>
                  <li className="flex flex-row">
                    <p className="text-gray-500 text-md font-medium">
                      Day's Change ($)
                    </p>
                    <p className="ml-16 text-gray-500 text-md font-medium">9</p>
                  </li>
                  <li className="flex flex-row">
                    <p className="text-gray-500 text-md font-medium">
                      Day's Change (%)
                    </p>
                    <p className="text-gray-500 text-md font-medium ml-auto">
                      9%
                    </p>
                  </li>
                  <li className="flex flex-row">
                    <p className="text-gray-500 text-md font-medium">
                      Day's High
                    </p>
                    <p className="text-gray-500 text-md font-medium ml-auto">
                      909
                    </p>
                  </li>
                  <li className="flex flex-row">
                    <p className="text-gray-500 text-md font-medium">
                      Day's Low
                    </p>
                    <p className="text-gray-500 text-md font-medium ml-auto">
                      900
                    </p>
                  </li>
                  <li className="flex flex-row">
                    <p className="text-gray-500 text-md font-medium">
                      52 Week High ($)
                    </p>
                    <p className="text-gray-500 text-md font-medium ml-auto">
                      999
                    </p>
                  </li>
                  <li className="flex flex-row">
                    <p className="text-gray-500 text-md font-medium">
                      52 Week Low ($)
                    </p>
                    <p className="text-gray-500 text-md font-medium ml-auto">
                      99
                    </p>
                  </li>
                </ul>

                <ul>
                  <li className="flex flex-row">
                    <p className="text-gray-500 text-md font-medium">
                      Volume Current
                    </p>
                    <p className="ml-32 text-gray-500 text-md font-medium">9</p>
                  </li>
                  <li className="flex flex-row">
                    <p className="text-gray-500 text-md font-medium">
                      Volume Average (10 Day Range)
                    </p>
                    <p className="text-gray-500 text-md font-medium ml-auto">
                      9
                    </p>
                  </li>
                  <li className="flex flex-row">
                    <p className="text-gray-500 text-md font-medium">
                      Market Cap
                    </p>
                    <p className="text-gray-500 text-md font-medium ml-auto">
                      9,00T
                    </p>
                  </li>
                  <li className="flex flex-row">
                    <p className="text-gray-500 text-md font-medium">
                      EPS (Most Recent)
                    </p>
                    <p className="text-gray-500 text-md font-medium ml-auto">
                      9
                    </p>
                  </li>
                  <li className="flex flex-row">
                    <p className="text-gray-500 text-md font-medium">
                      Big/Ask Price
                    </p>
                    <p className="text-gray-500 text-md font-medium ml-auto">
                      900
                    </p>
                  </li>
                  <li className="flex flex-row">
                    <p className="text-gray-500 text-md font-medium">
                      P/E Ratio
                    </p>
                    <p className="text-gray-500 text-md font-medium ml-auto">
                      90
                    </p>
                  </li>
                </ul>
              </div>
              <div className="flex flex-row mt-4 gap-3">
                <button className="w-20 bg-gray-800 hover:bg-zinc-400 text-white font-medium py-2 px-4 rounded-full">
                  Buy
                </button>
                <button className="w-20 bg-white border border-gray-800 hover:bg-neutral-100 text-black font-medium py-2 px-4 rounded-full">
                  Sell
                </button>
              </div>
            </div>
            <div className="ml-auto">
              <Chart />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Stock;

// have a card at the middle displaying the information and then a modal for buying / selling
