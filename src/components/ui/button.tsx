import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg" | "icon";
};

export function Button({
  asChild,
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 disabled:pointer-events-none disabled:opacity-50",
        variant === "primary" && "bg-slate-950 text-white shadow-lg shadow-sky-900/10 hover:-translate-y-0.5 hover:bg-slate-800",
        variant === "secondary" && "border border-slate-200 bg-white text-slate-900 shadow-sm hover:border-sky-200 hover:bg-sky-50",
        variant === "ghost" && "text-slate-600 hover:bg-slate-100 hover:text-slate-950",
        variant === "danger" && "bg-rose-600 text-white hover:bg-rose-700",
        size === "sm" && "h-9 px-3 text-sm",
        size === "md" && "h-11 px-4 text-sm",
        size === "lg" && "h-12 px-5 text-base",
        size === "icon" && "h-10 w-10 p-0",
        className,
      )}
      {...props}
    />
  );
}
