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
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark overflow-x-hidden md:mx-0">
      <body className={`${instrumentSans.className} bg-black`}>
        <Image
          src="/vector-right.png"
          alt="logo"
          height={1200}
          width={1200}
          className="absolute -top-72 -z-50 h-[1000px] object-cover md:-right-36 md:h-[1400px]"
        />
        {children}
      </body>
    </html>
  );
}
