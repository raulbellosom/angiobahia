import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/Layout";
import Tratamientos from "../pages/tratamientos/Tratamientos";

const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tratamientos" element={<Tratamientos />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
