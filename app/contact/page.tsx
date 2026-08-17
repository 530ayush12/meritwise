import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Contact Ayush Rout",
  description: "Contact Ayush Rout, developer of Meritwise, GeniusMath AI, and SereneQuests.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <main>
        <section className="page-hero shell">
          <p className="kicker">Contact</p>
          <h1>Reach <em>Ayush.</em></h1>
          <p className="page-copy">For product feedback, questions, collaborations, or a quick hello, use X or email.</p>
        </section>

        <section className="section shell">
          <div className="contact-grid">
            <a className="contact-card" href="https://x.com/ayushrout2012" target="_blank" rel="noreferrer">
              <span className="contact-label">X</span>
              <div>
                <h2>@ayushrout2012</h2>
                <p>Follow updates and send a message on X.</p>
              </div>
              <span className="arrow">↗</span>
            </a>

            <a className="contact-card" href="mailto:ayushrout.ar@gmail.com">
              <span className="contact-label">Email</span>
              <div>
                <h2>ayushrout.ar@gmail.com</h2>
                <p>Email for feedback, questions, or collaboration inquiries.</p>
              </div>
              <span className="arrow">↗</span>
            </a>
          </div>
        </section>

        <section className="section shell">
          <div className="story-block personal">
            <h3>Developer</h3>
            <div className="first-person">
              <span className="story-marker">Ayush Rout</span>
              <p>I build and maintain the apps showcased on Meritwise, including GeniusMath AI and SereneQuests. I also write about the decisions, experiments, and lessons behind them.</p>
              <p>If you have thoughtful feedback about an app or the site, I genuinely want to hear it.</p>
              <Link className="text-link" href="/story">Read my story →</Link>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
