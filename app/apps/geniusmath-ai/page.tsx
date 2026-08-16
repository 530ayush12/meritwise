import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/SiteChrome";
import { apps } from "@/lib/content";

const app = apps[0];
export const metadata: Metadata = { title: "GeniusMath AI", description: app.description };

export default function GeniusMathPage(){return <PageShell><main><section className="product-hero shell"><div><div className="breadcrumb"><Link href="/apps">Apps</Link> / GeniusMath AI</div><p className="kicker">{app.category}</p><h1>GeniusMath AI</h1><p className="page-copy">{app.description}</p><div className="product-actions"><a className="button primary" href={app.appStore} target="_blank" rel="noreferrer">View on the App Store ↗</a><Link className="button secondary" href="/articles/thoughtful-technology-personal-learning">Read the thinking</Link></div></div><div className="product-visual violet"><div className="app-icon">G</div></div></section><section className="section shell"><div className="section-heading"><span>01</span><div><p className="kicker">Highlights</p><h2>Practice that explains itself.</h2></div></div><div className="feature-grid">{app.features.map((feature,i)=><div className="feature-card" key={feature}><span>0{i+1}</span><h3>{feature}</h3></div>)}</div></section><section className="section shell"><div className="story-block"><h3>Built for focused learning.</h3><div><p>GeniusMath AI is designed around a simple idea: practice is more useful when learners can control the difficulty, get fresh questions, and understand why an answer works.</p><p>The interface keeps the path short—from choosing a topic to practicing, reviewing feedback, and trying again.</p></div></div></section></main></PageShell>}
