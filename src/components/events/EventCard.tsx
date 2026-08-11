import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { formatDate } from "@/lib/utils";
import { buildWhatsAppUrl } from "@/content/site-config";
import type { EventItem } from "@/content/events";

export function EventCard({ event }: { event: EventItem }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-line bg-white sm:flex-row">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-mist sm:aspect-auto sm:w-72 sm:shrink-0">
        <Image src={event.image} alt="" fill sizes="288px" className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <time dateTime={event.date} className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
          {formatDate(event.date)}
        </time>
        <h3 className="text-lg font-semibold text-navy">{event.title}</h3>
        <p className="text-sm text-ink-soft">{event.location}</p>
        <p className="flex-1 text-sm leading-relaxed text-ink-soft">{event.description}</p>
        <Button
          href={buildWhatsAppUrl(`Olá! Tenho interesse em saber mais sobre o evento: ${event.title}.`)}
          variant="secondary"
          className="w-fit"
        >
          {event.ctaLabel}
        </Button>
      </div>
    </article>
  );
}
