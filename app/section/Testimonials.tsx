import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Title from "../components/Title";

const reviews = [
  {
    name: "Darleanow",
    username: "@drlnasm_",
    body: "LeetGrindBot est le meilleur bot pour se motiver à faire du leetcode. C'est un processus de gamification incroyable !",
    img: "/images/testimonials/darleanow.png",
  },
  {
    name: "Théo TRUVELOT",
    username: "@theotruvelot",
    body: "Le bot m’a permis de grind un maximum les leetcode. Avec le principe communautaire, on peut que être motivé.",
    img: "/images/testimonials/theo.png",
  },
  {
    name: "Spidey",
    username: "@spideystreet",
    body: "Grâce à LeetGrindBot, je suis de plus en plus à l’aise et confiant à l’approche d’entretiens techniques.",
    img: "/images/testimonials/spidey.jpg",
  },
  {
    name: "Ito Windsor",
    username: "@ItoWindsor",
    body: "LeetGrind est idéal pour créer une habitude et progresser en data structures etalgorithmes. Avec un classement et une communauté soudée, c’est un incontournable !",
    img: "/images/testimonials/itowindsor.jpg",
  },
  {
    name: "yass",
    username: "@yass_mdev",
    body: "LeetGrindBot renforce la motivation pour grind leetcode grâce à l'aspect communautaire et au système de points. J'ai pas laché leetcode depuis !",
    img: "/images/testimonials/yass.jpg",
  },
  {
    name: "Thom",
    username: "@dynprogramming",
    body: "LeetGrindBot m’a aidé à me motiver pour débuter sur LeetCode et exceller lors de mes entretiens techniques.",
    img: "/images/testimonials/thom.jpg",
  },
  {
    name: "Ninache",
    username: "@ninache",
    body: "LeetGrind utilise la gamification de façon intelligente pour transformer les défis LeetCode en une routine motivante. C’est un excellent moyen de rester constant tout en rendant l’apprentissage plus ludique !",
    img: "/images/testimonials/ninache.png",
  },
  {
    name: "Morgan 🧑🏿‍💻",
    username: "@HimmyD_Morg",
    body: "Grâce à LeetGrindBot, j’ai trouvé un objectif clair : améliorer ma logique et viser le podium. La compétition saine et le soutien de la communauté m’ont poussé à persévérer. Je recommande ce bot à 100% !",
    img: "/images/testimonials/morg.jpg",
  },
  {
    name: "Monokouma",
    username: "@Haaxiz",
    body: "Le bot m'a permis de sortir de ma zone de confort et de me challenger, l'aspect gamification donne envie d'en refaire encore et encore",
    img: "/images/testimonials/monokouma.jpg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "hover:bg-bgCard/5 relative w-72 overflow-hidden rounded-xl border border-[#9f5cf643] p-4 text-white transition-all ease-in-out hover:border-[#9f5cf65b] dark:[box-shadow:0_-20px_80px_-20px_#9f5cf643_inset]",
      )}
    >
      <div className="flex h-12 flex-row items-center gap-2">
        <Image
          className="size-8 rounded-full object-cover"
          alt=""
          src={img}
          width={32}
          height={32}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium">{name}</figcaption>
          <p className="text-xs text-white/70">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-start text-sm">{body}</blockquote>
    </figure>
  );
};

export default function Testimonials() {
  return (
    <section className="mx-auto mt-20 md:mt-48" id="avis">
      <Title
        smallText="Ils ont osé se lancer"
        title="Laisse-toi inspirer"
        className="py-16"
      />
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>{" "}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-black"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-black"></div>
      </div>
    </section>
  );
}
