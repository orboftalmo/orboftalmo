import { buildWhatsAppUrl, siteConfig } from "@/content/site-config";

export function WhatsAppButton() {
  return (
    <a
      href={buildWhatsAppUrl(siteConfig.contact.whatsappSpecialistMessage)}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-4 right-4 z-40 flex h-13 items-center gap-2 rounded-full bg-[#25D366] pl-3 pr-4 text-white shadow-lg shadow-black/20 transition-transform duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:bottom-6 sm:right-6 sm:h-14 sm:pl-3.5"
      aria-label="Fale com um especialista ORB pelo WhatsApp"
    >
      <svg
        viewBox="0 0 32 32"
        width="26"
        height="26"
        fill="currentColor"
        aria-hidden="true"
        className="shrink-0"
      >
        <path d="M16.02 3C9.4 3 4 8.36 4 14.94c0 2.34.66 4.53 1.8 6.4L4 29l7.87-1.75a13.1 13.1 0 0 0 4.15.68c6.62 0 12.02-5.36 12.02-11.94C28.04 8.36 22.64 3 16.02 3zm7.03 17.06c-.3.83-1.72 1.6-2.38 1.7-.6.1-1.36.14-2.2-.14-.5-.16-1.15-.37-1.98-.72-3.5-1.5-5.78-5.02-5.96-5.26-.17-.24-1.42-1.88-1.42-3.6 0-1.7.9-2.55 1.22-2.9.3-.33.68-.42.9-.42h.66c.2 0 .5-.03.77.6.3.7.98 2.4 1.06 2.58.08.17.14.38.02.6-.1.24-.16.38-.32.58-.16.2-.34.44-.48.6-.16.16-.33.34-.14.68.2.34.87 1.44 1.87 2.34 1.28 1.15 2.36 1.5 2.7 1.68.34.16.54.14.74-.08.2-.24.86-1 1.1-1.34.22-.34.44-.28.76-.16.3.1 1.98.94 2.32 1.1.34.18.56.26.64.4.08.16.08.86-.2 1.68z" />
      </svg>
      <span className="text-xs font-semibold whitespace-nowrap sm:text-sm">
        Fale com especialista
      </span>
    </a>
  );
}
