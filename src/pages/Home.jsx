import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "flowbite-react";
import main_bg from "../assets/imagenes/recepcion.png";
import doctor from "../assets/imagenes/angio_principal.png";
import consultorio from "../assets/imagenes/consultorio_3.jpg";
import qr from "../assets/wa_link.png";
import consultorio_4 from "../assets/imagenes/consultorio_4.jpg";
import sistema_venoso from "../assets/imagenes/sistema.jpg";

const Home = () => {
  return (
    <div className="min-h-screen h-screen">
      <Carousel>
        <div
          style={{
            backgroundImage: `url(${main_bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="p-5 flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white"
        >
          <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              <h1 className="text-angio-blue-dark text-4xl font-bold">
                AngioBahía
              </h1>
              <p className="text-angio-blue-dark text-2xl">
                Centro de Diagnóstico y Tratamiento de Enfermedades Vasculares
              </p>
              <p className="text-angio-blue-dark text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere.
              </p>
              <div className="flex gap-4">
                <Link
                  className="rounded-full text-white  flex justify-center items-center px-3 py-1 bg-angio-red hover:bg-angio-red-dark active:outline-red-500"
                  to="/contacto"
                >
                  CONTACTO
                </Link>
                <a
                  href="https://wa.link/5co8bq"
                  className="rounded-full text-white  flex justify-center items-center px-3 py-1 bg-angio-red hover:bg-angio-red-dark active:outline-red-500"
                >
                  AGENDAR CITA
                </a>
              </div>
            </div>
            <div className="flex items-center flex-col gap-4">
              <img
                alt="AngioBahía"
                className="md:h-96 h-48 w-48 md:w-auto"
                src={doctor}
              />
              <p className="text-angio-blue-dark text-2xl font-bold">
                Dr. Alberto Robles
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${consultorio})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white"
        >
          {/* información acerca de la importancia de ir a consulta medica */}
          <div className="p-5 flex flex-col gap-4">
            <h1 className="text-angio-blue-dark text-4xl font-bold">
              Importancia de agendar una cita para cirugía vascular
            </h1>
            {/* listado referente al titulo */}
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
                className="rounded-full text-white  flex justify-center items-center px-3 py-1 bg-angio-red hover:bg-angio-red-dark active:outline-red-500"
              >
                AGENDAR CITA
              </a>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${consultorio_4})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white"
        >
          <div className="p-5 md:px-20 flex flex-col md:grid md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              <h1 className="text-angio-blue-dark text-4xl font-bold">
                Emergencias
              </h1>
              <p className="text-angio-blue-dark text-2xl">
                En caso de emergencia, comuníquese con nosotros a través de los
                siguientes números:
              </p>
              <div className="flex gap-4">
                <a
                  href="https://wa.link/5co8bq"
                  className="rounded-full text-white  flex justify-center items-center px-3 py-1 bg-angio-red hover:bg-angio-red-dark active:outline-red-500"
                >
                  EMERGENCIAS
                </a>
                <Link
                  className="rounded-full text-white  flex justify-center items-center px-3 py-1 bg-angio-red hover:bg-angio-red-dark active:outline-red-500"
                  to="/contacto"
                >
                  CONTACTO
                </Link>
              </div>
            </div>
            <div className="flex justify-center items-center gap-4">
              <img src={qr} alt="qr" className="w-48 h-48" />
            </div>
          </div>
        </div>
      </Carousel>
      {/* dar margen al la información */}
      <div className="px-20 py-20">
        <div className="flex flex-col gap-4 pb-20">
          <h1 className="text-gray-500 text-4xl text-center font-light">
            Ofrecemos atención personalizada y eficaz para <br /> cada uno de
            nuestros pacientes.
          </h1>
        </div>
        <div className="border-t-2 border-gray-300 pb-10"></div>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
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
              className="w-full h-96"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
