import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { SectionHeading } from "../components/SectionHeading";
import "../styles/technology-stack.css";

type SymbolName = "web" | "mobile" | "cloud" | "data" | "ai" | "terminal" | "api" | "response" | "code" | "database" | "transform" | "catalog" | "search" | "trend" | "report";
type Technology = {
  id: string;
  title: string;
  subtitle: string;
  icon?: string;
  symbol?: SymbolName;
};
type TechnologyGroup = {
  id: string;
  title: string;
  description: string;
  technologies: Technology[];
};

const categories: { id: string; title: string; icon: SymbolName; description: string }[] = [
  { id: "languages", title: "Programación", icon: "code", description: "Bases de código estructurado y mantenible, diseño de algoritmos y aplicación de técnicas de depuración." },
  { id: "web", title: "Desarrollo Web", icon: "web", description: "Cliente al Servidor, cada pieza conectada bajo las buenas prácticas de desarrollo." },
  { id: "mobile", title: "Desarrollo Mobile", icon: "mobile", description: "Aplicaciones y experiencias para dispositivos móviles." },
  { id: "cloud", title: "DevOps y Cloud", icon: "cloud", description: "Del repositorio al despliegue: versiones, automatización y servicios en la nube." },
  { id: "data", title: "Análisis de Datos", icon: "data", description: "Del dato de origen al reporte: preparar, validar y encontrar patrones." },
  { id: "ai", title: "IA Generativa", icon: "ai", description: "Herramientas de inteligencia artificial aplicadas a soluciones y procesos." },
];

// Añade una tecnología al grupo correspondiente; la cuadrícula se organiza sola.
const webTechnologyGroups: TechnologyGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Estructura, estilos, interacción y componentes para la interfaz.",
    technologies: [
      { id: "html", title: "HTML", subtitle: "Estructura", icon: "html5" },
      { id: "css", title: "CSS", subtitle: "Estilos", icon: "css3" },
      { id: "javascript", title: "JavaScript", subtitle: "Interactividad", icon: "javascript" },
      { id: "typescript", title: "TypeScript", subtitle: "Tipado", icon: "typescript" },
      { id: "tailwind", title: "Tailwind CSS", subtitle: "Utilidades", icon: "tailwindcss" },
      { id: "react", title: "React", subtitle: "Componentes", icon: "react" },
      { id: "nextjs", title: "Next.js", subtitle: "Renderizado", icon: "nextjs" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description: "Servicios, lógica de negocio y comunicación con el cliente.",
    technologies: [
      {
        id: "fastapi",
        title: "FastAPI",
        subtitle: "APIs",
        icon: "fastapi",
      },
      {
        id: "go",
        title: "Go / Gin",
        subtitle: "Servicios",
        icon: "go",
      },
      {
        id: "nodejs",
        title: "Node.js",
        subtitle: "Ejecución",
        icon: "nodejs",
      },
      {
        id: "express",
        title: "Express",
        subtitle: "Enrutamiento",
        icon: "express",
      },
      {
        id: "rest",
        title: "REST",
        subtitle: "Comunicación",
        icon: "rest",
      },
    ],
  },
  {
    id: "databases",
    title: "Bases de datos",
    description: "Persistencia y consultas para organizar la información.",
    technologies: [
      { id: "postgresql", title: "PostgreSQL", subtitle: "Persistencia", icon: "postgresql" },
      { id: "mysql", title: "MySQL", subtitle: "Consultas", icon: "mysql" },
    ],
  },
];

const programmingLanguages: Technology[] = [
  { id: "python", title: "Python", subtitle: "Automatización", icon: "python" },
  { id: "c-cpp", title: "C / C++", subtitle: "Programación", icon: "cplusplus" },
  { id: "javascript", title: "JavaScript", subtitle: "Interactividad", icon: "javascript" },
  { id: "typescript", title: "TypeScript", subtitle: "Tipado", icon: "typescript" },
  { id: "sql", title: "SQL", subtitle: "Consultas", icon: "sql" },
];

