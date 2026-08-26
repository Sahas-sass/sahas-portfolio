"use client";

import { useTheme } from "@/context/ThemeContext";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const { mode } = useTheme();
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Count up progress from 0 to 100
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 400); // Small buffer before fading out
          return 100;
        }
        return prev + 2;
      });
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-darkBg text-white px-6 overflow-hidden"
        >
          {/* Background grid pattern matching the main layout */}
          <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-40"></div>

          {/* Ambient Glow behind loader */}
          <div className={`absolute w-96 h-96 rounded-full blur-[140px] pointer-events-none opacity-20 transition-colors duration-700 ${mode === "tech" ? "bg-gold-rich" : "bg-purple-500"}`}></div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Monogram / Title */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xl font-black tracking-tighter mb-8"
            >
              <span>SAHAS</span>
              <span className={mode === "tech" ? "text-gold-rich" : "text-purple-400"}>.DEV</span>
            </motion.div>

            {/* Live Counter Display */}
            <div className="flex items-baseline gap-1 font-mono">
              <span className="text-6xl md:text-8xl font-black tracking-tight">{count}</span>
              <span className={`text-2xl md:text-3xl font-bold ${mode === "tech" ? "text-gold-rich" : "text-purple-400"}`}>%</span>
            </div>

            {/* Loading Status Text */}
            <p className="text-xs font-mono uppercase tracking-widest text-gray-500 mt-4">
              Initializing {mode === "tech" ? "Tech Stack" : "Design Suite"}...
            </p>

            {/* Progress Bar Track */}
            <div className="w-48 sm:w-64 h-1 bg-white/10 rounded-full mt-6 overflow-hidden relative">
              <motion.div 
                className={`absolute top-0 left-0 h-full ${mode === "tech" ? "bg-gold-rich" : "bg-purple-500"}`}
                style={{ width: `${count}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}