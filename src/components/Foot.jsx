"use client";

import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import logo from "../assets/angio_icon.png";

export default function Foot() {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              alt="Angio Bahía"
              href="/"
              name="ANGIO BAHÍA"
              src={logo}
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 md:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Acerca de" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Trayectoria</Footer.Link>
                <Footer.Link href="#">Preguntas frecuentes</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Tratamientos" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                  Cirugía para insuficiencia venosa
                </Footer.Link>
                <Footer.Link href="#">Cirugía para pie diabético</Footer.Link>
                <Footer.Link href="#">
                  Cirugía para insuficiencia arterial cronica
                </Footer.Link>
                <Footer.Link className="md:hidden" href="#">
                  Colocación de acceso vascular para hemodiálisis
                </Footer.Link>
                <Footer.Link className="md:hidden" href="#">
                  Colocación y retiro de filtro de vena cava
                </Footer.Link>
                <Footer.Link className="md:hidden" href="#">
                  Embolectomia
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="hidden md:block">
              <Footer.Title title="" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                  Colocación de acceso vascular para hemodiálisis
                </Footer.Link>
                <Footer.Link href="#">
                  Colocación y retiro de filtro de vena cava
                </Footer.Link>
                <Footer.Link href="#">Embolectomia</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright by="Angio Bahía" href="#" year={2023} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
