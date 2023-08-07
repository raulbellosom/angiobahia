import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import hemodialisis_oficial from "../../assets/imagenes/hemodialisis_oficial.jpg";
import cateter_hemodialisis from "../../assets/imagenes/cateter_hemodialisis.png";
import hemodialisis from "../../assets/imagenes/hemodialisis.webp";

const images_carousel = [hemodialisis_oficial, cateter_hemodialisis];

const Hemodialisis = () => {
  return (
    <Layout
      title="Colocación de acceso vascular para hemodiálisis"
      image={hemodialisis}
      images_carousel={images_carousel}
    >
      <div className="flex flex-col items-center justify-center md:justify-start md:items-start md:grid md:grid-cols-4 gap-10 p-10">
        <div className="md:col-span-1 flex flex-col gap-3">
          <h6 className="text-xl font-bold text-angio-blue-dark">
            ¿QUIÉN REALIZA LA CIRUGÍA?
          </h6>
          <Link
            to="/trayectoria"
            className="text-angio-blue-dark hover:underline"
          >
            Dr. Alberto Robles.
          </Link>
        </div>
        <div className="md:col-span-3 flex flex-col gap-2">
          <h6 className="text-xl font-bold text-angio-blue-dark">
            DESCRIPCIÓN
          </h6>
          <p className="text-justify">
            {`La enfermedad renal crónica (ERC) en el adulto se define como la presencia de una alteración estructural o funcional renal (sedimento, imagen, histología) que persiste más de 3 meses, con o sin deterioro de la función renal; o un filtrado glomerular (FG) < 60 ml/min/1,73 m2 sin otros signos de enfermedad renal. `}
          </p>
          <br />
          <p className="text-justify">
            En pacientes seguidos en Atención Primaria con enfermedades tan
            frecuentes como la hipertensión arterial (HTA) o la diabetes
            mellitus (DM), la prevalencia de ERC puede alcanzar el 35-40%.
          </p>
          <br />
          <p className="text-justify">
            El angiologo apoya en el manejo de estos pacientes:
          </p>
          <ol className="list-decimal list-inside pl-8">
            <li className="text-justify pb-2">
              Creando fistulas arteriovenosas autologas (con vena del paciente)
              o injerto para realizacion de hemodialisis.
            </li>
            <li className="text-justify pb-2">
              En la colocacion de cateteres para hemodialisis temporales
              (mahurkar) o permanentes (palindrome, permacath) que son
              tunelizados.
            </li>
            <li className="text-justify">
              O en el rescate de fistulas o manejos avanzados endovasculares
              ante paciente con accesos agotados, realizando angioplastias de
              venas estenosadas (cerradas), colocacion de stent, entre otras
              cosas.
            </li>
          </ol>
        </div>
      </div>
    </Layout>
  );
};

export default Hemodialisis;
