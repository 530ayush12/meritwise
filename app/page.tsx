import Link from "next/link";
import { PageShell } from "@/components/SiteChrome";
import { apps, articles } from "@/lib/content";

export default function Home() {
  return (
    <PageShell>
      <main>
        <section className="hero shell">
          <div className="eyebrow">Independent software & writing</div>
          <h1>Useful technology, built with <em>care.</em></h1>
          <p className="hero-copy">Meritwise is a home for iOS apps and ideas focused on learning, well-being, and better digital experiences.</p>
          <div className="hero-actions">
            <Link className="button primary" href="/apps">Explore apps</Link>
            <Link className="button secondary" href="/articles">Read the journal</Link>
          </div>
        </section>

        <section className="section shell">
          <div className="section-heading"><span>01</span><div><p className="kicker">Products</p><h2>Apps with a point of view.</h2></div></div>
          <div className="app-grid">
            {apps.map((app) => (
              <Link className={`app-card ${app.accent}`} href={`/apps/${app.slug}`} key={app.slug}>
                <div className="app-topline"><span className="pill">{app.category}</span><span className="arrow">↗</span></div>
                <div><p className="micro">{app.eyebrow}</p><h3>{app.name}</h3><p>{app.description}</p></div>
                <span className="text-link">View product</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="section shell">
          <div className="section-heading"><span>02</span><div><p className="kicker">Journal</p><h2>Notes on building useful things.</h2></div></div>
          <div className="article-list">
            {articles.map((article, index) => (
              <Link className="article-row" href={`/articles/${article.slug}`} key={article.slug}>
                <div><span className="article-number">0{index + 1}</span><span className="article-tag">{article.tag}</span></div>
                <div><h3>{article.title}</h3><p>{article.dek}</p></div>
                <span className="arrow">↗</span>
              </Link>
            ))}
          </div>
          <div className="section-cta"><Link className="text-link" href="/articles">Browse all articles →</Link></div>
        </section>

        <section className="section shell story-teaser">
          <div className="section-heading"><span>03</span><div><p className="kicker">Story</p><h2>Small team. Clear purpose.</h2></div></div>
          <div className="about-grid">
            <p className="about-lead">Meritwise began as a place to bring independent apps, experiments, and lessons learned under one roof.</p>
            <div className="about-copy"><p>The goal is not to make software louder. It is to make it more useful: focused interfaces, understandable ideas, and products that respect attention.</p><Link className="text-link" href="/story">Read the Meritwise story →</Link></div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
