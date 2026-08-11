import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { ProductsExplorer } from "@/components/products/ProductsExplorer";
import { products, productCategories } from "@/content/products";

export const metadata: Metadata = {
  title: "Produtos",
  description:
    "Conheça os equipamentos oftalmológicos APRAMED disponíveis através da ORB em Minas Gerais: refração, diagnóstico, cirurgia e consultórios oftalmológicos.",
  alternates: { canonical: "/produtos" },
};

export default function ProdutosPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfólio APRAMED"
        title="Produtos"
        description="Equipamentos oftalmológicos para consultório, diagnóstico e centro cirúrgico, representados pela ORB em Minas Gerais."
        breadcrumb={[{ label: "Início", href: "/" }, { label: "Produtos" }]}
      />
      <section className="py-16 sm:py-20">
        <Container>
          <Suspense fallback={null}>
            <ProductsExplorer products={products} categories={productCategories} />
          </Suspense>
        </Container>
      </section>
    </>
  );
}
