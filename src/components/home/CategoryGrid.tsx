import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { productCategories } from "@/content/products";

export function CategoryGrid() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Portfólio"
          title="Categorias de produtos"
          description="Explore as principais linhas do portfólio APRAMED disponíveis através da ORB em Minas Gerais."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {productCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/produtos?categoria=${category.slug}`}
              className="group flex flex-col justify-between rounded-2xl border border-line bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-navy/30 hover:shadow-[0_20px_50px_-25px_rgba(10,42,74,0.35)]"
            >
              <div>
                <h3 className="text-base font-semibold text-navy">{category.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {category.description}
                </p>
              </div>
              <span className="mt-6 text-sm font-semibold text-accent link-underline w-fit">
                Ver produtos →
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
