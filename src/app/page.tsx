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
import ScrollToTop from "@/components/ScrollToTop"; // Import the scroll button
import { useTheme } from "@/context/ThemeContext";

export default function Home() {
  const { mode } = useTheme();

  return (
    <main className="min-h-screen relative">
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

      {/* Floating Scroll to Top Progress Button */}
      <ScrollToTop />
    </main>
  );
}