"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import ProjectsGrid from "@/components/ProjectsGrid";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";

// Design Mode Components
import DesignHero from "@/components/DesignHero";
import DesignSkills from "@/components/DesignSkills";
import DesignShowcase from "@/components/DesignShowcase";
import DesignExperience from "@/components/DesignExperience";
import DesignAchievements from "@/components/DesignAchievements";
import DesignContact from "@/components/DesignContact";

import ScrollToTop from "@/components/ScrollToTop";
import Preloader from "@/components/Preloader";
import { useTheme } from "@/context/ThemeContext";

export default function Home() {
  const { mode } = useTheme();

  return (
    <main className="min-h-screen relative overflow-hidden bg-darkBg">
      <Preloader />

      <div className="absolute inset-0 bg-grid-pattern pointer-events-none z-0"></div>

      <div className="absolute top-0 left-1/4 w-150 h-150 rounded-full blur-[140px] pointer-events-none z-0 opacity-15 transition-colors duration-700">
        <div className={`w-full h-full rounded-full ${mode === "tech" ? "bg-gold-rich" : "bg-purple-500"}`}></div>
      </div>

      <div className="absolute top-[40%] right-1/4 w-125 h-125 rounded-full blur-[160px] pointer-events-none z-0 opacity-10 transition-colors duration-700">
        <div className={`w-full h-full rounded-full ${mode === "tech" ? "bg-gold-light" : "bg-purple-400"}`}></div>
      </div>

      <div className="absolute bottom-10 left-1/3 w-175 h-175 rounded-full blur-[180px] pointer-events-none z-0 opacity-10 transition-colors duration-700">
        <div className={`w-full h-full rounded-full ${mode === "tech" ? "bg-gold-rich" : "bg-purple-600"}`}></div>
      </div>

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
          <>
            <DesignHero />
            <DesignSkills />
            <DesignShowcase />
            <DesignExperience />
            <DesignAchievements />
            <DesignContact />
          </>
        )}

        <ScrollToTop />
      </div>
    </main>
  );
}