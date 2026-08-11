# ORB Oftalmo — Site institucional e comercial

Site institucional e comercial da ORB Oftalmo, representante da APRAMED em Minas
Gerais. Construído com Next.js (App Router) + TypeScript + Tailwind CSS.

## Rodando localmente

```bash
npm install
npm run dev
```

## Onde editar o conteúdo

Todo o conteúdo do site fica centralizado em `src/content/`, para facilitar
atualizações sem precisar mexer nos componentes ou nas páginas:

- `src/content/site-config.ts` — nome, descrição, telefone/WhatsApp, e-mail,
  endereço, horário de atendimento, redes sociais e menu de navegação. **Este é
  o primeiro arquivo a revisar antes de publicar o site** — vários campos foram
  preenchidos com dados obtidos por pesquisa pública (o site atual da ORB e da
  APRAMED não puderam ser acessados diretamente durante o desenvolvimento) e
  estão comentados no próprio arquivo indicando o que precisa de confirmação.
- `src/content/products.ts` — categorias e catálogo de produtos. Os nomes dos
  produtos foram levantados por pesquisa pública sobre o portfólio APRAMED; o
  campo `specs` de cada produto é um placeholder proposital para receber a
  ficha técnica oficial (nenhuma especificação numérica foi inventada).
- `src/content/news.ts` — posts do blog/notícias. Os itens atuais são
  **conteúdo de exemplo**, claramente marcados com `[Exemplo]`, e devem ser
  substituídos por notícias reais da ORB.
- `src/content/events.ts` — eventos e congressos. Mesmo caso de `news.ts`:
  conteúdo de exemplo a ser substituído pela agenda real.

Imagens de produtos, notícias, eventos e do hero estão em
`public/images/` como ilustrações vetoriais (SVG) neutras — devem ser
substituídas por fotografias reais dos equipamentos e da empresa assim que
estiverem disponíveis.

## Formulários

Os formulários de **Orçamento** (`/orcamento`) e **Trabalhe Conosco**
(`/trabalhe-conosco`) — em `src/components/forms/QuoteForm.tsx` e
`CareersForm.tsx` — estão prontos na interface, mas propositalmente **sem
integração de backend real** (nenhuma integração falsa foi criada). Cada
arquivo tem um comentário `TODO(integração)` indicando onde plugar uma API
route própria para enviar os dados por e-mail e/ou para um CRM (ex.: Leads2B).

## Estrutura de páginas

Home, Institucional, Produtos (com filtro por categoria e páginas individuais
em `/produtos/[slug]`), Assistência, Notícias (`/noticias` e
`/noticias/[slug]`), Eventos, Trabalhe Conosco, Contato, Orçamento e Política
de Privacidade. SEO técnico (metadata por página, Open Graph, `sitemap.xml`,
`robots.txt`, dados estruturados JSON-LD) já está implementado em
`src/app/layout.tsx`, `src/app/sitemap.ts` e `src/app/robots.ts`.
