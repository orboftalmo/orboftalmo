import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site-config";

export function ApramedHighlight() {
  return (
    <section className="border-y border-line bg-navy py-20 text-white sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Parceria
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl">
            ORB + APRAMED
            <br />
            <span className="text-accent">Tecnologia reconhecida. Atendimento próximo.</span>
          </h2>
        </div>
        <div>
          <p className="text-base leading-relaxed text-white/75">
            {siteConfig.apramed.description} Em Minas Gerais, a ORB é quem leva essa tecnologia até
            o médico: apresentando os equipamentos, orientando a escolha ideal para cada consultório
            ou clínica e acompanhando de perto todo o processo — da demonstração à aquisição.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/produtos" variant="accent">
              Ver produtos APRAMED
            </Button>
            <Button
              href="/institucional"
              variant="secondary"
              className="border-white/30 text-white hover:border-white/60 hover:bg-white/10"
            >
              Nossa parceria
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
