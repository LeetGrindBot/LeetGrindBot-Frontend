import { cn } from "@/lib/utils";
import { Wand2 } from "lucide-react";

interface StandaloneShineButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const StandaloneShineButton = ({
  children,
  className,
  icon,
  ...props
}: StandaloneShineButtonProps) => {
  return (
    <div className="flex w-full items-center justify-center">
      <button
        {...props}
        className={cn(
          // Base styles
          "relative rounded-xl px-6 py-3 font-medium",
          "overflow-hidden transition-all duration-200",
          "flex items-center gap-2",

          // Colors & Effects
          "bg-gradient-to-r from-[#2ffeb9d1] to-[#9f5cf6] text-white",
          "hover:ring-2 hover:ring-offset-2",
          "hover:bg-gradient-to-r hover:from-[#2ffeb9d1] hover:to-[#9f5cf6]",
          "shadow-lg shadow-slate-900/20",

          // Transform effect
          "hover:scale-[1.01] active:scale-[0.98]",
          "transform transition-transform duration-200",

          // Group for shine effect
          "group",

          className,
        )}
      >
        {/* Shine effect */}
        <span className="ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-700 group-hover:-translate-x-96 dark:bg-slate-300" />

        {/* Button content */}
        <span className="relative flex items-center gap-2 text-sm font-semibold tracking-wide">
          {icon ? (
            icon
          ) : (
            <Wand2 className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          )}
          {children}
        </span>
      </button>
    </div>
  );
};
