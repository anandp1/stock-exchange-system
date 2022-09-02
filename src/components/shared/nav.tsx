import React, { ReactElement } from "react";
import Link from "next/link";
import classnames from "classnames";
import { navigationOptions } from "../../lib/navigation-options";

export interface navProps {
  currentPage: string;
}

const Nav = (props: navProps): JSX.Element => {
  return (
    <div role="neo-nav" className="flex flex-row items-center bg-slate-900">
      <div className="justify-center">
        <a
          href="https://www.flaticon.com/free-icons/trend"
          className="flex w-24"
          title="trend icons"
        ></a>
      </div>
      <div className="flex w-full items-center justify-end space-x-4">
        {navigationOptions.map((item, index) => (
          <Link key={index} href={item.navLink}>
            <a
              data-testid={`navigation-option-${item.name}`}
              className={classnames(
                item.name === props.currentPage
                  ? "text-md hidden cursor-default rounded-md bg-gray-900 px-3 py-2 font-medium text-white md:block"
                  : "text-md hidden rounded-md px-3 py-2 font-medium text-gray-300 hover:bg-gray-700 hover:text-white md:block"
              )}
            >
              {item.name}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export { Nav };
