import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header shell">
      <Link className="brand" href="/" aria-label="Meritwise home">
        <span className="brand-mark">M</span>
        <span>Meritwise</span>
      </Link>
      <nav aria-label="Primary navigation">
        <Link href="/apps">Apps</Link>
        <Link href="/articles">Articles</Link>
        <Link href="/story">Story</Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer shell">
      <div>
        <Link className="brand" href="/">
          <span className="brand-mark">M</span>
          <span>Meritwise</span>
        </Link>
        <p>Independent apps and ideas for learning and well-being.</p>
      </div>
      <div className="footer-links">
        <Link href="/apps">Apps</Link>
        <Link href="/articles">Articles</Link>
        <Link href="/story">Story</Link>
        <a href="https://github.com/530ayush12" target="_blank" rel="noreferrer">GitHub ↗</a>
      </div>
      <p className="copyright">© 2026 Meritwise. App Store is a trademark of Apple Inc.</p>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return <><SiteHeader />{children}<SiteFooter /></>;
}
