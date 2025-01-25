import { BellRing, Crown, Handshake, SwordsIcon } from "lucide-react";
import Image from "next/image";
import { BentoCard, BentoGrid } from "../../components/ui/bento-grid";
import AnimatedListDemo from "../components/AnimatedListDemo";

export default function HowItWork() {
  const cards = [
    {
      name: "Daily Challenge",
      className: "col-span-3 md:col-span-1",
      Icon: SwordsIcon,
      description:
        "Reçois un défi LeetCode quotidien adapté à ton niveau et à tes objectifs",
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
      name: "Routine quotidienne",
      className: "col-span-3 md:col-span-2",
      Icon: BellRing,
      description:
        "Un défi LeetCode chaque jour pour progresser et rester constant.",
      href: "https://discord.gg/y2-empire",
      cta: "Découvrir",
      background: (
        <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
      ),
    },
    {
      name: "Communauté soudée",
      className: "col-span-3 md:col-span-2",
      Icon: Handshake,
      description:
        " Une communauté engagée pour vous encourager, vous guider et vous pousser à donner le meilleur de vous-même",
      href: "https://discord.gg/y2-empire",
      cta: "Rejoindre",
      background: (
        <>
          <Image
            src="/images/conv.png"
            alt="Results"
            width={3000}
            height={3000}
            className="absolute inset-0 hidden h-full w-full object-cover opacity-80 sm:block md:w-[200%]"
          />
          <Image
            src="/images/conv_mobile.png"
            alt="Results"
            width={1000}
            height={1000}
            className="absolute inset-0 top-4 object-cover opacity-90 sm:hidden"
          />
        </>
      ),
    },
    {
      name: "Résultats concrets",
      className: "col-span-3 md:col-span-1",
      Icon: Crown,
      description:
        "Prépare-toi efficacement aux entretiens techniques grâce à une méthode structurée.",
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
    <div className="mx-auto my-44 max-w-5xl" id="features">
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
    </div>
  );
}
