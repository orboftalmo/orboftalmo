import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { getCategoryBySlug, type Product } from "@/content/products";

export function ProductCard({ product }: { product: Product }) {
  const category = getCategoryBySlug(product.category);

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition-shadow duration-200 hover:shadow-[0_20px_50px_-25px_rgba(10,42,74,0.35)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-mist">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        {category && (
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            {category.name}
          </span>
        )}
        <h3 className="text-lg font-semibold text-navy">{product.name}</h3>
        <p className="flex-1 text-sm leading-relaxed text-ink-soft">
          {product.shortDescription}
        </p>
        <div className="mt-2 flex flex-wrap gap-3">
          <Button href={`/produtos/${product.slug}`} variant="secondary" className="flex-1">
            Conheça o produto
          </Button>
          <Button
            href={`/orcamento?produto=${encodeURIComponent(product.name)}`}
            variant="primary"
            className="flex-1"
          >
            Solicitar orçamento
          </Button>
        </div>
      </div>
    </article>
  );
}
