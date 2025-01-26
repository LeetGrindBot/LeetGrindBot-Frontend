import Image from "next/image";
import Link from "next/link";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import LogoWithName from "../components/LogoWithName";

export default function Footer() {
  const links = [
    { href: "/", label: "Accueil" },
    { href: "#features", label: "Features" },
    { href: "#avis", label: "Avis" },
    { href: "#faq", label: "FAQ" },
    {
      href: "https://x.com/y2_dev",
      label: <FaXTwitter className="h-5 w-5" />,
      className: "flex items-center gap-1 text-white/70 ml-4 hover:text-white",
    },
    {
      href: "https://discord.gg/y2-empire",
      label: <FaDiscord className="h-5 w-5" />,
      className: "flex items-center gap-1 text-white/70 hover:text-white",
    },
  ];

  return (
    <footer className="border-t border-white/10 bg-black/10 pb-12 pt-4 md:mt-32">
      <div className="flex flex-col items-center justify-between sm:flex-row">
        <LogoWithName />
        <div>
          <div className="mt-12 flex flex-wrap items-center gap-4 text-sm text-white/70 md:text-base">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={link.className || "hover:text-white"}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <span className="mt-4 flex items-center justify-end gap-1 text-nowrap">
            Made by{" "}
            <Link
              href="https://x.com/y2_dev"
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
        </div>
      </div>
    </footer>
  );
}
