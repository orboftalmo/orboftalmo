import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Institucional",
  description:
    "Conheça a ORB Oftalmo: representante da APRAMED em Minas Gerais, com atendimento consultivo para médicos, clínicas e hospitais.",
  alternates: { canonical: "/institucional" },
};

const pillars = [
  {
    title: "Tecnologia",
    description: "Equipamentos APRAMED que unem design, precisão e inovação para a rotina oftalmológica.",
  },
  {
    title: "Conhecimento",
    description: "Conhecimento técnico do portfólio para orientar a escolha certa em cada consulta.",
  },
  {
    title: "Proximidade",
    description: "Atendimento próximo do médico, da clínica e do hospital em todas as etapas da relação.",
  },
  {
    title: "Confiança",
    description: "Uma trajetória construída no mercado mineiro de oftalmologia desde 1984.",
  },
];

export default function InstitucionalPage() {
  return (
    <>
      <PageHero
        eyebrow="Institucional"
        title="Quem somos"
        description="A ORB Oftalmo é uma empresa especializada em soluções para oftalmologia, representante da APRAMED em Minas Gerais."
        breadcrumb={[{ label: "Início", href: "/" }, { label: "Institucional" }]}
      />

      <section className="py-20 sm:py-24">
        <Container className="grid gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Nossa história"
              title="Quem somos"
              description={`Desde ${siteConfig.foundedYear}, a ORB Oftalmo atua no mercado de equipamentos para oftalmologia, construindo relacionamento de confiança com médicos oftalmologistas, clínicas, hospitais e centros oftalmológicos. Somos especializados exclusivamente no universo da oftalmologia, o que nos permite falar a mesma língua do profissional de saúde e entender, de fato, as necessidades de cada consultório.`}
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Parceria"
              title="Nossa parceria com a APRAMED"
              description={`A ORB Oftalmo é representante da APRAMED em Minas Gerais. ${siteConfig.apramed.description} A ORB é a ponte entre essa tecnologia e o médico mineiro: apresenta o portfólio, orienta a escolha do equipamento mais adequado e acompanha todo o processo de aquisição.`}
            />
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-paper-alt py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Presença"
            title="Nossa atuação"
            description="A ORB está ao lado do profissional de saúde em Minas Gerais, com um atendimento verdadeiramente consultivo."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-line bg-white p-6">
              <h3 className="text-base font-semibold text-navy">Onde atuamos</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Atendimento em todo o estado de Minas Gerais, apoiando médicos oftalmologistas,
                clínicas, hospitais e centros oftalmológicos na escolha e aquisição de equipamentos.
              </p>
            </div>
            <div className="rounded-2xl border border-line bg-white p-6">
              <h3 className="text-base font-semibold text-navy">Como atuamos</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Com atendimento consultivo: entendemos a realidade de cada consultório ou
                instituição para indicar os equipamentos APRAMED mais adequados a cada caso.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Propósito"
            title="Nossa missão"
            description="Aproximar profissionais da saúde de tecnologias adequadas às suas necessidades, com atendimento consultivo, técnico e próximo em cada etapa da relação."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-2xl border border-line bg-white p-6">
                <h3 className="font-display text-lg font-semibold text-navy">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{pillar.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy-deep py-16 text-white">
        <Container className="flex flex-col items-center gap-5 text-center">
          <h2 className="font-display max-w-xl text-2xl font-semibold sm:text-3xl">
            Quer conhecer o portfólio APRAMED disponível através da ORB?
          </h2>
          <Button href="/produtos" variant="accent">
            Conheça nossos produtos
          </Button>
        </Container>
      </section>
    </>
  );
}
