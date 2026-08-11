import Link from "next/link";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumb({
  items,
  variant = "light",
}: {
  items: BreadcrumbItem[];
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("text-sm", isDark ? "text-white/55" : "text-ink-soft")}
    >
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-2">
            {index > 0 && <span aria-hidden="true">/</span>}
            {item.href ? (
              <Link
                href={item.href}
                className={cn("link-underline", isDark ? "hover:text-white" : "hover:text-navy")}
              >
                {item.label}
              </Link>
            ) : (
              <span className={isDark ? "text-white" : "text-navy"} aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
