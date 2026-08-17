import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/SiteChrome";
import { AppStoreBadge } from "@/components/AppStoreBadge";
import { apps } from "@/lib/content";

const app = apps[1];

export const metadata: Metadata = {
  title: "SereneQuests — Wellness Companion",
  description: app.description,
};

export default function SereneQuestsPage() {
  return (
    <PageShell>
      <main>
        <section className="product-hero shell">
          <div data-depth="1.05">
            <div className="breadcrumb"><Link href="/apps">Apps</Link> / SereneQuests</div>
            <p className="kicker">{app.category}</p>
            <h1>SereneQuests</h1>
            <p className="page-copy">{app.description}</p>
            <p className="product-byline">Developed by Ayush Rout</p>
            <div className="product-actions">
              <AppStoreBadge href={app.appStore} label={app.name} />
              <a className="button secondary" href="https://serenequests.com" target="_blank" rel="noreferrer">Open serenequests.com ↗</a>
              <Link className="button secondary" href="/articles/designing-healthier-digital-habits">Why I built it</Link>
            </div>
          </div>
          <div className="product-visual sage" data-depth="1.7"><div className="app-icon">S</div></div>
        </section>

        <section className="section shell">
          <div className="section-heading"><span>01</span><div><p className="kicker">Live web preview</p><h2>Explore SereneQuests here.</h2></div></div>
          <div className="embed-shell" data-depth=".45">
            <div className="embed-toolbar">
              <div><span className="embed-dot"/><span className="embed-dot"/><span className="embed-dot"/></div>
              <span>serenequests.com</span>
              <a href="https://serenequests.com" target="_blank" rel="noreferrer">Open full site ↗</a>
            </div>
            <iframe
              className="serene-embed"
              src="https://serenequests.com"
              title="SereneQuests website preview"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
          <p className="embed-note">If your browser or the SereneQuests site blocks embedded viewing, use “Open full site” above.</p>
        </section>

        <section className="section shell">
          <div className="section-heading"><span>02</span><div><p className="kicker">Highlights</p><h2>Designed to feel quieter.</h2></div></div>
          <div className="feature-grid">{app.features.map((feature,i)=><div className="feature-card" data-depth=".55" key={feature}><span>0{i+1}</span><h3>{feature}</h3></div>)}</div>
        </section>

        <section className="section shell">
          <div className="story-block personal">
            <h3>Why I built it</h3>
            <div className="first-person">
              <span className="story-marker">Builder’s note</span>
              <p>I wanted SereneQuests to feel different from software that constantly asks for attention. The idea was to make the interface quieter, the language clearer, and the path to useful wellness information shorter.</p>
              <p>I built the experience around calm exploration rather than urgency. That means fewer visual distractions, more deliberate pacing, and clear boundaries around what the app is and is not designed to do.</p>
              <p>SereneQuests provides general wellness information and is not a substitute for professional medical advice, diagnosis, or treatment.</p>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
