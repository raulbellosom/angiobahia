import React from "react";
import pie from "../../assets/imagenes/pie.jpg";
import pie_diabetico_oficial from "../../assets/imagenes/pie_diabetico_oficial.png";
// import Varices_3 from "../../assets/imagenes/varices_3.jpg";
// import pie_diabetico_2 from "../../assets/imagenes/pie_diabetico_2.webp";
import Layout from "./Layout";
import { Link } from "react-router-dom";

const images_carousel = [pie_diabetico_oficial];

const PieDiabetico = () => {
  return (
    <Layout
      title="Tratamiento multidisciplinario del pie diabético"
      image={pie}
      images_carousel={images_carousel}
    >
      <div className="flex flex-col items-center justify-center md:justify-start md:items-start md:grid md:grid-cols-4 gap-10 p-10">
        <div className="md:col-span-1 flex flex-col gap-3">
          <h6 className="text-xl font-bold text-angio-blue-dark">
            ¿QUIÉN REALIZA EL TRATAMIENTO?
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
            La enfermedad de pie diabético es una de las complicaciones más
            graves de la Diabetes Mellitus. Provoca al paciente un gran
            sufrimiento y altos costes económicos, y además supone una carga
            considerable para la familia del paciente, profesionales de la
            salud, servicios sanitarios y la sociedad en general.
            <br />
            <br />
            A pesar de que tanto la prevalencia como el espectro de la
            enfermedad de pie diabético varía en las diferentes regiones del
            mundo, las vías de ulceración son similares en la mayoría de
            pacientes. Estas úlceras, frecuentemente, son el resultado de una
            persona con diabetes teniendo simultáneamente dos o más factores de
            riesgo, donde la neuropatía diabética periférica y la enfermedad
            arterial periférica desempeñan un papel central.
            <br />
            <br />
            La enfermedad arterial periférica (EAP), generalmente causada por
            aterosclerosis, está presente hasta en un 50% de los pacientes con
            úlcera de pie diabético.
            <br />
            <br />
            Ofrecemos un manejo individualizado de cada paciente con pie
            diabetico para evitar la amputacion de extremidad. Si el paciente
            presenta enfermedad aterial periferica se brindarán opciones de
            revascularización y si requiere conjuntamente manejo de la infeccion
            y control metabolico se manejara en conjunto con medicina interna
            para el manejo adecuado de todos los factores de riesgo.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default PieDiabetico;
