import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HatHeroSection3D from "./projects/HatHeroSection3D";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>Cool Mini Projects</>} />
        <Route path="/hat-hero-section-3d" element={<HatHeroSection3D />} />
      </Routes>
    </BrowserRouter>
  );
}
