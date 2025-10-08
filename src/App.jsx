import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Home from "./pages/home";
//import Services from "./pages/services";
//import Projects from "./pages/projects";
//import Team from "./pages/team";
//import Contact from "./pages/contact";
//import Details from "./pages/details";
//import Features from "./pages/features";

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}
