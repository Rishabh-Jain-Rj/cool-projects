import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CakeHeroSection3D from "./projects/HeroSections/CakeHeroSection3D";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>Cool Mini Projects</>} />
        <Route path="/3d-cake-hero-section" element={<CakeHeroSection3D />} />
      </Routes>
    </BrowserRouter>
  );
}
