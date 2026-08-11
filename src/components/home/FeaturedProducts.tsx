import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/products/ProductCard";
import { getFeaturedProducts } from "@/content/products";

export function FeaturedProducts() {
  const featured = getFeaturedProducts(4);

  return (
    <section className="bg-paper-alt py-20 sm:py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Destaques"
            title="Produtos em destaque"
            description="Uma seleção do portfólio APRAMED representado pela ORB em Minas Gerais."
          />
          <Button href="/produtos" variant="ghost">
            Ver todos os produtos →
          </Button>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
