import React, { useEffect, useRef, useState } from "react";
import { Navbar } from "flowbite-react";
import Logo from "../assets/angio_logo.png";

const Nav = () => {
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <Navbar color="#3b7bc2" className="sticky top-0 w-full h-auto z-20" fluid>
      <Navbar.Brand href="/">
        <img alt="AngioBahía" className="md:h-16 h-9" src={Logo} />
      </Navbar.Brand>
      <div className="flex gap-4 md:order-2">
        <a
          href="https://wa.link/5co8bq"
          className="rounded-full text-white  flex justify-center items-center px-3 py-1 bg-angio-red hover:bg-angio-red-dark active:outline-red-500"
        >
          EMERGENCIAS
        </a>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link className="text-angio-blue-dark" href="/">
          <p>INICIO</p>
        </Navbar.Link>
        <Navbar.Link className="text-angio-blue-dark" href="/tratamientos">
          TRATAMIENTOS
        </Navbar.Link>
        <div
          className="relative border-b border-b-gray-100 md:border-none"
          ref={dropdownRef}
        >
          <button
            className="text-gray-600 font-medium hover:text-gray-500 focus:outline-none"
            onClick={toggleDropdown}
          >
            <span className="flex items-center">
              <span className="mr-1 p-3 md:p-0">ACERCA DE</span>
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 7l7 7H3l7-7z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 13L3 6h14l-7 7z"
                  />
                )}
              </svg>
            </span>
          </button>
          {isOpen && (
            <div className="absolute left-0 md:right-0 w-40 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
              <div className="py-1">
                <a
                  href="/trayectoria"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  TRAYECTORIA
                </a>
                <a
                  href="/preguntas-frecuentes"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  PREGUNTAS FRECUENTES
                </a>
              </div>
            </div>
          )}
        </div>
        <Navbar.Link className="text-angio-blue-dark" href="/contacto">
          CONTACTO
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
