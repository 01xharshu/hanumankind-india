"use client";

import { useEffect } from "react";

export function MotionController() {
  useEffect(() => {
    const root = document.documentElement;
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    root.classList.add("motion-ready");
    elements.forEach((element) => {
      if (element.dataset.revealDelay) {
        element.style.setProperty(
          "--reveal-delay",
          `${element.dataset.revealDelay}ms`,
        );
      }
    });

    if (reduceMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.dataset.visible = "true";
      });
      return () => root.classList.remove("motion-ready");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const element = entry.target as HTMLElement;
          element.dataset.visible = "true";
          pendingElements.delete(element);
          observer.unobserve(element);
        });
      },
      { rootMargin: "0px 0px -4% 0px", threshold: 0.01 },
    );

    const pendingElements = new Set(elements);
    let animationFrame = 0;

    const revealPassedElements = () => {
      pendingElements.forEach((element) => {
        if (element.getBoundingClientRect().top > window.innerHeight * 1.04) {
          return;
        }
        element.dataset.visible = "true";
        pendingElements.delete(element);
        observer.unobserve(element);
      });
      animationFrame = 0;
    };

    const checkVisibility = () => {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(revealPassedElements);
    };

    elements.forEach((element) => observer.observe(element));
    window.addEventListener("scroll", checkVisibility, { passive: true });
    window.addEventListener("resize", checkVisibility);
    checkVisibility();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", checkVisibility);
      window.removeEventListener("resize", checkVisibility);
      window.cancelAnimationFrame(animationFrame);
      root.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
