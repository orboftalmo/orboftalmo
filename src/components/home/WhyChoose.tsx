import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    title: "Tecnologia",
    description: "Portfólio APRAMED: equipamentos oftalmológicos reconhecidos no setor.",
  },
  {
    title: "Especialização",
    description: "Conhecimento do mercado oftalmológico mineiro e da rotina de quem atende pacientes.",
  },
  {
    title: "Consultoria",
    description: "Orientação para a escolha da solução mais adequada ao seu consultório ou clínica.",
  },
  {
    title: "Proximidade",
    description: "Atendimento especializado, próximo e contínuo em Minas Gerais.",
  },
];

export function WhyChoose() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Diferenciais"
          title="Por que escolher a ORB?"
          align="center"
          className="mx-auto"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <div key={reason.title} className="rounded-2xl border border-line bg-white p-6">
              <span className="font-display text-2xl font-semibold text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-base font-semibold text-navy">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{reason.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
