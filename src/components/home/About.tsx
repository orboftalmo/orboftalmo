import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site-config";

export function About() {
  return (
    <section className="py-20 sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <SectionHeading
          eyebrow="Sobre a ORB"
          title="Tecnologia e experiência para a Oftalmologia"
          description={`Desde ${siteConfig.foundedYear}, a ORB Oftalmo atua no mercado de equipamentos e soluções para oftalmologia, representando a APRAMED em Minas Gerais. Levamos tecnologia de ponta a médicos, clínicas, hospitais e centros oftalmológicos, com atendimento consultivo e próximo em cada etapa — da escolha do equipamento ao relacionamento contínuo após a instalação.`}
        />
        <div className="grid grid-cols-2 gap-6 rounded-3xl border border-line bg-paper-alt p-8">
          <div>
            <p className="font-display text-3xl font-semibold text-navy">
              {siteConfig.foundedYear}
            </p>
            <p className="mt-1 text-sm text-ink-soft">Ano de fundação da ORB</p>
          </div>
          <div>
            <p className="font-display text-3xl font-semibold text-navy">MG</p>
            <p className="mt-1 text-sm text-ink-soft">Atuação em Minas Gerais</p>
          </div>
          <div>
            <p className="font-display text-3xl font-semibold text-navy">1</p>
            <p className="mt-1 text-sm text-ink-soft">Representação oficial APRAMED</p>
          </div>
          <div>
            <p className="font-display text-3xl font-semibold text-navy">B2B</p>
            <p className="mt-1 text-sm text-ink-soft">Atendimento consultivo especializado</p>
          </div>
        </div>
      </Container>
      <Container className="mt-10">
        <Button href="/institucional" variant="ghost" className="pl-0">
          Conheça a história da ORB →
        </Button>
      </Container>
    </section>
  );
}
