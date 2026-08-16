import Link from "next/link";
import { PageShell } from "@/components/SiteChrome";

export function ArticleBody({tag,title,dek,date,children}:{tag:string;title:string;dek:string;date:string;children:React.ReactNode}){return <PageShell><main><article><header className="article-hero article-shell"><div className="breadcrumb"><Link href="/articles">Articles</Link> / {tag}</div><p className="article-tag">{tag}</p><h1>{title}</h1><p className="page-copy">{dek}</p><div className="article-meta"><span>{date}</span><span>Meritwise Journal</span></div></header><div className="prose article-shell">{children}</div></article></main></PageShell>}
