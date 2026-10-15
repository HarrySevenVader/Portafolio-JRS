type ProjectTitleProps = {
  name: string;
  logoUrl?: string;
  loading?: "eager" | "lazy";
};

/** Título compartido: muestra el logo cuando existe y el nombre en caso contrario. */
export function ProjectTitle({ name, logoUrl, loading = "lazy" }: ProjectTitleProps) {
  return (
    <h3 className={logoUrl ? "project-title--logo" : undefined}>
      {logoUrl ? (
        <img
          className="project-title-logo"
          src={logoUrl}
          alt={name}
          loading={loading}
          decoding="async"
        />
      ) : (
        name
      )}
    </h3>
  );
}
