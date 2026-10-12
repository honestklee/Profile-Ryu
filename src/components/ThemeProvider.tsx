"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") {
      setTheme(stored);
      document.documentElement.setAttribute("data-theme", stored);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const initial = prefersDark ? "dark" : "light";
      setTheme(initial);
      document.documentElement.setAttribute("data-theme", initial);
    }
    setMounted(true);

    const loadingTimeout = window.setTimeout(() => setIsLoading(false), 2000);
    return () => window.clearTimeout(loadingTimeout);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {isLoading && (
        <div className="site-loader" role="status" aria-label="Loading website">
          <div className="site-loader__content" aria-hidden="true">
            <span className="site-loader__mark">RRAP</span>
            <img
              className="site-loader__clover"
              src="/favicon.png"
              alt=""
            />
            <span className="site-loader__label">Loading</span>
            <span className="site-loader__track">
              <span />
            </span>
          </div>
        </div>
      )}
      <div
        className="site-content"
        style={{ visibility: mounted ? "visible" : "hidden" }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
