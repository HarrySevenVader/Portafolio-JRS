export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>Jarol Riquelme · Santiago, Chile</span>
        <a href="#inicio">Volver al inicio ↑</a>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
