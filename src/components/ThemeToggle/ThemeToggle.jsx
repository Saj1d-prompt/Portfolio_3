import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

import "./ThemeToggle.css";

function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme) {
      return savedTheme;
    }

    const prefersLight =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches;

    return prefersLight ? "light" : "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme
    );

    localStorage.setItem(
      "portfolio-theme",
      theme
    );
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "dark"
        ? "light"
        : "dark"
    );
  };

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={
        theme === "dark"
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
      title={
        theme === "dark"
          ? "Light mode"
          : "Dark mode"
      }
    >
      <span className="theme-toggle__track">
        <span
          className={`theme-toggle__indicator ${
            theme === "light"
              ? "theme-toggle__indicator--light"
              : ""
          }`}
        >
          {theme === "dark" ? (
            <Moon size={14} strokeWidth={1.8} />
          ) : (
            <Sun size={14} strokeWidth={1.8} />
          )}
        </span>

        <Sun
          className="theme-toggle__sun"
          size={13}
          strokeWidth={1.7}
        />

        <Moon
          className="theme-toggle__moon"
          size={13}
          strokeWidth={1.7}
        />
      </span>
    </button>
  );
}

export default ThemeToggle;