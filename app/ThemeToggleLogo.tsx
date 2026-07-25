"use client";

import React from "react";

export function ThemeToggleLogo() {
  return (
    <a
      href="#top"
      className="artist-wordmark font-display text-3xl tracking-[0.04em] text-paper sm:text-4xl"
      aria-label="Hanumankind India concept tour home"
      onClick={(e) => {
        const url = new URL(e.currentTarget.href);
        if (window.location.hash !== url.hash) {
          // If we want smooth scrolling, we just let it go or we can prevent and push.
          // Let's just toggle the class, but we shouldn't preventDefault if we want it to scroll to #top.
        }
        document.documentElement.classList.toggle("theme-red");
      }}
    >
      HANUMANKIND
    </a>
  );
}
