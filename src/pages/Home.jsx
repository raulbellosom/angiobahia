import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "flowbite-react";
import {
  FaArrowRight,
  FaCalendar,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { MdEmergency, MdFacebook, MdPermContactCalendar } from "react-icons/md";
import doctor from "../assets/imagenes/angio_nuevo.png";
import especialistas from "../assets/imagenes/especialistas.webp";
import qr from "../assets/wa_link.png";
import consultorio from "../assets/imagenes/consultorio_nuevo.webp";
import sistema_venoso from "../assets/imagenes/sistema.jpg";
import medico from "../assets/imagenes/medico_bg.jpg";
import Logo from "../assets/angio_logo.png";
import varices from "../assets/imagenes/pierna_varices.webp";
import varices_3 from "../assets/imagenes/varices_3.jpg";
import varices_4 from "../assets/imagenes/varices_4.jpg";
import pie from "../assets/imagenes/pie.jpg";
import cirugia_emergencia from "../assets/imagenes/cirugia_emergencia.webp";

const Home = () => {
  return (
    <div className="min-h-screen h-full">
      <Carousel slideInterval={7000} className="min-h-screen h-screen">
        <div
          style={{
            backgroundImage: `url(${consultorio})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="p-5 md:px-20 flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white"
        >
          <div className="flex flex-col md:grid md:grid-cols-2 justify-center w-full h-full items-center gap-4">
            <div className="flex flex-col justify-center gap-4">
              <img
                src={Logo}
                alt="AngioBahía"
                className="w-full md:w-64 h-auto"
              />
              <h1 className="text-angio-blue-dark font-bold text-lg md:text-3xl">
                Centro de Diagnóstico y Tratamiento de Enfermedades Vasculares
              </h1>
              <p className="text-angio-blue-dark md:text-2xl text-lg">
                En AngioBahía, nos enorgullece brindarte atención médica
                especializada en el cuidado de tu salud vascular.
              </p>
              <div className="flex justify-center">
                <a
                  href="https://wa.link/5co8bq"
                  className="rounded-full text-white font-bold flex justify-center items-center px-4 py-2 bg-angio-blue-light hover:bg-angio-blue-dark transition ease-in-out duration-150 hover:scale-110"
                >
                  <FaCalendar size={24} className="mr-2" />
                  AGENDAR CITA
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <img
                alt="AngioBahía"
                className="md:h-96 md:w-auto h-56 w-56 transition ease-in-out duration-200 scale-100"
                src={doctor}
              />
              <p className="text-white bg-gradient-to-r from-angio-red to-angio-blue-light p-2 text-xl font-bold ">
                Dr. Alberto Robles
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${cirugia_emergencia})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="p-5 md:px-20 flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white"
        >
          <div className="flex flex-col md:grid md:grid-cols-2 justify-center w-full h-full items-center gap-4">
            <div className="flex flex-col justify-center items-center gap-4 h-full">
              <h2 className="text-angio-red text-4xl font-bold">Emergencias</h2>
              <p className="text-white md:text-2xl text-base">
                En AngioBahía, nos enorgullece brindarte atención médica
                especializada en el cuidado de tu salud vascular. Para ello
                contamos con tres unidades de atención distribuidas en Bahía de
                Banderas.
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <a
                  href="https://wa.link/5co8bq"
                  target="_blank"
                  className="rounded-full md:text-base text-white font-bold flex justify-center items-center px-4 py-2 bg-angio-red hover:bg-angio-red-dark transition ease-in-out duration-150 hover:scale-110"
                >
                  <MdEmergency size={24} className="mr-2" />
                  EMERGENCIAS
                </a>
                <Link
                  className="rounded-full md:text-base text-white font-bold flex justify-center items-center px-4 py-2 bg-angio-red hover:bg-angio-red-dark transition ease-in-out duration-150 hover:scale-110"
                  to="/contacto"
                >
                  <MdPermContactCalendar size={24} className="mr-2" />
                  UBICAR CONSULTORIOS
                </Link>
              </div>
            </div>
            <div className="flex justify-center md:items-center gap-4 h-full">
              <img src={qr} alt="qr" className="w-56 h-56" />
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${especialistas})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="p-5 md:px-20 flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white"
        >
          <div className="flex flex-col md:grid md:grid-cols-2 justify-center w-full h-full items-center gap-4">
            <div className="flex flex-col justify-center gap-4">
              <h2 className="text-angio-blue-dark text-4xl font-bold">
                Tratamientos
              </h2>
              <p
                style={{
                  textShadow: "1px 1px 2px #000000",
                }}
                className="text-white text-lg md:text-2xl font-bold"
              >
                Contamos con un equipo de especialistas en cirugía vascular que
                brindan atención para los siguientes tratamientos:
              </p>
              <ul className="list-disc list-inside">
                <li className="text-angio-blue-dark md:text-2xl text-base">
                  Cirugía para insuficiencia venosa
                </li>
                <li className="text-angio-blue-dark md:text-2xl text-base">
                  Cirugía para pie diabético
                </li>
                <li className="text-angio-blue-dark md:text-2xl text-base">
                  Cirugía para insuficiencia arterial cronica
                </li>
                <li className="text-angio-blue-dark md:text-2xl text-base">
                  y más...
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-center items-center gap-8">
              <div className="md:h-96 md:w-auto h-56 w-56 flex justify-center items-center rounded-full overflow-hidden border-8 border-transparent ring-8 ring-gray-200">
                <img src={varices_4} alt="qr" className="w-full h-full" />
              </div>
              <div className="flex gap-4">
                <Link
                  className="rounded-full text-white font-bold flex justify-center items-center px-4 py-2 bg-angio-blue-light hover:bg-angio-blue-dark transition ease-in-out duration-150 hover:scale-110"
                  to="/contacto"
                >
                  <MdPermContactCalendar size={24} className="mr-2" />
                  VER TRATAMIENTOS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
      <div className="p-10 md:p-20 flex flex-col gap-16">
        <div className="flex flex-col gap-4 pb-10">
          <h2 className="text-gray-700 text-4xl text-center font-light">
            Ofrecemos atención personalizada y eficaz para <br /> cada uno de
            nuestros pacientes.
          </h2>
        </div>
        <div className="border-t-2 border-gray-300"></div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-angio-blue-light text-4xl text-center font-light">
              Tratamientos
            </h2>
            <p className="text-gray-500 text-xl text-center font-light">
              En AngioBahía, nos enorgullece brindarte atención médica
              especializada en el cuidado de tu salud vascular.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex flex-col justify-center items-center gap-4 relative mt-40 hover:scale-105 transition ease-in-out duration-200">
              <div className="w-52 h-52 rounded-full overflow-hidden bg-white ring-8 border-8 border-angio-blue-light ring-white absolute -top-28">
                <img
                  className="w-full h-full object-cover object-center"
                  src={varices}
                  alt="varices"
                  style={{ maskImage: "radial-gradient(white, black)" }}
                />
              </div>
              <div className="flex flex-col justify-between items-center gap-2 p-4 bg-blue-100 pt-28 h-full">
                <div className="flex flex-col justify-center items-center gap-2">
                  <h2 className="text-angio-blue-light text-xl text-center font-bold">
                    Cirugía para insuficiencia venosa
                  </h2>
                  <p className="text-gray-500 text-base text-center font-light">
                    La insuficiencia venosa es una condición que se produce
                    cuando las venas de las piernas no pueden bombear la sangre
                    de regreso al corazón.
                  </p>
                </div>
                <div className="flex justify-center items-center gap-4 pt-4">
                  <Link
                    className="text-white flex justify-center items-center px-4 py-2 bg-angio-blue-light hover:bg-angio-blue-dark "
                    to="/tratamientos"
                  >
                    VER MÁS
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 relative mt-40 hover:scale-105 transition ease-in-out duration-200">
              <div className="w-52 h-52 rounded-full overflow-hidden bg-white ring-8 border-8 border-angio-blue-light ring-white absolute -top-28">
                <img
                  className="w-full h-full object-cover object-center"
                  src={pie}
                  alt="varices"
                  style={{ maskImage: "radial-gradient(white, black)" }}
                />
              </div>
              <div className="flex flex-col justify-between items-center gap-2 p-4 bg-blue-100 pt-28 h-full">
                <div className="flex flex-col justify-center items-center gap-2">
                  <h2 className="text-angio-blue-light text-xl text-center font-bold">
                    Cirugía para pie diabético
                  </h2>
                  <p className="text-gray-500 text-base text-center font-light">
                    El pie diabético es una complicación de la diabetes mellitus
                    que se caracteriza por la presencia de ulceras en los pies.
                  </p>
                </div>
                <div className="flex justify-center items-center gap-4 pt-4">
                  <Link
                    className="text-white flex justify-center items-center px-4 py-2 bg-angio-blue-light hover:bg-angio-blue-dark "
                    to="/tratamientos"
                  >
                    VER MÁS
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 relative mt-40 hover:scale-105 transition ease-in-out duration-200">
              <div className="w-52 h-52 rounded-full overflow-hidden bg-white ring-8 border-8 border-angio-blue-light ring-white absolute -top-28">
                <img
                  className="w-full h-full object-cover object-center"
                  src={varices_3}
                  alt="varices"
                  style={{ maskImage: "radial-gradient(white, black)" }}
                />
              </div>
              <div className="flex flex-col justify-between items-center gap-2 p-4 bg-blue-100 pt-28 h-full">
                <div className="flex flex-col justify-center items-center gap-2">
                  <h2 className="text-angio-blue-light text-xl text-center font-bold">
                    Cirugía para insuficiencia arterial cronica
                  </h2>
                  <p className="text-gray-500 text-base text-center font-light">
                    La insuficiencia arterial crónica es una condición que se
                    produce cuando las arterias de las piernas no pueden bombear
                    la sangre de regreso al corazón.
                  </p>
                </div>
                <div className="flex justify-center items-center gap-4 pt-4">
                  <Link
                    className="text-white flex justify-center items-center px-4 py-2 bg-angio-blue-light hover:bg-angio-blue-dark "
                    to="/tratamientos"
                  >
                    VER MÁS
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4 pt-10">
            <Link
              className="text-angio-blue-light flex justify-center border-b-2 border-angio-blue-light items-center px-4 py-2 hover:text-white hover:bg-angio-blue-dark transition ease-in-out duration-150 hover:scale-110"
              to="/tratamientos"
            >
              VER TODOS LOS TRATAMIENTOS
              <FaArrowRight
                size={20}
                className="ml-2 text-angio-blue-light hover:text-white"
              />
            </Link>
          </div>
        </div>
        <div className="border-t-2 border-gray-300"></div>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
          <div className="flex flex-col justify-center gap-4">
            <h2 className="text-angio-blue-light text-4xl text-center font-light">
              ¿Qué es la angiología?
            </h2>
            <p className="text-gray-500 text-xl text-center font-light">
              La angiología, también denominada medicina vascular o
              endovascular, es una especialidad médico-quirúrgica que se centra
              en el diagnóstico y tratamiento de las enfermedades de parte del
              aparato circulatorio, en concreto de las venas, arterias, vasos
              linfáticos y capilares sanguíneos.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={sistema_venoso}
              alt="sistema_venoso"
              className="w-full h-auto md:h-96"
            />
          </div>
        </div>
        <div className="flex flex-col-reverse justify-center md:grid md:grid-cols-2 gap-4 h-auto lg:h-96">
          <div className="flex justify-center items-center">
            <img
              src={medico}
              alt="Doctor Alberto Robles"
              className="w-full h-auto"
            />
          </div>
          <div className="flex flex-col justify-center gap-4">
            <h2 className="text-angio-blue-light text-4xl text-center font-light">
              Sobre nosotros
            </h2>
            <p className="text-gray-500 text-xl text-center font-light">
              Nos enorgullece brindar tratamientos innovadores y de vanguardia,
              en combinación con la experiencia y conocimiento del Dr. Alberto
              Robles para obtener los mejores resultados.
            </p>
            {/* square blue button */}
            <div className="flex justify-center items-center gap-4">
              <Link
                className="text-white  flex justify-center items-center px-4 py-2 bg-angio-blue-light hover:bg-angio-blue-dark "
                to="/tratamientos"
              >
                VER MÁS
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-gray-300"></div>
        <div className="flex flex-col gap-4">
          <h2 className="text-gray-500 text-4xl text-center font-light">
            Contáctanos
          </h2>
          <p className="text-gray-500 text-xl text-center font-light">
            Nuestro objetivo es ayudar a nuestros pacientes a mejorar su calidad
            de vida y aliviar los síntomas de las enfermedades vasculares.
          </p>
          <div className="flex justify-center items-center gap-4">
            <Link
              className="text-white flex justify-center items-center px-4 py-2 bg-angio-blue-light hover:bg-angio-blue-dark "
              to="/contacto"
            >
              CONTACTO
            </Link>
          </div>
          <div className="flex justify-center items-center gap-3 pt-10">
            <a
              href="https://www.facebook.com/angiobahia"
              className="text-gray-500 p-4 hover:text-blue-500"
            >
              <span>
                <MdFacebook size={24} className="mr-2" />
              </span>
            </a>
            <a
              href="https://www.instagram.com/angiobahia/"
              className="text-gray-500 p-4 hover:text-red-500"
            >
              <span>
                <FaInstagram size={24} className="mr-2" />
              </span>
            </a>
            <a
              href="https://twitter.com/angiobahia"
              className="text-gray-500 p-4 hover:text-blue-500"
            >
              <span>
                <FaTwitter size={24} className="mr-2" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

{
  /* <div
          style={{
            backgroundImage: `url(${consultorio})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white"
        >
          <div className="p-5 flex flex-col gap-4">
            <h1 className="text-angio-blue-dark text-4xl font-bold">
              Importancia de agendar una cita para cirugía vascular
            </h1>
            <ul className="list-disc list-inside">
              <li className="text-angio-blue-dark text-lg">
                Descripción de las condiciones y enfermedades vasculares que
                pueden requerir cirugía.
              </li>
              <li className="text-angio-blue-dark text-lg">
                Explicación sobre cómo la cirugía vascular puede mejorar la
                calidad de vida de los pacientes.
              </li>
              <li className="text-angio-blue-dark text-lg">
                Información sobre los procedimientos quirúrgicos más comunes en
                angiología y sus beneficios.
              </li>
              <li className="text-angio-blue-dark text-lg">
                Mencionar la importancia de consultar a un especialista y
                agendar una cita para evaluar las opciones de tratamiento
                quirúrgico.
              </li>
            </ul>
            <div className="flex gap-4">
              <a
                href="https://wa.link/5co8bq"
                className="rounded-full text-white  flex justify-center items-center px-4 py-2 bg-angio-red hover:bg-angio-red-dark "
              >
                AGENDAR CITA
              </a>
            </div>
          </div>
        </div> */
}
