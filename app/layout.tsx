import FadeIn from "@/components/animations/FadeIn";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://leetgrindbot.com"),
  title:
    "LeetGrindBot - Un défi LeetCode par jour. Une communauté pour te pousser",
  description:
    "Libère ton potentiel avec l’énergie d’une communauté soudée qui te guide vers la réussite.",
  icons: {
    icon: "/favicon.ico",
  },
  authors: [
    {
      name: "y2",
      url: "https://x.com/y2_dev",
    },
  ],
  openGraph: {
    title:
      "LeetGrindBot - Un défi LeetCode par jour. Une communauté pour te pousser",
    description:
      "Libère ton potentiel avec l’énergie d’une communauté soudée qui te guide vers la réussite.",
    url: "https://leetgrindbot.com",
    siteName: "LeetGrindBot",
    images: "/images/metadata.png",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@y2_dev",
    images: "/images/metadata.png",
    title:
      "LeetGrindBot - Un défi LeetCode par jour. Une communauté pour te pousser",
    description:
      "Libère ton potentiel avec l’énergie d’une communauté soudée qui te guide vers la réussite.",
  },

  keywords: [
    "LeetCode",
    "LeetGrindBot",
    "LeetGrind",
    "LeetCode Bot",
    "LeetCode Challenge",
    "y2",
    "y2dev",
    "y2-dev",
    "y2 dev",
    "y2 empire",
    "y2-empire",
    "y2 empire dev discord",
    "y2 empire discord",
    "grind",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark overflow-x-hidden">
      <body className={`${instrumentSans.className} bg-black`}>
        <Analytics />

        <FadeIn delay={0}>
          <Image
            src="/images/vector-left.png"
            alt="logo"
            height={600}
            width={600}
            className="absolute -top-10 left-0 -z-50"
          />
        </FadeIn>

        <FadeIn delay={0.7}>
          <Image
            src="/images/vector-right.png"
            alt="logo"
            height={1200}
            width={1200}
            className="absolute -top-72 -z-50 h-[1000px] object-cover md:-right-36 md:h-[1400px]"
          />
        </FadeIn>

        {children}
      </body>
    </html>
  );
}
