"use client";
import { motion } from "motion/react";
import Image from "next/image";
import React from "react";
import amazonLogo from "../../public/images/brands/amazon.png";
import appleLogo from "../../public/images/brands/apple.png";
import googleLogo from "../../public/images/brands/google.png";
import metaLogo from "../../public/images/brands/meta.png";
import microsoftLogo from "../../public/images/brands/microsoft.png";
import netflixLogo from "../../public/images/brands/netflix.png";

const CompanyLogoData = [
  { src: googleLogo, alt: "Google Logo" },
  { src: amazonLogo, alt: "Amazon Logo" },
  { src: metaLogo, alt: "Meta Logo" },
  { src: appleLogo, alt: "Apple Logo" },
  { src: netflixLogo, alt: "Netflix Logo" },
  { src: microsoftLogo, alt: "Microsoft Logo" },
];

const InfiniteScrollingLogosAnimation = () => {
  return (
    <div className="container mt-10 p-5 md:mt-16">
      <h2 className="my-10 text-center text-xs text-white/70 md:my-16 md:text-base">
        Les géants tech font confiance à LeetCode. Avec notre bot, c’est à ton
        tour de briller.
      </h2>
      <div className="relative flex overflow-hidden md:before:absolute md:before:left-0 md:before:top-0 md:before:z-10 md:before:h-full md:before:w-10 md:before:bg-gradient-to-r md:before:from-zinc-950 md:before:to-transparent md:before:content-[''] md:after:absolute md:after:right-0 md:after:top-0 md:after:h-full md:after:w-10 md:after:bg-gradient-to-l md:after:from-zinc-950 md:after:to-transparent md:after:content-['']">
        <motion.div
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          initial={{ translateX: 0 }}
          animate={{ translateX: "-50%" }}
          className="flex flex-none gap-24 pr-24 md:gap-36 md:pr-36"
        >
          {[...new Array(2)].fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {CompanyLogoData.map(({ src, alt }) => (
                <Image
                  key={alt}
                  src={src}
                  alt={alt}
                  className="h-5 w-auto flex-none opacity-70 md:h-6"
                />
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default InfiniteScrollingLogosAnimation;
