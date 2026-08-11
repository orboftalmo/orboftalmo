/**
 * Dados institucionais e de contato da ORB Oftalmo.
 *
 * FONTES: pesquisa pública (Google/Instagram/LinkedIn/registros públicos), já que o
 * acesso direto a orboftalmo.com.br e apramed.com.br não estava disponível no ambiente
 * de build. Os dados abaixo têm boa confiança, mas foram marcados com "confirmar" nos
 * campos onde a fonte era única ou desatualizada. Antes de publicar em produção, o time
 * da ORB deve validar cada campo deste arquivo — é o único lugar do projeto onde esses
 * dados precisam ser alterados.
 */

export const siteConfig = {
  name: "ORB Oftalmo",
  legalName: "ORB Oftalmo Representações Brasil",
  shortTagline: "Representante APRAMED em Minas Gerais",
  description:
    "A ORB Oftalmo é representante da APRAMED em Minas Gerais, levando equipamentos e soluções para oftalmologia a médicos, clínicas, hospitais e centros oftalmológicos com atendimento consultivo e especializado.",
  url: "https://www.orboftalmo.com.br",
  foundedYear: 1984,

  contact: {
    phoneDisplay: "(31) 99791-4696",
    // Formato E.164 sem símbolos, usado para o link do WhatsApp (wa.me).
    whatsappNumber: "5531997914696",
    whatsappDefaultMessage:
      "Olá! Gostaria de conhecer os equipamentos APRAMED disponíveis através da ORB em Minas Gerais.",
    email: "contato@orboftalmo.com.br",
    address: {
      line1: "Av. do Contorno, 3979 — salas 1004/1005",
      line2: "Bairro São Lucas",
      city: "Belo Horizonte",
      state: "MG",
      // CEP não confirmado nas fontes pesquisadas.
      zip: "[CEP a confirmar]",
      country: "Brasil",
    },
    hours: "[Horário de atendimento a confirmar — sugestão: Segunda a sexta, 8h às 18h]",
    mapEmbedUrl:
      "https://www.google.com/maps?q=Av.+do+Contorno,+3979,+Belo+Horizonte,+MG&output=embed",
  },

  social: {
    instagram: "https://www.instagram.com/orb.oftalmo/",
    facebook: "https://www.facebook.com/orb.oftalmo/",
    linkedin: "[link do LinkedIn a confirmar]",
  },

  apramed: {
    name: "APRAMED",
    url: "https://www.apramed.com.br",
    description:
      "A APRAMED é uma indústria 100% brasileira de equipamentos oftalmológicos, referência no setor na América Latina, com fábrica em São Carlos (SP), certificações de qualidade ISO 13485 e produtos registrados na ANVISA, exportando para dezenas de países.",
  },
} as const;

export const navLinks = [
  { label: "Início", href: "/" },
  { label: "Institucional", href: "/institucional" },
  { label: "Produtos", href: "/produtos" },
  { label: "Assistência", href: "/assistencia" },
  { label: "Notícias", href: "/noticias" },
  { label: "Eventos", href: "/eventos" },
  { label: "Trabalhe Conosco", href: "/trabalhe-conosco" },
  { label: "Contato", href: "/contato" },
] as const;

export const footerProductLinks = [
  { label: "Refração", href: "/produtos?categoria=refracao" },
  { label: "Diagnóstico", href: "/produtos?categoria=diagnostico" },
  { label: "Cirurgia", href: "/produtos?categoria=cirurgia" },
  { label: "Consultórios Oftalmológicos", href: "/produtos?categoria=consultorios" },
] as const;

export const footerInstitutionalLinks = [
  { label: "Quem somos", href: "/institucional" },
  { label: "Assistência", href: "/assistencia" },
  { label: "Notícias", href: "/noticias" },
  { label: "Eventos", href: "/eventos" },
  { label: "Trabalhe Conosco", href: "/trabalhe-conosco" },
] as const;

export function buildWhatsAppUrl(message?: string) {
  const text = encodeURIComponent(message ?? siteConfig.contact.whatsappDefaultMessage);
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${text}`;
}
