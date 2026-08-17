import Link from "next/link";
import { PageShell } from "@/components/SiteChrome";
import { apps, articles } from "@/lib/content";

export default function Home() {
  return (
    <PageShell>
      <main>
        <section className="hero shell hero-stage">
          <div className="hero-orbit orbit-one" aria-hidden="true" />
          <div className="hero-orbit orbit-two" aria-hidden="true" />
          <div className="hero-copy-block" data-depth="1.1">
            <div className="eyebrow">Independent apps · built by Ayush Rout</div>
            <h1>I build useful software for <em>learning</em> and <em>well-being.</em></h1>
            <p className="hero-copy">
              Meritwise is where I share the apps I ship, the decisions behind them, and the lessons I learn while building in public.
            </p>
            <div className="hero-actions">
              <Link className="button primary" href="/apps">See what I’ve built</Link>
              <Link className="button secondary" href="/story">Read my story</Link>
            </div>
          </div>
          <div className="hero-note" data-depth="1.8">
            <span>Now shipping</span>
            <strong>GeniusMath AI + SereneQuests</strong>
            <p>Two different categories. One principle: make the useful part easier to reach.</p>
          </div>
        </section>

        <section className="section shell">
          <div className="section-heading"><span>01</span><div><p className="kicker">Products</p><h2>Two apps, built around real problems.</h2></div></div>
          <div className="app-grid perspective-grid">
            {apps.map((app, index) => (
              <Link className={`app-card ${app.accent}`} href={`/apps/${app.slug}`} key={app.slug} data-depth={index === 0 ? "1.2" : "1.6"}>
                <div className="app-topline"><span className="pill">{app.category}</span><span className="arrow">↗</span></div>
                <div><p className="micro">{app.eyebrow}</p><h3>{app.name}</h3><p>{app.description}</p></div>
                <span className="text-link">See how I built it</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="section shell founder-strip" data-depth=".8">
          <p className="founder-kicker">A note from me</p>
          <p className="founder-quote">“I care about the moment when an idea stops being a prototype and becomes something another person can actually use.”</p>
          <Link className="text-link" href="/story">Why I started Meritwise →</Link>
        </section>

        <section className="section shell">
          <div className="section-heading"><span>02</span><div><p className="kicker">Journal</p><h2>What I’m learning while I build.</h2></div></div>
          <div className="article-list">
            {articles.map((article, index) => (
              <Link className="article-row" href={`/articles/${article.slug}`} key={article.slug} data-depth=".45">
                <div><span className="article-number">0{index + 1}</span><span className="article-tag">{article.tag}</span></div>
                <div><h3>{article.title}</h3><p>{article.dek}</p></div>
                <span className="arrow">↗</span>
              </Link>
            ))}
          </div>
          <div className="section-cta"><Link className="text-link" href="/articles">Browse all articles →</Link></div>
        </section>

        <section className="section shell story-teaser">
          <div className="section-heading"><span>03</span><div><p className="kicker">Story</p><h2>Built one iteration at a time.</h2></div></div>
          <div className="about-grid">
            <p className="about-lead" data-depth="1.05">I started Meritwise because I wanted my apps and the thinking behind them to live in the same place.</p>
            <div className="about-copy"><p>I’m still learning, shipping, revising, and sometimes rebuilding things from scratch. That process is part of the story, not something I want to hide behind polished screenshots.</p><Link className="text-link" href="/story">Read the first-person story →</Link></div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
