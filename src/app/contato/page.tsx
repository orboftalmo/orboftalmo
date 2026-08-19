import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppUrl, siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com a ORB Oftalmo: telefone, WhatsApp, e-mail e endereço em Belo Horizonte, MG.",
  alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
  const { contact, social } = siteConfig;

  return (
    <>
      <PageHero
        eyebrow="Fale conosco"
        title="Contato"
        description="Estamos à disposição para apresentar os equipamentos APRAMED e tirar suas dúvidas."
        breadcrumb={[{ label: "Início", href: "/" }, { label: "Contato" }]}
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-navy">
                Telefone / WhatsApp
              </h2>
              <a href={buildWhatsAppUrl()} className="mt-2 block text-lg text-ink hover:text-accent">
                {contact.phoneDisplay}
              </a>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-navy">E-mail</h2>
              <a href={`mailto:${contact.email}`} className="mt-2 block text-lg text-ink hover:text-accent">
                {contact.email}
              </a>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-navy">Endereço</h2>
              <p className="mt-2 text-lg leading-relaxed text-ink">
                {contact.address.line1}
                <br />
                {contact.address.line2}
                <br />
                {contact.address.city}/{contact.address.state}
                {contact.address.zip ? ` — ${contact.address.zip}` : ""}
              </p>
            </div>
            {contact.hours && (
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-navy">
                  Horário de atendimento
                </h2>
                <p className="mt-2 text-lg text-ink">{contact.hours}</p>
              </div>
            )}
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-navy">
                Redes sociais
              </h2>
              <div className="mt-2 flex gap-4 text-lg text-ink">
                <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                  Instagram
                </a>
                <a href={social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                  Facebook
                </a>
              </div>
            </div>
            <Button href={buildWhatsAppUrl()} variant="accent">
              Falar pelo WhatsApp
            </Button>
          </div>

          <div className="overflow-hidden rounded-3xl border border-line">
            <iframe
              title="Mapa de localização da ORB Oftalmo"
              src={contact.mapEmbedUrl}
              className="h-full min-h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
