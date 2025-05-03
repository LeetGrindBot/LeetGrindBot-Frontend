import FadeOnScroll from "@/components/animations/FadeOnScroll";
import LogoWithName from "@/components/shared/LogoWithName";
import Image from "next/image";
import Link from "next/link";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const links = [
    { href: "/", label: "Accueil" },
    { href: "#features", label: "Features" },
    { href: "#avis", label: "Avis" },
    { href: "#faq", label: "FAQ" },
    {
      href: "https://x.com/y2_dev",
      label: (
        <>
          <FaXTwitter className="h-5 w-5" />
          <span className="sr-only">Twitter</span>
        </>
      ),
      className: "flex items-center gap-1 text-white/70 ml-4 hover:text-white",
      target: "_blank",
    },
    {
      href: "https://github.com/LeetGrindBot",
      label: (
        <>
          <FaGithub className="h-5 w-5" />
          <span className="sr-only">Github</span>
        </>
      ),
      className: "flex items-center gap-1 text-white/70 hover:text-white",
      target: "_blank",
    },

    {
      href: "https://discord.gg/kfHVdXhqe3",
      label: (
        <>
          <FaDiscord className="h-5 w-5" />
          <span className="sr-only">Discord</span>
        </>
      ),
      className: "flex items-center gap-1 text-white/70 hover:text-white",
      target: "_blank",
    },
  ];

  return (
    <footer className="border-t border-white/10 bg-black/10 pb-12 pt-4 md:mt-32">
      <div className="flex flex-col items-center justify-between sm:flex-row">
        <FadeOnScroll delay={0.2}>
          <LogoWithName />
        </FadeOnScroll>
        <div>
          <div className="mt-12 flex flex-wrap items-center gap-4 text-sm text-white/70 md:text-base">
            {links.map((link, index) => (
              <FadeOnScroll key={index} delay={index * 0.1}>
                <Link
                  key={index}
                  href={link.href}
                  target={link.target}
                  className={link.className || "hover:text-white"}
                >
                  {link.label}
                </Link>
              </FadeOnScroll>
            ))}
          </div>
          <FadeOnScroll delay={0.6}>
            <span className="mt-4 flex items-center justify-end gap-1 text-nowrap text-white/70">
              Made by{" "}
              <Link
                href="https://x.com/y2_dev"
                target="_blank"
                className="flex items-center gap-1 text-white"
              >
                y2{" "}
                <Image
                  src="/images/bat_emoji.png"
                  alt="bat emoji"
                  width={20}
                  height={20}
                />
              </Link>
            </span>
          </FadeOnScroll>
        </div>
      </div>
    </footer>
  );
}
