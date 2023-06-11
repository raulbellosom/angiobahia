import React from "react";
import Nav from "./Nav";
import Foot from "./Foot";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen h-auto">
      <Nav />
      {children}
      <Foot />
    </div>
  );
};

export default Layout;
