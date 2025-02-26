"use client";

import FadeUp from "@/components/animations/FadeUp";
import { StandaloneShineButton } from "@/components/ui/StandaloneShineButton";
import { Swords } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-14 md:pt-28">
      <FadeUp delay={1.5}>
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
      </FadeUp>
      <div className="mt-8 flex flex-col items-center space-y-8">
        <FadeUp delay={1.8}>
          <h1 className="text-center text-4xl font-bold tracking-tighter sm:text-6xl">
            Un défi LeetCode par jour. <br /> Une communauté pour te pousser
          </h1>
        </FadeUp>

        <div className="flex justify-center">
          <FadeUp delay={2}>
            <p className="text-md mx-auto max-w-xl text-center text-gray-300 md:text-xl">
              Libère ton potentiel avec l’énergie d’une communauté soudée qui te
              guide vers la réussite.
            </p>
          </FadeUp>
        </div>
        <div className="flex justify-center gap-2">
          <FadeUp delay={2.2}>
            <Image
              src="/images/gutsRage.png"
              alt="Guts Rage"
              width={100}
              height={100}
              className="inline-block size-5"
            />
          </FadeUp>
          <FadeUp delay={2.4}>
            <span className="text-white/70">
              +900 développeurs déjà motivés !
            </span>
          </FadeUp>
        </div>

        <FadeUp delay={2.6}>
          <Link href="https://discord.gg/kfHVdXhqe3" target="_blank">
            <StandaloneShineButton
              className=""
              icon={<Swords className="size-5" />}
            >
              Résous ton premier challenge
            </StandaloneShineButton>
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
