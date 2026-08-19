/**
 * Catálogo de produtos ORB / APRAMED.
 *
 * Categorias e nomes de produto foram levantados a partir de pesquisa pública sobre o
 * portfólio da APRAMED (o site oficial não pôde ser acessado diretamente no ambiente de
 * build). Descrições, características, aplicações e diferenciais estão escritas em nível
 * geral e NÃO incluem especificações técnicas numéricas inventadas — o campo `specs` de
 * cada produto é proposital um placeholder para ser preenchido com a ficha técnica oficial
 * fornecida pela APRAMED/ORB. Imagens usam placeholders neutros até que fotos reais dos
 * equipamentos sejam disponibilizadas pela ORB.
 *
 * Esta estrutura foi pensada para ser facilmente migrada para um CMS headless no futuro.
 */

export type ProductCategorySlug =
  | "refracao"
  | "diagnostico"
  | "cirurgia"
  | "consultorios"
  | "outros";

export interface ProductCategory {
  slug: ProductCategorySlug;
  name: string;
  description: string;
}

export const productCategories: ProductCategory[] = [
  {
    slug: "consultorios",
    name: "Consultórios Oftalmológicos",
    description:
      "Conjuntos completos de coluna e cadeira oftalmológica para estruturar consultórios com ergonomia, design e fluxo de atendimento otimizado.",
  },
  {
    slug: "refracao",
    name: "Refração",
    description:
      "Equipamentos para exames refracionais, do refrator manual aos sistemas com controle eletrônico.",
  },
  {
    slug: "diagnostico",
    name: "Diagnóstico",
    description:
      "Instrumentos de exame e diagnóstico para avaliação completa da saúde ocular, da córnea à retina.",
  },
  {
    slug: "cirurgia",
    name: "Cirurgia",
    description:
      "Equipamentos e mobiliário para centro cirúrgico oftalmológico, com foco em precisão e segurança.",
  },
  {
    slug: "outros",
    name: "Outros Produtos",
    description:
      "Demais soluções do portfólio APRAMED disponíveis através da ORB em Minas Gerais.",
  },
];

export interface Product {
  slug: string;
  name: string;
  category: ProductCategorySlug;
  shortDescription: string;
  description: string;
  features: string[];
  applications: string[];
  differentials: string[];
  // Placeholder proposital — preencher com a ficha técnica oficial do fabricante.
  specs: { label: string; value: string }[];
  image: string;
  gallery: string[];
  featured?: boolean;
}

const specsPlaceholder = [
  { label: "Ficha técnica completa", value: "Disponível mediante solicitação à equipe ORB" },
];

