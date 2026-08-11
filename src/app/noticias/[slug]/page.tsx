import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { formatDate } from "@/lib/utils";
import { newsPosts, getNewsBySlug } from "@/content/news";

export function generateStaticParams() {
  return newsPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getNewsBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/noticias/${post.slug}` },
    openGraph: { title: post.title, description: post.excerpt, images: [{ url: post.image }] },
  };
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getNewsBySlug(slug);
  if (!post) notFound();

  return (
    <article>
      <section className="border-b border-line bg-paper-alt py-10">
        <Container>
          <Breadcrumb
            items={[
              { label: "Início", href: "/" },
              { label: "Notícias", href: "/noticias" },
              { label: post.title },
            ]}
          />
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container className="max-w-3xl">
          <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.12em] text-accent">
            <span>{post.category}</span>
            <span className="text-ink-soft/60" aria-hidden="true">•</span>
            <time dateTime={post.date} className="text-ink-soft normal-case tracking-normal">
              {formatDate(post.date)}
            </time>
          </div>
          <h1 className="font-display mt-4 text-3xl font-semibold text-navy sm:text-4xl">
            {post.title}
          </h1>

          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-3xl border border-line bg-mist">
            <Image src={post.image} alt="" fill sizes="(min-width: 1024px) 60vw, 90vw" className="object-cover" />
          </div>

          <div className="mt-8 max-w-none text-ink-soft">
            {post.content.map((paragraph, index) => (
              <p key={index} className="mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-10 border-t border-line pt-8">
            <Button href="/noticias" variant="ghost" className="pl-0">
              ← Voltar para notícias
            </Button>
          </div>
        </Container>
      </section>
    </article>
  );
}
