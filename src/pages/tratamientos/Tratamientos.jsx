import React from "react";
import { Link } from "react-router-dom";
import servicios_bg from "../../assets/imagenes/contacto_2.jpg";
import varices_4 from "../../assets/imagenes/varices_4.jpg";
import pie from "../../assets/imagenes/pie.jpg";
import insuficiencia_vascular from "../../assets/imagenes/insuficiencia_vascular.webp";
import varices_3 from "../../assets/imagenes/varices_3.jpg";
import embolectomia from "../../assets/imagenes/embolectomia.jpg";

const Tratamientos = () => {
  return (
    <div className="container mx-auto">
      <div
        style={{
          backgroundImage: `url(${servicios_bg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="flex flex-col items-center justify-center h-96"
      >
        <h1 className="text-4xl font-bold text-center text-white bg-angio-blue-light/70 px-28 py-2">
          Nuestros servicios
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center p-10">
        <p className="text-2xl text-justify text-gray-700 mt-8 md:w-3/4 font-light">
          Nuestros servicios se enfocan en la evaluación y diagnóstico de
          diversas enfermedades y condiciones médicas, mediante exámenes
          físicos, pruebas de laboratorio, estudios de imagen, entre otros.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 md:mx-28 pb-10">
        <div className="grid grid-rows-2 items-center justify-between shadow-md h-full">
          <img
            src={varices_4}
            alt="Cirugía para insuficiencia venosa (varices)"
            className="rounded-md shadow-md w-full h-60 object-cover"
          />
          <div className="flex flex-col justify-between p-4 h-full">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>Cirugía para insuficiencia venosa (varices)</p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              La cirugía para insuficiencia venosa es un procedimiento que se
              realiza para tratar las venas varicosas y la insuficiencia venosa
              crónica...
            </p>
            <Link
              to="/tratamientos/cirugia-para-insuficiencia-venosa"
              className="mt-4 px-4 py-2 bg-angio-blue-dark text-white rounded-md hover:bg-angio-blue-light text-center"
            >
              Leer más
            </Link>
          </div>
        </div>
        <div className="grid grid-rows-2 items-center justify-between shadow-md h-full">
          <img
            src={pie}
            alt="Cirugía para pie diabético"
            className="rounded-md shadow-md w-full h-60 object-cover"
          />
          <div className="flex flex-col justify-between p-4 h-full">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Cirugía para pie diabético
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              La cirugía para pie diabético es un procedimiento que se realiza
              para tratar las úlceras en los pies de los pacientes con
              diabetes...
            </p>
            <Link
              to="/tratamientos/cirugia-para-pie-diabetico"
              className="mt-4 px-4 py-2 bg-angio-blue-dark text-white rounded-md hover:bg-angio-blue-light text-center"
            >
              Leer más
            </Link>
          </div>
        </div>
        <div className="grid grid-rows-2 items-center justify-between shadow-md h-full">
          <img
            src={insuficiencia_vascular}
            alt="Cirugía para insuficiencia arterial cronica"
            className="rounded-md shadow-md w-full h-60 object-cover"
          />
          <div className="flex flex-col justify-between p-4 h-full">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Cirugía para insuficiencia arterial cronica
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              La cirugía para insuficiencia arterial crónica es un procedimiento
              que se realiza para tratar la obstrucción de las arterias de las
              piernas...
            </p>
            <Link
              to="/tratamientos/cirugia-para-insuficiencia-arterial-cronica"
              className="mt-4 px-4 py-2 bg-angio-blue-dark text-white rounded-md hover:bg-angio-blue-light text-center"
            >
              Leer más
            </Link>
          </div>
        </div>
        <div className="grid grid-rows-2 items-center justify-between shadow-md h-full">
          <img
            src={insuficiencia_vascular}
            alt="Colocación de acceso vascular para hemodiálisis"
            className="rounded-md shadow-md w-full h-60 object-cover"
          />
          <div className="flex flex-col justify-between p-4 h-full">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Colocación de acceso vascular para hemodiálisis
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              La colocación de acceso vascular para hemodiálisis es un
              procedimiento que se realiza para tratar la obstrucción de las
              arterias de las piernas...
            </p>
            <Link
              to="/tratamientos/colocacion-de-acceso-vascular-para-hemodialisis"
              className="mt-4 px-4 py-2 bg-angio-blue-dark text-white rounded-md hover:bg-angio-blue-light text-center"
            >
              Leer más
            </Link>
          </div>
        </div>
        <div className="grid grid-rows-2 items-center justify-between shadow-md h-full">
          <img
            src={varices_3}
            alt="Colocación y retiro de filtro de vena cava"
            className="rounded-md shadow-md w-full h-60 object-cover"
          />
          <div className="flex flex-col justify-between p-4 h-full">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Colocación y retiro de filtro de vena cava
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              La colocación y retiro de filtro de vena cava es un procedimiento
              que se realiza para tratar la obstrucción de las arterias de las
              piernas...
            </p>
            <Link
              to="/tratamientos/colocacion-y-retiro-de-filtro-de-vena-cava"
              className="mt-4 px-4 py-2 bg-angio-blue-dark text-white rounded-md hover:bg-angio-blue-light text-center"
            >
              Leer más
            </Link>
          </div>
        </div>
        <div className="grid grid-rows-2 items-center justify-between shadow-md h-full">
          <img
            src={embolectomia}
            alt="Embolectomia"
            className="rounded-md shadow-md w-full h-60 object-cover"
          />
          <div className="flex flex-col justify-between p-4 h-full">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Embolectomia
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              La embolectomia es un procedimiento que se realiza para tratar la
              obstrucción de las arterias de las piernas...
            </p>
            <Link
              to="/tratamientos/embolectomia"
              className="mt-4 px-4 py-2 bg-angio-blue-dark text-white rounded-md hover:bg-angio-blue-light text-center"
            >
              Leer más
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-10">
        <p className="text-2xl text-justify text-gray-700 mt-8 font-light">
          Si necesitas más información sobre nuestros servicios, no dudes en
          contactarnos.
        </p>
        <Link
          to="/contacto"
          className="mt-4 px-4 py-2 bg-angio-blue-dark text-white rounded-md hover:bg-angio-blue-light text-center"
        >
          Contacto
        </Link>
      </div>
    </div>
  );
};

export default Tratamientos;
