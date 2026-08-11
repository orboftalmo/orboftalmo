import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { NewsCard } from "@/components/news/NewsCard";
import { getLatestNews } from "@/content/news";

export function NewsPreview() {
  const posts = getLatestNews(3);

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Conteúdo" title="Notícias" />
          <Button href="/noticias" variant="ghost">
            Ver todas as notícias →
          </Button>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <NewsCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </section>
  );
}
