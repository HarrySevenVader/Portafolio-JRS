export type Project = {
  name: string;
  kind: string;
  summary: string;
  tools: string[];
  url: string;
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

export const links = {
  email: "mailto:jriquelme.harrysev@gmail.com",
  github: "https://github.com/HarrySevenVader",
  linkedin: "https://www.linkedin.com/in/jarol-riquelme-santiba%C3%B1ez-71bb37338/",
};

// Solo proyectos con un sitio público activo.
export const projects: Project[] = [
  {
    name: "Gustito",
    kind: "Sitio web · Restaurante",
    summary: "Carta, información de locales y acceso a pedidos reunidos en una experiencia sencilla para el cliente.",
    tools: ["React", "Diseño responsivo", "UX/UI"],
    url: "https://el-gustito.vercel.app/",
  },
  {
    name: "Óptica GYD",
    kind: "Sitio web · Comercio local",
    summary: "Una vitrina digital para conocer los lentes, entender cómo comprar y encontrar los canales de atención.",
    tools: ["React", "Diseño responsivo", "Despliegue web"],
    url: "https://www.opticagyd.cl/",
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
