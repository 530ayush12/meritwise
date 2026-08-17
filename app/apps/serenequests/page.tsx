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
      <main className="product-page serene-product">
        <section className="product-hero shell" data-reveal>
          <div className="product-copy" data-depth="1.05">
            <div className="breadcrumb"><Link href="/apps">Apps</Link> / SereneQuests</div>
            <p className="kicker">{app.category}</p>
            <h1>SereneQuests</h1>
            <p className="page-copy">{app.description}</p>
            <p className="product-byline">Developed by Ayush Rout</p>
            <div className="product-actions">
              <AppStoreBadge href={app.appStore} label={app.name} />
              <Link className="button secondary" href="/articles/designing-healthier-digital-habits">Why I built it</Link>
            </div>
          </div>

          <div className="product-art sage" data-depth="1.55" data-tilt>
            <div className="ambient-ring ambient-ring-one" aria-hidden="true" />
            <div className="ambient-ring ambient-ring-two" aria-hidden="true" />
            <img className="real-app-icon" src="/serenequests.webp" alt="SereneQuests app icon" width="1024" height="1024" />
          </div>
        </section>

        <section className="section shell product-section" data-reveal>
          <div className="section-heading"><span>01</span><div><p className="kicker">Highlights</p><h2>Designed to feel quieter.</h2></div></div>
          <div className="feature-grid">{app.features.map((feature,i)=><div className="feature-card" data-depth=".45" data-tilt key={feature}><span>0{i+1}</span><h3>{feature}</h3></div>)}</div>
        </section>

        <section className="section shell product-section" data-reveal>
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
