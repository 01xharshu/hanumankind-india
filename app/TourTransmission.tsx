"use client";

import { useState } from "react";

type Show = {
  day: string;
  month: string;
  city: string;
  venue: string;
  note: string;
  code: string;
  signal: string;
  energy: number;
};

export function TourTransmission({ shows }: { shows: Show[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeShow = shows[activeIndex];

  return (
    <div className="transmission-layout">
      <div
        className="transmission-list"
        role="tablist"
        aria-label="Concept tour cities"
      >
        {shows.map((show, index) => (
          <button
            key={show.city}
            type="button"
            role="tab"
            aria-selected={activeIndex === index}
            aria-controls="tour-transmission-panel"
            className="transmission-row"
            data-active={activeIndex === index}
            data-reveal={index % 2 === 0 ? "slide" : "slide-right"}
            data-reveal-delay={index * 55}
            onClick={() => setActiveIndex(index)}
          >
            <span className="transmission-date">
              <strong>{show.day}</strong>
              <small>{show.month}</small>
            </span>
            <span className="transmission-city">
              <strong>{show.city}</strong>
              <small>{show.venue}</small>
            </span>
            <span className="transmission-code">{show.code}</span>
            <span className="transmission-arrow" aria-hidden="true">
              ↗
            </span>
          </button>
        ))}
      </div>

      <aside
        id="tour-transmission-panel"
        className="transmission-panel"
        role="tabpanel"
        aria-live="polite"
        data-reveal="pop"
        data-reveal-delay="90"
      >
        <div className="transmission-panel-top">
          <span>Live concept signal</span>
          <span className="signal-status">
            <i aria-hidden="true" />
            On air
          </span>
        </div>

        <div className="transmission-poster">
          <span className="transmission-ghost" aria-hidden="true">
            {String(activeIndex + 1).padStart(2, "0")}
          </span>
          <p>{activeShow.code}</p>
          <h3>{activeShow.city}</h3>
          <div className="transmission-meta">
            <span>{activeShow.note}</span>
            <span>{activeShow.venue}</span>
          </div>
        </div>

        <div className="signal-console">
          <div>
            <span>Signal</span>
            <strong>{activeShow.signal}</strong>
          </div>
          <div>
            <span>Energy</span>
            <strong>{activeShow.energy}%</strong>
          </div>
          <div className="signal-meter" aria-hidden="true">
            {Array.from({ length: 10 }).map((_, index) => (
              <i
                key={index}
                data-lit={index < Math.round(activeShow.energy / 10)}
              />
            ))}
          </div>
        </div>

        <p className="transmission-disclaimer">
          Creative route study — not an official event announcement.
        </p>
      </aside>
    </div>
  );
}
