import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import Home from "../pages/Home";
import Layout from "../components/Layout";
import Tratamientos from "../pages/tratamientos/Tratamientos";
import Embolectomia from "../pages/tratamientos/Embolectomia";
import Hemodialisis from "../pages/tratamientos/Hemodialisis";
import InsuficienciaArterial from "../pages/tratamientos/InsuficienciaArterial";
import PieDiabetico from "../pages/tratamientos/PieDiabetico";
import Varices from "../pages/tratamientos/Varices";
import VenaCava from "../pages/tratamientos/VenaCava";
import Trayectoria from "../pages/about/Trayectoria";
import FAQ from "../pages/about/FAQ";
import Contacto from "../pages/Contacto";
import NotFound from "../components/NotFound";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    const scrollOptions = {
      duration: 500, // Duración en milisegundos
      delay: 0, // Retraso en milisegundos antes de comenzar el scroll
      smooth: true, // Si se activa, utiliza un scroll suave
      offset: 0, // Un offset si necesitas ajustar la posición de destino
    };
    scroll.scrollToTop(scrollOptions);
  }, [pathname]);

  return null;
};

const AppRouter = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tratamientos" element={<Tratamientos />} />
          <Route
            path="/tratamientos/tratamiento-para-insuficiencia-venosa-cronica"
            element={<Varices />}
          />
          <Route
            path="/tratamientos/tratamiento-multidisciplinario-para-pie-diabetico"
            element={<PieDiabetico />}
          />
          <Route
            path="/tratamientos/cirugia-abierta-o-endovascular-de-la-enfermedad-arterial-periferica"
            element={<InsuficienciaArterial />}
          />
          <Route
            path="/tratamientos/colocacion-de-acceso-vascular-para-hemodialisis"
            element={<Hemodialisis />}
          />
          <Route
            path="/tratamientos/tratamiento-minimo-invasivo-de-la-trombosis-venosa-profunda"
            element={<VenaCava />}
          />
          {/* <Route path="/tratamientos/embolectomia" element={<Embolectomia />} /> */}
          <Route path="/trayectoria" element={<Trayectoria />} />
          <Route path="/preguntas-frecuentes" element={<FAQ />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
