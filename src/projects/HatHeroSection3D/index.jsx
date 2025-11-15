import { Canvas } from "@react-three/fiber";
import {
  Float,
  Environment,
  Html,
  OrbitControls,
  ContactShadows,
} from "@react-three/drei";
import HatModel from "./HatModel";
import { Suspense, useState, useEffect } from "react";

export default function HatHeroSection() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f7f9fc] dark:bg-[#03060f] transition-colors duration-500">
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-50">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="flex items-center gap-3 px-6 py-2 rounded-full bg-white/80 dark:bg-white/10  backdrop-blur-xl shadow-lg border border-gray-300 dark:border-white/20 transition-all duration-300 hover:scale-105"
        >
          {darkMode ? (
            <>
              <span className="text-yellow-300 text-xl">☀️</span>
              <span className="text-white font-semibold">Light Mode</span>
            </>
          ) : (
            <>
              <span className="text-blue-600 text-xl">🌙</span>
              <span className="text-black font-semibold">Dark Mode</span>
            </>
          )}
        </button>
      </div>

      {/* BACKGROUND GLOWS (cool teal & blue) */}
      <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-cyan-500/20 dark:bg-cyan-500/15 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 -right-40 w-[420px] h-[420px] bg-blue-600/20 dark:bg-blue-600/15 blur-[150px] rounded-full"></div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-14 pt-20 md:pt-0">
        {/* LEFT TEXT */}
        <div className="space-y-6 flex flex-col justify-center text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-black dark:text-white">
            Elevate Your
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Digital Presence
            </span>
          </h1>

          <p className="text-gray-700 dark:text-gray-300 text-lg max-w-md mx-auto md:mx-0">
            A fresh, clean, modern 3D experience. Interact with the hat, explore
            the smooth visuals, and feel the premium design atmosphere.
          </p>

          <div className="flex justify-center md:justify-start">
            <button className="px-10 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold text-lg shadow-lg hover:scale-105 transition-all">
              Explore Collection
            </button>
          </div>
        </div>

        {/* RIGHT 3D HAT */}
        <div className="relative flex justify-center items-center">
          {/* Cool blue ring glow */}
          <div className="absolute w-[330px] h-[330px] rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-600/20 blur-[80px]"></div>

          {/* Outer ring */}

          <div className="w-full h-[420px] md:h-[520px]">
            <Canvas
              camera={{ position: [2.5, 1.8, 3], fov: 40 }}
              gl={{ alpha: true }}
              style={{ background: "transparent" }}
            >
              <Suspense
                fallback={
                  <Html center>
                    <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                  </Html>
                }
              >
                <Float speed={1.8} rotationIntensity={1} floatIntensity={1.05}>
                  <HatModel
                    scale={0.08}
                    position={[0, 0.4, 0]}
                    rotation={[0, Math.PI / 2, 0]}
                  />
                </Float>

                <ContactShadows
                  opacity={0.45}
                  scale={6}
                  blur={3}
                  far={4}
                  resolution={1024}
                  color="#000"
                />

                <Environment preset="studio" />
              </Suspense>

              <OrbitControls
                enableZoom={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 3}
                rotateSpeed={0.6}
              />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
}
