import FadeOnScroll from "@/components/animations/FadeOnScroll";

interface TitleProps {
  title: string;
  className?: string;
  smallText?: string;
}

export default function Title({ title, className, smallText }: TitleProps) {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <FadeOnScroll delay={0}>
        <span className="bg-gradient-to-r from-[#2ffeb9d1] to-[#9f5cf6] bg-clip-text font-semibold text-transparent md:text-lg">
          {smallText}
        </span>
      </FadeOnScroll>
      <FadeOnScroll delay={0.2}>
        <h1 className="mt-2 max-w-2xl text-center text-3xl font-bold md:text-4xl">
          {title}
        </h1>
      </FadeOnScroll>
    </div>
  );
}
