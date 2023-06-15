import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import Varices_bg from "../../assets/imagenes/varices.jpg";
import Varices_2 from "../../assets/imagenes/varices_2.jpg";
import Varices_3 from "../../assets/imagenes/varices_3.jpg";
import Varices_4 from "../../assets/imagenes/varices_4.jpg";
import Varices_5 from "../../assets/imagenes/varices_5.jpg";

const images_carousel = [
  Varices_bg,
  Varices_2,
  Varices_3,
  Varices_4,
  Varices_5,
];

const Varices = () => {
  return (
    <Layout
      title="Cirugía para insuficiencia venosa (Várices)"
      image={Varices_bg}
      images_carousel={images_carousel}
    >
      <div className="flex flex-col items-center justify-center md:justify-start md:items-start md:grid md:grid-cols-4 gap-10 p-10">
        <div className="md:col-span-1 flex flex-col gap-3">
          <h6 className="text-xl font-bold text-angio-blue-dark">
            DESCRIPCIÓN
          </h6>
          <p className="text-justify">
            La insuficiencia venosa es una afección común en la que las válvulas
            de las venas no funcionan correctamente, lo que puede provocar que
            la sangre se acumule en las venas y provoque la formación de
            várices, dolor e hinchazón en las piernas. Afortunadamente, existen
            tratamientos disponibles para la insuficiencia venosa, incluyendo la
            cirugía.
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
            La cirugía para la insuficiencia venosa se realiza para tratar las
            várices graves o complicadas que no pueden ser tratadas con métodos
            menos invasivos.
            <br />
            <br />
            El procedimiento se realiza bajo anestesia general o regional, y
            generalmente implica la eliminación de las venas afectadas a través
            de pequeñas incisiones en la piel.
            <br />
            <br /> Hay varias técnicas quirúrgicas disponibles para tratar la
            insuficiencia venosa, incluyendo la flebectomía ambulatoria, la
            ablación con láser endovenoso .La flebectomía ambulatoria es una
            técnica quirúrgica en la que se realizan pequeñas incisiones en la
            piel para extraer las venas afectadas. <br />
            <br /> Este procedimiento se realiza de forma ambulatoria, lo que
            significa que no se requiere hospitalización y la recuperación es
            rápida. La ablación con láser endovenoso es una técnica quirúrgica
            en la que se utiliza un láser para cerrar las venas afectadas. El
            láser se introduce en la vena a través de una pequeña incisión en la
            piel y se utiliza para calentar y cerrar la vena. Este procedimiento
            se realiza de forma ambulatoria y tiene una tasa de éxito muy alta.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Varices;
