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

export type StackGroup = {
  name: string;
  tools: string[];
};

export type Role = {
  period: string;
  title: string;
  organization: string;
  description: string;
};

export type Certification = {
  title: string;
  issuer?: string;
  year?: string;
  url: string;
};

export type Practice = {
  title: string;
  description: string;
};

export const links = {
  email: "mailto:jriquelme.harrysev@gmail.com",
  github: "https://github.com/HarrySevenVader",
  linkedin: "https://www.linkedin.com/in/jarol-riquelme-santiba%C3%B1ez-71bb37338/",
};

export const profile = {
  degree: "Ingeniero en Informática",
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
  { title: "Desarrollo Web Full Stack", description: "Diseño y desarrollo soluciones web completas, desde interfaces claras y responsivas hasta APIs, lógica de negocio y bases de datos. Construyo productos pensados para funcionar de forma estable, escalar y quedar listos para producción en la nube." },
  { title: "Desarrollo Mobile", description: "Creo aplicaciones móviles simples de usar, visualmente cuidadas y enfocadas en resolver necesidades concretas. Priorizo una navegación fluida, una experiencia intuitiva y una integración sólida con servicios y datos." },
  { title: "Automatización de Procesos", description: "Identifico tareas repetitivas y las convierto en procesos automáticos que reducen tiempos, errores y trabajo manual." },
  { title: "Análisis de datos", description: "Trabajo con datos desde su origen: los extraigo, limpio, transformo y válido para convertirlos en información confiable. A partir de ellos identifico patrones, oportunidades e insights que apoyan mejores decisiones." },
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

export const developmentStack: StackGroup[] = [
  { name: "Interfaz", tools: ["React", "TypeScript", "JavaScript", "HTML", "CSS"] },
  { name: "Servicios", tools: ["Node.js", "Go", "APIs REST"] },
  { name: "Persistencia y entrega", tools: ["PostgreSQL", "MySQL", "Git", "GitHub"] },
];

export const dataStack: StackGroup[] = [
  { name: "Preparación", tools: ["Python", "SQL", "Excel"] },
  { name: "Análisis", tools: ["Power BI", "BigQuery", "Visualización"] },
  { name: "Procesos", tools: ["Calidad de datos", "Automatización", "Reportes BI"] },
];

export const roles: Role[] = [
  {
    period: "May — Ago 2026",
    title: "Data Excellence · LocalData",
    organization: "Innovation for Society SpA",
    description: "Calidad y enriquecimiento de datos operacionales. Optimicé una herramienta interna en Python y reduje su tiempo de ejecución de 25 a 15 minutos.",
  },
  {
    period: "Ago 2025 — Ene 2026",
    title: "Analista de Datos Maestros",
    organization: "Sodimac · Práctica profesional",
    description: "Trabajé en calidad de datos e información comercial para e-commerce, con automatizaciones en Python y procesamiento de atributos a gran escala.",
  },
];
