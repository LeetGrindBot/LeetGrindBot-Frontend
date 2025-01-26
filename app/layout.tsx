import FadeIn from "@/components/animations/FadeIn";
import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LeetGrindBot",
  description: "LeetGrindBot",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark overflow-x-hidden">
      <body className={`${instrumentSans.className} bg-black`}>
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
