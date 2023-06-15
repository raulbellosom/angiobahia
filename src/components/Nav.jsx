import React from "react";
import { Navbar, Dropdown } from "flowbite-react";
import Logo from "../assets/angio_logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
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
        <Link
          className="text-angio-blue-dark p-2 px-4 border-t border-gray-300 md:border-none"
          to="/"
        >
          <p>INICIO</p>
        </Link>
        <Link
          className="text-angio-blue-dark p-2 px-4 border-t border-gray-300 md:border-none"
          to="/tratamientos"
        >
          TRATAMIENTOS
        </Link>
        <Link
          className="text-angio-blue-dark p-2 px-4 border-t border-gray-300 md:border-none"
          to="/contacto"
        >
          CONTACTO
        </Link>
        <div
          className="text-angio-blue-dark border-t border-gray-300 md:border-none"
          to="#"
        >
          <Dropdown color={"#fff"} label="ACERCA DE">
            <Dropdown.Item href="#">Trayectoria</Dropdown.Item>
            <Dropdown.Item href="#">Preguntas frecuentes</Dropdown.Item>
          </Dropdown>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
