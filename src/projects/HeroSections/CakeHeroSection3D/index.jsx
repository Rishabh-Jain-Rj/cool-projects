import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Html } from "@react-three/drei";
import { Suspense } from "react";
import Cake from "./Cake";

export default function CakeHeroSection3D() {
  function Loader() {
    return (
      <Html center>
        <div className="w-10 h-10 border-4 border-pink-400 border-t-transparent rounded-full animate-spin"></div>
      </Html>
    );
  }

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center px-4 md:px-8 bg-gradient-to-br from-[#0a0a0f] via-[#110015] to-[#200022]">
      {/* Glow halos (small size on mobile) */}
      <div className="absolute right-0 top-1/3 w-[200px] h-[200px] md:w-[500px] md:h-[500px] rounded-full bg-pink-500/20 blur-[90px] md:blur-[120px]"></div>
      <div className="absolute right-10 top-1/2 w-[180px] h-[180px] md:w-[400px] md:h-[400px] rounded-full bg-purple-500/20 blur-[90px] md:blur-[120px]"></div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto w-full z-10">
        {/* LEFT TEXT */}
        <div className="flex flex-col justify-center space-y-6 text-center md:text-left">
          {/* Sparkles smaller on mobile */}
          <div className="flex gap-3 justify-center md:justify-start">
            <span className="text-pink-400 text-2xl md:text-3xl animate-pulse">
              ✦
            </span>
            <span className="text-purple-400 text-2xl md:text-3xl animate-pulse delay-150">
              ✦
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight text-white">
            Taste The
            <br />
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,0,150,0.5)]">
              Magic of Cake
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-gray-300 max-w-md mx-auto md:mx-0 text-base sm:text-lg leading-relaxed">
            Discover rich flavors, fresh ingredients, and the art of baking—
            crafted to perfection for every celebration.
          </p>

          {/* CTA Button smaller on mobile */}
          <div className="flex justify-center md:justify-start">
            <button className="px-7 py-3 md:px-10 md:py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-full text-lg md:text-xl shadow-lg hover:scale-105 hover:shadow-pink-500/40 transition-all">
              Explore Menu
            </button>
          </div>
        </div>

        {/* RIGHT 3D CAKE MODEL */}
        <div className="relative w-full h-[300px] md:h-[600px]">
          <Canvas camera={{ position: [4, 4, 4] }}>
            <ambientLight intensity={1.2} />
            <directionalLight position={[5, 5, 5]} intensity={1} />

            <Suspense fallback={<Loader />}>
              <Float speed={2} rotationIntensity={1.2} floatIntensity={1.2}>
                <Cake
                  scale={1.2} // smaller on mobile
                  position={[0, -1.2, 0]}
                  rotation={[0, Math.PI / 2, 0]}
                />
              </Float>
            </Suspense>

            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
}
