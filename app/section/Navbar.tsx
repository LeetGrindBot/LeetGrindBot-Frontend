"use client";

import Link from "next/link";
import { FaDiscord } from "react-icons/fa";
import LogoWithName from "../components/LogoWithName";
import { StandaloneShineButton } from "../components/ui/StandaloneShineButton";

const navLinks = [
  { href: "#acceuil", label: "Accueil" },
  { href: "#features", label: "Features" },
  { href: "#testimonials", label: "Avis" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  return (
    <nav className="mt-4 w-full rounded-full border border-white/10 px-6 py-4 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <LogoWithName />

        {/* Desktop menu */}
        <div className="mx-4 hidden flex-1 items-center justify-center gap-12 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="cursor-pointer text-gray-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Contact button (desktop) */}
        <div className="hidden justify-end md:flex">
          <Link href="https://discord.gg/y2-empire" target="_blank">
            <StandaloneShineButton
              className="rounded-full px-4 py-2 text-sm md:px-6 md:py-3 md:text-lg"
              icon={<FaDiscord className="size-5" />}
            >
              Accéder à LeetGrindBot
            </StandaloneShineButton>
          </Link>
        </div>
      </div>
    </nav>
  );
}
