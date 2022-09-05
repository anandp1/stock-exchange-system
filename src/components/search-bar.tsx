import Link from "next/link";
import { useEffect, useState } from "react";
import { APIStock } from "../pages/api/shared/get-all-stocks";

interface SearchBarProps {
  allStocksData: APIStock[];
}

const SearchBar: React.FC<SearchBarProps> = ({
  allStocksData,
}: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [filteredSearch, setFilteredSearch] = useState<APIStock[]>([]);

  return (
    <div className="w-96">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          value={query}
          type="text"
          className="block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
          placeholder="Search for a symbol or name"
          onChange={(event) => {
            setQuery(event.target.value);

            let counter = 0;
            setFilteredSearch(
              allStocksData.filter((stock) => {
                const isInFilter =
                  stock.symbol
                    .toLowerCase()
                    .includes(event.target.value.toLowerCase()) ||
                  stock.name
                    .toLowerCase()
                    .includes(event.target.value.toLowerCase());

                if (isInFilter && counter < 15) {
                  counter = counter + 1;
                  return true;
                } else {
                  return false;
                }
              })
            );
          }}
        />
        {query !== "" && (
          <div className="bg-gray-200 flex flex-col absolute max-h-60 w-full mt-1 overflow-y-auto">
            <p className="p-2 ml-2 font-bold text-sm">Stocks</p>
            {filteredSearch.map((stock, index) => (
              <>
                <div
                  key={index}
                  className="px-4 flex flex-col cursor-pointer transition ease-in-out divide-y bg-white hover:bg-gray-100"
                >
                  <Link href={`/stock/${stock.symbol}`}>
                    <div className="flex flex-col">
                      <p className="text-gray-800 text-md font-bold mt-4">
                        {stock.symbol}
                      </p>
                      <p className="text-gray-500 text-xs font-medium mb-4">
                        {stock.name} | {stock.exchange}
                      </p>
                    </div>
                  </Link>
                </div>
              </>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export { SearchBar };
