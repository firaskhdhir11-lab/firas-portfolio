export default function Home() {
  return (
    <main className="container">
      <nav>
        <strong>MY PORTFOLIO</strong>
        <a href="#contact">Contact</a>
      </nav>

      <section className="hero">
        <p className="eyebrow">DEVELOPER PORTFOLIO</p>
        <h1>Hello, I&apos;m <span>Firas</span>.</h1>
        <h2>IT Student | DevOps & Cloud Enthusiast</h2>
        <p>
          Welcome to my portfolio. I build modern applications and explore
          automation, cloud infrastructure and DevSecOps.
        </p>
        <a className="button" href="#projects">Explore my projects</a>
      </section>

      <section id="projects">
        <p className="eyebrow">WHAT I DO</p>
        <h2>DevOps & Cloud Projects</h2>
        <div className="cards">
          <article>
            <h3>CI/CD Automation</h3>
            <p>Automating build, test and delivery workflows.</p>
          </article>
          <article>
            <h3>Containerization</h3>
            <p>Building and deploying applications with Docker.</p>
          </article>
          <article>
            <h3>DevSecOps</h3>
            <p>Integrating security checks into development pipelines.</p>
          </article>
        </div>
      </section>

      <section>
        <p className="eyebrow">LEARNING</p>
        <h2>Certifications & Skills</h2>
        <p>Linux · Git · Docker · CI/CD · Cloud · Kubernetes · Next.js</p>
      </section>

      <section id="contact">
        <h2>Let&apos;s connect</h2>
        <p>Interested in collaboration or discussing a project?</p>
        <a href="mailto:contact@example.com">contact@example.com</a>
      </section>

      <footer>Generated with Backstage Software Templates · Next.js</footer>
    </main>
  );
}
