const conceptDates = [
  {
    day: "18",
    month: "SEP",
    city: "NEW DELHI",
    venue: "JLN STADIUM",
    note: "NORTHSIDE OPENER",
  },
  {
    day: "25",
    month: "SEP",
    city: "MUMBAI",
    venue: "NESCO GROUNDS",
    note: "WEST COAST NOISE",
  },
  {
    day: "02",
    month: "OCT",
    city: "BENGALURU",
    venue: "PALACE GROUNDS",
    note: "BACK TO THE BLOCK",
  },
  {
    day: "09",
    month: "OCT",
    city: "KOCHI",
    venue: "BOLGATTY ISLAND",
    note: "HOME SOIL FINALE",
  },
];

const milestones = [
  {
    year: "2019",
    title: "KALARI",
    copy: "The first strike. Hanumankind introduces a cadence sharpened by Kerala roots, Houston rap and Bengaluru’s independent circuit.",
  },
  {
    year: "2021",
    title: "DAMNSON",
    copy: "A raw fan favourite turns the underground momentum up and opens a new chapter with Def Jam Recordings India.",
  },
  {
    year: "2024",
    title: "BIG DAWGS",
    copy: "With producer Kalmi and director Bijoy Shetty, a well-of-death in Ponnani becomes the centre of global hip-hop.",
  },
  {
    year: "NOW",
    title: "MONSOON SEASON",
    copy: "The homegrown storm keeps travelling: heavier live rooms, sharper world stages and a sound that refuses to dilute itself.",
  },
];

