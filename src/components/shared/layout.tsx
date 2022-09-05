import React, { ReactElement } from "react";
import { APIStock } from "../../pages/api/shared/get-all-stocks";
import { Nav } from "./nav";

interface LayoutProps {
  children: ReactElement;
  currentPage: string;
  allStocksData: APIStock[];
}

const Layout = ({
  children,
  currentPage,
  allStocksData,
}: LayoutProps): JSX.Element => {
  return (
    <div className="h-screen overflow-y-hidden">
      <Nav currentPage={currentPage} allStocksData={allStocksData} />
      <div className={"w-full h-screen bg-gradient-to-b from-emerald-50"}>
        {children}
      </div>
    </div>
  );
};

export { Layout };
