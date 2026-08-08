import { useEffect, useState } from 'react';

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

function App() {
  const [message, setMessage] = useState('Loading backend message...');

  useEffect(() => {
    fetch('http://localhost:8000/api/message')
      .then((res) => res.json())
      .then((data) => setMessage(data.message || 'Backend is responding.'))
      .catch(() => setMessage('Cannot connect to backend'));
  }, []);

  return (
    <div className="app">
      <div className="page-shell">
        <header className="topbar">
          <a className="brand" href="https://bendfortech.com">
            Bendfortech
          </a>
          <nav className="nav-links" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <a className="nav-cta" href="#contact">
            Create account
          </a>
        </header>

        <main>
          <section className="hero">
            <div className="hero-copy">
              <span className="eyebrow">Advanced digital technology</span>
              <h1>Build modern websites, software, design systems and Virtual Private Server infrastructure.</h1>
              <p>
                Quantum delivers fast web development, custom software, creative design, and secure Virtual Private
                Server hosting for businesses that need performance and reliability.
              </p>
              <div className="hero-actions">
                <a className="primary-button" href="#contact">
                  Get started
                </a>
                <a className="secondary-button" href="#services">
                  Explore services
                </a>
              </div>
              <div className="hero-stats">
                <div>
                  <strong>99.99%</strong>
                  <span>Uptime</span>
                </div>
                <div>
                  <strong>24/7</strong>
                  <span>Support</span>
                </div>
                <div>
                  <strong>30+</strong>
                  <span>Projects</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="visual-card visual-card-top">
                <div className="visual-header">VPS Cloud</div>
                <div className="visual-body">
                  <div className="chip" />
                  <div className="chip" />
                  <div className="chip" />
                </div>
              </div>
              <div className="visual-grid">
                <div className="visual-block block-1" />
                <div className="visual-block block-2" />
                <div className="visual-block block-3" />
              </div>
              <div className="visual-card visual-card-bottom">
                <div className="visual-header">Design system</div>
                <div className="visual-icons">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </section>

          <section id="services" className="services">
            <div className="section-intro">
              <span className="section-label">What we do</span>
              <h2>Complete digital services for web, software and cloud hosting.</h2>
            </div>
            <div className="service-grid">
              <article className="service-card">
                <h3>Web development</h3>
                <p>Fast, responsive websites with optimized SEO and conversion-focused UX.</p>
              </article>
              <article className="service-card">
                <h3>Software engineering</h3>
                <p>Backends, APIs, custom apps and integrations built for flexibility and scale.</p>
              </article>
              <article className="service-card">
                <h3>Creative design</h3>
                <p>Branding, UI systems, and visual design that bring your product to life.</p>
              </article>
              <article className="service-card">
                <h3>VPS hosting</h3>
                <p>Secure Virtual Private Servers with SSD storage, managed networking and uptime.</p>
              </article>
            </div>
          </section>

          <section id="solutions" className="solutions">
            <div className="solutions-header">
              <span className="section-label">Solutions</span>
              <h2>Designed for teams that need speed, reliability, and polished delivery.</h2>
            </div>
            <div className="solution-grid">
              <div className="solution-card">
                <h3>Startup launch pad</h3>
                <p>Launch quickly with secure hosting, modern UX, and a fully-managed build pipeline.</p>
              </div>
              <div className="solution-card">
                <h3>Enterprise systems</h3>
                <p>Robust backend services, data workflows, and APIs for growing operations.</p>
              </div>
              <div className="solution-card">
                <h3>Design refresh</h3>
                <p>Revitalize your brand with UI improvements, landing page redesign, and product polish.</p>
              </div>
            </div>
          </section>

          <section id="about" className="about">
            <div className="about-copy">
              <span className="section-label">Trusted by growing teams</span>
              <h2>We help businesses scale with secure infrastructure and polished digital products.</h2>
              <p>
                From responsive landing pages to backend systems and managed cloud servers, our team delivers modern
                products for agencies, startups, and technical teams.
              </p>
              <div className="about-list">
                <div>
                  <strong>Custom solutions</strong>
                  <p>Tailor-made software aligned with your goals.</p>
                </div>
                <div>
                  <strong>Reliable hosting</strong>
                  <p>High performance VPS for your website or application.</p>
                </div>
              </div>
            </div>
            <div className="about-panel">
              <div className="panel-tag">Live status</div>
              <div className="panel-body">
                <p>Network, cloud, and server systems monitored 24/7 to keep your services online.</p>
                <div className="panel-metrics">
                  <div>
                    <strong>204</strong>
                    <span>Deployments</span>
                  </div>
                  <div>
                    <strong>8</strong>
                    <span>Years</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <footer id="contact" className="footer">
            <div>
              <h3>Ready to launch your next project?</h3>
              <p>{message}</p>
            </div>
            <a className="primary-button footer-button" href="#services">
              Talk to sales
            </a>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
