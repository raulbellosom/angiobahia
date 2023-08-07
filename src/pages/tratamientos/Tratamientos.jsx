import React from "react";
import { Link } from "react-router-dom";
import servicios_bg from "../../assets/imagenes/contacto_2.jpg";
import varices_4 from "../../assets/imagenes/varices_4.jpg";
import pie from "../../assets/imagenes/pie.jpg";
import insuficiencia_vascular from "../../assets/imagenes/insuficiencia_vascular.webp";
import varices_3 from "../../assets/imagenes/varices_3.jpg";
import embolectomia from "../../assets/imagenes/embolectomia.jpg";
import hemodialisis from "../../assets/imagenes/hemodialisis.webp";

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
        <h1 className="text-4xl font-bold text-center text-white bg-angio-blue-light/70 md:px-28 p-4">
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
            alt="Tratamientos para insuficiencia venosa cronica (varices)"
            className="rounded-md shadow-md w-full h-60 object-cover"
          />
          <div className="flex flex-col justify-between p-4 h-full">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white pb-2">
              <Link
                className="hover:text-angio-blue-dark hover:underline"
                to="/tratamientos/tratamiento-para-insuficiencia-venosa-cronica"
              >
                Tratamientos para insuficiencia venosa cronica (varices)
              </Link>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              La insuficiencia venosa crónica, es la enfermedad causada por el
              inadecuado retorno venoso...
            </p>
            <Link
              to="/tratamientos/tratamiento-para-insuficiencia-venosa-cronica"
              className="mt-4 px-4 py-2 bg-angio-blue-dark text-white rounded-md hover:bg-angio-blue-light text-center"
            >
              Leer más
            </Link>
          </div>
        </div>
        <div className="grid grid-rows-2 items-center justify-between shadow-md h-full">
          <img
            src={pie}
            alt="Tratamiento multidisciplinario del pie diabético"
            className="rounded-md shadow-md w-full h-60 object-cover"
          />
          <div className="flex flex-col justify-between p-4 h-full">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white pb-2">
              <Link
                className="hover:text-angio-blue-dark hover:underline"
                to="/tratamientos/tratamiento-multidisciplinario-para-pie-diabetico"
              >
                Tratamiento multidisciplinario del pie diabético
              </Link>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              La enfermedad de pie diabético es una de las complicaciones más
              graves de la Diabetes Mellitus...
            </p>
            <Link
              to="/tratamientos/tratamiento-multidisciplinario-para-pie-diabetico"
              className="mt-4 px-4 py-2 bg-angio-blue-dark text-white rounded-md hover:bg-angio-blue-light text-center"
            >
              Leer más
            </Link>
          </div>
        </div>
        <div className="grid grid-rows-2 items-center justify-between shadow-md h-full">
          <img
            src={insuficiencia_vascular}
            alt="Cirugía abierta o endovascular de la enfermedad arterial periférica"
            className="rounded-md shadow-md w-full h-60 object-cover"
          />
          <div className="flex flex-col justify-between p-4 h-full">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white pb-2">
              <Link
                to="/tratamientos/cirugia-abierta-o-endovascular-de-la-enfermedad-arterial-periferica"
                className="hover:text-angio-blue-dark hover:underline"
              >
                Cirugía abierta o endovascular de la enfermedad arterial
                periférica
              </Link>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              El término "enfermedades arteriales periféricas" abarca todas las
              enfermedades arteriales...
            </p>
            <Link
              to="/tratamientos/cirugia-abierta-o-endovascular-de-la-enfermedad-arterial-periferica"
              className="mt-4 px-4 py-2 bg-angio-blue-dark text-white rounded-md hover:bg-angio-blue-light text-center"
            >
              Leer más
            </Link>
          </div>
        </div>
        <div className="grid grid-rows-2 items-center justify-between shadow-md h-full">
          <img
            src={hemodialisis}
            alt="Colocación de acceso vascular para hemodiálisis"
            className="rounded-md shadow-md w-full h-60 object-cover"
          />
          <div className="flex flex-col justify-between p-4 h-full">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white pb-2">
              <Link
                to="/tratamientos/colocacion-de-acceso-vascular-para-hemodialisis"
                className="hover:text-angio-blue-dark hover:underline"
              >
                Colocación de acceso vascular para hemodiálisis
              </Link>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              La enfermedad renal crónica (ERC) en el adulto se define como la
              presencia de una alteración estructural...
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
            alt="Tratamiento minimo invasivo de la trombosis venosa profunda"
            className="rounded-md shadow-md w-full h-60 object-cover"
          />
          <div className="flex flex-col justify-between p-4 h-full">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white pb-2">
              <Link
                to="/tratamientos/tratamiento-minimo-invasivo-de-la-trombosis-venosa-profunda"
                className="hover:text-angio-blue-dark hover:underline"
              >
                Tratamiento minimo invasivo de la trombosis venosa profunda
              </Link>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              La trombosis venosa profunda (TVP) ocurre cuando se forma un
              coágulo de sangre (trombo) en una o más...
            </p>
            <Link
              to="/tratamientos/tratamiento-minimo-invasivo-de-la-trombosis-venosa-profunda"
              className="mt-4 px-4 py-2 bg-angio-blue-dark text-white rounded-md hover:bg-angio-blue-light text-center"
            >
              Leer más
            </Link>
          </div>
        </div>
        {/* <div className="grid grid-rows-2 items-center justify-between shadow-md h-full">
          <img
            src={embolectomia}
            alt="Embolectomia"
            className="rounded-md shadow-md w-full h-60 object-cover"
          />
          <div className="flex flex-col justify-between p-4 h-full">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white pb-2">
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
        </div> */}
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
