"use client";

import { useMemo, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { ProductCard } from "@/components/products/ProductCard";
import { cn } from "@/lib/utils";
import type { Product, ProductCategory, ProductCategorySlug } from "@/content/products";

export function ProductsExplorer({
  products,
  categories,
}: {
  products: Product[];
  categories: ProductCategory[];
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const initialCategory = searchParams.get("categoria") as ProductCategorySlug | null;
  const [active, setActive] = useState<ProductCategorySlug | "todos">(
    initialCategory && categories.some((c) => c.slug === initialCategory) ? initialCategory : "todos"
  );

  const filtered = useMemo(
    () => (active === "todos" ? products : products.filter((product) => product.category === active)),
    [active, products]
  );

  function handleSelect(slug: ProductCategorySlug | "todos") {
    setActive(slug);
    const params = new URLSearchParams(searchParams.toString());
    if (slug === "todos") {
      params.delete("categoria");
    } else {
      params.set("categoria", slug);
    }
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }

  return (
    <div>
      <div className="flex flex-wrap gap-3" role="group" aria-label="Filtrar produtos por categoria">
        <button
          type="button"
          onClick={() => handleSelect("todos")}
          className={cn(
            "rounded-full border px-5 py-2.5 text-sm font-medium transition-colors",
            active === "todos"
              ? "border-navy bg-navy text-white"
              : "border-line text-ink-soft hover:border-navy/40 hover:text-navy"
          )}
          aria-pressed={active === "todos"}
        >
          Todos
        </button>
        {categories.map((category) => (
          <button
            key={category.slug}
            type="button"
            onClick={() => handleSelect(category.slug)}
            className={cn(
              "rounded-full border px-5 py-2.5 text-sm font-medium transition-colors",
              active === category.slug
                ? "border-navy bg-navy text-white"
                : "border-line text-ink-soft hover:border-navy/40 hover:text-navy"
            )}
            aria-pressed={active === category.slug}
          >
            {category.name}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <p className="mt-12 text-sm text-ink-soft">
          Nenhum produto encontrado nesta categoria no momento.
        </p>
      )}
    </div>
  );
}
