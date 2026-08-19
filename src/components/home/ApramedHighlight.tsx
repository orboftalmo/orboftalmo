import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppUrl, siteConfig } from "@/content/site-config";

export function ApramedHighlight() {
  return (
    <section className="border-y border-line bg-navy py-20 text-white sm:py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Parceria
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl">
            ORB + APRAMED
            <br />
            <span className="text-accent">Tecnologia reconhecida. Atendimento próximo.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/75">
            Duas frentes que se complementam: a tecnologia da APRAMED e o atendimento local da
            ORB. É essa combinação que leva a solução certa até o seu consultório em Minas Gerais.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/15 bg-white/5 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
              APRAMED
            </p>
            <h3 className="mt-2 font-display text-xl font-semibold">Tecnologia e portfólio</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">{siteConfig.apramed.description}</p>
          </div>
          <div className="rounded-2xl border border-accent/40 bg-white/5 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">ORB</p>
            <h3 className="mt-2 font-display text-xl font-semibold">
              Atendimento, consultoria e suporte local
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Em Minas Gerais, a ORB apresenta o portfólio, orienta a escolha do equipamento
              adequado, viabiliza demonstrações e acompanha de perto o relacionamento — da
              decisão de compra ao suporte contínuo.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/produtos" variant="accent">
            Ver produtos APRAMED
          </Button>
          <Button
            href={buildWhatsAppUrl(siteConfig.contact.whatsappSpecialistMessage)}
            variant="secondary"
            className="border-white/30 text-white hover:border-white/60 hover:bg-white/10"
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar com um especialista
          </Button>
        </div>
      </Container>
    </section>
  );
}
