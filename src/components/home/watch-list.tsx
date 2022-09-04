const WatchList: React.FC = () => {
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
    <div className="rounded-lg bg-white shadow-md w-full h-full mb-4">
      <ul
        role="list"
        className="divide-y max-h-80 scrollbar-hide overflow-y-auto w-80 divide-gray-200"
      >
        {items.map((item) => (
          <li key={item.symbol} className="px-6 py-5">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                <p className="text-gray-800 text-sm font-bold">{item.symbol}</p>
                <p className="text-gray-500 text-xs font-medium">{item.name}</p>
              </div>
              <div className="flex flex-col">
                <p className="ml-auto text-gray-800 text-sm font-bold">
                  ${item.price}
                </p>
                <div className="flex flex-row text-xs font-medium">
                  <p className="text-gray-500">-${item.change} | </p>{" "}
                  <p className="ml-1 text-gray-500">{item.changePercent}%</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { WatchList };
