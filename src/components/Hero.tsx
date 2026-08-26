"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import * as THREE from "three";
import { ArrowRight } from "lucide-react";

// The 3D Element
function GeometricCore() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const { mode } = useTheme();
  
  // Rotate the mesh every frame
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.15;
    meshRef.current.rotation.y += delta * 0.2;
  });

  return (
    <mesh ref={meshRef} scale={1.8}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial 
        color={mode === "tech" ? "#D4AF37" : "#FFFFFF"} 
        wireframe={true} 
        transparent
        opacity={0.6}
      />
    </mesh>
  );
}

export default function Hero() {
  const { mode } = useTheme();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background Canvas */}
      <div className="absolute inset-0 z-0 opacity-50">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={1} />
          <GeometricCore />
        </Canvas>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="space-y-2">
            <h2 className={`text-sm md:text-lg tracking-widest uppercase font-semibold ${mode === "tech" ? "text-gold-rich" : "text-neutral-400"}`}>
              Software Engineer Intern
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
              Sahas <br/>
              Abeygunarathne
            </h1>
          </div>
          
          <p className="text-lg text-gray-400 max-w-lg">
            I build scalable, high-quality software solutions and craft seamless digital experiences. Specializing in modern web technologies and full-stack development.
          </p>

          <div className="flex flex-wrap gap-3 mt-2">
            {["Next.js", "React", "Python", "FastAPI", "PostgreSQL"].map((tech) => (
              <span 
                key={tech} 
                className={`px-4 py-1.5 text-sm rounded-full border backdrop-blur-sm ${
                  mode === "tech" ? "border-gold-rich/30 text-gold-rich bg-gold-rich/5" : "border-white/20 text-white bg-white/5"
                }`}
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="pt-4 flex items-center gap-6">
            <button className={`flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-all ${
              mode === "tech" ? "bg-gold-rich text-black hover:bg-gold" : "bg-white text-black hover:bg-neutral-200"
            }`}>
              View Projects <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}