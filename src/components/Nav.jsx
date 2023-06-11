import React from "react";
import { Navbar } from "flowbite-react";
import Logo from "../assets/angio_logo.png";

const Nav = () => {
  return (
    <Navbar className="sticky top-0 w-full h-auto z-20" fluid rounded>
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
        <Navbar.Link className="text-angio-blue-dark" href="#">
          TRATAMIENTOS
        </Navbar.Link>
        <Navbar.Link className="text-angio-blue-dark" href="#">
          ACERCA DE
        </Navbar.Link>
        <Navbar.Link className="text-angio-blue-dark" href="#">
          CONTACTO
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
