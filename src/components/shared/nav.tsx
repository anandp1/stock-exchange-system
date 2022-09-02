import React from "react";
import Link from "next/link";

import { navigationOptions } from "../../lib/navigation-options";
import { ArrowTrendingUp } from "../logo/arrow-trending-up";
import { SearchBar } from "../search-bar";

export interface navProps {
  currentPage: string;
}

const Nav = (props: navProps): JSX.Element => {
  return (
    <div
      role="neo-nav"
      className="flex flex-row items-center gap-12 bg-white my-3"
    >
      <div className="justify-center gap-4 ml-3 flex flex-row">
        <ArrowTrendingUp />
        <p className="font-bold">Trade</p>
      </div>
      <p className="my-auto flex mx-auto">|</p>
      <div className="flex w-full items-center space-x-4">
        {navigationOptions.map((item) =>
          item.name === props.currentPage ? (
            <Link key={item.name} href={item.navLink}>
              <a className="bg-gray-300 text-gray-500 cursor-default px-3 py-2 rounded-md text-sm font-bold">
                {item.name}
              </a>
            </Link>
          ) : (
            <Link key={item.name} href={item.navLink}>
              <a className="text-gray-500 hover:bg-gray-300 px-3 py-2 rounded-md text-sm font-bold">
                {item.name}
              </a>
            </Link>
          )
        )}
        <SearchBar />
      </div>
    </div>
  );
};

export { Nav };
