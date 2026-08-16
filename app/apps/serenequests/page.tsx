import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/SiteChrome";
import { apps } from "@/lib/content";

const app = apps[1];
export const metadata: Metadata = { title: "SereneQuests", description: app.description };

export default function SereneQuestsPage(){return <PageShell><main><section className="product-hero shell"><div><div className="breadcrumb"><Link href="/apps">Apps</Link> / SereneQuests</div><p className="kicker">{app.category}</p><h1>SereneQuests</h1><p className="page-copy">{app.description}</p><div className="product-actions"><a className="button primary" href={app.appStore} target="_blank" rel="noreferrer">View on the App Store ↗</a><Link className="button secondary" href="/articles/designing-healthier-digital-habits">Read the thinking</Link></div></div><div className="product-visual sage"><div className="app-icon">S</div></div></section><section className="section shell"><div className="section-heading"><span>01</span><div><p className="kicker">Highlights</p><h2>Designed to feel quieter.</h2></div></div><div className="feature-grid">{app.features.map((feature,i)=><div className="feature-card" key={feature}><span>0{i+1}</span><h3>{feature}</h3></div>)}</div></section><section className="section shell"><div className="story-block"><h3>Well-being without visual noise.</h3><div><p>SereneQuests pairs conversational guidance with a deliberately calm interface. The aim is to keep the experience simple and supportive rather than overwhelming.</p><p>SereneQuests is intended for general wellness and reflection; it is not a substitute for professional medical advice, diagnosis, or treatment.</p></div></div></section></main></PageShell>}
