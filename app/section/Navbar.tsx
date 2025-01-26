"use client";

import FadeDown from "@/components/animations/FadeDown";
import { StandaloneShineButton } from "@/components/ui/StandaloneShineButton";
import { useState } from "react";
import { FaDiscord } from "react-icons/fa";
import LogoWithName from "../components/LogoWithName";

interface HeaderItem {
  name: string;
  id: string;
}

const headerList: HeaderItem[] = [
  { name: "Accueil", id: "/" },
  { name: "Features", id: "features" },
  { name: "Avis", id: "avis" },
  { name: "FAQ", id: "faq" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isBurgerActive, setIsBurgerActive] = useState<boolean>(false);

  const toggleBurger = () => {
    setIsBurgerActive(!isBurgerActive);
  };

  return (
    <FadeDown delay={1.2}>
      <div className="relative" id="header">
        <div className="mt-4 flex items-center justify-between rounded-full border border-white/10 px-6 py-4 backdrop-blur-sm lg:mx-7">
          <LogoWithName />
          <div className="hidden items-center gap-20 lg:flex">
            <div className="flex flex-row gap-10 font-normal">
              {headerList.map((item) => (
                <a
                  href={`#${item.id}`}
                  key={item.id}
                  className="cursor-pointer text-white/80 transition-all hover:text-gray-300"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <StandaloneShineButton
              className="rounded-full px-6 py-3 text-lg"
              icon={<FaDiscord className="size-5" />}
            >
              Accéder à LeetGrindBot
            </StandaloneShineButton>{" "}
          </div>
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
                toggleBurger();
              }}
              className="absolute right-2 flex size-20 items-center justify-center"
              aria-label="Burger menu"
            >
              <div className="relative w-full">
                <div
                  className={`duration- absolute left-1/2 h-[1px] w-[35%] -translate-x-1/2 transform bg-white transition-all duration-500 ${
                    isBurgerActive ? "top-0 rotate-45" : "-top-1.5"
                  }`}
                ></div>
                <div
                  className={`duration- absolute left-1/2 h-[1px] w-[35%] -translate-x-1/2 transform bg-white transition-all duration-500 ${
                    isBurgerActive ? "top-0 -rotate-45" : "top-1.5"
                  }`}
                ></div>
              </div>
            </button>
          </div>
        </div>
        <div
          className={`top-18 fixed right-0 z-50 h-screen w-full rounded-tl-2xl text-2xl text-white backdrop-blur-xl backdrop-brightness-50 transition-transform duration-500 ease-in-out lg:hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end p-4"></div>
          <ul className="mx-8 flex flex-col items-center justify-center gap-8 text-center font-normal">
            {headerList.map((item) => (
              <li key={item.id} className="mt-4 w-full">
                <a
                  href={`#${item.id}`}
                  onClick={() => {
                    setIsMenuOpen(!isMenuOpen);
                    toggleBurger();
                  }}
                  className="cursor-pointer transition-all"
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li className="w-full">
              <StandaloneShineButton
                className="rounded-full px-6 py-3 text-lg"
                icon={<FaDiscord className="size-5" />}
              >
                Accéder à LeetGrindBot
              </StandaloneShineButton>
            </li>
          </ul>
        </div>
      </div>
    </FadeDown>
  );
}
