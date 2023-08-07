import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import Varices_bg from "../../assets/imagenes/varices.jpg";
import Varices_oficial from "../../assets/imagenes/varices_oficial.png";
// import Varices_2 from "../../assets/imagenes/varices_2.jpg";
// import Varices_3 from "../../assets/imagenes/varices_3.jpg";
// import Varices_4 from "../../assets/imagenes/varices_4.jpg";
// import Varices_5 from "../../assets/imagenes/varices_5.jpg";

const images_carousel = [Varices_oficial];

const Varices = () => {
  return (
    <Layout
      title="Tratamientos para insuficiencia venosa cronica (Várices)"
      image={Varices_bg}
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
        <div className="md:col-span-3 flex flex-col gap-3">
          <h6 className="text-xl font-bold text-angio-blue-dark">
            DESCRIPCIÓN
          </h6>
          <p className="text-justify">
            La insuficiencia venosa crónica, es la enfermedad causada por el
            inadecuado retorno venoso, es multifactorial, esto es que no hay una
            sola causa, hay varios factores que en conjunto desencadenan la
            enfermedad. la bibliografía habla de una falla en las válvulas o
            ausencia de estas, o trombosis venosa profunda previa que genera
            hipertensión venosa en los miembros inferiores y esto causa varices.
            El tratamiento oportuno de la insuficiencia venosa puede evitar
            complicaciones como ulceras, tromboflebitis (trombosis en trayectos
            varicosos) o varicorragia (hemorragia por una vena varicosa).
          </p>
          <br />
          <h6 className="text-xl font-bold text-angio-blue-dark">
            ¿EN QUÉ CONSISTE EL TRATAMIENTO?
          </h6>
          <p className="text-justify">
            Para el tratamiento de la insuficiencia venosa, actualmente contamos
            con diversas técnicas mínimo invasivas como cirugía laser,
            radiofrecuencia y la cirugía convencional que hasta la fecha aún
            brinda buenos resultados.
            <br />
            <br />
            Es importante comentar que estas técnicas se pueden combinar para
            ofrecer mejores beneficios a nuestro paciente y obtener un éxito en
            el tratamiento.
            <br />
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Varices;
