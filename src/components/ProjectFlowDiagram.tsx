import type { ReactNode } from "react";
import type { Project, RepositoryFlow } from "../data/portfolio";

type FlowIconName = "users" | "window" | "automation" | "database" | "cloud";

function FlowIcon({ name }: { name: FlowIconName }) {
  const paths: Record<FlowIconName, ReactNode> = {
    users: <><circle cx="9" cy="8" r="3" /><path d="M3.5 19v-2a5.5 5.5 0 0 1 11 0v2H3.5Z" /><path d="M16 5.5a3 3 0 0 1 0 5.5M17 13a4.5 4.5 0 0 1 3.5 4.4V19h-3" /></>,
    window: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M7 6.5h.01M10 6.5h.01" /></>,
    automation: <><circle cx="5" cy="12" r="2" /><circle cx="19" cy="6" r="2" /><circle cx="19" cy="18" r="2" /><path d="m7 11 10-4M7 13l10 4" /></>,
    database: <><ellipse cx="12" cy="6" rx="8" ry="3" /><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" /></>,
    cloud: <path d="M7 19h11a4 4 0 0 0 .2-8A6.5 6.5 0 0 0 5.6 9.6 4.8 4.8 0 0 0 7 19Z" />,
  };

  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function FlowNode({ icon, title, detail }: { icon: FlowIconName; title: string; detail: string }) {
  return (
    <div className="project-flow-node">
      <FlowIcon name={icon} />
      <span className="project-flow-node-title">{title}</span>
      <span>{detail}</span>
    </div>
  );
}

function GustitoFlow() {
  return (
    <div className="project-flow">
      <FlowNode icon="users" title="Usuarios" detail="Clientes" />

      <span className="project-flow-link" aria-hidden="true" />

      <FlowNode icon="window" title="Frontend" detail="Next.js" />

      <span className="project-flow-link" aria-hidden="true" />

      <FlowNode icon="automation" title="API" detail="Express.js" />

      <span className="project-flow-link" aria-hidden="true" />

      <div className="project-flow-outcomes">
        <FlowNode
          icon="database"
          title="Base de datos"
          detail="PostgreSQL"
        />
        <FlowNode
          icon="cloud"
          title="Despliegue"
          detail="Vercel / Render / Supabase"
        />
      </div>
    </div>
  );
}

function OpticaGydFlow() {
  return (
    <>
      <div className="project-flow project-flow--landing">
        <FlowNode
          icon="users"
          title="Usuarios"
          detail="Visitantes"
        />

        <span className="project-flow-link" aria-hidden="true" />

        <FlowNode
          icon="window"
          title="Frontend"
          detail="React"
        />

        <span className="project-flow-link" aria-hidden="true" />

        <div className="project-flow-outcomes">
          <FlowNode
            icon="automation"
            title="Enlaces externos"
            detail="Canva / Instagram / WhatsApp"
          />
          <FlowNode
            icon="automation"
            title="API de mapas"
            detail="Google Maps"
          />
        </div>
      </div>

      <p className="project-flow-deployment">
        <FlowIcon name="cloud" />
        <span>
          Despliegue: <strong>Vercel</strong>
        </span>
      </p>
    </>
  );
}

type ProjectFlowDiagramProps = {
  id: string;
  journey: string;
  variant: Project["flowType"];
};

export function ProjectFlowDiagram({
  id,
  journey,
  variant,
}: ProjectFlowDiagramProps) {
  return (
    <section className="project-flow-panel" aria-labelledby={id}>
      <div className="project-flow-heading">
        <h4 id={id}>
          <span className="project-flow-slash" aria-hidden="true">
            /
          </span>{" "}
          Arquitectura de solución
        </h4>

        <span className="project-flow-live">En producción</span>
      </div>

      {variant === "landing" ? <OpticaGydFlow /> : <GustitoFlow />}

      <div className="project-flow-footer">
        <p className="project-flow-journey">
          <span>// Flujo principal:</span> {journey}
        </p>

        <span className="project-flow-online">
          <span aria-hidden="true">›</span>
          Sistema Online
          <i aria-hidden="true" />
        </span>
      </div>
    </section>
  );
}

function Ruta5Flow() {
  return (
    <div className="project-flow project-flow--landing">
      <FlowNode
        icon="users"
        title="Usuario"
        detail="Aplicación móvil"
      />

      <span className="project-flow-link" aria-hidden="true" />

      <FlowNode
        icon="window"
        title="App"
        detail="Flutter / Dart / Provider"
      />

      <span className="project-flow-link" aria-hidden="true" />

      <div className="project-flow-outcomes">
        <FlowNode
          icon="cloud"
          title="Autenticación"
          detail="Firebase Auth / Google"
        />

        <FlowNode
          icon="automation"
          title="API externa"
          detail="Menú y valoraciones"
        />
      </div>
    </div>
  );
}

function BeatFlow() {
  return (
    <div className="project-flow">
      <FlowNode
        icon="users"
        title="Usuario"
        detail="URL de YouTube"
      />

      <span className="project-flow-link" aria-hidden="true" />

      <FlowNode
        icon="window"
        title="Frontend"
        detail="Next.js / TypeScript"
      />

      <span className="project-flow-link" aria-hidden="true" />

      <FlowNode
        icon="automation"
        title="API"
        detail="Python / FastAPI"
      />

      <span className="project-flow-link" aria-hidden="true" />

      <div className="project-flow-outcomes">
        <FlowNode
          icon="automation"
          title="Procesamiento"
          detail="Workers / yt-dlp / FFmpeg"
        />

        <FlowNode
          icon="database"
          title="Estado de tareas"
          detail="SQLite / progreso"
        />

        <FlowNode
          icon="cloud"
          title="Resultado"
          detail="Audio temporal / descarga"
        />
      </div>
    </div>
  );
}

function ConstrutemDispatchFlow() {
  return (
    <div className="dispatch-flow">
      <div className="project-flow">
        <FlowNode
          icon="users"
          title="Administración"
          detail="Gestión de despacho"
        />

        <span className="project-flow-link" aria-hidden="true" />

        <FlowNode
          icon="window"
          title="Frontend"
          detail="Next.js / TypeScript"
        />

        <span className="project-flow-link" aria-hidden="true" />

        <FlowNode
          icon="automation"
          title="API de despacho"
          detail="Go / Gin"
        />

        <span className="project-flow-link" aria-hidden="true" />

        <div className="project-flow-outcomes">
          <FlowNode
            icon="database"
            title="Datos"
            detail="PostgreSQL / GORM"
          />
          <FlowNode
            icon="window"
            title="Documentos"
            detail="Ficha de despacho / PDF"
          />
        </div>
      </div>

      <p className="dispatch-flow-logic">
        <strong>Lógica de despacho</strong>
        Capacidad de camiones, peso, volumen y costo por distancia.
      </p>

      <dl className="dispatch-flow-integrations" aria-label="Conexiones de la célula de despacho">
        <div>
          <dt>Google Maps</dt>
          <dd>Mapa y ruta en frontend; distancia y tiempo en la API.</dd>
        </div>
        <div>
          <dt>Ventas → Despacho</dt>
          <dd>Cálculo de despachos desde una cotización.</dd>
        </div>
        <div>
          <dt>Facturación → Despacho</dt>
          <dd>Aprobación del despacho y actualización de stock.</dd>
        </div>
      </dl>
    </div>
  );
}

type RepositoryFlowConfig = {
  title: string;
  status: string;
  note: string;
  content: ReactNode;
};

const repositoryFlowConfig: Record<
  RepositoryFlow["type"],
  RepositoryFlowConfig
> = {
  "mobile-api": {
    title: "Arquitectura móvil",
    status: "Proyecto académico",
    note: "Distribución: generación de APK documentada.",
    content: <Ruta5Flow />,
  },

  "audio-pipeline": {
    title: "Arquitectura de conversión",
    status: "Código disponible",
    note: "Infraestructura configurada: Vercel / Render.",
    content: <BeatFlow />,
  },

  "dispatch-service": {
    title: "Arquitectura de despacho",
    status: "Proyecto académico",
    note: "Infraestructura configurada: Docker Compose / GitHub Actions / GKE.",
    content: <ConstrutemDispatchFlow />,
  },
};

type RepositoryFlowDiagramProps = {
  id: string;
  flow: RepositoryFlow;
};

export function RepositoryFlowDiagram({
  id,
  flow,
}: RepositoryFlowDiagramProps) {
  const config = repositoryFlowConfig[flow.type];

  return (
    <section
      className="project-flow-panel repository-flow-panel"
      aria-labelledby={id}
    >
      <div className="project-flow-heading">
        <h4 id={id}>
          <span className="project-flow-slash" aria-hidden="true">
            /
          </span>{" "}
          {config.title}
        </h4>

        <span className="repository-flow-status">
          {config.status}
        </span>
      </div>

      {config.content}

      <p className="repository-flow-note">
        {config.note}
      </p>

      <div className="project-flow-footer">
        <p className="project-flow-journey">
          <span>// Flujo principal:</span> {flow.journey}
        </p>
      </div>
    </section>
  );
}
