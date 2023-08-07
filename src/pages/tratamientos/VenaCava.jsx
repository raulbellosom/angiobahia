import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import trombosis_oficial from "../../assets/imagenes/trombosis_oficial.jpg";
import trombosis_2 from "../../assets/imagenes/trombosis_2.png";
import varices_3 from "../../assets/imagenes/varices_3.jpg";

const images_carousel = [trombosis_oficial, trombosis_2];

const VenaCava = () => {
  return (
    <Layout
      title="Tratamiento minimo invasivo de la trombosis venosa profunda"
      image={varices_3}
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
            La trombosis venosa profunda (TVP) ocurre cuando se forma un coágulo
            de sangre (trombo) en una o más de las venas profundas del cuerpo,
            generalmente en las piernas. La trombosis venosa profunda puede
            causar dolor o hinchazón en las piernas. A veces no hay síntomas
            perceptibles.
          </p>
          <br />
          <p className="text-justify">
            La trombosis venosa profunda puede ser grave porque los coágulos de
            sangre en las venas pueden desprenderse. Luego, los coágulos pueden
            viajar a través del torrente sanguíneo y atascarse en los pulmones,
            bloqueando el flujo sanguíneo (embolia pulmonar). Cuando la TVP y la
            embolia pulmonar ocurren juntas, se denomina tromboembolismo venoso
            (TEV).
          </p>
          <br />
          <p className="text-justify">
            De acuerdo al nivel de la trombosis se decidirá el tratamiento,
            contamos con técnicas abiertas (trombectomia venosa) o
            endovasculares (trombectomía mecanica o farmacomecanica) para la
            remocion del coágulo con dispositivos novedosos como angiojet, ekos
            entre otros.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default VenaCava;
