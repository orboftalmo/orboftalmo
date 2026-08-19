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
  o primeiro arquivo a revisar antes de publicar o site**. O CEP (`address.zip`)
  e o horário de atendimento (`hours`) estão como `undefined` propositalmente —
  não foram confirmados nas fontes pesquisadas, então a UI pública (página de
  Contato) simplesmente omite esses campos em vez de mostrar um placeholder
  visível. Preencha os dois para que voltem a aparecer.
- `src/content/products.ts` — categorias e catálogo de produtos. Os nomes dos
  produtos foram levantados por pesquisa pública sobre o portfólio APRAMED; o
  campo `specs` de cada produto é um placeholder proposital para receber a
  ficha técnica oficial (nenhuma especificação numérica foi inventada). O mapa
  `audienceByCategory` define o "Para quem é" exibido nas páginas de produto.
- `src/content/news.ts` — posts do blog/notícias. **Lista vazia
  propositalmente**: não havia conteúdo real disponível, então a página de
  Notícias exibe um estado vazio profissional em vez de posts fictícios.
  Adicione notícias reais aqui seguindo a interface `NewsPost`.
- `src/content/events.ts` — eventos e congressos. Mesmo caso de `news.ts`:
  lista vazia até que a ORB confirme a agenda real.

Imagens de produtos, notícias, eventos e do hero estão em
`public/images/` como ilustrações vetoriais (SVG) neutras — devem ser
substituídas por fotografias reais dos equipamentos e da empresa assim que
estiverem disponíveis.

## Marca

O mark ORB (`src/components/layout/OrbMark.tsx`, favicon em `src/app/icon.svg`
e `src/app/favicon.ico`) e a paleta de cores em `src/app/globals.css`
(`--color-navy: #091732`, `--color-accent: #00adef`) foram extraídos com
fidelidade vetorial do arquivo oficial fornecido pelo cliente
(`Marca_Pos_Cor.eps`) via Ghostscript + pdftocairo — não são uma recriação
aproximada. Os arquivos de origem (mark isolado e lockup completo com o nome
por extenso) ficam em `public/brand/` para reuso futuro.

## Formulários

O formulário de **Orçamento** (`/orcamento`, em
`src/components/forms/QuoteForm.tsx`) está pronto na interface, mas
propositalmente **sem integração de backend real** (nenhuma integração falsa
foi criada). O arquivo tem um comentário `TODO(integração)` indicando onde
plugar uma API route própria para enviar os dados por e-mail e/ou para um CRM
(ex.: Leads2B).

A página **Trabalhe Conosco** foi removida nesta fase (não fazia parte do
escopo comercial B2B priorizado); o formulário de currículo pode ser
reintroduzido depois se fizer sentido.

## Estrutura de páginas

Home, Institucional, Produtos (com filtro por categoria e páginas individuais
em `/produtos/[slug]`), Assistência, Notícias (`/noticias` e
`/noticias/[slug]`), Eventos, Contato, Orçamento e Política de Privacidade.
SEO técnico (metadata por página, Open Graph, `sitemap.xml`, `robots.txt`,
dados estruturados JSON-LD) já está implementado em `src/app/layout.tsx`,
`src/app/sitemap.ts` e `src/app/robots.ts`.
