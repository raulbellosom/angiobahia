import React from "react";

const ContactForm = ({
  name = "",
  setName,
  email = "",
  setEmail,
  phone = "",
  setPhone,
  message = "",
  setMessage,
  handleSubmit,
  loading = false,
  error,
  successMessage,
  showSuccessMessage,
  showErrorMessage,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center gap-4 w-full border border-angio-blue-dark rounded-md p-4 "
    >
      <h2 className="text-angio-blue-dark font-bold text-2xl">Contáctanos</h2>
      <div className="flex flex-col justify-center gap-4 w-full">
        <label htmlFor="name" className="text-angio-blue-dark font-bold">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Nombre completo"
          className="border border-angio-blue-dark rounded-md p-2 w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex flex-col justify-center gap-4 w-full">
        <label htmlFor="email" className="text-angio-blue-dark font-bold">
          Correo electrónico
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Correo electrónico"
          className="border border-angio-blue-dark rounded-md p-2 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col justify-center gap-4 w-full">
        <label htmlFor="phone" className="text-angio-blue-dark font-bold">
          Teléfono
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Teléfono"
          className="border border-angio-blue-dark rounded-md p-2 w-full"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="flex flex-col justify-center gap-4 w-full">
        <label htmlFor="message" className="text-angio-blue-dark font-bold">
          Mensaje
        </label>
        <textarea
          type="text"
          id="message"
          name="message"
          placeholder="Dudas, comentarios, sugerencias..."
          className="border border-angio-blue-dark rounded-md p-2 w-full"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div className="flex flex-col justify-center gap-4 w-full">
        <button
          type="submit"
          className="bg-angio-blue-dark hover:bg-angio-blue-light text-white font-bold py-2 px-4 rounded"
          disabled={loading}
        >
          Enviar
        </button>
      </div>
      {showSuccessMessage && (
        <div className="flex flex-col items-center justify-center gap-4 w-full">
          <p className="text-green-500">{successMessage}</p>
        </div>
      )}
      {showErrorMessage && (
        <div className="flex flex-col items-center justify-center gap-4 w-full">
          <p className="text-red-500">{error}</p>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
