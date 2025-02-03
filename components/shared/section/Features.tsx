import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import Title from "@/components/ui/Title";
import { BellRing, Crown, Handshake, SwordsIcon } from "lucide-react";
import Image from "next/image";
import AnimatedListDemo from "../AnimatedListDemo";

export default function Features() {
  const cards = [
    {
      name: "Le défi qui change tout",
      description:
        "Reçois chaque jour un défi LeetCode et progresse vers l’excellence.",
      className: "col-span-3 md:col-span-1",
      Icon: SwordsIcon,
      href: "https://discord.gg/y2-empire",
      cta: "Commencer maintenant",
      background: (
        <Image
          src="https://i.giphy.com/5v59gtT8AJmjxEk3SU.webp"
          alt="Results"
          width={3000}
          height={3000}
          className="absolute inset-0 h-full w-full rounded-3xl object-cover p-4 opacity-60"
        />
      ),
    },
    {
      name: "Une routine pour rester constant",
      description:
        "Un défi LeetCode chaque jour pour progresser et rester constant.",
      className: "col-span-3 md:col-span-2",
      Icon: BellRing,
      href: "https://discord.gg/y2-empire",
      cta: "Découvrir",
      background: (
        <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
      ),
    },
    {
      name: "Une communauté soudée à tes côtés",
      description: "Rejoins une communauté bienveillante prête à t'élever.",
      className: "col-span-3 md:col-span-2",
      Icon: Handshake,
      href: "https://discord.gg/y2-empire",
      cta: "Rejoindre",
      background: (
        <>
          <Image
            src="/images/conv.png"
            alt="Results"
            width={1000}
            height={1000}
            className="absolute inset-0 -top-6 hidden h-full w-full object-cover opacity-80 sm:block md:w-[200%]"
          />
          <Image
            src="/images/conv_mobile.png"
            alt="Results"
            width={1000}
            height={1000}
            className="absolute inset-0 object-cover opacity-90 sm:hidden"
          />
        </>
      ),
    },
    {
      name: "Décroche tes rêves et bâtis ton avenir",
      description:
        "Un chemin structuré vers le succès technique, inspiré des plus grandes entreprises",
      className: "col-span-3 md:col-span-1",
      Icon: Crown,
      href: "https://discord.gg/y2-empire",
      cta: "En savoir plus",
      background: (
        <Image
          src="/images/leetgrind_arc.jpg"
          alt="Results"
          width={500}
          height={500}
          className="absolute inset-0 h-1/2 w-full object-cover opacity-80 transition-all duration-300 ease-in-out hover:opacity-70"
        />
      ),
    },
  ];

  return (
    <section className="mx-auto mt-20 max-w-5xl md:mt-48" id="features">
      <Title
        smallText="L’énergie d’une communauté"
        title="Des défis, du soutien, des résultats concrets."
        className="py-16"
      />
      <BentoGrid>
        {cards.map((card, index) => (
          <BentoCard
            key={index}
            name={card.name}
            className={card.className}
            background={card.background}
            Icon={card.Icon}
            description={card.description}
            href={card.href}
            cta={card.cta}
          />
        ))}
      </BentoGrid>
    </section>
  );
}