export const products: Product[] = [
  {
    slug: "conjunto-oftalmologico-extreme",
    name: "Conjunto Oftalmológico Extreme",
    category: "consultorios",
    shortDescription:
      "Conjunto premium de coluna e cadeira oftalmológica com painel touchscreen para controle de movimentos.",
    description:
      "O Conjunto Oftalmológico Extreme é a linha mais sofisticada de coluna e cadeira oftalmológica da APRAMED, com painel touchscreen que centraliza o controle dos movimentos do equipamento e dos recursos de refração, trazendo mais ergonomia ao médico durante o atendimento.",
    features: [
      "Painel de controle touchscreen",
      "Design premium e acabamento diferenciado",
      "Movimentação integrada de coluna, cadeira e refração",
    ],
    applications: ["Consultórios de alto padrão", "Clínicas e centros oftalmológicos"],
    differentials: [
      "Fabricação nacional APRAMED",
      "Foco em ergonomia para o médico e conforto para o paciente",
    ],
    specs: specsPlaceholder,
    image: "/images/products/placeholder-consultorio.svg",
    gallery: ["/images/products/placeholder-consultorio.svg"],
    featured: true,
  },
  {
    slug: "consultorio-elegance-completo",
    name: "Consultório Elegance Completo",
    category: "consultorios",
    shortDescription:
      "Consultório oftalmológico completo com design adaptável a diferentes espaços e perfis de clínica.",
    description:
      "A linha Elegance foi desenvolvida para atender públicos diversos dentro da oftalmologia, com design que se adapta a diferentes espaços físicos e funcionalidades que reforçam a relação custo-benefício do investimento em consultório completo.",
    features: [
      "Solução completa para montagem de consultório",
      "Diferentes configurações de cadeira disponíveis",
      "Design adaptável a espaços variados",
    ],
    applications: ["Novos consultórios", "Expansão de clínicas oftalmológicas"],
    differentials: ["Custo-benefício", "Flexibilidade de configuração"],
    specs: specsPlaceholder,
    image: "/images/products/placeholder-consultorio.svg",
    gallery: ["/images/products/placeholder-consultorio.svg"],
    featured: true,
  },
  {
    slug: "conjunto-elegance-coluna-cadeira",
    name: "Conjunto Elegance Coluna/Cadeira Oftalmológica",
    category: "consultorios",
    shortDescription:
      "Conjunto de coluna e cadeira oftalmológica disponível em versão fixa, reclinável manual e reclinável automática.",
    description:
      "O conjunto Elegance está disponível em três configurações de cadeira: modelo fixo com ajuste de altura, reclinável manual a 180° e reclinável automática a 180°, permitindo escolher a opção mais adequada à rotina da clínica.",
    features: [
      "Três opções de cadeira: fixa, reclinável manual e reclinável automática",
      "Reclínio de até 180°",
      "Estrutura pensada para uso intensivo em clínica",
    ],
    applications: ["Consultórios oftalmológicos de médio e grande porte"],
    differentials: ["Flexibilidade de configuração conforme o perfil de atendimento"],
    specs: specsPlaceholder,
    image: "/images/products/placeholder-consultorio.svg",
    gallery: ["/images/products/placeholder-consultorio.svg"],
  },
  {
    slug: "conjunto-apm1-coluna-cadeira",
    name: "Conjunto APM1 Coluna/Cadeira Oftalmológica",
    category: "consultorios",
    shortDescription:
      "Conjunto com braço refrator pantográfico balanceado e estrutura interna em aço.",
    description:
      "O Conjunto APM1 conta com braço refrator pantográfico balanceado, estrutura interna em aço, luminária pantográfica em plástico com duas intensidades de luz e pés reguláveis, sendo uma opção robusta para consultórios que buscam praticidade no dia a dia.",
    features: [
      "Braço refrator pantográfico balanceado",
      "Estrutura interna em aço",
      "Luminária com duas intensidades de luz",
      "Pés reguláveis",
    ],
    applications: ["Consultórios oftalmológicos"],
    differentials: ["Robustez e praticidade operacional"],
    specs: specsPlaceholder,
    image: "/images/products/placeholder-consultorio.svg",
    gallery: ["/images/products/placeholder-consultorio.svg"],
  },
  {
    slug: "mesa-oftalmologica-central-eletrica",
    name: "Mesa Oftalmológica Central Elétrica",
    category: "consultorios",
    shortDescription: "Mesa central elétrica para apoio de equipamentos no consultório oftalmológico.",
    description:
      "Mesa central com acionamento elétrico, projetada para organizar e dar suporte aos equipamentos utilizados durante o exame oftalmológico no consultório.",
    features: ["Acionamento elétrico", "Estrutura para organização dos equipamentos de exame"],
    applications: ["Consultórios e salas de exame oftalmológico"],
    differentials: ["Praticidade operacional para a equipe clínica"],
    specs: specsPlaceholder,
    image: "/images/products/placeholder-consultorio.svg",
    gallery: ["/images/products/placeholder-consultorio.svg"],
  },
  {
    slug: "refrator-de-greens",
    name: "Refrator de Greens",
    category: "refracao",
    shortDescription: "Refrator utilizado no exame de refração para determinação do grau visual.",
    description:
      "Equipamento de refração utilizado pelo oftalmologista para a determinação precisa do grau visual do paciente durante a consulta.",
    features: ["Uso consultivo em exame de refração", "Compatível com a rotina de consultório"],
    applications: ["Exames de refração e adaptação de lentes"],
    differentials: ["Precisão no exame refracional"],
    specs: specsPlaceholder,
    image: "/images/products/placeholder-refracao.svg",
    gallery: ["/images/products/placeholder-refracao.svg"],
    featured: true,
  },
  {
    slug: "autorrefrator",
    name: "Autorrefrator",
    category: "refracao",
    shortDescription: "Equipamento para medição automatizada do grau de refração do paciente.",
    description:
      "Equipamento utilizado para a medição automatizada e rápida do grau de refração, agilizando a etapa inicial do exame oftalmológico.",
    features: ["Medição automatizada", "Agilidade no fluxo de atendimento"],
    applications: ["Triagem e exame refracional"],
    differentials: ["Rapidez e praticidade para a rotina da clínica"],
    specs: specsPlaceholder,
    image: "/images/products/placeholder-refracao.svg",
    gallery: ["/images/products/placeholder-refracao.svg"],
  },
  {
    slug: "lampada-de-fenda",
    name: "Lâmpada de Fenda",
    category: "diagnostico",
    shortDescription: "Equipamento essencial para exame biomicroscópico do segmento anterior do olho.",
    description:
      "A lâmpada de fenda é um dos equipamentos centrais do consultório oftalmológico, permitindo o exame biomicroscópico detalhado do segmento anterior do olho.",
    features: ["Exame biomicroscópico do segmento anterior", "Uso consultivo diário"],
    applications: ["Exame oftalmológico de rotina", "Diagnóstico de córnea, íris e cristalino"],
    differentials: ["Equipamento essencial em qualquer consultório oftalmológico"],
    specs: specsPlaceholder,
    image: "/images/products/placeholder-diagnostico.svg",
    gallery: ["/images/products/placeholder-diagnostico.svg"],
    featured: true,
  },
  {
    slug: "microscopio-especular",
    name: "Microscópio Especular",
    category: "diagnostico",
    shortDescription: "Equipamento para avaliação do endotélio corneano.",
    description:
      "Equipamento de diagnóstico utilizado para avaliar a densidade e a morfologia das células do endotélio corneano.",
    features: ["Avaliação do endotélio corneano"],
    applications: ["Avaliação pré-cirúrgica", "Acompanhamento de saúde corneana"],
    differentials: ["Suporte à decisão clínica e cirúrgica"],
    specs: specsPlaceholder,
    image: "/images/products/placeholder-diagnostico.svg",
    gallery: ["/images/products/placeholder-diagnostico.svg"],
  },
  {
    slug: "biometro",
    name: "Biômetro",
    category: "diagnostico",
    shortDescription: "Equipamento para medição biométrica do olho, essencial no planejamento de cirurgias.",
    description:
      "Utilizado para a medição biométrica do olho, o biômetro é fundamental no planejamento de cirurgias oftalmológicas, como a de catarata.",
    features: ["Medições biométricas oculares"],
    applications: ["Planejamento cirúrgico", "Cálculo de lente intraocular"],
    differentials: ["Precisão no suporte ao planejamento cirúrgico"],
    specs: specsPlaceholder,
    image: "/images/products/placeholder-diagnostico.svg",
    gallery: ["/images/products/placeholder-diagnostico.svg"],
  },
  {
    slug: "paquimetro",
    name: "Paquímetro",
    category: "diagnostico",
    shortDescription: "Equipamento para medição da espessura da córnea.",
    description:
      "Equipamento de diagnóstico utilizado para medir a espessura da córnea, informação relevante em diversas avaliações oftalmológicas.",
    features: ["Medição da espessura corneana"],
    applications: ["Avaliação de glaucoma", "Avaliação pré-cirúrgica refrativa"],
    differentials: ["Apoio a diagnósticos que dependem da espessura corneana"],
    specs: specsPlaceholder,
    image: "/images/products/placeholder-diagnostico.svg",
    gallery: ["/images/products/placeholder-diagnostico.svg"],
  },
  {
    slug: "topografo-de-cornea",
    name: "Topógrafo de Córnea",
    category: "diagnostico",
    shortDescription: "Equipamento para mapeamento da curvatura da superfície corneana.",
    description:
      "O topógrafo de córnea realiza o mapeamento detalhado da curvatura da superfície corneana, apoiando diagnósticos como ceratocone e o planejamento de cirurgias refrativas.",
    features: ["Mapeamento da curvatura corneana"],
    applications: ["Diagnóstico de ceratocone", "Planejamento refrativo"],
    differentials: ["Detalhamento da superfície corneana para decisões clínicas"],
    specs: specsPlaceholder,
    image: "/images/products/placeholder-diagnostico.svg",
    gallery: ["/images/products/placeholder-diagnostico.svg"],
  },
  {
    slug: "sistema-save-acuidade-visual",
    name: "Sistema SAVE de Acuidade Visual",
    category: "diagnostico",
    shortDescription: "Sistema para exame de acuidade visual do consultório oftalmológico.",
    description:
      "Sistema utilizado para a condução do exame de acuidade visual, etapa fundamental da consulta oftalmológica.",
    features: ["Exame de acuidade visual"],
    applications: ["Consulta oftalmológica de rotina"],
    differentials: ["Praticidade na condução do exame"],
    specs: specsPlaceholder,
    image: "/images/products/placeholder-diagnostico.svg",
    gallery: ["/images/products/placeholder-diagnostico.svg"],
  },
  {
    slug: "oftalmoscopio-indireto",
    name: "Oftalmoscópio Indireto com Fonte Comum",
    category: "diagnostico",
    shortDescription: "Equipamento para exame de fundo de olho e avaliação da retina.",
    description:
      "O oftalmoscópio indireto permite a avaliação detalhada do fundo de olho, sendo um instrumento importante no exame da retina e do nervo óptico.",
    features: ["Exame de fundo de olho"],
    applications: ["Avaliação de retina", "Exame de rotina e acompanhamento clínico"],
    differentials: ["Instrumento consolidado no exame oftalmológico"],
    specs: specsPlaceholder,
    image: "/images/products/placeholder-diagnostico.svg",
    gallery: ["/images/products/placeholder-diagnostico.svg"],
  },
  {
    slug: "microscopio-cirurgico",
    name: "Microscópio Cirúrgico",
    category: "cirurgia",
    shortDescription: "Microscópio de alta precisão para procedimentos cirúrgicos oftalmológicos.",
    description:
      "Equipamento de precisão utilizado em centro cirúrgico para procedimentos oftalmológicos, oferecendo a visualização necessária para cirurgias como catarata e outras intervenções.",
    features: ["Visualização de alta precisão em centro cirúrgico"],
    applications: ["Cirurgias oftalmológicas em geral"],
    differentials: ["Precisão e segurança no procedimento cirúrgico"],
    specs: specsPlaceholder,
    image: "/images/products/placeholder-cirurgia.svg",
    gallery: ["/images/products/placeholder-cirurgia.svg"],
    featured: true,
  },
  {
    slug: "mesa-cirurgica-ultrassom",
    name: "Mesa Cirúrgica para Ultrassom",
    category: "cirurgia",
    shortDescription: "Mobiliário cirúrgico de apoio para procedimentos com ultrassom.",
    description:
      "Mobiliário utilizado em centro cirúrgico como apoio em procedimentos que envolvem equipamentos de ultrassom oftalmológico.",
    features: ["Apoio a procedimentos cirúrgicos com ultrassom"],
    applications: ["Centro cirúrgico oftalmológico"],
    differentials: ["Praticidade e segurança operacional"],
    specs: specsPlaceholder,
    image: "/images/products/placeholder-cirurgia.svg",
    gallery: ["/images/products/placeholder-cirurgia.svg"],
  },
];

