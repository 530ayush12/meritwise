import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/SiteChrome";
import { AppStoreBadge } from "@/components/AppStoreBadge";
import { apps } from "@/lib/content";

const app = apps[0];
const geniusMathIcon = "/geniusmath-ai.webp?v=20260817-fx-final";

export const metadata: Metadata = {
  title: "GeniusMath AI — AI Math Practice",
  description: app.description,
};

export default function GeniusMathPage() {
  return (
    <PageShell>
      <main className="product-page genius-product">
        <section className="product-hero shell" data-reveal>
          <div className="product-copy" data-depth="0.45">
            <div className="breadcrumb"><Link href="/apps">Apps</Link> / GeniusMath AI</div>
            <div className="product-brand-row">
              <img
                className="product-title-icon fx-icon"
                src={geniusMathIcon}
                alt="GeniusMath AI f(x) app icon"
                width="88"
                height="88"
                decoding="sync"
                loading="eager"
              />
              <div>
                <p className="kicker">{app.category}</p>
                <span className="product-brand-caption">GeniusMath AI for iOS</span>
              </div>
            </div>
            <h1>GeniusMath AI</h1>
            <p className="page-copy">{app.description}</p>
            <p className="product-byline">Developed by Ayush Rout</p>
            <div className="product-actions">
              <AppStoreBadge href={app.appStore} label={app.name} />
              <Link className="button secondary" href="/articles/thoughtful-technology-personal-learning">Why I built it</Link>
            </div>
          </div>

          <div className="product-art violet fx-art" data-depth="0.65" data-tilt>
            <div className="ambient-ring ambient-ring-one" aria-hidden="true" />
            <div className="ambient-ring ambient-ring-two" aria-hidden="true" />
            <img className="real-app-icon fx-icon" src={geniusMathIcon} alt="GeniusMath AI f(x) app icon" width="1024" height="1024" decoding="async" loading="eager" />
          </div>
        </section>

        <section className="section shell product-section" data-reveal>
          <div className="section-heading"><span>01</span><div><p className="kicker">Highlights</p><h2>Practice that explains itself.</h2></div></div>
          <div className="feature-grid">{app.features.map((feature,i)=><div className="feature-card" key={feature}><span>0{i+1}</span><h3>{feature}</h3></div>)}</div>
        </section>

        <section className="section shell product-section" data-reveal>
          <div className="story-block personal">
            <h3>Why I built it</h3>
            <div className="first-person">
              <span className="story-marker">Builder’s note</span>
              <p>I kept running into the same problem while practicing math: getting more questions was easy, but getting useful feedback at the exact moment I needed it was harder.</p>
              <p>So I built GeniusMath AI around the loop I wanted for myself — choose a topic, set the difficulty, practice, understand the mistake, and try again without a lot of friction.</p>
              <p>I’m still refining that loop. The goal is not to make AI the star of the app. The goal is to make practice feel more responsive and explanations easier to reach.</p>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
