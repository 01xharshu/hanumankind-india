import Image from "next/image";
import siteData from "../data/site.json";
import { HeroNameCycle } from "./HeroNameCycle";
import { MotionController } from "./MotionController";
import { TourTransmission } from "./TourTransmission";
import { ThemeToggleLogo } from "./ThemeToggleLogo";

const {
  conceptDates,
  milestones,
  archiveDates,
  artistStats,
  officialRelease,
  officialServices,
  officialChannels,
} = siteData;

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink text-paper">
      <MotionController />
      <section
        id="top"
        className="hero relative min-h-[94svh] border-b-2 border-flame"
      >
        <header className="site-header relative z-30 flex items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <div className="brand-cluster flex items-center">
            <ThemeToggleLogo />
          </div>
          <nav
            aria-label="Main navigation"
            className="flex items-center gap-4 font-mono text-[11px] font-bold uppercase tracking-[0.12em] sm:gap-7 sm:text-xs"
          >
            <a className="nav-link" href="#dates">
              Dates
            </a>
            <a className="nav-link" href="#sound">
              Sound
            </a>
            <a className="nav-link hidden md:inline" href="#story">
              Journey
            </a>
            <a className="nav-link hidden lg:inline" href="#official">
              Official
            </a>
          </nav>
        </header>

        <div className="hero-art absolute inset-0">
          <Image
            src="/hanumankind-banner.png"
            alt="Monochrome folk-art portrait of Hanumankind"
            fill
            priority
            sizes="100vw"
            className="h-full w-full object-cover object-center"
          />
          <div className="hero-scrim absolute inset-0" />
          <div className="grain absolute inset-0 opacity-40" />
        </div>

        <div className="relative z-20 flex min-h-[calc(94svh-88px)] flex-col justify-end px-5 pb-7 sm:px-8 sm:pb-10 lg:px-12">
          <div className="mb-auto flex items-center justify-between pt-7 font-mono text-[9px] font-bold uppercase tracking-[0.2em] sm:text-[11px]">
            <span>Kerala ↔ Houston ↔ Bengaluru</span>
            <span className="hidden sm:inline"></span>
          </div>

          <p
            className="hero-kicker mb-1 font-mono text-[18px] font-bold uppercase tracking-[0.28em] sm:text-xs"
            data-reveal="slide"
          >
            India Tour 2026
          </p>
          <HeroNameCycle />

          <div
            className="mt-5 grid gap-5 border-t border-paper/40 pt-4 sm:grid-cols-[1fr_auto] sm:items-end"
            data-reveal="fade"
            data-reveal-delay="160"
          >
            <p className="hero-deck max-w-xl text-paper/90">
              four cities. one homecoming. one of a kind.
            </p>
            <div className="flex flex-wrap gap-3">
              <a className="button-primary" href="#dates">
                Explore the route <span aria-hidden="true">↓</span>
              </a>
              <a
                className="button-ghost"
                href="https://open.spotify.com/artist/4nVa6XlBFlIkF6msW57PHp"
                target="_blank"
                rel="noreferrer"
              >
                Play on Spotify ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="artist-stats" aria-label="Hanumankind at a glance">
        {artistStats.map((stat, index) => (
          <article
            className="artist-stat"
            key={stat.label}
            data-reveal="pop"
            data-reveal-delay={index * 55}
          >
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </section>

      <section id="dates" className="route-section section-shell relative">
        <div className="section-mark" aria-hidden="true">
          01
        </div>
        <div className="mb-10 grid gap-5 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div className="chapter-heading" data-reveal="clip">
            <p className="eyebrow">India Home Run / Concept itinerary</p>
            <h2 className="section-title">
              THE ROUTE
              <span className="text-flame">.</span>
            </h2>
            <span className="paste-label">4 nights / 4 cities / 1 pulse</span>
          </div>
          <div
            className="max-w-xl lg:justify-self-end"
            data-reveal="fade"
            data-reveal-delay="100"
          >
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

        <TourTransmission shows={conceptDates} />
      </section>

      <section id="sound" className="sound-section section-shell relative">
        <div className="section-mark" aria-hidden="true">
          02
        </div>
        <div className="chapter-heading mb-10" data-reveal="clip">
          <p className="eyebrow">Selected frequency</p>
          <h2 className="section-title">
            PRESS PLAY
            <span className="text-flame">.</span>
          </h2>
          <span className="paste-label paste-label-light">
            Turn it up until the room moves
          </span>
        </div>

        <div className="sound-grid grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div
            className="record-card relative min-h-[520px] overflow-hidden border-2 border-flame bg-flame p-5 text-ink sm:p-8"
            data-reveal="pop"
          >
            <div className="record-rings" aria-hidden="true" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="flex justify-between font-mono text-[9px] font-bold uppercase tracking-[0.2em]">
                <span>Now playing</span>
                <span>33⅓ RPM</span>
              </div>
              <div className="audio-visualizer" aria-hidden="true">
                {Array.from({ length: 18 }).map((_, index) => (
                  <i key={index} />
                ))}
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

          <div className="spotify-stack flex flex-col gap-5">
            <div
              className="spotify-frame rotate-embed-left"
              data-reveal="fade"
              data-reveal-delay="70"
            >
              <div className="mb-3 flex items-center justify-between font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-paper/60">
                <span>Artist radio</span>
                <span>01 / HMK</span>
              </div>
              <iframe
                title="Hanumankind artist player on Spotify"
                src="https://open.spotify.com/embed/artist/4nVa6XlBFlIkF6msW57PHp?utm_source=generator&theme=0"
                width="100%"
                height="352"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>

            <div
              className="spotify-frame rotate-embed-right"
              data-reveal="fade"
              data-reveal-delay="140"
            >
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

      <section
        id="story"
        className="relative border-y-2 border-ink bg-paper text-ink"
      >
        <div className="story-grid section-shell">
          <div className="journey-lead lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-between lg:py-20">
            <div data-reveal="clip">
              <p className="eyebrow !text-ink/60">From Malappuram to the map</p>
              <h2 className="section-title max-w-2xl !text-ink">
                BUILT FROM
                <br />
                MANY HOMES
                <span className="text-flame">.</span>
              </h2>
              <p className="editorial-note">No fixed address for the sound.</p>
            </div>
            <blockquote
              className="mt-10 max-w-md border-l-4 border-flame pl-5 font-display text-3xl uppercase leading-[0.95] sm:text-4xl"
              data-reveal="pop"
            >
              Global motion.
              <br />
              Local gravity.
            </blockquote>
          </div>

          <div className="story-timeline mt-14 border-t-2 border-ink lg:mt-0 lg:border-l-2 lg:border-t-0 lg:pl-10">
            {milestones.map((item, index) => (
              <article
                key={item.year}
                className="milestone border-b-2 border-ink py-9 sm:py-12"
                data-reveal="slide"
                data-reveal-delay={index * 45}
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

      <section
        id="official"
        className="official-transmission border-b-2 border-paper/20"
      >
        <div className="official-composition section-shell relative">
          <div className="section-mark" aria-hidden="true">
            03
          </div>
          <div className="mb-10 grid gap-5 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div className="chapter-heading" data-reveal="clip">
              <p className="eyebrow">Pulled from hanumankind.world</p>
              <h2 className="section-title">
                OFFICIAL
                <br />
                TRANSMISSION
                <span className="text-flame">.</span>
              </h2>
            </div>
            <p
              className="body-copy max-w-xl lg:justify-self-end"
              data-reveal="fade"
              data-reveal-delay="90"
            >
              The verified signal inside this fan-made concept: the current
              release, every track, official listening routes, live alerts and
              the artist’s own channels.
            </p>
          </div>

          <div className="official-release-grid">
            <article
              className="official-album-poster"
              data-reveal="pop"
              data-reveal-delay="40"
            >
              <div className="official-artwork-wrap">
                <Image
                  src="/monsoon-season-artwork.jpg"
                  alt="Official Monsoon Season album artwork"
                  fill
                  sizes="(max-width: 1023px) 100vw, 46vw"
                  className="official-album-art"
                />
                <div className="official-poster-top">
                  <span>Latest project</span>
                  <span>{officialRelease.date}</span>
                </div>
              </div>
              <div className="official-poster-copy">
                <p>{officialRelease.duration}</p>
                <h3>{officialRelease.title}</h3>
                <p className="official-release-copy">{officialRelease.copy}</p>
                <a
                  className="official-action"
                  href={officialRelease.listenUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Listen everywhere ↗
                </a>
              </div>
            </article>

            <div
              className="official-tracklist"
              data-reveal="slide-right"
              data-reveal-delay="100"
            >
              <div className="official-module-heading">
                <span>MS / 001</span>
                <strong>Complete tracklist</strong>
              </div>
              <ol>
                {officialRelease.tracks.map((track) => (
                  <li key={track.number}>
                    <span>{track.number}</span>
                    <strong>{track.title}</strong>
                    <small>{track.credit}</small>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="official-link-rail" data-reveal="fade">
            <div className="official-rail-label">
              <span>Listen</span>
              <strong>Pick a frequency</strong>
            </div>
            <div className="official-link-grid">
              {officialServices.map((service) => (
                <a
                  key={service.label}
                  href={service.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {service.label}
                  <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>

          <div className="official-info-row">
            <article className="official-live-note" data-reveal="slide">
              <p className="eyebrow">Official live status</p>
              <span className="official-status">
                <i aria-hidden="true" />
                No official shows currently listed
              </span>
              <p>
                The India route above is a visual concept. Use the artist’s
                alert desk for the next real announcement.
              </p>
              <a
                className="official-text-link"
                href="https://www.bandsintown.com/a/15373281?affil_code=umg_us&app_id=umg_capitol_hanumankind&came_from=267&trigger=track"
                target="_blank"
                rel="noreferrer"
              >
                RSVP for live alerts ↗
              </a>
            </article>

            <nav
              className="official-channel-list"
              aria-label="Hanumankind official channels"
              data-reveal="slide-right"
            >
              <p className="eyebrow">Official channels</p>
              <div>
                {officialChannels.map((channel, index) => (
                  <a
                    key={channel.label}
                    href={channel.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{channel.label}</strong>
                    <i aria-hidden="true">↗</i>
                  </a>
                ))}
              </div>
            </nav>

            <article
              className="official-signup-note"
              data-reveal="pop"
            >
              <p className="eyebrow">Stay on the wire</p>
              <strong>Music and tour news, straight from the source.</strong>
              <a
                className="official-text-link"
                href="https://www.hanumankind.world/#signup"
                target="_blank"
                rel="noreferrer"
              >
                Join the official list ↗
              </a>
            </article>
          </div>
        </div>
      </section>

      <section
        id="archive"
        className="archive section-shell border-t-2 border-paper/20"
      >
        <div className="mb-10 grid gap-5 lg:grid-cols-2 lg:items-end">
          <div className="chapter-heading" data-reveal="clip">
            <p className="eyebrow">Tour archive / Verified past stops</p>
            <h2 className="section-title">
              BEEN THERE
              <span className="text-flame">.</span>
            </h2>
          </div>
          <p
            className="body-copy max-w-xl lg:justify-self-end"
            data-reveal="fade"
          >
            Before the concept route, there was the real road: the 2024
            Bengaluru–Mumbai run and 2026’s two-city Home Run through Kochi and
            Bengaluru.
          </p>
        </div>

        <div className="archive-grid">
          {archiveDates.map((show, index) => (
            <article
              key={`${show.date}-${show.city}`}
              className="archive-card min-h-56 border-b border-r border-paper/25 p-5 sm:min-h-64"
              data-reveal="pop"
              data-reveal-delay={index * 55}
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

      <section
        className="footer-artwork relative min-h-[62svh] overflow-hidden border-t-2 border-flame"
        aria-label="Hanumankind India Home Run closing artwork"
      >
        <Image
          src="/9226c519-3738-4d51-af5c-e8622b297930.png"
          alt="Monochrome folk-print silhouette surrounded by leaves, stars, a moon and hand-drawn motifs"
          fill
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="footer-artwork-scrim absolute inset-0" />
        <div className="relative z-10 flex min-h-[62svh] flex-col justify-between px-5 py-6 sm:px-8 sm:py-8 lg:px-12">
          <div className="flex items-center justify-between font-mono text-[9px] font-bold uppercase tracking-[0.2em]">
            <span className="bg-ink px-3 py-2 text-paper">
              End of the route / Start of the noise
            </span>
            <span className="hidden bg-ink px-3 py-2 text-paper sm:inline">
              Kerala ↔ Everywhere
            </span>
          </div>
          <div className="footer-artwork-bottom">
            <h2
              className="footer-image-title font-display uppercase leading-[0.72] tracking-[-0.03em]"
              data-reveal="clip"
            >
              HOME IS
              <br />
              THE WORLD.
            </h2>
            <div
              className="footer-visualizer"
              aria-hidden="true"
              data-reveal="fade"
            >
              {Array.from({ length: 28 }).map((_, index) => (
                <i key={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t-2 border-ink bg-flame px-5 py-8 text-ink sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="font-display text-5xl uppercase leading-[0.8] tracking-[-0.02em] sm:text-6xl">
              HANUMANKIND / INDIA HOME RUN
            </p>
            <p className="mt-8 max-w-xl font-mono text-[10px] font-bold uppercase leading-relaxed tracking-[0.12em]">
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
        <div className="footer-credit">
          <span>
            Made with{" "}
            <i className="footer-credit-heart" aria-hidden="true">
              ♥
            </i>{" "}
            by
          </span>
          <a
            href="https://heyaharshu.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            Harsh ↗
          </a>
        </div>
      </footer>
    </main>
  );
}
