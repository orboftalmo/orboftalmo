import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { buildWhatsAppUrl, siteConfig } from "@/content/site-config";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-navy-deep">
      <Container className="grid gap-12 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
        <div className="relative z-10">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
            Representante APRAMED em Minas Gerais
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            Tecnologia oftalmológica.
            <br />
            Escolha orientada por quem entende sua prática.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">
            Soluções APRAMED com atendimento especializado da ORB Oftalmo em Minas Gerais.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="/produtos" variant="accent">
              Conhecer soluções
            </Button>
            <Button
              href={buildWhatsAppUrl(siteConfig.contact.whatsappSpecialistMessage)}
              variant="secondary"
              className="border-white/30 text-white hover:bg-white/10 hover:border-white/60"
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar com um especialista
            </Button>
          </div>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/40 lg:aspect-square">
          <Image
            src="/images/hero/hero-oftalmologia.svg"
            alt="Representação de equipamento oftalmológico de precisão"
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
