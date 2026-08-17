import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export function SiteHeader() {
  return (
    <header className="site-header shell">
      <Link className="brand" href="/" aria-label="Meritwise home">
        <span className="brand-mark">M</span>
        <span>Meritwise</span>
      </Link>
      <div className="header-actions">
        <nav aria-label="Primary navigation">
          <Link href="/apps">Apps</Link>
          <Link href="/articles">Articles</Link>
          <Link href="/story">Story</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <ThemeToggle />
      </div>
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
        <p>Independent apps, stories, and ideas for learning and well-being.</p>
        <p className="developer-credit">All apps developed by Ayush Rout.</p>
      </div>
      <div className="footer-links">
        <Link href="/apps">Apps</Link>
        <Link href="/articles">Articles</Link>
        <Link href="/story">Story</Link>
        <Link href="/contact">Contact</Link>
        <a href="https://x.com/ayushrout2012" target="_blank" rel="noreferrer">X ↗</a>
        <a href="https://github.com/530ayush12" target="_blank" rel="noreferrer">GitHub ↗</a>
      </div>
      <div className="copyright">
        <p>© 2026 Meritwise. All rights reserved.</p>
        <p>GeniusMath AI and SereneQuests are developed by Ayush Rout. Apple, the Apple logo, and App Store are trademarks of Apple Inc., registered in the U.S. and other countries and regions.</p>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return <><SiteHeader />{children}<SiteFooter /></>;
}
