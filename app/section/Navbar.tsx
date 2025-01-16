"use client";

import LogoWithName from "../components/LogoWithName";

const navLinks = [
  { href: "#acceuil", label: "Accueil" },
  { href: "#features", label: "Features" },
  { href: "#testimonials", label: "Avis" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  return (
    <nav className="mt-4 w-full rounded-full border border-white/10 px-8 py-4 backdrop-blur-sm">
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
          <a
            href="#contact"
            className="cursor-pointer text-gray-100 transition-colors hover:text-white"
          >
            Accéder à LeetGrindBot
          </a>
        </div>
      </div>
    </nav>
  );
}
