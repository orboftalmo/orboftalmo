/**
 * Conteúdo de notícias — ESTRUTURA DE EXEMPLO.
 *
 * Não foi possível acessar o blog/notícias reais da ORB durante a pesquisa (site fora do
 * alcance do ambiente de build). Para não apresentar informações inventadas como fatos,
 * os itens abaixo são marcados como conteúdo de exemplo e devem ser substituídos pela
 * equipe da ORB pelas notícias reais assim que o site for publicado. A estrutura de dados
 * já está pronta para receber conteúdo real ou ser migrada para um CMS.
 */

export type NewsCategory =
  | "Oftalmologia"
  | "Tecnologia"
  | "Produtos"
  | "Mercado"
  | "Eventos"
  | "Notícias ORB";

export interface NewsPost {
  slug: string;
  title: string;
  category: NewsCategory;
  date: string;
  excerpt: string;
  content: string[];
  image: string;
}

export const newsPosts: NewsPost[] = [
  {
    slug: "novo-site-orb-oftalmo",
    title: "[Exemplo] ORB Oftalmo estreia novo site institucional",
    category: "Notícias ORB",
    date: "2026-08-01",
    excerpt:
      "Conteúdo de exemplo — substitua por uma notícia real assim que houver material definido pela equipe ORB.",
    content: [
      "Este é um conteúdo de exemplo criado para demonstrar a estrutura da página de notícias.",
      "Substitua este texto pelo conteúdo real fornecido pela equipe da ORB Oftalmo.",
    ],
    image: "/images/news/placeholder-news.svg",
  },
  {
    slug: "tecnologia-oftalmologica-tendencias",
    title: "[Exemplo] Tendências em tecnologia para oftalmologia",
    category: "Tecnologia",
    date: "2026-07-15",
    excerpt:
      "Conteúdo de exemplo — espaço reservado para artigos sobre tecnologia e inovação em equipamentos oftalmológicos.",
    content: [
      "Este é um conteúdo de exemplo criado para demonstrar a estrutura da página de notícias.",
      "Substitua este texto por um artigo real sobre tendências do setor.",
    ],
    image: "/images/news/placeholder-news.svg",
  },
  {
    slug: "apramed-orb-parceria-minas-gerais",
    title: "[Exemplo] ORB reforça representação da APRAMED em Minas Gerais",
    category: "Mercado",
    date: "2026-06-20",
    excerpt:
      "Conteúdo de exemplo — espaço reservado para notícias sobre a atuação da ORB como representante da APRAMED.",
    content: [
      "Este é um conteúdo de exemplo criado para demonstrar a estrutura da página de notícias.",
      "Substitua este texto por uma notícia real sobre a parceria ORB/APRAMED.",
    ],
    image: "/images/news/placeholder-news.svg",
  },
];

export function getNewsBySlug(slug: string) {
  return newsPosts.find((post) => post.slug === slug);
}

export function getLatestNews(limit = 3) {
  return [...newsPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}
