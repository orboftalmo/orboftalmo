import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { NewsCard } from "@/components/news/NewsCard";
import { newsPosts } from "@/content/news";

export const metadata: Metadata = {
  title: "Notícias",
  description: "Notícias e conteúdos sobre oftalmologia, tecnologia e o mercado, pela ORB Oftalmo.",
  alternates: { canonical: "/noticias" },
};

export default function NoticiasPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog institucional"
        title="Notícias"
        description="Conteúdos sobre oftalmologia, tecnologia, produtos, mercado e a atuação da ORB em Minas Gerais."
        breadcrumb={[{ label: "Início", href: "/" }, { label: "Notícias" }]}
      />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {newsPosts.map((post) => (
              <NewsCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
