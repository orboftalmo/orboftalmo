import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { EventCard } from "@/components/events/EventCard";
import { events } from "@/content/events";

export const metadata: Metadata = {
  title: "Eventos",
  description:
    "Congressos, simpósios e eventos com participação da ORB Oftalmo e da APRAMED em Minas Gerais.",
  alternates: { canonical: "/eventos" },
};

export default function EventosPage() {
  return (
    <>
      <PageHero
        eyebrow="Agenda"
        title="Eventos"
        description="Acompanhe os congressos, simpósios e feiras em que a ORB e a APRAMED marcam presença."
        breadcrumb={[{ label: "Início", href: "/" }, { label: "Eventos" }]}
      />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6">
            {events.map((event) => (
              <EventCard key={event.slug} event={event} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
