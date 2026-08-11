import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppUrl, siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Assistência",
  description:
    "Assistência e suporte para equipamentos APRAMED com a ORB Oftalmo em Minas Gerais.",
  alternates: { canonical: "/assistencia" },
};

const supportAreas = [
  {
    title: "Suporte técnico",
    description:
      "Canal direto com a ORB para dúvidas sobre o funcionamento dos equipamentos APRAMED adquiridos através da nossa representação.",
  },
  {
    title: "Orientação e pós-venda",
    description:
      "Acompanhamento após a aquisição, ajudando sua clínica a tirar o melhor proveito do equipamento no dia a dia.",
  },
  {
    title: "Encaminhamento à assistência técnica",
    description:
      "Apoio para direcionar sua solicitação à assistência técnica autorizada, conforme a necessidade do equipamento.",
  },
];

export default function AssistenciaPage() {
  return (
    <>
      <PageHero
        eyebrow="Suporte"
        title="Assistência"
        description="A ORB acompanha sua clínica também depois da aquisição do equipamento."
        breadcrumb={[{ label: "Início", href: "/" }, { label: "Assistência" }]}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Como podemos ajudar"
            title="Assistência e suporte ORB"
            description="Os serviços de assistência disponíveis podem variar conforme o equipamento e a necessidade da sua clínica. Fale com a nossa equipe para confirmar a melhor forma de atendimento para o seu caso."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {supportAreas.map((area) => (
              <div key={area.title} className="rounded-2xl border border-line bg-white p-6">
                <h3 className="text-base font-semibold text-navy">{area.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{area.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-navy-deep py-16 text-white">
        <Container className="flex flex-col items-center gap-5 text-center">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">Precisa de suporte?</h2>
          <p className="max-w-lg text-white/70">Entre em contato com nossa equipe.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              href={buildWhatsAppUrl("Olá! Preciso de suporte referente a um equipamento APRAMED.")}
              variant="accent"
            >
              Falar pelo WhatsApp
            </Button>
            <Button
              href={`mailto:${siteConfig.contact.email}`}
              variant="secondary"
              className="border-white/30 text-white hover:border-white/60 hover:bg-white/10"
            >
              Enviar e-mail
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
