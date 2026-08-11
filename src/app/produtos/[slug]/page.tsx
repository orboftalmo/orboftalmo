import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/products/ProductCard";
import {
  products,
  getProductBySlug,
  getCategoryBySlug,
  getRelatedProducts,
} from "@/content/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: product.name,
    description: product.shortDescription,
    alternates: { canonical: `/produtos/${product.slug}` },
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const category = getCategoryBySlug(product.category);
  const related = getRelatedProducts(product);

  return (
    <>
      <section className="border-b border-line bg-paper-alt py-10">
        <Container>
          <Breadcrumb
            items={[
              { label: "Início", href: "/" },
              { label: "Produtos", href: "/produtos" },
              ...(category ? [{ label: category.name, href: `/produtos?categoria=${category.slug}` }] : []),
              { label: product.name },
            ]}
          />
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-line bg-mist">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
            {product.gallery.length > 1 && (
              <div className="mt-4 grid grid-cols-4 gap-4">
                {product.gallery.map((image, index) => (
                  <div
                    key={image + index}
                    className="relative aspect-square overflow-hidden rounded-xl border border-line bg-mist"
                  >
                    <Image src={image} alt="" fill sizes="120px" className="object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            {category && (
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                {category.name}
              </span>
            )}
            <h1 className="font-display mt-3 text-3xl font-semibold text-navy sm:text-4xl">
              {product.name}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-ink-soft">{product.description}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={`/orcamento?produto=${encodeURIComponent(product.name)}`} variant="accent">
                Solicitar orçamento
              </Button>
              <Button href="/produtos" variant="secondary">
                Voltar ao catálogo
              </Button>
            </div>

            <div className="mt-10 grid gap-8 border-t border-line pt-8">
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-navy">
                  Principais características
                </h2>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-soft">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-navy">
                  Aplicações
                </h2>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-soft">
                  {product.applications.map((application) => (
                    <li key={application} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      {application}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-navy">
                  Diferenciais
                </h2>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-soft">
                  {product.differentials.map((differential) => (
                    <li key={differential} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      {differential}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-navy">
                  Especificações técnicas
                </h2>
                <dl className="mt-3 space-y-2 text-sm text-ink-soft">
                  {product.specs.map((spec) => (
                    <div key={spec.label} className="flex justify-between gap-4 border-b border-line py-2">
                      <dt className="font-medium text-ink">{spec.label}</dt>
                      <dd>{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="border-t border-line bg-paper-alt py-16 sm:py-20">
          <Container>
            <h2 className="font-display text-2xl font-semibold text-navy">Produtos relacionados</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((relatedProduct) => (
                <ProductCard key={relatedProduct.slug} product={relatedProduct} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
