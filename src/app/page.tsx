"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import ProjectsGrid from "@/components/ProjectsGrid";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";
import DesignShowcase from "@/components/DesignShowcase";
import ScrollToTop from "@/components/ScrollToTop";
import Preloader from "@/components/Preloader"; // Import Preloader
import { useTheme } from "@/context/ThemeContext";

export default function Home() {
  const { mode } = useTheme();

  return (
    <main className="min-h-screen relative overflow-hidden bg-darkBg">
      
      {/* INITIAL PAGE LOADING SCREEN */}
      <Preloader />

      {/* GLOBAL FADED GRID BACKGROUND (z-0) */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none z-0"></div>

      {/* DYNAMIC AMBIENT GLOWS */}
      <div className="absolute top-0 left-1/4 w-150 h-150 rounded-full blur-[140px] pointer-events-none z-0 opacity-15 transition-colors duration-700">
        <div className={`w-full h-full rounded-full ${mode === "tech" ? "bg-gold-rich" : "bg-purple-500"}`}></div>
      </div>

      <div className="absolute top-[40%] right-1/4 w-125 h-125 rounded-full blur-[160px] pointer-events-none z-0 opacity-10 transition-colors duration-700">
        <div className={`w-full h-full rounded-full ${mode === "tech" ? "bg-gold-light" : "bg-purple-400"}`}></div>
      </div>

      <div className="absolute bottom-10 left-1/3 w-175 h-175 rounded-full blur-[180px] pointer-events-none z-0 opacity-10 transition-colors duration-700">
        <div className={`w-full h-full rounded-full ${mode === "tech" ? "bg-gold-rich" : "bg-purple-600"}`}></div>
      </div>

      {/* FOREGROUND CONTENT (z-10) */}
      <div className="relative z-10">
        <Navbar />

        {mode === "tech" ? (
          <>
            <Hero />
            <Skills />
            <ProjectsGrid />
            <Achievements />
            <Certifications />
            <Leadership />
            <Contact />
          </>
        ) : (
          <div className="pt-24">
            <DesignShowcase />
          </div>
        )}

        <ScrollToTop />
      </div>

    </main>
  );
}