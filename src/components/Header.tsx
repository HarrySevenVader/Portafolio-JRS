const navigation = [
  { label: "Inicio", href: "#inicio" },
  { label: "Perfil", href: "#perfil" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Stack", href: "#desarrollo" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Contacto", href: "#contacto" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="wordmark" href="#inicio" aria-label="Jarol Riquelme, ir al inicio">
          <img className="wordmark-logo" src="/assets/logo-skull-transparent.png" alt="" width="56" height="56" />
          <span className="wordmark-prompt" aria-hidden="true">
            &gt;<span className="wordmark-cursor">_</span>
          </span>
          <span className="wordmark-name">
            <span>JAROL</span>
            <strong>RIQUELME</strong>
          </span>
        </a>

        <nav className="site-nav" aria-label="Navegación principal">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}
