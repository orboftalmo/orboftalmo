import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { QuoteForm } from "@/components/forms/QuoteForm";

export const metadata: Metadata = {
  title: "Solicitar Orçamento",
  description:
    "Solicite um orçamento de equipamentos oftalmológicos APRAMED com a ORB Oftalmo em Minas Gerais.",
  alternates: { canonical: "/orcamento" },
};

export default function OrcamentoPage() {
  return (
    <>
      <PageHero
        eyebrow="Orçamento"
        title="Encontre a solução ideal para sua clínica"
        description="Conte-nos o que você procura e nossa equipe entrará em contato para entender sua necessidade."
        breadcrumb={[{ label: "Início", href: "/" }, { label: "Solicitar Orçamento" }]}
      />
      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <Suspense fallback={null}>
            <QuoteForm />
          </Suspense>
        </Container>
      </section>
    </>
  );
}
