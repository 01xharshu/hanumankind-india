"use client";

import { useEffect, useState } from "react";

const nameScripts = [
  {
    id: "english",
    label: "English",
    artist: ["HANUMAN", "KIND"],
    real: ["SOORAJ", "CHERUKAT"],
  },
  {
    id: "devanagari",
    label: "Devanagari",
    artist: ["हनुमान", "काइंड"],
    real: ["सूरज", "चेरुकाट"],
  },
  {
    id: "urdu",
    label: "Urdu",
    artist: ["ہنومان", "کائنڈ"],
    real: ["سورج", "چیروکاٹ"],
  },
  {
    id: "tamil",
    label: "Tamil",
    artist: ["ஹனுமான்", "கைண்ட்"],
    real: ["சூரஜ்", "செருகாட்"],
  },
  {
    id: "telugu",
    label: "Telugu",
    artist: ["హనుమాన్", "కైండ్"],
    real: ["సూరజ్", "చెరుకాట్"],
  },
  {
    id: "gurmukhi",
    label: "Punjabi / Gurmukhi",
    artist: ["ਹਨੂਮਾਨ", "ਕਾਇੰਡ"],
    real: ["ਸੂਰਜ", "ਚੇਰੁਕਾਟ"],
  },
  {
    id: "odia",
    label: "Odia",
    artist: ["ହନୁମାନ", "କାଇଣ୍ଡ"],
    real: ["ସୂରଜ", "ଚେରୁକାଟ"],
  },
  {
    id: "kannada",
    label: "Kannada",
    artist: ["ಹನುಮಾನ್", "ಕೈಂಡ್"],
    real: ["ಸೂರಜ್", "ಚೆರುಕಾಟ್"],
  },
  {
    id: "malayalam",
    label: "Malayalam",
    artist: ["ഹനുമാൻ", "കൈൻഡ്"],
    real: ["സൂരജ്", "ചെറുകാട്"],
  },
  {
    id: "bengali",
    label: "Bengali",
    artist: ["হনুমান", "কাইন্ড"],
    real: ["সূরজ", "চেরুকাট"],
  },
  {
    id: "gujarati",
    label: "Gujarati",
    artist: ["હનુમાન", "કાઇન્ડ"],
    real: ["સૂરજ", "ચેરુકાટ"],
  },
] as const;

export function HeroNameCycle() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      return;
    }

    const cycle = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % nameScripts.length);
    }, 1850);

    return () => window.clearInterval(cycle);
  }, []);

  const active = nameScripts[activeIndex];

  return (
    <h1
      className="hero-title font-display uppercase leading-[0.72] tracking-[-0.035em]"
      data-reveal="clip"
      data-reveal-delay="70"
      tabIndex={0}
      aria-label="Hanumankind, Sooraj Cherukat"
    >
      <span
        className="hero-stage-name hero-cycle-stage"
        data-script={active.id}
        key={`artist-${active.id}`}
        aria-hidden="true"
      >
        <span className="hero-script-label">{active.label}</span>
        <span className="hero-cycle-line">{active.artist[0]}</span>
        <span className="hero-cycle-line title-outline">
          {active.artist[1]}
        </span>
      </span>

      <span className="hero-identity-reveal" aria-hidden="true">
        <span
          className="hero-identity-frame"
          data-script={active.id}
          key={`real-${active.id}`}
        >
          <small>
            Let&apos;s not forget who he is. / {active.label}
          </small>
          <strong>
            <span>{active.real[0]}</span>
            <span>{active.real[1]}</span>
          </strong>
        </span>
      </span>
    </h1>
  );
}
