import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Housing from "../pages/housing/Housing";
import Error from "../pages/error/Error";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";

function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/fiche-logement/:id" element={<Housing />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;
