import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { EventCard } from "@/components/events/EventCard";
import { getUpcomingEvents } from "@/content/events";

export function EventsPreview() {
  const upcoming = getUpcomingEvents(2);

  return (
    <section className="bg-paper-alt py-20 sm:py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Agenda" title="Eventos" />
          <Button href="/eventos" variant="ghost">
            Ver todos os eventos →
          </Button>
        </div>
        <div className="mt-12 grid gap-6">
          {upcoming.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>
      </Container>
    </section>
  );
}