/**
 * "Para quem é" por categoria — perfil de clínica/profissional a que a linha de produto
 * se destina. Definido por categoria (não por produto individual) para evitar repetição;
 * descreve o perfil de forma geral e segura, sem inventar dados específicos de clientes.
 */
const audienceByCategory: Record<ProductCategorySlug, string[]> = {
  consultorios: [
    "Consultórios oftalmológicos em fase de montagem ou expansão",
    "Clínicas que buscam padronizar o atendimento em múltiplas salas",
  ],
  refracao: [
    "Consultórios que realizam exame de refração como parte da rotina de consulta",
  ],
  diagnostico: [
    "Clínicas e centros oftalmológicos com rotina de exames diagnósticos",
  ],
  cirurgia: [
    "Centros cirúrgicos oftalmológicos e clínicas com estrutura para procedimentos",
  ],
  outros: ["Clínicas e hospitais com necessidades específicas de equipamento oftalmológico"],
};

export function getProductAudience(product: Product) {
  return audienceByCategory[product.category];
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getCategoryBySlug(slug: string) {
  return productCategories.find((category) => category.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 3) {
  return products
    .filter((item) => item.category === product.category && item.slug !== product.slug)
    .slice(0, limit);
}

export function getFeaturedProducts(limit = 4) {
  return products.filter((product) => product.featured).slice(0, limit);
}
