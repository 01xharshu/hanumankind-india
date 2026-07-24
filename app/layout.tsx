import type { Metadata } from "next";
import {
  Anton,
  IBM_Plex_Mono,
  Instrument_Serif,
  Space_Grotesk,
} from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export async function generateMetadata(): Promise<Metadata> {
  const incomingHeaders = await headers();
  const host =
    incomingHeaders.get("x-forwarded-host") ??
    incomingHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    incomingHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const socialImage = new URL("/og.png", origin).toString();

  return {
    metadataBase: new URL(origin),
    title: "Hanumankind — India Home Run Concept Tour",
    description:
      "A fan-made India tour landing page concept inspired by Hanumankind’s homegrown, world-moving sound.",
    keywords: [
      "Hanumankind",
      "India tour",
      "Indian hip-hop",
      "Big Dawgs",
      "concept website",
    ],
    openGraph: {
      title: "Hanumankind — India Home Run",
      description:
        "Kerala ↔ Houston ↔ Bengaluru. A fan-made India tour experience.",
      type: "website",
      images: [
        {
          url: socialImage,
          width: 1731,
          height: 909,
          alt: "Hanumankind India Home Run concept tour",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Hanumankind — India Home Run",
      description: "A fan-made India tour landing page concept.",
      images: [socialImage],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-palette="heat" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{document.documentElement.dataset.palette=localStorage.getItem('hmk-palette')==='mono'?'mono':'heat'}catch(e){}",
          }}
        />
      </head>
      <body
        className={`${anton.variable} ${spaceGrotesk.variable} ${plexMono.variable} ${instrumentSerif.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
