'use client';

import Link from 'next/link';
import { SiteChrome } from '@/components/SiteChrome';
import { AppStoreBadge } from '@/components/AppStoreBadge';

export default function GeniusMathAIPage() {
  return (
    <SiteChrome>
      <main className="app-detail-page">
        <section className="app-detail-hero shell">
          <div className="app-detail-icon-wrap">
            <img
              src="/geniusmath-ai-icon.png"
              alt="GeniusMath AI app icon"
              className="app-detail-icon"
              width={180}
              height={180}
              loading="eager"
              onError={(event) => {
                event.currentTarget.src = '/geniusmath-icon.png';
              }}
            />
          </div>
          <div className="app-detail-copy">
            <p className="eyebrow">iPhone · Education</p>
            <h1>GeniusMath AI</h1>
            <p className="app-detail-lede">Understand it. Master it.</p>
            <p>
              GeniusMath AI is a focused math-practice experience designed to make personalized practice feel fast, clear, and useful. Generate fresh questions, work through them at your own pace, and review explanations when you need another way into a problem.
            </p>
            <AppStoreBadge href="https://apps.apple.com/us/app/geniusmath-ai/id6790629890" />
          </div>
        </section>

        <section className="shell app-detail-grid">
          <article className="app-detail-card">
            <p className="eyebrow">Practice that adapts</p>
            <h2>Choose what you want to work on.</h2>
            <p>
              Move from arithmetic and pre-algebra through Algebra I, geometry, Algebra II, trigonometry, and precalculus. Adjust the number of questions and difficulty so a quick review can stay quick and a deeper session can go further.
            </p>
          </article>
          <article className="app-detail-card">
            <p className="eyebrow">Built for understanding</p>
            <h2>Answers are only part of the experience.</h2>
            <p>
              GeniusMath AI emphasizes corrections and step-by-step explanations so practice can become feedback instead of a score alone. The goal is to help you see what changed, where a mistake happened, and what to try next.
            </p>
          </article>
        </section>

        <section className="shell app-detail-story">
          <p className="eyebrow">Why I built it</p>
          <h2>I wanted math practice to feel less repetitive.</h2>
          <p>
            As a student, I wanted a way to open an app, choose the exact topic I was working on, and immediately get useful practice without digging through a fixed worksheet. GeniusMath AI grew from that idea: a small, focused tool that makes it easier to practice intentionally.
          </p>
          <Link href="/story" className="text-link">Read the Meritwise story →</Link>
        </section>
      </main>
    </SiteChrome>
  );
}
