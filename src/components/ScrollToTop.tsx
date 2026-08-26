"use client";

import { useTheme } from "@/context/ThemeContext";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const { mode } = useTheme();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = window.scrollY;
      
      // Calculate scroll percentage (0 to 100)
      const progress = (currentScroll / totalScroll) * 100;
      setScrollProgress(progress);

      // Show button after scrolling down 300px
      if (currentScroll > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // SVG circle configurations
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-cardBg border border-white/10 shadow-2xl backdrop-blur-xl group cursor-pointer"
          aria-label="Scroll to top"
        >
          {/* SVG Progress Ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-95 p-1" viewBox="0 0 50 50">
            {/* Background Track */}
            <circle
              cx="25"
              cy="25"
              r={radius}
              fill="transparent"
              stroke="rgba(255, 255, 255, 0.05)"
              strokeWidth="3"
            />
            {/* Progress Fill */}
            <circle
              cx="25"
              cy="25"
              r={radius}
              fill="transparent"
              stroke={mode === "tech" ? "#D4AF37" : "#A855F7"}
              strokeWidth="3"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-100 ease-out"
            />
          </svg>

          {/* Arrow Icon */}
          <ArrowUp 
            size={18} 
            className={`transition-colors duration-300 ${
              mode === "tech" ? "text-gold-rich group-hover:text-white" : "text-purple-400 group-hover:text-white"
            }`} 
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}