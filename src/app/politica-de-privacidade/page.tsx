import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de Privacidade e tratamento de dados pessoais da ORB Oftalmo, em conformidade com a LGPD.",
  alternates: { canonical: "/politica-de-privacidade" },
};

export default function PoliticaDePrivacidadePage() {
  return (
    <>
      <PageHero
        title="Política de Privacidade"
        breadcrumb={[{ label: "Início", href: "/" }, { label: "Política de Privacidade" }]}
      />
      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl space-y-8 text-sm leading-relaxed text-ink-soft">
          <p>
            Esta Política de Privacidade descreve como a {siteConfig.legalName} (&ldquo;ORB
            Oftalmo&rdquo;) coleta, utiliza e protege os dados pessoais fornecidos pelos
            visitantes deste site,
            em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 —
            LGPD).
          </p>

          <div>
            <h2 className="text-base font-semibold text-navy">Dados coletados</h2>
            <p className="mt-2">
              Coletamos os dados fornecidos voluntariamente nos formulários do site — como nome,
              e-mail, telefone, dados profissionais e mensagem — para fins de atendimento
              comercial, envio de orçamentos e relacionamento com médicos, clínicas e hospitais.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-navy">Uso das informações</h2>
            <p className="mt-2">
              As informações são utilizadas exclusivamente para responder às solicitações
              enviadas (orçamento, contato, candidaturas de trabalho) e não são compartilhadas
              com terceiros para fins de marketing sem consentimento.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-navy">Direitos do titular</h2>
            <p className="mt-2">
              Você pode solicitar, a qualquer momento, a confirmação, o acesso, a correção ou a
              exclusão dos seus dados pessoais entrando em contato pelo e-mail{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="text-navy link-underline">
                {siteConfig.contact.email}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-navy">Contato</h2>
            <p className="mt-2">
              Em caso de dúvidas sobre esta política, entre em contato pelos canais disponíveis na
              página de{" "}
              <a href="/contato" className="text-navy link-underline">
                Contato
              </a>
              .
            </p>
          </div>

          <p className="text-xs text-ink-soft/70">
            Este documento é um modelo estrutural e deve ser revisado por um profissional
            jurídico antes da publicação definitiva do site.
          </p>
        </Container>
      </section>
    </>
  );
}
