import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    title: "Representação APRAMED em Minas Gerais",
    description:
      "Acesso direto ao portfólio de equipamentos APRAMED, com o suporte de quem conhece o mercado mineiro.",
  },
  {
    title: "Atendimento especializado",
    description:
      "Equipe próxima do médico, pronta para entender a rotina da clínica e indicar o caminho mais adequado.",
  },
  {
    title: "Consultoria na escolha do equipamento",
    description:
      "Orientação técnica para comparar opções e decidir com segurança o investimento certo para o seu consultório.",
  },
  {
    title: "Demonstração de produtos",
    description:
      "Possibilidade de conhecer os equipamentos de perto antes de decidir, com atendimento consultivo em cada etapa.",
  },
  {
    title: "Relacionamento próximo",
    description:
      "Uma relação de confiança que continua depois da venda, com a ORB como referência local para novas necessidades.",
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
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
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
