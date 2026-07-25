"use client";

import React, { useState } from "react";

export function ThemeToggleLogo() {
  const [isRed, setIsRed] = useState(false);

  return (
    <a
      href="#top"
      className={`artist-wordmark font-display text-3xl tracking-[0.04em] sm:text-4xl ${isRed ? "text-flame" : "text-paper"}`}
      aria-label="Hanumankind India concept tour home"
      onClick={(e) => {
        e.preventDefault();
        
        const toggleTheme = () => {
          document.documentElement.classList.toggle("theme-red");
          setIsRed((prev) => !prev);
        };

        if (document.startViewTransition) {
          document.startViewTransition(toggleTheme);
        } else {
          toggleTheme();
        }
        
        // Ensure scroll to top manually since we prevented default
        if (window.location.hash !== "#top") {
          window.location.hash = "top";
        }
      }}
    >
      HANUMANKIND
    </a>
  );
}
