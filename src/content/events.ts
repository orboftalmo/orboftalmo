/**
 * Eventos — ESTRUTURA DE EXEMPLO.
 *
 * Assim como em news.ts, não foi possível confirmar a agenda real de eventos/congressos
 * da ORB/APRAMED durante a pesquisa. Os itens abaixo são exemplos ilustrativos claramente
 * identificados e devem ser substituídos pela agenda real antes da publicação do site.
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

export const events: EventItem[] = [
  {
    slug: "congresso-oftalmologia-exemplo",
    title: "[Exemplo] Congresso Mineiro de Oftalmologia",
    date: "2026-09-10",
    location: "Belo Horizonte/MG — local a confirmar",
    description:
      "Conteúdo de exemplo — substitua pelas informações reais de participação da ORB em eventos e congressos.",
    ctaLabel: "Visite nosso espaço",
    image: "/images/events/placeholder-event.svg",
  },
  {
    slug: "demonstracao-produtos-apramed-exemplo",
    title: "[Exemplo] Dia de demonstração de equipamentos APRAMED",
    date: "2026-10-05",
    location: "ORB Oftalmo — Belo Horizonte/MG",
    description:
      "Conteúdo de exemplo — espaço reservado para divulgação de dias de demonstração de produtos na sede da ORB.",
    ctaLabel: "Agende uma demonstração",
    image: "/images/events/placeholder-event.svg",
  },
];

export function getUpcomingEvents(limit = 3) {
  return [...events]
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, limit);
}

export function getEventBySlug(slug: string) {
  return events.find((event) => event.slug === slug);
}
