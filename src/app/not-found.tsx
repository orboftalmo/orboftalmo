import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Página não encontrada",
};

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center py-20">
      <Container className="flex flex-col items-center gap-5 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Erro 404</p>
        <h1 className="font-display text-3xl font-semibold text-navy sm:text-4xl">
          Página não encontrada
        </h1>
        <p className="max-w-md text-base text-ink-soft">
          A página que você procura não existe ou foi movida. Volte para a página inicial ou
          conheça nosso catálogo de produtos.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/">Voltar ao início</Button>
          <Button href="/produtos" variant="secondary">
            Ver produtos
          </Button>
        </div>
      </Container>
    </section>
  );
}
