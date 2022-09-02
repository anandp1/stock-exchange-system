import React, { ReactElement } from "react";
import { Nav } from "./nav";

interface LayoutProps {
  children: ReactElement;
  currentPage: string;
}

const Layout = ({ children, currentPage }: LayoutProps): JSX.Element => {
  return (
    <div className="h-screen overflow-y-hidden">
      <Nav currentPage={currentPage} />
      <div className={"w-full h-screen bg-gradient-to-b from-emerald-50"}>
        {children}
      </div>
    </div>
  );
};

export { Layout };
