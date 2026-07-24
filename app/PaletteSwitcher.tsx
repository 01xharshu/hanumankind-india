"use client";

import { useEffect, useRef } from "react";

type Palette = "heat" | "mono";

export function PaletteSwitcher() {
  const selectRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    const savedPalette = window.localStorage.getItem("hmk-palette");
    const initialPalette: Palette =
      savedPalette === "mono" ? "mono" : "heat";
    if (selectRef.current) {
      selectRef.current.value = initialPalette;
    }
    document.documentElement.dataset.palette = initialPalette;
  }, []);

  function changePalette(nextPalette: Palette) {
    document.documentElement.dataset.palette = nextPalette;
    window.localStorage.setItem("hmk-palette", nextPalette);
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
