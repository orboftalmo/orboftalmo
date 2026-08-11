/**
 * Marca ORB (badge circular + monograma "ORB").
 *
 * Reconstrução vetorial da logo enviada pelo cliente (imagem colada no chat, sem arquivo
 * de origem disponível no ambiente). Caso o arquivo vetorial oficial (SVG/AI/EPS) seja
 * fornecido depois, ele deve substituir este componente para garantir fidelidade exata.
 */
export function OrbMark({ size = 34, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="100" cy="100" r="100" fill="#070f2e" />
      <g stroke="#1ea7e0" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <circle cx="61" cy="100" r="27" />
        <path d="M99 70 V130" />
        <path d="M99 70 H119 A18 18 0 0 1 119 106 H99" />
        <path d="M108 104 L129 130" />
        <path d="M145 70 V130" />
        <path d="M145 70 H163 A15 15 0 0 1 163 100 H145" />
        <path d="M145 100 H165 A15 15 0 0 1 165 130 H145" />
      </g>
    </svg>
  );
}
