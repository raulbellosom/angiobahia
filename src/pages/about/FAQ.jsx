import React from "react";
import { Accordion } from "flowbite-react";
import { FaSchool, FaBook } from "react-icons/fa";
import { IoPeopleCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import Doctor from "../../assets/imagenes/angio_nuevo.png";
import faq_bg from "../../assets/imagenes/faq_bg.webp";

const FAQ = () => {
  return (
    <div className="container mx-auto">
      <div
        style={{
          backgroundImage: `url(${faq_bg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="flex flex-col items-center justify-center h-96"
      >
        {/* imagen del doctor con texto de preguntas frecuentes respondidas por el dr. Alberto Robles */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <img
            src={Doctor}
            alt="Dr. Alberto Robles"
            className="w-48 h-48 rounded-full"
          />
          <div className="flex flex-col items-center  md:items-start justify-center">
            <h1 className="text-4xl font-bold text-center text-angio-blue-dark">
              Preguntas frecuentes
            </h1>
            <p className="text-center text-angio-blue-dark">
              Respondidas por el Dr. Alberto Robles
            </p>
          </div>
        </div>
      </div>
      <div className="p-4 pt-10 md:p-10 md:px-24 lg:px-32 flex flex-col md:gap-4 items-center justify-center">
        <Accordion className="w-full min-w-full">
          <Accordion.Panel>
            <Accordion.Title>¿Qué es la Trombosis Venosa?</Accordion.Title>
            <Accordion.Content>
              <span className="mb-2 text-gray-500 dark:text-gray-400">
                Se da cuando una vena se obstruye debido a la formación de un
                coágulo de sangre (trombo) en el interior de la misma,
                disminuyendo o cesando el flujo sanguíneo. <br /> <br />
                <b>Síntomas de la trombosis venosa</b> <br />
                <ul className="list-disc pl-8 pt-2 text-gray-500 dark:text-gray-400 leading-5 flex flex-col gap-2">
                  <li className="text-gray-500 dark:text-gray-400">Dolor</li>
                  <li className="text-gray-500 dark:text-gray-400">
                    Hinchazón de pierna afectada
                  </li>
                  <li className="text-gray-500 dark:text-gray-400">
                    Enrojecimiento o decoloración
                  </li>
                  <li className="text-gray-500 dark:text-gray-400">
                    Sensación de calor
                  </li>
                </ul>
              </span>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              ¿Qué es la Enfermedad Vascular Cerebral Isquémica?
            </Accordion.Title>
            <Accordion.Content>
              <span className="mb-2 text-gray-500 dark:text-gray-400">
                Es el desarrollo de déficit neurológicofocal causado por la
                interrupción del suministro de sangre a un área del cerebro.
                <br /> <br />
                <ul className="list-disc pl-8 pt-2 text-gray-500 dark:text-gray-400 leading-5 flex flex-col gap-2">
                  <li className="text-gray-500 dark:text-gray-400">
                    <b>Pueden ser isquémicos:</b> por oclusión de un vaso
                    sanguíneo u otras causas de mala perfusión.
                  </li>
                  <li className="text-gray-500 dark:text-gray-400">
                    <b> Pueden ser hemorrágicos:</b> por rotura de un vaso
                    sanguíneo.
                  </li>
                </ul>
                <br />
                El 87% de los accidentes cerebrovasculares en EU son isquémicos.
                La enfermedad oclusiva aterosclerotica de la arteria carótida
                (ENFERMEDAD CAROTÍDEA) se considera una de la principales causas
                evitables de accidente cerebrovascular isquémico.
                <br />
                <br /> Para su tratamiento disponemos de cirugía abierta
                (endarterectomía carotidea) o cirugía endovascular (stenting
                carotídeo)de acuerdo a cada paciente.
              </span>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              ¿Qué es la insuficiencia Venosa Crónica?
            </Accordion.Title>
            <Accordion.Content>
              <span className="mb-2 text-gray-500 dark:text-gray-400">
                Es una enfermedad de evolución crónica en la cuál las venas son
                disfuncionales para transportar la sangre unidireccionalmente
                hacia el corazón. <br /> <br />
                <b>Signos y síntomas de la insuficiencia venosa crónica</b>
                <br />
                <ul className="list-disc pl-8 pt-2 text-gray-500 dark:text-gray-400 leading-5 flex flex-col gap-2">
                  <li className="text-gray-500 dark:text-gray-400">
                    Dolor de extremidades
                  </li>
                  <li className="text-gray-500 dark:text-gray-400">
                    Calambres (especialmente durante la noche)
                  </li>
                  <li className="text-gray-500 dark:text-gray-400">
                    Inquietud, cambios de coloración de la piel
                  </li>
                  <li className="text-gray-500 dark:text-gray-400">
                    Hinchazón de tobillos
                  </li>
                  <li className="text-gray-500 dark:text-gray-400">
                    Venas varicosas
                  </li>
                  <li className="text-gray-500 dark:text-gray-400">Úlceras</li>
                </ul>
                <br />
                <b>Complicaciones de insuficiencia venosa</b>
                <br />
                <ul className="list-disc pl-8 pt-2 text-gray-500 dark:text-gray-400 leading-5 flex flex-col gap-2">
                  <li className="text-gray-500 dark:text-gray-400">
                    Úlceras venosas
                  </li>
                  <li className="text-gray-500 dark:text-gray-400">
                    Infecciones por hongos y bacterias
                  </li>
                  <li className="text-gray-500 dark:text-gray-400">
                    Celulitis o Erisipela (infección de tejidos)
                  </li>
                  <li className="text-gray-500 dark:text-gray-400">
                    Tromboflebitis
                  </li>
                  <li className="text-gray-500 dark:text-gray-400">
                    Varicorragia (sangrado por rotura de várices)
                  </li>
                  <li className="text-gray-500 dark:text-gray-400">Úlceras</li>
                </ul>
              </span>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              ¿Cómo notar la presencia de la insuficiencia venosa crónica?
            </Accordion.Title>
            <Accordion.Content>
              <span className="mb-2 text-gray-500 dark:text-gray-400">
                <b>Las principal causa es la aparición de:</b>
                <br />
                <ul className="list-disc pl-8 pt-2 text-gray-500 dark:text-gray-400 leading-5 flex flex-col gap-2">
                  <li className="text-gray-500 dark:text-gray-400">
                    <b>Varices:</b> Que son trayectos venosos dilatados,
                    prominentes, tortuosos.
                  </li>
                  <li className="text-gray-500 dark:text-gray-400">
                    <b>Venas reticulares:</b> Que son dilataciones de las venas
                    de calibre pequeño, de color verde, azul o violáceo
                  </li>
                </ul>
              </span>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>¿Qué son las várices?</Accordion.Title>
            <Accordion.Content>
              <span className="mb-2 text-gray-500 dark:text-gray-400">
                Son venas que presentan dilataciones permanentes y patológicas,
                con alargamiento y tortuosidad.
              </span>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>¿Qué es el Pie Diabético?</Accordion.Title>
            <Accordion.Content>
              <span className="mb-2 text-gray-500 dark:text-gray-400">
                Se define como una alteración de las estructuras anatómicas y
                funcionales del pie; como consecuencia del daño que produce la
                glucosa sanguíneal alta sostenida en los diferentes tejidos, que
                conlleva cambios en los nervios periféricos y estructuras
                vasculares(arterias), y asociado a un factor desencadenante,
                dando lugar a úlceras de diverso grado en el pie. <br /> <br />
                <b>
                  Factores de riesgo mas importantes parel desarrollo de pie
                  diabético:
                </b>{" "}
                <br />
                <ul className="list-disc pl-8 pt-2 text-gray-500 dark:text-gray-400 leading-5 flex flex-col gap-2">
                  <li className="text-gray-500 dark:text-gray-400">
                    Mal control de la diabetes
                  </li>
                  <li className="text-gray-500 dark:text-gray-400">
                    Neuropatías
                  </li>
                  <li className="text-gray-500 dark:text-gray-400">
                    Deformidades del pie (artropatía de charcot)
                  </li>
                  <li className="text-gray-500 dark:text-gray-400">
                    Aterosclerosis (placas de grasa en las arterias)
                  </li>
                  <li className="text-gray-500 dark:text-gray-400">
                    El tabaco
                  </li>
                </ul>
              </span>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
      <div className="flex flex-col items-center justify-center p-4 md:p-10">
        <p className="text-2xl text-center text-gray-700 mt-8 font-light">
          Si necesitas más información sobre nosotros o nuestros servicios, no
          dudes en contactarnos.
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

export default FAQ;
