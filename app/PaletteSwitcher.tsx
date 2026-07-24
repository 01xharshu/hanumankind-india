"use client";

import { useEffect, useRef } from "react";

type Palette = "heat" | "mono";

export function PaletteSwitcher() {
  const selectRef = useRef<HTMLSelectElement>(null);
  const timersRef = useRef<number[]>([]);

  useEffect(() => {
    const savedPalette = window.localStorage.getItem("hmk-palette");
    const initialPalette: Palette =
      savedPalette === "mono" ? "mono" : "heat";
    if (selectRef.current) {
      selectRef.current.value = initialPalette;
    }
    document.documentElement.dataset.palette = initialPalette;

    return () => {
      timersRef.current.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  function changePalette(nextPalette: Palette) {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (root.dataset.palette === nextPalette) return;

    timersRef.current.forEach((timer) => window.clearTimeout(timer));
    timersRef.current = [];

    if (reduceMotion) {
      root.dataset.palette = nextPalette;
      window.localStorage.setItem("hmk-palette", nextPalette);
      return;
    }

    root.classList.remove("theme-shuffling");
    void root.offsetWidth;
    root.classList.add("theme-shuffling");

    timersRef.current.push(
      window.setTimeout(() => {
        root.dataset.palette = nextPalette;
        window.localStorage.setItem("hmk-palette", nextPalette);
      }, 300),
      window.setTimeout(() => {
        root.classList.remove("theme-shuffling");
      }, 760),
    );
  }

  return (
    <label className="palette-switcher">
      <span className="palette-label">Ink mode</span>
      <span className="palette-select-wrap">
        <span className="palette-dot" aria-hidden="true" />
        <select
          ref={selectRef}
          aria-label="Choose website color palette"
          defaultValue="heat"
          onChange={(event) =>
            changePalette(event.target.value as Palette)
          }
        >
          <option value="heat">Heat / Red ink</option>
          <option value="mono">Xerox / B&amp;W</option>
        </select>
        <span className="palette-arrow" aria-hidden="true">
          ↘
        </span>
      </span>
    </label>
  );
}
