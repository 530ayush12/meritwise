import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/SiteChrome";
import { AppStoreBadge } from "@/components/AppStoreBadge";
import { apps } from "@/lib/content";

const app = apps[0];
export const metadata: Metadata = {
  title: "GeniusMath AI — AI Math Practice",
  description: app.description,
};

export default function GeniusMathPage(){
  return <PageShell><main>
    <section className="product-hero shell">
      <div data-depth="1.05">
        <div className="breadcrumb"><Link href="/apps">Apps</Link> / GeniusMath AI</div>
        <p className="kicker">{app.category}</p>
        <h1>GeniusMath AI</h1>
        <p className="page-copy">{app.description}</p>
        <div className="product-actions">
          <AppStoreBadge href={app.appStore} label={app.name} />
          <Link className="button secondary" href="/articles/thoughtful-technology-personal-learning">Why I built it</Link>
        </div>
      </div>
      <div className="product-visual violet" data-depth="1.7"><div className="app-icon">G</div></div>
    </section>

    <section className="section shell">
      <div className="section-heading"><span>01</span><div><p className="kicker">Highlights</p><h2>Practice that explains itself.</h2></div></div>
      <div className="feature-grid">{app.features.map((feature,i)=><div className="feature-card" data-depth=".55" key={feature}><span>0{i+1}</span><h3>{feature}</h3></div>)}</div>
    </section>

    <section className="section shell">
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
  </main></PageShell>
}
