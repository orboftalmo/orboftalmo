import { Button } from "@/components/ui/Button";
import { buildWhatsAppUrl } from "@/content/site-config";

export function EmptyState({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-dashed border-line bg-paper-alt px-8 py-16 text-center">
      <h2 className="font-display text-xl font-semibold text-navy">{title}</h2>
      <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-soft">{description}</p>
      <Button href={buildWhatsAppUrl()} variant="secondary" className="mt-6" target="_blank" rel="noopener noreferrer">
        Falar com a ORB
      </Button>
    </div>
  );
}
