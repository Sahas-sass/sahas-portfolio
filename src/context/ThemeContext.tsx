"use client";

import React, { createContext, useContext, useState } from "react";

type PortfolioMode = "tech" | "design";

interface ThemeContextType {
  mode: PortfolioMode;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<PortfolioMode>("tech");

  const toggleMode = () => {
    setMode((prev) => (prev === "tech" ? "design" : "tech"));
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      {/* We apply a dynamic class to the wrapper based on the mode */}
      <div className={`min-h-screen transition-colors duration-500 ${mode === "tech" ? "bg-darkBg text-white" : "bg-neutral-900 text-neutral-100"}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};