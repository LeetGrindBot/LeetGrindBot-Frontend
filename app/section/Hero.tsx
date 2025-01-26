"use client";

import { Swords } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { StandaloneShineButton } from "../../components/ui/StandaloneShineButton";

export default function Hero() {
  return (
    <section className="pt-14 md:pt-28">
      <div className="flex items-center justify-center">
        <div className="inline-flex items-center rounded-full border border-white/40 px-4 py-2 transition-colors duration-300 hover:bg-white/10 max-sm:flex-col sm:gap-3">
          <span className="bg-[linear-gradient(to_right,#19FB9B,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] bg-clip-text text-xs text-transparent sm:text-sm">
            Si tu rêves de réussir tes entretiens tech...
          </span>
          <a
            href="#features"
            className="inline-flex items-center gap-1 text-sm"
          >
            Découvrir le bot
          </a>
        </div>
      </div>
      <div className="mt-8 flex flex-col items-center space-y-8">
        <h1 className="text-center text-4xl font-bold tracking-tighter sm:text-6xl">
          Un défi LeetCode par jour. <br /> Une communauté pour te pousser
        </h1>
        <div className="flex justify-center">
          <p className="text-md mx-auto max-w-xl text-center text-gray-300 md:text-xl">
            Libère ton potentiel avec l’énergie d’une communauté soudée qui te
            guide vers la réussite.
          </p>
        </div>
        <div className="flex justify-center gap-2">
          <Image
            src="/images/gutsRage.png"
            alt="Guts Rage"
            width={100}
            height={100}
            className="inline-block size-5"
          />
          <span className="text-white/70">
            +900 développeurs déjà motivés !
          </span>
        </div>

        <div>
          <Link href="https://discord.gg/y2-empire" target="_blank">
            <StandaloneShineButton
              className=""
              icon={<Swords className="size-5" />}
            >
              Résous ton premier challenge
            </StandaloneShineButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
