import Accordion from "@/components/ui/accordion";
import Title from "@/components/ui/Title";

const accordionItems = [
  {
    title: "Est-ce que les défis s’adaptent à mon niveau ?",
    content:
      "Les défis sont tirés au hasard parmi les problèmes de LeetCode. Que tu sois débutant ou avancé, l’objectif est de progresser à ton rythme et de rester constant.",
  },
  {
    title: "Est-ce que LeetGrindBot est gratuit ?",
    content:
      "Oui, c'est 100% gratuit. Rejoins simplement le serveur Discord, connecte ton compte LeetCode, et commence à relever des défis dès aujourd’hui.",
  },
  {
    title: "Quel langage puis-je utiliser ?",
    content:
      " LeetGrindBot repose sur les défis de LeetCode, qui prennent en charge plus de 15 langages de programmation, dont Python, Java, C++, JavaScript, et bien d’autres. Tu es libre d’utiliser celui que tu préfères.",
  },
  {
    title: "Puis-je discuter des défis avec les autres ?",
    content:
      "Oui ! Rejoins les vocs pour échanger avec d’autres membres motivés ou demande de l’aide si tu bloques sur un problème.",
  },
  {
    title: "Que se passe-t-il si je rate un défi ?",
    content:
      "Pas de souci ! Chaque jour est une nouvelle opportunité. Le but est de progresser à ton rythme, alors reviens au prochain défi sans pression.",
  },
  {
    title: "LeetGrindBot peut-il m’aider pour les entretiens techniques ?",
    content:
      "Oui ! LeetGrindBot t’entraîne sur des problèmes d’algorithmie et de structures de données, essentiels pour réussir tes entretiens dans des entreprises comme Google, Amazon ou Microsoft.",
  },

  {
    title: "Et si je deviens accro ?",
    content: "C’est le but ! Plus tu grind, plus tu progresses. 🙌",
  },
];

export default function Faq() {
  return (
    <section className="mx-auto mt-20 min-h-screen md:mt-44" id="faq">
      <Title
        smallText="Questions Fréquemment Posées"
        title="Tout ce que tu dois savoir"
        className="py-16"
      />
      <div className="relative mx-auto mt-10 max-w-3xl md:mt-20">
        <div className="mb-8 space-y-4">
          <Accordion items={accordionItems} />
        </div>
      </div>
    </section>
  );
}
