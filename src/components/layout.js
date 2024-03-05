import React from "react";
import { Link } from "gatsby";

export const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  const header = (
    <h1 className="main-heading">
      <Link to="/">{title}</Link>
    </h1>
  );

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header>{header}</header>
      <main>{children}</main>
    </div>
  );
};
export default Layout;
