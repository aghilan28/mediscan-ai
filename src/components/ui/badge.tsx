import { cn } from "@/lib/utils";

export function Badge({ children, tone = "slate" }: { children: React.ReactNode; tone?: "slate" | "green" | "amber" | "red" | "blue" | "teal" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold",
        tone === "slate" && "bg-slate-100 text-slate-700",
        tone === "green" && "bg-emerald-50 text-emerald-700",
        tone === "amber" && "bg-amber-50 text-amber-700",
        tone === "red" && "bg-rose-50 text-rose-700",
        tone === "blue" && "bg-sky-50 text-sky-700",
        tone === "teal" && "bg-teal-50 text-teal-700",
      )}
    >
      {children}
    </span>
  );
}
