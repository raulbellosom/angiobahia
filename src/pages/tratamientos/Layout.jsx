import { Modal } from "flowbite-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Layout = ({ children, image = "", title = "", images_carousel = [] }) => {
  const [imageSelected, setImageSelected] = useState("");
  const [showModal, setShowModal] = useState(false);
  const toggleModal = (image) => {
    setShowModal(!showModal);
    setImageSelected(image);
  };

  return (
    <div className="container mx-auto">
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="flex flex-col items-center justify-center h-96"
      >
        <h1 className="text-4xl font-bold text-center text-white bg-angio-blue-light/70 md:px-28 md:py-2 p-4">
          {title}
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        {children}
      </div>
      <h6 className="text-xl font-bold text-angio-blue-dark text-center p-10">
        GALERÍA
      </h6>
      <div className="grid grid-cols-2 md:grid-cols-3">
        {images_carousel.map((image, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-2"
          >
            <img
              src={image}
              alt={`image_${index}`}
              className="w-full h-full object-cover"
              onClick={() => toggleModal(image)}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center p-10">
        <p className="text-2xl text-center text-gray-700 mt-8 font-light">
          Si necesitas más información sobre nuestros servicios, no dudes en
          contactarnos.
        </p>
        <Link
          to="/contacto"
          className="mt-4 px-4 py-2 bg-angio-blue-dark text-white rounded-md hover:bg-angio-blue-light text-center"
        >
          Contacto
        </Link>
      </div>
      <Modal dismissible show={showModal} onClose={toggleModal} size="4xl">
        <Modal.Header>{title}</Modal.Header>
        <Modal.Body>
          <img
            src={imageSelected}
            alt="image_selected"
            className="w-full h-full object-cover"
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Layout;
