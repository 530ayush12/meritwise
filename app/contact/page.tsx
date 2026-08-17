import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Contact Ayush Rout",
  description: "Contact Ayush Rout about Meritwise, GeniusMath AI, SereneQuests, product feedback, or collaboration.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <main>
        <section className="page-hero shell contact-hero">
          <p className="kicker">Contact</p>
          <h1>Have something <em>worth discussing?</em></h1>
          <p className="page-copy">For app feedback, project questions, collaborations, or thoughtful conversations about technology, reach me directly.</p>
        </section>

        <section className="section shell contact-section">
          <div className="contact-intro">
            <p className="micro">Direct</p>
            <h2>Two simple ways to reach me.</h2>
            <p>I read both. Email is best for detailed messages; X is useful for quick notes and public updates.</p>
          </div>

          <div className="contact-grid">
            <a className="contact-card" href="mailto:ayushrout.ar@gmail.com">
              <div className="contact-card-top"><span className="contact-icon">@</span><span className="arrow">↗</span></div>
              <div>
                <span className="contact-label">Email</span>
                <h3>ayushrout.ar@gmail.com</h3>
                <p>Best for feedback, collaboration inquiries, and longer messages.</p>
              </div>
            </a>

            <a className="contact-card" href="https://x.com/ayushrout2012" target="_blank" rel="noreferrer">
              <div className="contact-card-top"><span className="contact-icon">X</span><span className="arrow">↗</span></div>
              <div>
                <span className="contact-label">X</span>
                <h3>@ayushrout2012</h3>
                <p>Follow product updates or send a short message on X.</p>
              </div>
            </a>
          </div>
        </section>

        <section className="section shell">
          <div className="story-block personal">
            <h3>About me</h3>
            <div className="first-person">
              <span className="story-marker">Ayush Rout</span>
              <p>I design, build, and maintain the products showcased on Meritwise, including GeniusMath AI and SereneQuests.</p>
              <p>I’m especially interested in thoughtful product feedback, education technology, iOS development, and ideas that make software more useful without making it noisier.</p>
              <Link className="text-link" href="/story">Read the Meritwise story →</Link>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
