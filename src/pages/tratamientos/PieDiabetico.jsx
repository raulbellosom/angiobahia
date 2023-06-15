import React from "react";
import pie from "../../assets/imagenes/pie.jpg";
import pie_diabetico_3 from "../../assets/imagenes/pie_diabetico_3.webp";
import Varices_3 from "../../assets/imagenes/varices_3.jpg";
import pie_diabetico_2 from "../../assets/imagenes/pie_diabetico_2.webp";
import Layout from "./Layout";
import { Link } from "react-router-dom";

const images_carousel = [pie, pie_diabetico_3, Varices_3, pie_diabetico_2];

const PieDiabetico = () => {
  return (
    <Layout
      title="Cirugía Pie Diabético"
      image={pie}
      images_carousel={images_carousel}
    >
      <div className="flex flex-col items-center justify-center md:justify-start md:items-start md:grid md:grid-cols-4 gap-10 p-10">
        <div className="md:col-span-1 flex flex-col gap-3">
          <h6 className="text-xl font-bold text-angio-blue-dark">
            DESCRIPCIÓN
          </h6>
          <p className="text-justify">
            El tratamiento del pie diabético implica una combinación de medidas
            para controlar la diabetes, prevenir lesiones en los pies y tratar
            cualquier problema existente.
            <br />
            En casos más graves, el tratamiento puede incluir cirugía para
            eliminar tejido muerto o infectado, o para corregir deformidades en
            el pie.
            <br />
            En cualquier caso, es importante tratar el pie diabético lo antes
            posible para prevenir complicaciones graves.
            <br />
          </p>
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
        <div className="md:col-span-3 flex flex-col gap-3">
          <h6 className="text-xl font-bold text-angio-blue-dark">
            ¿EN QUÉ CONSISTE LA CIRUGÍA?
          </h6>
          <p className="text-justify">
            El pie diabético se define como una alteración de las estructuras
            anatómicas y funcionales del pie; como consecuencia del daño que
            produce la glucosa sanguineal alta sostenida en los diferentes
            tejidos, que conlleva cambios en los nervios periféricos y
            estructuras vasculares (arterias), y asociado a un factor
            desencadenante, dando lugar a úlceras de diverso grado en el pie.
            <br />
            <br />
            Factores de riesgo más importantes para el desarrollo de pie
            diabético:
            <br />
          </p>
          <ul className="list-disc list-inside">
            <li>Mal control de la diabetes.</li>
            <li>Neuropatías.</li>
            <li>Deformidades del pie (artropatía de charcot).</li>
            <li>Aterosclerosis (placas de grasa en las arterias)</li>
            <li>El tabaco.</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default PieDiabetico;
