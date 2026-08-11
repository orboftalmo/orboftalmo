import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ inverted = false, className }: { inverted?: boolean; className?: string }) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2.5 font-display", className)}
      aria-label="ORB Oftalmo — página inicial"
    >
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
        <circle cx="17" cy="17" r="16" stroke={inverted ? "#ffffff" : "#0a2a4a"} strokeWidth="1.4" />
        <circle cx="17" cy="17" r="7" fill="#0f9e94" />
        <circle cx="17" cy="17" r="2.4" fill={inverted ? "#071b33" : "#fbfbfa"} />
      </svg>
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