const archiveDates = [
  {
    date: "13.09.24",
    city: "BENGALURU",
    venue: "Jayamahal Palace Hotel",
  },
  {
    date: "15.09.24",
    city: "MUMBAI",
    venue: "NESCO Center",
  },
  {
    date: "18.01.26",
    city: "KOCHI",
    venue: "Bolgatty Palace",
  },
  {
    date: "01.02.26",
    city: "BENGALURU",
    venue: "Phoenix Marketcity",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink text-paper">
      <section className="hero relative min-h-[94svh] border-b-2 border-flame">
        <header className="relative z-30 flex items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <a
            href="#top"
            className="font-display text-3xl tracking-[0.06em] text-flame sm:text-4xl"
            aria-label="Hanumankind India concept tour home"
          >
            HMK
          </a>
          <nav
            aria-label="Main navigation"
            className="flex items-center gap-4 font-mono text-[10px] font-bold uppercase tracking-[0.16em] sm:gap-7 sm:text-xs"
          >
            <a className="nav-link" href="#dates">
              Dates
            </a>
            <a className="nav-link hidden sm:inline" href="#story">
              Journey
            </a>
            <a className="nav-link" href="#sound">
              Sound
            </a>
          </nav>
        </header>

        <div id="top" className="hero-art absolute inset-0">
          <img
            src="/hanumankind-banner.png"
            alt="Red and black folk-art portrait of Hanumankind"
            className="h-full w-full object-cover object-center"
          />
          <div className="hero-scrim absolute inset-0" />
          <div className="grain absolute inset-0 opacity-40" />
        </div>

        <div className="relative z-20 flex min-h-[calc(94svh-88px)] flex-col justify-end px-5 pb-7 sm:px-8 sm:pb-10 lg:px-12">
          <div className="mb-auto flex items-center justify-between pt-7 font-mono text-[9px] font-bold uppercase tracking-[0.2em] sm:text-[11px]">
            <span>Kerala ↔ Houston ↔ Bengaluru</span>
            <span className="hidden sm:inline">A fan-made digital concept</span>
          </div>

          <p className="mb-1 font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-flame sm:text-xs">
            Home Run — India / Concept Tour 2026
          </p>
          <h1 className="hero-title font-display uppercase leading-[0.72] tracking-[-0.035em]">
            <span className="block">HANUMAN</span>
            <span className="title-outline block">KIND</span>
          </h1>

          <div className="mt-5 grid gap-5 border-t border-paper/40 pt-4 sm:grid-cols-[1fr_auto] sm:items-end">
            <p className="max-w-xl font-sans text-sm font-medium leading-relaxed text-paper/85 sm:text-base">
              Four cities. One homecoming. A speculative India tour experience
              built around the force, folklore and global motion of Hanumankind.
            </p>
            <div className="flex flex-wrap gap-3">
              <a className="button-primary" href="#dates">
                Explore the route <span aria-hidden="true">↓</span>
              </a>
              <a
                className="button-ghost"
                href="https://open.spotify.com/artist/04qwpdEerjLz4gOn6PT90n"
                target="_blank"
                rel="noreferrer"
              >
                Play on Spotify ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="ticker border-b-2 border-ink bg-flame py-2.5 text-ink">
        <div className="ticker-track font-display text-2xl uppercase tracking-[0.06em] sm:text-3xl">
          Big stepper · home soil · no borders · full volume · Big stepper ·
          home soil · no borders · full volume ·
        </div>
      </div>

      <section id="dates" className="section-shell relative">
        <div className="section-mark" aria-hidden="true">
          01
        </div>
        <div className="mb-10 grid gap-5 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="eyebrow">India Home Run / Concept itinerary</p>
            <h2 className="section-title">
              THE ROUTE
              <span className="text-flame">.</span>
            </h2>
          </div>
          <div className="max-w-xl lg:justify-self-end">
            <p className="body-copy">
              The city sequence is inspired by Hanumankind’s previous India
              shows and homecoming run. These are creative placeholder dates,
              not official announcements.
            </p>
            <a
              className="mt-4 inline-block font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-flame underline decoration-flame/40 underline-offset-4"
              href="https://www.hanumankind.world/"
              target="_blank"
              rel="noreferrer"
            >
              Check official live updates ↗
            </a>
          </div>
        </div>

        <div className="date-stack border-t border-paper/25">
          {conceptDates.map((show, index) => (
            <article
              key={show.city}
              className="date-row group grid grid-cols-[76px_1fr] gap-4 border-b border-paper/25 py-5 sm:grid-cols-[110px_1fr_auto] sm:items-center sm:gap-7"
            >
              <div className="flex items-baseline gap-2">
                <span className="font-display text-6xl leading-none text-flame sm:text-7xl">
                  {show.day}
                </span>
                <span className="font-mono text-[10px] font-bold tracking-[0.2em]">
                  {show.month}
                </span>
              </div>
              <div>
                <p className="font-display text-4xl uppercase tracking-[0.02em] transition-transform duration-300 group-hover:translate-x-2 sm:text-5xl lg:text-6xl">
                  {show.city}
                </p>
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-paper/55 sm:text-[10px]">
                  {show.venue} / {show.note}
                </p>
              </div>
              <div className="col-start-2 flex items-center gap-3 sm:col-auto">
                <span className="rounded-full border border-flame px-3 py-1 font-mono text-[8px] font-bold uppercase tracking-[0.16em] text-flame">
                  Concept stop
                </span>
                <span
                  className="text-2xl text-paper/30 transition-colors group-hover:text-flame"
                  aria-hidden="true"
                >
                  0{index + 1}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="story"
        className="relative border-y-2 border-ink bg-paper text-ink"
      >
        <div className="story-grid section-shell">
          <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-between lg:py-20">
            <div>
              <p className="eyebrow !text-ink/60">From Malappuram to the map</p>
              <h2 className="section-title max-w-2xl !text-ink">
                BUILT FROM
                <br />
                MANY HOMES
                <span className="text-flame">.</span>
              </h2>
            </div>
            <blockquote className="mt-10 max-w-md border-l-4 border-flame pl-5 font-display text-3xl uppercase leading-[0.95] sm:text-4xl">
              Global motion.
              <br />
              Local gravity.
            </blockquote>
          </div>

          <div className="mt-14 border-t-2 border-ink lg:mt-0 lg:border-l-2 lg:border-t-0 lg:pl-10">
            {milestones.map((item) => (
              <article
                key={item.year}
                className="milestone border-b-2 border-ink py-9 sm:py-12"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-mono text-xs font-bold tracking-[0.2em] text-flame">
                    {item.year}
                  </span>
                  <span className="h-3 w-3 rotate-45 bg-flame" />
                </div>
                <h3 className="font-display text-6xl uppercase leading-none sm:text-7xl">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-md font-sans text-base font-medium leading-relaxed text-ink/70">
                  {item.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="sound" className="section-shell relative">
        <div className="section-mark" aria-hidden="true">
          02
        </div>
        <div className="mb-10">
          <p className="eyebrow">Selected frequency</p>
          <h2 className="section-title">
            PRESS PLAY
            <span className="text-flame">.</span>
          </h2>
        </div>

        <div className="sound-grid grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="record-card relative min-h-[520px] overflow-hidden border-2 border-flame bg-flame p-5 text-ink sm:p-8">
            <div className="record-rings" aria-hidden="true" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="flex justify-between font-mono text-[9px] font-bold uppercase tracking-[0.2em]">
                <span>Now playing</span>
                <span>33⅓ RPM</span>
              </div>
              <div>
                <p className="font-display text-[clamp(5rem,13vw,9rem)] uppercase leading-[0.72]">
                  BIG
                  <br />
                  DAWGS
                </p>
                <p className="mt-5 max-w-xs font-mono text-[10px] font-bold uppercase leading-relaxed tracking-[0.14em]">
                  Hanumankind × Kalmi
                  <br />
                  A global breakout, born in Ponnani.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="spotify-frame rotate-embed-left">
              <div className="mb-3 flex items-center justify-between font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-paper/60">
                <span>Artist radio</span>
                <span>01 / HMK</span>
              </div>
              <iframe
                title="Hanumankind artist player on Spotify"
                src="https://open.spotify.com/embed/artist/04qwpdEerjLz4gOn6PT90n?utm_source=generator&theme=0"
                width="100%"
                height="352"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>

            <div className="spotify-frame rotate-embed-right">
              <div className="mb-3 flex items-center justify-between font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-paper/60">
                <span>Breakout single</span>
                <span>02 / Big Dawgs</span>
              </div>
              <iframe
                title="Big Dawgs by Hanumankind and Kalmi on Spotify"
                src="https://open.spotify.com/embed/album/6Yw4204wbgmpsGTzjXBhYD?utm_source=generator&theme=0"
                width="100%"
                height="152"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="archive section-shell border-t-2 border-paper/20">
        <div className="mb-10 grid gap-5 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow">Tour archive / Verified past stops</p>
            <h2 className="section-title">
              BEEN THERE
              <span className="text-flame">.</span>
            </h2>
          </div>
          <p className="body-copy max-w-xl lg:justify-self-end">
            Before the concept route, there was the real road: the 2024
            Bengaluru–Mumbai run and 2026’s two-city Home Run through Kochi and
            Bengaluru.
          </p>
        </div>

        <div className="grid border-l border-t border-paper/25 sm:grid-cols-2 lg:grid-cols-4">
          {archiveDates.map((show) => (
            <article
              key={`${show.date}-${show.city}`}
              className="archive-card min-h-56 border-b border-r border-paper/25 p-5 sm:min-h-64"
            >
              <p className="font-mono text-[10px] font-bold tracking-[0.18em] text-flame">
                {show.date}
              </p>
              <h3 className="mt-16 font-display text-4xl uppercase leading-none sm:text-5xl">
                {show.city}
              </h3>
              <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.12em] text-paper/55">
                {show.venue}
              </p>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t-2 border-ink bg-flame px-5 py-8 text-ink sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="font-display text-[clamp(4.2rem,12vw,11rem)] uppercase leading-[0.72] tracking-[-0.03em]">
              HOME IS
              <br />
              THE WORLD.
            </p>
            <p className="mt-8 max-w-xl font-mono text-[9px] font-bold uppercase leading-relaxed tracking-[0.14em]">
              Independent portfolio concept. Not affiliated with Hanumankind,
              Capitol Records or Def Jam India. Concept dates are not for sale.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-[10px] font-bold uppercase tracking-[0.16em] lg:justify-end">
            <a
              className="footer-link"
              href="https://www.hanumankind.world/"
              target="_blank"
              rel="noreferrer"
            >
              Official site ↗
            </a>
            <a
              className="footer-link"
              href="https://www.instagram.com/hanumankind/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram ↗
            </a>
            <a
              className="footer-link"
              href="https://www.youtube.com/@hanumankind"
              target="_blank"
              rel="noreferrer"
            >
              YouTube ↗
            </a>
            <a
              className="footer-link"
              href="https://indianexpress.com/article/long-reads/hanumankind-kerala-rapper-global-sensation-9496408/"
              target="_blank"
              rel="noreferrer"
            >
              Story source ↗
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
