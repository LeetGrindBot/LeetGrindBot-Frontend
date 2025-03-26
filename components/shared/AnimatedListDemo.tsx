import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { AnimatedList } from "../layout/animated-list";

interface Item {
  name: string;
  description: string;
  icon: React.ReactNode;
  color?: string;
  time: string;
}
let notifications = [
  {
    name: "🎁 Nouveau challenge !",
    description: "✨ Container With Most Water - Medium",
    time: "Il y a 3 jours",
    icon: <Logo />,
  },
  {
    name: "🎁 Nouveau challenge !",
    description: "✨ Median of Two Sorted Arrays - Hard",
    time: "Il y a 2 jours",
    icon: <Logo />,
  },
  {
    name: "🎁 Nouveau challenge !",
    description: "✨ Russian Doll Envelopes - Hard",
    time: "Il y a 1 jour",
    icon: <Logo />,
  },
  {
    name: "🎁 Nouveau challenge !",
    description: "✨ Two Sum - Easy",
    time: "Il y a 15 minutes",
    icon: <Logo />,
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_#9f5cf643] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1"></span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export default function AnimatedListDemo({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col overflow-hidden rounded-lg border p-6 md:shadow-xl",
        className,
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
