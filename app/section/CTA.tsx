import { StandaloneShineButton } from "@/components/ui/StandaloneShineButton";
import { Swords } from "lucide-react";
import Image from "next/image";

export default function CTA() {
  return (
    <section className="mx-auto">
      <div className="relative flex justify-center">
        <Image
          src="/images/neon_cta.png"
          alt="CTA"
          width={1000}
          height={1000}
          className="absolute top-52 -z-10 w-full object-cover md:-top-10"
        />
      </div>
      <div className="relative flex flex-col items-center justify-center gap-4 bg-black/10 py-44 backdrop-blur-sm">
        <h1 className="mx-auto max-w-3xl text-center text-4xl font-bold tracking-tighter sm:text-6xl">
          Rejoins des développeurs qui, comme toi <br />
          <span className="bg-gradient-to-r from-[#2ffeb9] to-[#9f5cf6] bg-clip-text font-bold text-transparent">
            visent l’excellence.
          </span>
        </h1>
        <StandaloneShineButton
          className="mt-12"
          icon={<Swords className="size-5" />}
        >
          Résous ton premier challenge
        </StandaloneShineButton>
      </div>
    </section>
  );
}
