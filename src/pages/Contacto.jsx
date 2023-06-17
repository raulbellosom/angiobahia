import React, { useState } from "react";
import consultorio_bg from "../assets/imagenes/consultorio_4.jpg";
import consultorio_belen from "../assets/imagenes/consultorio_belen.jpg";
import consultorio_bucerias from "../assets/imagenes/consultorio_bucerias.jpg";
import consultorio from "../assets/imagenes/consultorio.jpg";
import whatsappButton from "../assets/WhatsAppButtonGreenMedium.png";
import ContactForm from "../components/ContactForm";
import dudas from "../assets/imagenes/dudas.webp";
import axios from "axios";

const Contacto = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccessMessage("");
    setShowSuccessMessage(false);
    setShowErrorMessage(false);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("message", message);

    try {
      const response = await axios.post(
        "https://formspree.io/f/xnqyebpe",
        formData
      );
      const data = await response.data;
      if (data.error) {
        setError(data.error);
        setShowErrorMessage(true);
      } else {
        console.log(data);
        setSuccessMessage("Mensaje enviado con éxito");
        setShowSuccessMessage(true);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      }
    } catch (error) {
      setError(error.message);
      setShowErrorMessage(true);
    }
    setLoading(false);
  };

  return (
    <div className="container mx-auto">
      <div
        style={{
          backgroundImage: `url(${consultorio_bg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="flex flex-col items-center justify-center h-96"
      >
        <h2 className="text-4xl font-bold text-center text-white bg-angio-blue-light/70 md:px-28 p-4">
          CONSULTORIOS
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center gap-8 py-10 md:py-20">
        <div className="flex flex-col items-center justify-center w-full md:w-2/3">
          <h1 className="md:text-3xl font-bold text-center text-angio-blue-dark">
            CONTACTO
          </h1>
          <p className="text-center text-angio-blue-dark p-4">
            Para agendar una cita o solicitar información, favor de acudir a su
            consultorio de preferencia o comunicarse a los siguientes números
            telefónicos:
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-full p-4 xl:px-32">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-2 justify-center w-full">
            <div className="flex flex-col items-start justify-start gap-2 w-full">
              <h4 className="text-xl md:text-2xl font-bold text-angio-blue-dark">
                VALLE DE BANDERAS
              </h4>
              <p className="text-angio-blue-dark flex justify-center">
                DIRECCIÓN:
              </p>
              <p className="text-gray-500">
                <b> MORELOS #60</b>
                <br />
                COLONIA CENTRO, ENTRE CALLE QUERETARO Y VERACRUZ
              </p>
              <p className="text-angio-blue-dark flex justify-center">
                HORARIOS:
              </p>
              <p className="text-gray-500">
                Martes y Jueves de 13:30 PM a 16:00 PM
              </p>
              <p className="text-angio-blue-dark flex justify-center">CITAS:</p>
              <p className="text-gray-500 flex gap-2 items-center">
                Tel:
                <a href="tel:871-782-7542" target="_blank">
                  871-782-7542
                </a>
                o
                <a
                  href="https://wa.me/+5218717827542?text=Hola,%20%20%20me%20gustar%C3%ADa%20agendar%20una%20cita%20en%20el%20consultorio%20de%20Valle"
                  target="_blank"
                >
                  <img src={whatsappButton} alt="WhatsApp" className="w-36" />
                </a>
              </p>
            </div>
            <a
              href="https://goo.gl/maps/6axP7imKVVq98kT87"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={consultorio}
                alt="Consultorio"
                className="w-full h-auto min-h-full object-cover"
              />
            </a>
          </div>
          <div className="w-full h-px bg-gray-300 my-4"></div>
          <div className="flex flex-col md:grid md:grid-cols-2 gap-2 justify-center w-full">
            <div className="flex flex-col items-start justify-start gap-2 w-full">
              <h4 className="text-xl md:text-2xl font-bold text-angio-blue-dark">
                BUCERÍAS
              </h4>
              <p className="text-angio-blue-dark flex justify-center">
                DIRECCIÓN:
              </p>
              <p className="text-gray-500">
                <b>TORRE MEDICA CMQ</b>
                <br />
                <b>CONSULTORIO #315</b>, AV. HÉROES DE NACOZARI #280, 2DO PISO.
              </p>
              <p className="text-angio-blue-dark flex justify-center">
                HORARIOS:
              </p>
              <p className="text-gray-500">
                Lunes y Miércoles de 13:00 PM a 16:00 PM
              </p>
              <p className="text-angio-blue-dark flex justify-center">CITAS:</p>
              <p className="text-gray-500 flex gap-2 items-center">
                Tel:
                <a href="tel:329-2980-717" target="_blank">
                  329-2980-717
                </a>
                o
                <a
                  href="https://wa.me/+5218717827542?text=Hola,%20%20%20me%20gustar%C3%ADa%20agendar%20una%20cita%20en%20el%20consultorio%20de%20Bucer%C3%ADas"
                  target="_blank"
                >
                  <img src={whatsappButton} alt="WhatsApp" className="w-36" />
                </a>
              </p>
            </div>
            <a
              href="https://goo.gl/maps/CdZSRTBDhujQSs1bA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={consultorio_bucerias}
                alt="Consultorio"
                className="w-full h-auto min-h-full object-cover"
              />
            </a>
          </div>
          <div className="w-full h-px bg-gray-300 my-4"></div>
          <div className="flex flex-col md:grid md:grid-cols-2 gap-2 justify-center w-full">
            <div className="flex flex-col items-start justify-start gap-2 w-full">
              <h4 className="text-xl md:text-2xl font-bold text-angio-blue-dark">
                SANATORIO BELÉN
              </h4>
              <p className="text-angio-blue-dark flex justify-center">
                DIRECCIÓN:
              </p>
              <p className="text-gray-500">
                <b> PITILLAL PUERTO VALLARTA</b>
                <br />
                JOSEFA ORTÍZ DE DOMINGUEZ <b> #189</b>
              </p>
              <p className="text-angio-blue-dark flex justify-center">
                HORARIOS:
              </p>
              <p className="text-gray-500">
                Lunes y Viernes de 09:00 AM a 11:00 AM
              </p>
              <p className="text-angio-blue-dark flex justify-center">CITAS:</p>
              <p className="text-gray-500 flex gap-2 items-center">
                Tel:
                <a href="tel:322-224-0564" target="_blank">
                  322-224-0564
                </a>
                o
                <a
                  href="https://wa.me/+5218717827542?text=Hola,%20%20%20me%20gustar%C3%ADa%20agendar%20una%20cita%20en%20el%20consultorio%20del%20Sanatorio%20Bel%C3%A9n"
                  target="_blank"
                >
                  <img src={whatsappButton} alt="WhatsApp" className="w-36" />
                </a>
              </p>
            </div>
            <a
              href="https://goo.gl/maps/E5xkJSXLjAfj4R3T8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={consultorio_belen}
                alt="Consultorio"
                className="w-full h-auto min-h-full object-cover"
              />
            </a>
          </div>
          <div className="w-full h-px bg-gray-300 my-4"></div>
          {/* contact form */}
          <div className="flex flex-col md:grid md:grid-cols-2 items-center justify-center py-10">
            <img src={dudas} alt="Dudas" className="w-full h-auto" />
            <ContactForm
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              phone={phone}
              setPhone={setPhone}
              message={message}
              setMessage={setMessage}
              handleSubmit={handleSubmit}
              loading={loading}
              error={error}
              successMessage={successMessage}
              showSuccessMessage={showSuccessMessage}
              showErrorMessage={showErrorMessage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
