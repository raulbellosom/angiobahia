import React from "react";
import { Accordion } from "flowbite-react";
import { FaSchool, FaBook } from "react-icons/fa";
import { IoPeopleCircle } from "react-icons/io5";
import Doctor from "../../assets/imagenes/angio_alterna.jpg";
import trayectoria_bg from "../../assets/imagenes/trayectoria_bg_2.webp";
import { Link } from "react-router-dom";

const Trayectoria = () => {
  return (
    <div className="container mx-auto">
      <div
        style={{
          backgroundImage: `url(${trayectoria_bg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="flex flex-col items-start justify-end h-96 mb-32"
      >
        <div className="w-full flex flex-col items-center md:flex-row gap-1 md:gap-4 translate-y-32 md:translate-x-24 md:translate-y-20">
          <div className="w-56 h-56 rounded-full overflow-hidden flex flex-col items-center justify-center">
            <img
              src={Doctor}
              alt="Dr. Alberto Robles"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col items-center md:items-start justify-center">
            <h2 className="text-xl text-center md:text-start md:text-4xl font-bold text-angio-blue-dark bg-white/30 w-full px-4 pt-2">
              Dr. Alberto Robles
            </h2>
            <p className="text-lg text-center md:text-start md:text-2xl text-angio-blue-dark bg-white/30 w-full px-4 pb-2">
              Cirujano Vascular y Endovascular
            </p>
          </div>
        </div>
      </div>
      <div className="px-0 md:px-24 lg:px-32 flex flex-col md:gap-4 items-center justify-center p-4 md:p-10 pt-10 md:pt-0">
        <h1 className="text-2xl font-bold text-center text-angio-blue-dark pb-4">
          Trayectoria
        </h1>
        <Accordion className="w-full min-w-full">
          <Accordion.Panel>
            <Accordion.Title>
              <span className="text-2xl font-bold text-center text-angio-blue-dark">
                Formación Academica
              </span>
            </Accordion.Title>
            <Accordion.Content>
              <div className="flex items-center justify-center pb-5">
                <span className="p-4 ring-2 ring-amber-300 bg-amber-600 rounded-full">
                  <FaSchool size={52} className="text-amber-400" />
                </span>
              </div>
              <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400 leading-5 flex flex-col gap-6">
                <li>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    TÍTULO DE LICENCIADO MÉDICO CIRUJANO Y PARTERO, POR LA
                    UNIVERSIDAD DE GUADALAJARA 2010 AL 2016, CÉDULA PROFESIONAL
                    10789137.
                  </p>
                </li>
                <li>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    CERTIFICADO POR EL CONSEJO MEXICANO DE ANGIOLOGÍA, CIRUGÍA
                    VASCULAR Y ENDOVASCULAR DEL 2021 AL 2026.
                  </p>
                </li>
                <li>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    1 AÑO DE ESPECIALIDAD EN CIRUGÍA GENERAL 2017 AL 2018, EN
                    HOSPITAL GENERAL DE ZONA 1 TEPIC NAYARIT MARZO 2017 A
                    FEBRERO 2018. AVALADO POR LA UNIVERSIDAD DE GUANAJUATO.
                  </p>
                </li>
                <li>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    3 AÑOS SUB ESPECIALIDAD EN ANGIOLOGÍA Y CIRUGÍA VASCULAR EN
                    UMAE 71 TORREÓN COAHUILA DEL 2018 AL 2021, AVALADO POR LA
                    UNIVERSIDAD AUTÓNOMA DE COAHUILA.
                  </p>
                </li>
              </ul>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              <span className="text-2xl font-bold text-center text-angio-blue-dark">
                EXPERIENCIA EN INVESTIGACIÓN:
              </span>
            </Accordion.Title>
            <Accordion.Content>
              <div className="flex items-center justify-center pb-5">
                <span className="p-4 ring-2 ring-amber-300 bg-amber-600 rounded-full">
                  <FaBook size={52} className="text-amber-300" />
                </span>
              </div>
              <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400 leading-5 flex flex-col gap-6">
                <li>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    COLABORADOR DEL MANUAL DE PROCESOS PRÁCTICOS DE FISIOLOGÍA
                    MÉDICA, LABORATORIO DE FISIOLOGÍA Y FARMACOLOGÍA, TERCERA
                    EDICION 2014. FÍSICO ISBN: 978-607-742-007-1 Y ELECTRÓNICO
                    ISBN: 978-607-742-006-4, UNIVERSIDAD DE GUADALAJARA, CENTRO
                    UNIVERSITARIO DE LA COSTA.
                  </p>
                </li>
                <li>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    COLABORADOR DEL MANUAL DE CONOCIMIENTOS BÁSICOS DE
                    FARMACOLOGÍA, PRIMERA EDICIÓN 2015. TEMAS DESARROLLADOS:
                    PLACEBOS Y NOCEBOS Y FÁRMACOS BIOTECNOLÓGICOS. UNIVERSIDAD
                    DE GUADALAJARA, CENTRO UNIVERSITARIO DELA COSTA. ISBN:
                    978-607-742-287-7.
                  </p>
                </li>
                <li>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    AUTOR DE ARTÍCULO ASSOCIATION BETWEEN CARDIOVASCULAR RISK
                    FACTORS WITH ATHEROSCLEROTIC PATTERN IN LOWER EXTREMITIES IN
                    229 PATIENTS UNDERGOING ANGIOPLASTY AT THE HIGH SPECIALTY
                    MEDICAL UNIT 71(IMSS) TORREÓN, COAHUILA 2018 – 2020, EN
                    REVISTA MEXICANA DE ANGIOLOGIA 2021.
                  </p>
                </li>
              </ul>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              <span className="text-2xl font-bold text-center text-angio-blue-dark">
                ASISTENCIA A CURSOS Y REUNIONES ACADÉMICAS
              </span>
            </Accordion.Title>
            <Accordion.Content>
              <div className="flex items-center justify-center pb-5">
                <span className="p-4 ring-2 ring-amber-300 bg-amber-600 rounded-full">
                  <IoPeopleCircle size={52} className="text-amber-400" />
                </span>
              </div>
              <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400 leading-5 flex flex-col gap-6">
                <li>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    CURSO DE ENFERMEDAD ARTERIAL PERIFERICA Y PIEDIABETICO
                    IMPARTIDO POR EL INSTITUTO COSTARRICENSE DE AORTA, ARTERIAS
                    Y VENAS, AGOSTO 2020.
                  </p>
                </li>
                <li>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    PONENTE EN CONGRESO INTERNACIONAL DE ANGIOLOGÍA,CIRUGÍA
                    VASCULAR Y ENDOVASCULAR LII EN CIUDAD MÉRIDA YUCATÁN CON
                    TRABAJO DE INGRESO A LA SOCIEDAD MEXICANA DE ANGIOLOGÍA
                    TITULADO: ASOCIACIÓN ENTRE DIABETES MELLITUS Y ENFERMEDAD DE
                    VASOS TIBIALES EN PACIENTES DE LA UMAE 71, OCTUBRE 2020.
                  </p>
                </li>
                <li>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    PARTICIPACION EN LOS WEBINARS DE RADIOLOGIA, ULTRASONIDO
                    DOPPLER IMPARTIDO POR EL CONSEJO MEXICANO DE RADIOLOGÍA E
                    IMAGEN A.C DICIEMBRE 2020.
                  </p>
                </li>
                <li>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    CURSO DE FLEBOESTÉTICA, ORGANIZADO POR LASOCIEDAD MEXICANA
                    DE ANGIOLOGÍA Y CIRUGÍA VASCULAR, MÉXICO DF 26 Y 27 MAYO
                    2022.
                  </p>
                </li>
                <li>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    CURSO ESCLEROTERAPIA FISIOLÓGICA, AVALADO POR EL FORO VENOSO
                    MEXICANO, IRAPUATO MÉXICO 2022.
                  </p>
                </li>
                <li>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    CURSO 8° DE DIAGNOSTICO VASCULAR ONLINE 2022, PRINCIPIOS
                    BÁSICOS DE LA ULTRASONOGRAFÍA, 14 DE MARZO 2022 AL 27 DE
                    MARZO 2022, ORGANIZADO POR EL CAPÍTULO DE DIAGNÓSTICO
                    VASCULAR, BILBAO, ESPAÑA (NO EXP:0220722).
                  </p>
                </li>
                <li>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    ASISTENCIA ANUAL AL CONGRESO Y CURSOS PRECONGRESO DE LA
                    SOCIEDAD MEXICANA DE ANGIOLOGÍA, CIRUGÍA VASCULAR Y
                    ENDOVASCULAR.
                  </p>
                </li>
              </ul>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
      <div className="flex flex-col items-center justify-center p-10">
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

export default Trayectoria;
