/* eslint-disable react/no-unescaped-entities */
import { useRouter } from "next/router";
import { useState } from "react";
import useSWR from "swr";

import { DollarSign } from "../../components/logo/dollar-sign";
import { Chart } from "../../components/shared/chart";
import { Layout } from "../../components/shared/layout";
import { BuyModal } from "../../components/stock/buy-modal";
import { fetcher } from "../../lib/fetcher";

const Stock: React.FC = () => {
  const [buyClicked, setBuyClicked] = useState(false);
  const router = useRouter();

  const { data: allStocksData, error: allStocksError } = useSWR(
    "/api/shared/get-all-stocks",
    fetcher
  );

  const symbol = router.asPath.split("/")[2];

  const { data: stockQuote, error: stockQuoteError } = useSWR(
    `/api/stock/get-stock-quote?symbol=${symbol}`,
    fetcher
  );

  const { data: stockChartData, error: stockChartError } = useSWR(
    `/api/stock/get-stock-chart?symbol=${symbol}`,
    fetcher
  );

  if (allStocksError || stockQuoteError || stockChartError) {
    return <p>Error!</p>;
  }

  if (!allStocksData || !stockQuote || !stockChartData) {
    return <p>Loading...</p>;
  }

  return (
    <Layout currentPage="Stock" allStocksData={allStocksData}>
      <div className="flex mx-72 h-full">
        {buyClicked && <BuyModal setBuyClicked={setBuyClicked} />}
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
                <div className="flex flex-col max-w-2">
                  <p className="text-gray-800 text-lg font-bold max-w-2">
                    {stockQuote.symbol}
                  </p>
                  <p className="text-gray-500 text-sm font-medium max-w-2">
                    {stockQuote.companyName} - {stockQuote.primaryExchange}
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-gray-800 text-lg font-bold">
                    {stockQuote.delayedPrice}
                  </p>
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
                    <p className="ml-16 text-gray-500 text-md font-medium">
                      {stockQuote.change}
                    </p>
                  </li>
                  <li className="flex flex-row">
                    <p className="text-gray-500 text-md font-medium">
                      Day's Change (%)
                    </p>
                    <p className="text-gray-500 text-md font-medium ml-auto">
                      {(Number(stockQuote.changePercent) * 100).toFixed(2)}%
                    </p>
                  </li>
                  <li className="flex flex-row">
                    <p className="text-gray-500 text-md font-medium">
                      Day's High
                    </p>
                    <p className="text-gray-500 text-md font-medium ml-auto">
                      {Number(stockQuote.high).toFixed(2)}
                    </p>
                  </li>
                  <li className="flex flex-row">
                    <p className="text-gray-500 text-md font-medium">
                      Day's Low
                    </p>
                    <p className="text-gray-500 text-md font-medium ml-auto">
                      {Number(stockQuote.low).toFixed(2)}
                    </p>
                  </li>
                  <li className="flex flex-row">
                    <p className="text-gray-500 text-md font-medium">
                      52 Week High
                    </p>
                    <p className="text-gray-500 text-md font-medium ml-auto">
                      ${stockQuote.week52High}
                    </p>
                  </li>
                  <li className="flex flex-row">
                    <p className="text-gray-500 text-md font-medium">
                      52 Week Low
                    </p>
                    <p className="text-gray-500 text-md font-medium ml-auto">
                      ${stockQuote.week52Low}
                    </p>
                  </li>
                </ul>

                <ul>
                  <li className="flex flex-row">
                    <p className="text-gray-500 text-md font-medium">Open</p>
                    <p className="text-gray-500 text-md font-medium ml-auto">
                      {stockQuote.open}
                    </p>
                  </li>
                  <li className="flex flex-row">
                    <p className="text-gray-500 text-md font-medium">
                      Volume Current
                    </p>
                    <p className="ml-32 text-gray-500 text-md font-medium">
                      {stockQuote.volume}
                    </p>
                  </li>
                  <li className="flex flex-row">
                    <p className="text-gray-500 text-md font-medium">
                      Volume Average
                    </p>
                    <p className="text-gray-500 text-md font-medium ml-auto">
                      {stockQuote.avgTotalVolume}
                    </p>
                  </li>
                  <li className="flex flex-row">
                    <p className="text-gray-500 text-md font-medium">
                      Market Cap
                    </p>
                    <p className="text-gray-500 text-md font-medium ml-auto">
                      {stockQuote.marketCap}
                    </p>
                  </li>
                  <li className="flex flex-row">
                    <p className="text-gray-500 text-md font-medium">
                      P/E Ratio
                    </p>
                    <p className="text-gray-500 text-md font-medium ml-auto">
                      {stockQuote.peRatio}
                    </p>
                  </li>
                  <li className="flex flex-row">
                    <p className="text-gray-500 text-md font-medium">
                      YTD Change
                    </p>
                    <p className="text-gray-500 text-md font-medium ml-auto">
                      {(Number(stockQuote.ytdChange) * 100).toFixed(2)}%
                    </p>
                  </li>
                </ul>
              </div>
              <div className="flex flex-row mt-6 gap-3">
                <button
                  className="w-20 bg-gray-800 hover:bg-zinc-400 text-white font-medium py-2 px-4 rounded-full"
                  onClick={() => setBuyClicked(true)}
                >
                  Buy
                </button>
                <button className="w-20 bg-white border border-gray-800 hover:bg-neutral-100 text-black font-medium py-2 px-4 rounded-full">
                  Sell
                </button>
              </div>
            </div>
            <div className="ml-auto mb-8 mr-8">
              <Chart stockChartData={stockChartData} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Stock;

// have a card at the middle displaying the information and then a modal for buying / selling
