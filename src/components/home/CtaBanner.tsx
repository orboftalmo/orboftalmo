import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CtaBanner() {
  return (
    <section className="bg-navy-deep py-20 text-white sm:py-24">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="font-display max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">
          Está buscando o equipamento ideal para sua clínica?
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-white/70">
          Fale com a ORB e encontre a solução mais adequada para sua necessidade.
        </p>
        <Button href="/orcamento" variant="accent" className="mt-2 px-8 py-4 text-base">
          Solicitar orçamento
        </Button>
      </Container>
    </section>
  );
}
