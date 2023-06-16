import React from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import not_found from "../assets/imagenes/not_found.webp";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-angio-blue-dark text-4xl font-bold">404</h1>
      <h2 className="text-angio-blue-dark text-2xl font-bold">
        Página no encontrada
      </h2>
      <img src={not_found} alt="not_found" className="w-96 h-96" />
      <p className="text-angio-blue-dark text-xl font-light">
        <a
          href="/"
          className="text-angio-blue-dark flex gap-3 m-4 p-2 rounded-lg ring-2 ring-angio-blue-dark hover:bg-angio-blue-dark hover:text-white hover:ring-angio-blue-dark transition-all ease-in-out duration-300"
        >
          <span className="inline-block">
            <FaArrowCircleLeft className="inline-block" />
          </span>
          Volver al inicio
        </a>
      </p>
    </div>
  );
};

export default NotFound;
