import React, { ReactElement } from "react";
import { Nav } from "./nav";

interface LayoutProps {
  children: ReactElement;
  currentPage: string;
}

const Layout = ({ children, currentPage }: LayoutProps): JSX.Element => {
  return (
    <>
      <Nav currentPage={currentPage} />
      <div className={"container mx-auto flex max-w-7xl flex-col px-4"}>
        {children}
      </div>
    </>
  );
};

export { Layout };
