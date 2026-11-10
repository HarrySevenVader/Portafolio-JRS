export type Project = {
  name: string;
  logoUrl?: string;
  kind: string;
  summary: string;
  tools: string[];
  url: string;
  journey: string;
  flowType: "full-stack" | "landing";
};

export type RepositoryFlow = {
  type: "mobile-api" | "audio-pipeline" | "dispatch-service";
  journey: string;
};

export type RepositoryProject = {
  name: string;
  logoUrl?: string;
  kind: string;
  summary: string;
  tools: string[];
  sourceUrl: string;
  sourceType: "repository" | "organization";
  flow?: RepositoryFlow;
};

export type Role = {
  id: string;
  organization: string;
  logoUrl: string;
  title: string;
  department?: string;
  period: string;
  duration: string;
  employmentType: string;
  description: string;
  responsibilities: string[];
  achievements: {
    id: string;
    value: string;
    label: string;
    detail: string;
  }[];
};

export type Certification = {
  title: string;
  issuer?: string;
  year?: string;
  url: string;
};

export type Practice = {
  icon: "web" | "mobile" | "data";
  title: string;
  description: string;
};

export const links = {
  cv: "/assets/files/Jarol_Riquelme_CV.pdf",
  email: "mailto:jriquelme.harrysev@gmail.com",
  github: "https://github.com/HarrySevenVader",
  linkedin: "https://www.linkedin.com/in/jarol-riquelme-santiba%C3%B1ez-71bb37338/",
};

export const profile = {
  degree: "Ingeniería en Informática",
  status: "Titulado",
  university: "Universidad Tecnológica Metropolitana",
  universityShortName: "UTEM",
  period: "2021 – 2026",
};

// Los PDF viven en public/assets/files/. Completa issuer y year cuando confirmes esos datos.
export const certifications: Certification[] = [
  {
    title: "Curso de Excel",
    url: "/assets/files/Certificado_Curso_Excel_JR.pdf",
  },
  {
    title: "Curso de Power BI",
    url: "/assets/files/Certificado_Curso_PowerBI_JR.pdf",
  },
  {
    title: "Power BI Analytics",
    url: "/assets/files/Certificado_PowerBIAnalytcs_JR.pdf",
  },
];

// Añade aquí nuevas actividades; la numeración del panel se genera automáticamente.
export const practices: Practice[] = [
  { icon: "web", title: "Desarrollo Web", description: "Desarrollo aplicaciones web de extremo a extremo, desde interfaces responsivas hasta APIs REST, lógica de negocio y bases de datos. Conecto frontend y backend, integro servicios externos y organizo componentes reutilizables para facilitar el mantenimiento. Utilizo Git para gestionar versiones y preparo el despliegue en la nube, considerando las necesidades del usuario y los requisitos de cada proyecto." },
  { icon: "mobile", title: "Desarrollo Mobile", description: "Desarrollo aplicaciones móviles con Flutter, trabajando en la construcción de interfaces, navegación y manejo de estado. Integro APIs y servicios para conectar las funcionalidades de la aplicación con sus datos. Presto atención a la organización del código, la reutilización de widgets y los estados de carga y error, buscando una experiencia clara y consistente entre pantallas." },
  { icon: "data", title: "Automatización y Análisis de Datos", description: "Automatizo tareas repetitivas e integro fuentes de información mediante scripts y flujos de trabajo. Utilizo Python, SQL y Excel para extraer, limpiar, transformar y validar datos antes de analizarlos. Desarrollo dashboards en Power BI y Looker Studio para visualizar KPIs, explorar tendencias y comunicar resultados que ayuden a comprender el desempeño de un proceso e identificar oportunidades de mejora." },
];

// Solo proyectos con un sitio público activo.
export const projects: Project[] = [
  {
    name: "Gustito",
    logoUrl: "/assets/projects/gustito-logo.png",
    kind: "Sitio web · Trabajo de Titulación · Gastronomia",
    summary: "Carta de productos, información de locales y acceso a pedidos reunidos en una experiencia sencilla para el cliente.",
    tools: ["Diseño UX/UI", "Desarrollo full stack", "DevOps", "Scrum"],
    url: "https://el-gustito.vercel.app/",
    journey: "Explorar carta → hacer pedido → gestionar en local",
    flowType: "full-stack",
  },
  {
    name: "Óptica GYD",
    logoUrl: "/assets/projects/logo-gyd.png",
    kind: "Landing Page · Comercio local",
    summary: "Una vitrina digital para conocer los lentes, entender cómo comprar y encontrar los canales de atención.",
    tools: ["Desarrollo Frontend", "Diseño UX/UI", "Despliegue Web"],
    url: "https://www.opticagyd.cl/",
    journey: "Explorar productos → informarse → contactar",
    flowType: "landing",
  },
];