const mobileTechnologies: Technology[] = [
  { id: "dart", title: "Dart", subtitle: "Lenguaje", icon: "dart" },
  { id: "flutter", title: "Flutter", subtitle: "Interfaces", icon: "flutter" },
];

const generativeAiTools: Technology[] = [
  { id: "claude-code", title: "Claude Code", subtitle: "Desarrollo", icon: "claude-code" },
  { id: "codex", title: "Codex", subtitle: "Desarrollo", icon: "codex" },
  { id: "chatgpt", title: "ChatGPT", subtitle: "Asistencia", icon: "chatgpt" },
];

// Experiencia en proyectos propios e infraestructura compartida de ConstrUTEM.
const cloudTechnologyGroups: TechnologyGroup[] = [
  {
    id: "cloud-delivery",
    title: "Versionado y automatización",
    description: "Control de cambios, colaboración y flujos de integración en proyectos de software.",
    technologies: [
      { id: "git", title: "Git", subtitle: "Versionado", icon: "git" },
      { id: "github", title: "GitHub", subtitle: "Colaboración", icon: "github" },
      { id: "github-actions", title: "GitHub Actions", subtitle: "Integración continua", icon: "githubactions" },
    ],
  },
  {
    id: "cloud-containers",
    title: "Contenedores y orquestación",
    description: "Docker Compose y Kubernetes en la infraestructura compartida del proyecto académico ConstrUTEM.",
    technologies: [
      { id: "docker", title: "Docker", subtitle: "Contenedores", icon: "docker" },
      { id: "kubernetes", title: "Kubernetes", subtitle: "Orquestación", icon: "kubernetes" },
    ],
  },
  {
    id: "cloud-platforms",
    title: "Despliegue y servicios cloud",
    description: "Vercel, Render y Supabase en Gustito; Google Cloud en datos y en la infraestructura académica.",
    technologies: [
      { id: "vercel", title: "Vercel", subtitle: "Frontend", icon: "vercel" },
      { id: "netlify", title: "Netlify", subtitle: "Frontend", icon: "netlify" },
      { id: "render", title: "Render", subtitle: "Backend", icon: "render" },
      { id: "supabase", title: "Supabase", subtitle: "PostgreSQL gestionado", icon: "supabase" },
      { id: "googlecloud", title: "Google Cloud", subtitle: "BigQuery · GKE", icon: "googlecloud" },
    ],
  },
];

// Orden editorial: herramientas base, análisis, comunicación y gestión especializada.
const dataTechnologyGroups: TechnologyGroup[] = [
  {
    id: "data-preparation",
    title: "Consulta y preparación",
    description: "Consultar fuentes, revisar registros y transformar datos antes del análisis.",
    technologies: [
      { id: "sql", title: "SQL", subtitle: "Consultas", icon: "sql" },
      { id: "excel", title: "Excel", subtitle: "Planillas", icon: "excel" },
      { id: "power-query", title: "Power Query", subtitle: "Transformación", icon: "power-query" },
    ],
  },
  {
    id: "data-python",
    title: "Análisis y automatización con Python",
    description: "Python, bibliotecas de análisis y automatización de tareas en el navegador.",
    technologies: [
      { id: "python", title: "Python", subtitle: "Scripting", icon: "python" },
      { id: "pandas", title: "pandas", subtitle: "Tablas", icon: "pandas" },
      { id: "numpy", title: "NumPy", subtitle: "Cálculo", icon: "numpy" },
      { id: "playwright", title: "Playwright", subtitle: "Automatización", icon: "playwright" },
    ],
  },
  {
    id: "data-visualization",
    title: "Visualización y reportes",
    description: "Comunicar indicadores y resultados mediante tableros de seguimiento.",
    technologies: [
      { id: "power-bi", title: "Power BI", subtitle: "Visualización", icon: "powerbi" },
    ],
  },
  {
    id: "data-platforms",
    title: "Plataformas y datos maestros",
    description: "Consultar información en cloud, gestionar datos maestros y administrar bases de datos.",
    technologies: [
      { id: "bigquery", title: "Google Cloud BigQuery", subtitle: "Analítica", icon: "googlecloud" },
      { id: "stibo-systems", title: "Stibo Systems", subtitle: "MDM · Datos maestros", icon: "stibo-systems" },
      { id: "navicat", title: "Navicat", subtitle: "Administración", icon: "navicat" },
    ],
  },
];

