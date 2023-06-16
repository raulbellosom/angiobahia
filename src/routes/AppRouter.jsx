import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tratamientos" element={<Tratamientos />} />
          <Route
            path="/tratamientos/cirugia-para-insuficiencia-venosa"
            element={<Varices />}
          />
          <Route
            path="/tratamientos/cirugia-para-pie-diabetico"
            element={<PieDiabetico />}
          />
          <Route
            path="/tratamientos/cirugia-para-insuficiencia-arterial-cronica"
            element={<InsuficienciaArterial />}
          />
          <Route
            path="/tratamientos/colocacion-de-acceso-vascular-para-hemodialisis"
            element={<Hemodialisis />}
          />
          <Route
            path="/tratamientos/colocacion-y-retiro-de-filtro-de-vena-cava"
            element={<VenaCava />}
          />
          <Route path="/tratamientos/embolectomia" element={<Embolectomia />} />
          <Route path="/trayectoria" element={<Trayectoria />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
