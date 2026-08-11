import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";
import {
  siteConfig,
  footerProductLinks,
  footerInstitutionalLinks,
  buildWhatsAppUrl,
} from "@/content/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-navy-deep text-white/80">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo inverted />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
            {siteConfig.description}
          </p>
          <div className="mt-6 flex items-center gap-4">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da ORB Oftalmo"
              className="text-white/60 transition-colors hover:text-white"
            >
              Instagram
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook da ORB Oftalmo"
              className="text-white/60 transition-colors hover:text-white"
            >
              Facebook
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
            Produtos
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            {footerProductLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/70 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
            Institucional
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            {footerInstitutionalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/70 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
            Contato
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li>
              <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                WhatsApp: {siteConfig.contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white">
                {siteConfig.contact.email}
              </a>
            </li>
            <li>
              {siteConfig.contact.address.line1}
              <br />
              {siteConfig.contact.address.line2} — {siteConfig.contact.address.city}/
              {siteConfig.contact.address.state}
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} ORB Oftalmo — Todos os direitos reservados.</p>
          <div className="flex gap-5">
            <Link href="/politica-de-privacidade" className="hover:text-white">
              Política de Privacidade
            </Link>
            <span>LGPD — Lei nº 13.709/2018</span>
          </div>
        </Container>
      </div>
    </footer>
  );
}
