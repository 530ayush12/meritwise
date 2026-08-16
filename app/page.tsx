const apps = [
  {
    name: "GeniusMath AI",
    category: "Education",
    description:
      "AI-powered math practice designed to help learners understand concepts, practice effectively, and improve with immediate feedback.",
    href: "https://apps.apple.com/us/app/geniusmath-ai/id6790629890",
  },
  {
    name: "SereneQuests",
    category: "Well-being",
    description:
      "A calm, thoughtful wellness experience centered on healthy routines, reflection, and positive daily progress.",
    href: "#",
  },
];

const articles = [
  {
    title: "How thoughtful technology can make learning feel more personal",
    tag: "Education",
  },
  {
    title: "Designing digital experiences that support healthier habits",
    tag: "Well-being",
  },
  {
    title: "What makes an iOS app feel genuinely useful?",
    tag: "Product",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header shell">
        <a className="brand" href="#top" aria-label="Meritwise home">
          Meritwise<span>.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#apps">Apps</a>
          <a href="#articles">Articles</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <section id="top" className="hero shell">
        <div className="eyebrow">Independent software & ideas</div>
        <h1>
          Technology for <em>learning</em> and <em>well-being.</em>
        </h1>
        <p className="hero-copy">
          Meritwise is a home for thoughtful iOS apps and articles built around
          one goal: making useful technology feel clear, purposeful, and human.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#apps">
            Explore the apps
          </a>
          <a className="button secondary" href="#articles">
            Read articles
          </a>
        </div>
      </section>

      <section id="apps" className="section shell">
        <div className="section-heading">
          <span>01</span>
          <div>
            <p className="kicker">Featured work</p>
            <h2>Apps with a purpose.</h2>
          </div>
        </div>

        <div className="app-grid">
          {apps.map((app) => (
            <article className="app-card" key={app.name}>
              <div className="app-topline">
                <span className="pill">{app.category}</span>
                <span className="arrow">↗</span>
              </div>
              <div>
                <h3>{app.name}</h3>
                <p>{app.description}</p>
              </div>
              <a href={app.href} target={app.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                View app
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="articles" className="section shell">
        <div className="section-heading">
          <span>02</span>
          <div>
            <p className="kicker">Writing</p>
            <h2>Ideas worth sharing.</h2>
          </div>
        </div>

        <div className="article-list">
          {articles.map((article, index) => (
            <article className="article-row" key={article.title}>
              <div>
                <span className="article-number">0{index + 1}</span>
                <span className="article-tag">{article.tag}</span>
              </div>
              <h3>{article.title}</h3>
              <span className="arrow">↗</span>
            </article>
          ))}
        </div>
        <p className="coming-soon">Full article publishing is coming next.</p>
      </section>

      <section id="about" className="section shell about">
        <div className="section-heading">
          <span>03</span>
          <div>
            <p className="kicker">About Meritwise</p>
            <h2>Built around usefulness.</h2>
          </div>
        </div>
        <div className="about-grid">
          <p className="about-lead">
            Meritwise brings together software, product thinking, education,
            and well-being in one place.
          </p>
          <div className="about-copy">
            <p>
              The focus is simple: create products that solve real problems,
              communicate clearly, and respect the people using them.
            </p>
            <p>
              This site will grow with new iOS projects, behind-the-scenes
              notes, and articles about building thoughtful technology.
            </p>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <div>
          <a className="brand" href="#top">
            Meritwise<span>.</span>
          </a>
          <p>Apps and ideas for learning and well-being.</p>
        </div>
        <div className="footer-links">
          <a href="#apps">Apps</a>
          <a href="#articles">Articles</a>
          <a href="https://github.com/530ayush12" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </div>
        <p className="copyright">© 2026 Meritwise</p>
      </footer>
    </main>
  );
}
