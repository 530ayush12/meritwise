import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/SiteChrome";
import { apps } from "@/lib/content";

export const metadata: Metadata = { title: "Apps" };

export default function AppsPage(){return <PageShell><main><section className="page-hero shell"><p className="kicker">Products</p><h1>Apps built around <em>usefulness.</em></h1><p className="page-copy">Independent iOS products for learning and well-being, with focused interfaces and clear jobs to do.</p></section><section className="section shell"><div className="app-grid">{apps.map(app=><Link key={app.slug} href={`/apps/${app.slug}`} className={`app-card ${app.accent}`}><div className="app-topline"><span className="pill">{app.category}</span><span className="arrow">↗</span></div><div><p className="micro">{app.eyebrow}</p><h3>{app.name}</h3><p>{app.description}</p></div><span className="text-link">View app</span></Link>)}</div></section></main></PageShell>}
