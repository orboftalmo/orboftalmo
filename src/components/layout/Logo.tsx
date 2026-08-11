import Link from "next/link";
import { cn } from "@/lib/utils";
import { OrbMark } from "./OrbMark";

export function Logo({ inverted = false, className }: { inverted?: boolean; className?: string }) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2.5 font-display", className)}
      aria-label="ORB Oftalmo — página inicial"
    >
      <OrbMark size={34} />
      <span className="leading-none">
        <span
          className={cn(
            "block text-lg font-bold tracking-tight",
            inverted ? "text-white" : "text-navy"
          )}
        >
          ORB Oftalmo
        </span>
        <span
          className={cn(
            "block text-[11px] font-medium uppercase tracking-[0.16em]",
            inverted ? "text-white/70" : "text-ink-soft"
          )}
        >
          Representante APRAMED
        </span>
      </span>
    </Link>
  );
}