// Capacidades de trabajo: se presentan aparte del inventario de herramientas.
const dataPractices: TechnologyGroup = {
  id: "data-practices",
  title: "Prácticas de análisis",
  description: "De la integración y la calidad de los datos a su interpretación y comunicación.",
  technologies: [
    { id: "etl", title: "ETL", subtitle: "Extracción, transformación y carga", symbol: "transform" },
    { id: "data-quality", title: "Limpieza y validación de datos", subtitle: "Calidad", symbol: "response" },
    { id: "exploratory-analysis", title: "Análisis exploratorio", subtitle: "Exploración", symbol: "search" },
    { id: "trend-analysis", title: "Análisis de tendencias", subtitle: "Patrones", symbol: "trend" },
    { id: "product-analysis", title: "Levantamiento de productos", subtitle: "Atributos y catálogo", symbol: "catalog" },
    { id: "reporting", title: "Reportería", subtitle: "Comunicación", symbol: "report" },
  ],
};

function StackSymbol({ name }: { name: SymbolName }) {
  const shapes: Record<SymbolName, ReactNode> = {
    web: <><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8m-4-4v4" /></>,
    mobile: <><rect x="6" y="2" width="12" height="20" rx="2" /><path d="M11 18h2" /></>,
    cloud: <path d="M7 19h11a4 4 0 0 0 .2-8A6.5 6.5 0 0 0 5.6 9.6 4.8 4.8 0 0 0 7 19Z" />,
    data: <><path d="M4 20V11m5 9V5m5 15V9m5 11V2" /><path d="M2 22h20" /></>,
    ai: <><rect x="4" y="6" width="16" height="14" rx="4" /><path d="M12 2v4M1 11h3m16 0h3M8 15h8" /><circle cx="8" cy="11" r=".7" /><circle cx="16" cy="11" r=".7" /></>,
    terminal: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="m7 9 3 3-3 3m6 0h4" /></>,
    api: <path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-13-2 16" />,
    response: <><circle cx="12" cy="12" r="9" /><path d="m8 12 3 3 5-6" /></>,
    code: <><path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18" /></>,
    database: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" /></>,
    transform: <><path d="M4 7h14l-3-3m3 3-3 3M20 17H6l3-3m-3 3 3 3" /><path d="M4 4v6m16 4v6" /></>,
    catalog: <><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 7h8M8 12h8M8 17h5" /></>,
    search: <><circle cx="10" cy="10" r="6" /><path d="m15 15 6 6M7 10h6m-3-3v6" /></>,
    trend: <><path d="M3 3v18h18M6 16l5-5 4 2 6-7m-5 0h5v5" /></>,
    report: <><path d="M14 2H5v20h14V7Zm0 0v5h5M8 17v-3m4 3v-6m4 6v-4" /></>,
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{shapes[name]}</svg>;
}

function TechnologyCards({ technologies, label }: { technologies: Technology[]; label: string }) {
  return (
    <ul className="stack-technology-grid" aria-label={label}>
      {technologies.map((technology) => (
        <li className="stack-technology-card" key={technology.id} data-technology={technology.id}>
          <span className="stack-technology-icon">
            {technology.icon && (
              <img
                src={`/assets/stack-web/${technology.icon}.svg`}
                alt=""
                width="32"
                height="32"
                loading="lazy"
                decoding="async"
              />
            )}
            {technology.symbol && <StackSymbol name={technology.symbol} />}
          </span>
          <span className="stack-technology-copy">
            <strong>{technology.title}</strong>
            <span>{technology.subtitle}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}

function TechnologyGroupCard({ group, uid }: { group: TechnologyGroup; uid: string }) {
  const headingId = `${uid}-group-${group.id}`;
  return (
    <section className="stack-technology-group" aria-labelledby={headingId}>
      <header className="stack-technology-group-heading">
        <h4 id={headingId}>{group.title}</h4>
        <p>{group.description}</p>
      </header>
      <TechnologyCards technologies={group.technologies} label={group.title} />
    </section>
  );
}

export function StackSection() {
  const uid = useId().replace(/:/g, "");
  const [selectedId, setSelectedId] = useState("web");
  const tabs = useRef(new Map<string, HTMLButtonElement>());
  const selected = categories.find((category) => category.id === selectedId)!;
  const panelId = `${uid}-stack-panel`;
  const navigateTabs = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const delta = event.key === "ArrowDown" || event.key === "ArrowRight" ? 1 : event.key === "ArrowUp" || event.key === "ArrowLeft" ? -1 : 0;
    const next = event.key === "Home" ? 0 : event.key === "End" ? categories.length - 1 : delta ? (index + delta + categories.length) % categories.length : null;
    if (next === null) return;
    event.preventDefault();
    setSelectedId(categories[next].id);
    tabs.current.get(categories[next].id)?.focus();
  };
  return (
    <section className="content-section technology-stack" id="desarrollo" aria-label="Stack de tecnologías">
      <div className="container">
        <SectionHeading number="03" eyebrow="Stack de tecnologías" title={
          <>
            Mi arsenal de <em>Herramientas.</em>
          </>
        } description="Recopilación de tecnologías que utilizo para desarrollar soluciones y agilizar los procesos de mi dia a dia." />
        <div className="technology-stack-layout">
          <div className="technology-stack-tabs" role="tablist" aria-label="Áreas del stack" aria-orientation="vertical">
            {categories.map((category, index) => (
              <button
                className="technology-stack-tab"
                type="button"
                role="tab"
                id={`${uid}-tab-${category.id}`}
                aria-selected={selectedId === category.id}
                aria-controls={panelId}
                tabIndex={selectedId === category.id ? 0 : -1}
                key={category.id}
                onClick={() => setSelectedId(category.id)}
                onKeyDown={(event) => navigateTabs(event, index)}
                ref={(element) => {
                  if (element) tabs.current.set(category.id, element);
                  else tabs.current.delete(category.id);
                }}
              >
                <StackSymbol name={category.icon} />
                <span>{category.title}</span>
                <span className="technology-stack-chevron" aria-hidden="true">›</span>
              </button>
            ))}
          </div>
          <div className="technology-stack-panel" id={panelId} role="tabpanel" aria-labelledby={`${uid}-tab-${selectedId}`} tabIndex={0}>
            <div className="technology-stack-panel-content" key={selectedId}>
              <header className="technology-stack-panel-heading">
                {/*<p className="technology-stack-kicker">
                  {selectedId === "web" ? "Del cliente al servidor" : selectedId === "languages" ? "Bases para construir" : "Stack de tecnologías"}
                </p>*/}
                <h3>{selected.title}</h3>
                <p>{selected.description}</p>
              </header>
              {selectedId === "web" ? (
                <div className="stack-technology-groups">
                  {webTechnologyGroups.map((group) => <TechnologyGroupCard group={group} uid={uid} key={group.id} />)}
                </div>
              ) : selectedId === "languages" ? (
                <TechnologyCards technologies={programmingLanguages} label="Lenguajes de programación" />
              ) : selectedId === "mobile" ? (
                <TechnologyCards technologies={mobileTechnologies} label="Tecnologías de Desarrollo Mobile" />
              ) : selectedId === "ai" ? (
                <TechnologyCards technologies={generativeAiTools} label="Herramientas de IA Generativa" />
              ) : selectedId === "cloud" ? (
                <div className="stack-technology-groups">
                  {cloudTechnologyGroups.map((group) => <TechnologyGroupCard group={group} uid={uid} key={group.id} />)}
                </div>
              ) : selectedId === "data" ? (
                <div className="stack-technology-groups">
                  {dataTechnologyGroups.map((group) => <TechnologyGroupCard group={group} uid={uid} key={group.id} />)}
                  <TechnologyGroupCard group={dataPractices} uid={uid} />
                </div>
              ) : (
                <div className="technology-stack-pending">
                  <StackSymbol name={selected.icon} />
                  <p>En preparación</p>
                  <span>Esta área se incorporará en una próxima etapa.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
