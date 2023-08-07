import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import cirugia_abierta_oficial from "../../assets/imagenes/cirugia_abierta_oficial.png";
import arteriografia from "../../assets/imagenes/arteriografia.png";
import insuficiencia_vascular from "../../assets/imagenes/insuficiencia_vascular.webp";

const images_carousel = [cirugia_abierta_oficial, arteriografia];
const InsuficienciaArterial = () => {
  return (
    <Layout
      title="Cirugia abierta o endovascular de la enfermedad arterial periferica"
      image={insuficiencia_vascular}
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
            El término "enfermedades arteriales periféricas" abarca todas las
            enfermedades arteriales distintas de las arterias coronarias y la
            aorta. Esto debe distinguirse claramente del término "enfermedad
            arterial periférica", que a menudo se utiliza para la enfermedad
            arterial de las extremidades inferiores (LEAD). De hecho, otras
            localizaciones periféricas, incluidas las arterias carótida y
            vertebral, de las extremidades superiores, mesentérica y renal,
            también se ven afectadas con frecuencia, principalmente por
            aterosclerosis, y completan la familia de las EAP.
          </p>
          <br />
          <ol className="list-decimal list-inside">
            <li className="text-justify pb-2">
              <b>Los tratamientos pueden ser abiertos:</b> esto es incidiendo la
              piel hasta llegar a la arteria afectada y tratar de remover la
              placa de colesterol (endarterectomia) o tratar de realizar un
              puente (bypass) para llevar flujo a la zona afectada.
            </li>
            <li className="text-justify">
              <b>Tratamientos endovasculares:</b> Arteriografías mas
              angioplastías: por medio de una punción directa a la arteria
              previa anestesia local se coloca un introductor que nos ayuda a
              pasar directamente a la arteria dispositivos, guías, cateter,
              balones, stent para nuevamente restablecer el flujo en la arteria
              con una recuperacion rapida y bajas complicaciones
              postquirurgicas.
            </li>
          </ol>
          <br />
          <p className="text-justify">
            Es importante señalar que al igual que con otras enfermedades el
            manejo es individualizado y se optara por la cirugia que mayor
            beneficio le brinde al paciente.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default InsuficienciaArterial;
