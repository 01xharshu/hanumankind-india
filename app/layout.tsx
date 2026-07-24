import type { Metadata } from "next";
import { Bebas_Neue, IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["500", "700"],
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
    <html lang="en">
      <body
        className={`${bebas.variable} ${spaceGrotesk.variable} ${plexMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
