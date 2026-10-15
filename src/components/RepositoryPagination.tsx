import { useEffect, useState, type ReactNode } from "react";

export const REPOSITORIES_PER_PAGE = 2;

type RepositoryPaginationProps = {
  children: ReactNode[];
};

type Transition = {
  from: number;
  direction: "forward" | "backward";
};

export function RepositoryPagination({
  children,
}: RepositoryPaginationProps) {
  const [activePage, setActivePage] = useState(0);
  const [transition, setTransition] = useState<Transition | null>(null);

  const pageCount = Math.max(
    1,
    Math.ceil(children.length / REPOSITORIES_PER_PAGE),
  );

  // Ajusta la página si después cambia la cantidad de proyectos.
  useEffect(() => {
    setActivePage((page) => Math.min(page, pageCount - 1));
    setTransition(null);
  }, [pageCount]);

  // Respaldo por si el navegador interrumpe la animación.
  useEffect(() => {
    if (!transition) return;

    const timeout = window.setTimeout(() => setTransition(null), 800);
    return () => window.clearTimeout(timeout);
  }, [transition]);

  function selectPage(nextPage: number) {
    if (
      transition ||
      nextPage === activePage ||
      nextPage < 0 ||
      nextPage >= pageCount
    ) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    setTransition(
      reducedMotion
        ? null
        : {
            from: activePage,
            direction: nextPage > activePage ? "forward" : "backward",
          },
    );

    setActivePage(nextPage);
  }

  return (
    <div className="repository-pagination">
      <div className="projects-stage" id="repository-pages">
        {Array.from({ length: pageCount }, (_, pageIndex) => {
          const isActive = activePage === pageIndex;
          const isLeaving = transition?.from === pageIndex;
          const isUnavailable = !isActive || transition !== null;

          let pageClassName = "projects-page";

          if (transition) {
            pageClassName += isActive
              ? ` projects-page--${transition.direction}`
              : isLeaving
                ? ` projects-page--outgoing projects-page--outgoing-${transition.direction}`
                : "";
          }

          const start = pageIndex * REPOSITORIES_PER_PAGE;

          return (
            <div
              key={pageIndex}
              className={pageClassName}
              data-inactive={!isActive && !isLeaving ? "true" : undefined}
              aria-hidden={isUnavailable}
              ref={(element) => {
                element?.toggleAttribute("inert", isUnavailable);
              }}
              onAnimationEnd={(event) => {
                // Este barrido no debe finalizar la animación principal.
                event.stopPropagation();

                if (
                  event.target === event.currentTarget &&
                  isActive &&
                  event.animationName.startsWith("projects-reveal-")
                ) {
                  setTransition(null);
                }
              }}
            >
              <div className="project-list repository-list">
                {children.slice(start, start + REPOSITORIES_PER_PAGE)}
              </div>
            </div>
          );
        })}
      </div>

      {pageCount > 1 && (
        <nav
          className="project-pagination repository-pagination-controls"
          aria-label="Paginación de repositorios"
        >
          <span className="project-pagination-count" aria-live="polite">
            Página {String(activePage + 1).padStart(2, "0")} de{" "}
            {String(pageCount).padStart(2, "0")}
          </span>

          <div className="project-pagination-options">
            <button
              className="project-pagination-button"
              type="button"
              disabled={activePage === 0}
              aria-controls="repository-pages"
              onClick={() => selectPage(activePage - 1)}
            >
              ← Anterior
            </button>

            {Array.from({ length: pageCount }, (_, pageIndex) => (
              <button
                className="project-pagination-button"
                type="button"
                key={pageIndex}
                aria-label={`Ir a la página ${pageIndex + 1} de repositorios`}
                aria-current={activePage === pageIndex ? "page" : undefined}
                aria-controls="repository-pages"
                onClick={() => selectPage(pageIndex)}
              >
                {String(pageIndex + 1).padStart(2, "0")}
              </button>
            ))}

            <button
              className="project-pagination-button"
              type="button"
              disabled={activePage === pageCount - 1}
              aria-controls="repository-pages"
              onClick={() => selectPage(activePage + 1)}
            >
              Siguiente →
            </button>
          </div>
        </nav>
      )}
    </div>
  );
}