// Agrega aquí los proyectos cuyo código está en un repositorio, aunque aún no tengan sitio público.
export const repositoryProjects: RepositoryProject[] = [
  {
    name: "Ruta 5",
    logoUrl: "/assets/projects/ruta5-logo.png",
    kind: "Aplicación móvil · Restobar",
    summary: "Aplicación móvil para consultar el menú y acceder a funciones de autenticación y valoración de platos.",
    tools: ["Flutter", "Dart", "Firebase"],
    sourceUrl: "https://github.com/HarrySevenVader/Ruta-5-",
    sourceType: "repository",
    flow: {
      type: "mobile-api",
      journey: "Explorar menú → hacer pedido → valorar plato",
    },
  },
  {
    name: "ConstrUTEM",
    logoUrl: "/assets/projects/construtem.png",
    kind: "Proyecto académico · Célula de despacho",
    summary: "Proyecto colaborativo organizado en tres células. Participé en el frontend de despacho y colaboré en backend para la gestión de despachos y rutas.",
    tools: ["Next.js", "TypeScript", "Go / Gin", "PostgreSQL"],
    sourceUrl: "https://github.com/Construtem",
    sourceType: "organization",
    flow: {
      type: "dispatch-service",
      journey: "Cotización → calcular despacho → aprobar y ajustar stock → consultar ruta y PDF",
    },
  },
  {
    name: "Beat MP3 Converter",
    logoUrl: "/assets/projects/beat-logo.png",
    kind: "Aplicación web · Audio",
    summary: "Conversión y descarga de audio en formato MP3 a partir de URLs.",
    tools: ["Next.js", "TypeScript", "FastAPI", "yt-dlp"],
    sourceUrl: "https://github.com/HarrySevenVader/beat-mp3-converter",
    sourceType: "repository",
    flow: {
      type: "audio-pipeline",
      journey:
        "Pegar URL de YouTube → verificar → elegir calidad → convertir → descargar",
    },
  },
];

export const roles: Role[] = [
  {
    id: "localdata",
    organization: "LocalData",
    logoUrl: "/assets/experience/localdata-logo.jpg",
    title: "Analista de Calidad de Datos",
    department: "Data Excellence",
    period: "May — Jul 2026",
    duration: "3 meses",
    employmentType: "Contrato a plazo fijo",
    description:
      "Empresa de inteligencia de mercado especializada en el canal tradicional. Analiza ventas de tiendas de barrio para ayudar a fabricantes, distribuidores y retailers a comprender el consumo y orientar sus decisiones comerciales.",
    responsibilities: [
      "Monitoreo de clasificación, cobertura y completitud en 30 categorías de productos.",
      "Cruce de catálogo maestro con 60 días de ventas mediante Python y SQL en PostgreSQL.",
      "Detección de inconsistencias antes de alimentar reportes en Power BI.",
    ],
    achievements: [
      {
        id: "processing-time",
        value: "-40%",
        label: "Tiempo de procesamiento",
        detail:
          "De 25 a 15 minutos, optimizando en Python la identificación y clasificación de nuevos productos.",
      },
      {
        id: "ean-validation",
        value: "-89%",
        label: "Casos con búsqueda manual",
        detail:
          "Automatización de la validación de códigos EAN en fuentes web, con un flujo reutilizable.",
      },
    ],
  },
  {
    id: "sodimac",
    organization: "Sodimac",
    logoUrl: "/assets/experience/sodimac-logo.png",
    title: "Analista de Datos Maestros",
    period: "Ago 2025 — Ene 2026",
    duration: "6 meses",
    employmentType: "Práctica profesional",
    description:
      "Empresa de retail del Grupo Falabella especializada en mejoramiento del hogar y construcción. Integra tiendas físicas y comercio electrónico para atender a hogares, profesionales y empresas con productos y servicios para sus proyectos.",
    responsibilities: [
      "Limpieza, transformación y validación de datos maestros en Excel y Power Query.",
      "Validación y corrección de información comercial preprocesada por IA para STEP PIM.",
      "Preparación y validación de datos mediante SQL en BigQuery para dashboards en Looker Studio.",
    ],
    achievements: [
      {
        id: "commercial-attributes",
        value: "+59.000",
        label: "Atributos comerciales",
        detail:
          "Disponibles en STEP PIM para Black Friday, tras validar y corregir inconsistencias.",
      },
      {
        id: "packaging-certificates",
        value: "≈90%",
        label: "Reducción del procesamiento",
        detail:
          "Automatización con Python de certificados de embalaje en lotes de 500 a 740 archivos.",
      },
    ],
  },
];
