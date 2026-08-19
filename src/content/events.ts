/**
 * Eventos.
 *
 * Assim como em news.ts, não foi possível confirmar a agenda real de eventos/congressos
 * da ORB/APRAMED durante a pesquisa. A lista começa vazia — a página de Eventos exibe um
 * estado vazio profissional em vez de datas/locais fictícios. Adicione eventos reais aqui
 * seguindo a interface `EventItem` assim que a ORB confirmar a agenda.
 */

export interface EventItem {
  slug: string;
  title: string;
  date: string;
  location: string;
  description: string;
  ctaLabel: string;
  image: string;
}

export const events: EventItem[] = [];

export function getUpcomingEvents(limit = 3) {
  return [...events]
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, limit);
}

export function getEventBySlug(slug: string) {
  return events.find((event) => event.slug === slug);
}
