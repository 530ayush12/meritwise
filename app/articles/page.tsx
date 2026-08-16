import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/SiteChrome";
import { articles } from "@/lib/content";

export const metadata: Metadata = { title: "Articles" };

export default function ArticlesPage(){return <PageShell><main><section className="page-hero shell"><p className="kicker">Journal</p><h1>Ideas for building <em>better.</em></h1><p className="page-copy">Notes on education, well-being, product design, and the decisions behind thoughtful software.</p></section><section className="section shell"><div className="editorial-grid">{articles.map((article,i)=><Link key={article.slug} href={`/articles/${article.slug}`} className="editorial-card"><div><p className="article-tag">{article.tag}</p><h3>{article.title}</h3><p>{article.dek}</p></div><div><span className="article-number">0{i+1}</span> <span className="micro">{article.date}</span></div></Link>)}</div></section></main></PageShell>}
