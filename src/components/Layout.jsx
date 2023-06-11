import React from "react";
import Nav from "./Nav";
import Foot from "./Foot";
import { FaWhatsapp } from "react-icons/fa";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen h-auto">
      <Nav />
      {children}
      <div className="fixed bottom-4 right-4 z-50">
        <a
          href="https://wa.link/5co8bq"
          target="_blank"
          className="flex items-center justify-center rounded-full w-12 h-12 bg-green-500 text-white hover:scale-110 active:scale-100 transition-all duration-300"
        >
          <FaWhatsapp className="text-2xl" />
        </a>
      </div>
      <Foot />
    </div>
  );
};

export default Layout;
