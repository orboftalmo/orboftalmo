/**
 * Conteúdo de notícias.
 *
 * Não foi possível acessar o blog/notícias reais da ORB durante a pesquisa (site fora do
 * alcance do ambiente de build) e, para não apresentar informações inventadas como fatos,
 * a lista abaixo começa vazia — a página de Notícias exibe um estado vazio profissional em
 * vez de conteúdo fictício. Assim que a equipe da ORB fornecer notícias reais, adicione-as
 * aqui seguindo a interface `NewsPost` (ou migre para um CMS futuramente).
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

export const newsPosts: NewsPost[] = [];

export function getNewsBySlug(slug: string) {
  return newsPosts.find((post) => post.slug === slug);
}

export function getLatestNews(limit = 3) {
  return [...newsPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}
