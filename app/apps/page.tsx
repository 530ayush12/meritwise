import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/SiteChrome";
import { apps } from "@/lib/content";

export const metadata: Metadata = { title: "Apps" };

const icons: Record<string, string> = {
  "geniusmath-ai": "/geniusmath-ai.webp?v=20260817-fx-final",
  serenequests: "/serenequests.webp?v=20260817-fx-final",
};

export default function AppsPage(){return <PageShell><main><section className="page-hero shell"><p className="kicker">Products</p><h1>Apps built around <em>usefulness.</em></h1><p className="page-copy">Independent iOS products for learning and well-being, designed and developed by Ayush Rout.</p></section><section className="section shell"><div className="app-grid perspective-grid">{apps.map(app=><Link key={app.slug} href={`/apps/${app.slug}`} className={`app-card ${app.accent}`}><div className="app-topline"><img className={`app-card-icon ${app.slug === "geniusmath-ai" ? "fx-icon" : ""}`} src={icons[app.slug]} alt={`${app.name} icon`} width="72" height="72" decoding="async" loading="eager"/><span className="arrow">↗</span></div><div><p className="micro">{app.eyebrow}</p><h3>{app.name}</h3><p>{app.description}</p></div><span className="text-link">View app</span></Link>)}</div></section></main></PageShell>}
