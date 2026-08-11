import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { CareersForm } from "@/components/forms/CareersForm";

export const metadata: Metadata = {
  title: "Trabalhe Conosco",
  description: "Envie seu currículo e faça parte do time da ORB Oftalmo em Minas Gerais.",
  alternates: { canonical: "/trabalhe-conosco" },
};

export default function TrabalheConoscoPage() {
  return (
    <>
      <PageHero
        eyebrow="Carreiras"
        title="Faça parte da ORB"
        description="Buscamos pessoas com espírito consultivo e interesse genuíno em levar tecnologia de qualidade à oftalmologia mineira."
        breadcrumb={[{ label: "Início", href: "/" }, { label: "Trabalhe Conosco" }]}
      />
      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <CareersForm />
        </Container>
      </section>
    </>
  );
}
