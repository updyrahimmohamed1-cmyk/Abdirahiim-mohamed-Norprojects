import { useEffect, useState, type FormEvent } from 'react';
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  Code2,
  Github,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Sun,
  X,
} from 'lucide-react';

const sections = [
  'home',
  'about',
  'skills',
  'projects',
  'education',
  'contact',
];
const skills = {
  Programming: ['Java', 'Python'],
  Web: ['HTML', 'CSS', 'PHP'],
  Databases: ['MySQL', 'Oracle'],
};
const projects = ['01', '02', '03'];

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('portfolio-theme') || 'dark'
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [showTop, setShowTop] = useState(false);
  const [formState, setFormState] = useState('');
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id);
        }),
      { rootMargin: '-35% 0px -55% 0px' }
    );
    sections.forEach(id => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });
    const scroll = () => setShowTop(window.scrollY > 480);
    window.addEventListener('scroll', scroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', scroll);
    };
  }, []);
  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) {
      setFormState('Please check the highlighted fields and try again.');
      return;
    }
    setFormState(
      'Your details are valid. Message delivery is not configured yet—connect a form service to enable sending.'
    );
    event.currentTarget.reset();
  };
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Abdirahiim Mohamd Nuur portfolio home">
          <span className="brand-mark">AMN</span>Portfolio
          <span className="brand-dot">/</span>
        </a>
        <nav
          id="main-navigation"
          className={menuOpen ? 'nav nav-open' : 'nav'}
          aria-label="Main navigation"
        >
          {sections.map(id => (
            <a
              key={id}
              className={active === id ? 'nav-link active' : 'nav-link'}
              href={'#' + id}
              onClick={() => setMenuOpen(false)}
            >
              {id}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="icon-button"
            type="button"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label={
              'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' theme'
            }
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a className="header-contact" href="#contact">
            Let’s talk <ArrowRight size={15} />
          </a>
          <button
            className="icon-button menu-toggle"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            aria-label={
              menuOpen ? 'Close navigation menu' : 'Open navigation menu'
            }
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>
      <main id="main">
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> APPLICATION &amp; WEB DESIGN
              STUDENT
            </p>
            <h1>
              Curious by nature.
              <br />
              <span>Building for what’s next.</span>
            </h1>
            <p className="hero-intro">
              I’m ABDIRAHIIM MOHAMD NUUR, a motivated student exploring the space where thoughtful design meets useful software. I’m learning by making, one idea and one line of code at a time.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <ArrowDown size={16} />
              </a>
              <a className="text-link" href="#contact">
                Get in touch <ArrowRight size={16} />
              </a>
            </div>
            <div className="hero-meta">
              <span>
                <Code2 size={15} /> Learning in public
              </span>
              <i /> <span>Open to new ideas</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame">
              <img
                src="./resources/portrait.jpeg"
                alt="Portrait of ABDIRAHIIM MOHAMD NUUR"
                width={990}
                height={1280}
                fetchPriority="high"
              />
              <div className="portrait-shade" />
            </div>
            <div className="portrait-caption">
              <b /> DESIGNING MY NEXT CHAPTER
            </div>
            <div className="floating-note">
              <span className="note-index">01 / 07</span>
              <span>
                Learning
                <br />
                by building.
              </span>
              <Code2 size={17} />
            </div>
            <span className="visual-orbit orbit-one" />
            <span className="visual-orbit orbit-two" />
          </div>
          <a className="scroll-cue" href="#about">
            SCROLL TO DISCOVER <ArrowDown size={14} />
          </a>
        </section>
        <section className="section-wrap about-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">01 — A LITTLE ABOUT ME</p>
            <h2>Progress is a practice.</h2>
          </div>
          <div className="about-grid">
            <div>
              <p className="large-copy">
                I’m an application and web design student drawn to the details
                that make digital tools feel clear, useful, and human.
              </p>
              <span className="accent-rule" />
            </div>
            <div className="about-body">
              <p>
                I enjoy exploring how ideas move from a rough sketch to a
                working interface. Each new challenge is a chance to ask better
                questions, learn a new tool, and make something a little more
                considered.
              </p>
              <p className="placeholder-note">
                <strong>Make this yours:</strong> Add a personal interest or a
                detail about what inspires your work.
              </p>
              <p>
                My goal is to keep growing into a thoughtful developer—someone
                who builds with curiosity, communicates clearly, and cares about
                the people on the other side of the screen.
              </p>
              <a className="text-link" href="#education">
                More about my journey <ArrowRight size={16} />
              </a>
            </div>
          </div>
          <section className="photo-section" aria-labelledby="photo-heading">
            <div className="photo-heading"><p className="eyebrow">A FEW PERSONAL MOMENTS</p><h2 id="photo-heading">Learning, in snapshots.</h2></div>
            <div className="photo-gallery">
              <figure className="photo-card">
                <div className="photo-image">
                  <img
                    src="./resources/study.jpeg"
                    alt="ABDIRAHIIM MOHAMD NUUR with an open book"
                    width={719}
                    height={1280}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption><span>01</span> A study moment</figcaption>
              </figure>
              <figure className="photo-card">
                <div className="photo-image">
                  <img
                    src="./resources/selfie.jpeg"
                    alt="Portrait of ABDIRAHIIM MOHAMD NUUR"
                    width={719}
                    height={1280}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption><span>02</span> A portrait</figcaption>
              </figure>
              <figure className="photo-card">
                <div className="photo-image">
                  <img
                    src="./resources/coding.jpeg"
                    alt="ABDIRAHIIM MOHAMD NUUR seated at a desk with a computer"
                    width={1199}
                    height={1600}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption><span>03</span> At the desk</figcaption>
              </figure>
            </div>
          </section>
        </section>
        <section className="skills-section" id="skills">
          <div className="section-wrap">
            <div className="section-heading">
              <p className="eyebrow">02 — MY TOOLKIT</p>
              <h2>Tools I’m exploring.</h2>
              <p className="section-subtitle">
                A growing set of technologies I use in my learning journey.
              </p>
            </div>
            <div className="skills-grid">
              {Object.entries(skills).map(([group, items]) => (
                <article className="skill-group" key={group}>
                  <div className="skill-group-head">
                    <Code2 size={17} />
                    <h3>{group}</h3>
                  </div>
                  <ul>
                    {items.map(item => (
                      <li key={item}>
                        <span className="skill-bullet" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section-wrap projects-section" id="projects">
          <div className="section-heading projects-heading">
            <div>
              <p className="eyebrow">03 — SELECTED WORK</p>
              <h2>Ideas in progress.</h2>
            </div>
            <p className="section-subtitle">
              Sample cards are placeholders. Replace them with your own work
              when ready.
            </p>
          </div>
          <div className="project-grid">
            {projects.map(number => (
              <article className="project-card" key={number}>
                <div className="project-image">
                  <div className="project-image-placeholder">
                    <span>{number}</span>
                    <Code2 size={34} />
                    <small>PROJECT IMAGE PLACEHOLDER</small>
                  </div>
                  <span className="project-type">SAMPLE PROJECT</span>
                </div>
                <div className="project-content">
                  <p className="project-number">PROJECT / {number}</p>
                  <h3>[Project title]</h3>
                  <p>
                    Add a short description of the problem, your approach, and
                    what you learned.
                  </p>
                  <div className="project-tags">
                    <span>[Technology]</span>
                    <span>[Technology]</span>
                  </div>
                  <div className="project-links">
                    <a href="#contact">
                      Live demo <ArrowUp size={14} />
                    </a>
                    <a href="#contact">
                      Source code <Github size={14} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="education-section" id="education">
          <div className="section-wrap education-wrap">
            <div className="section-heading">
              <p className="eyebrow">04 — EDUCATION</p>
              <h2>Where I’m learning.</h2>
            </div>
            <article className="education-card">
              <span className="education-icon">
                <Code2 size={20} />
              </span>
              <div>
                <p className="project-number">CURRENT STUDIES</p>
                <h3>[Institution name]</h3>
                <p>[Program or course of study]</p>
              </div>
              <span className="education-date">
                [Start year] — [End year or present]
              </span>
            </article>
            <p className="placeholder-note education-note">
              Replace the bracketed text with your education details.
            </p>
          </div>
        </section>
        <section className="section-wrap contact-section" id="contact">
          <div className="contact-intro">
            <p className="eyebrow">05 — CONTACT</p>
            <h2>
              Have an idea?
              <br />
              <span>Let’s start a conversation.</span>
            </h2>
            <p>
              I’m always glad to connect, share what I’m learning, and hear
              about thoughtful projects.
            </p>
            <div className="contact-details">
              <a href="mailto:[your-email@example.com]">
                <Mail size={17} /> [your-email@example.com]
              </a>
              <span>
                <Linkedin size={17} />
                <a href="#contact">[LinkedIn profile link]</a>
              </span>
              <span>
                <Github size={17} />
                <a href="#contact">[GitHub profile link]</a>
              </span>
            </div>
            <p className="placeholder-note">
              Update these placeholders with your contact details and profile
              URLs.
            </p>
          </div>
          <form className="contact-form" onSubmit={submitForm} noValidate>
            <h3>Send a note</h3>
            <p className="form-hint">Fields marked * are required.</p>
            <label htmlFor="name">
              Your name <span>*</span>
            </label>
            <input
              id="name"
              name="name"
              autoComplete="name"
              required
              minLength={2}
              placeholder="Name"
            />
            <label htmlFor="email">
              Email address <span>*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="you@example.com"
            />
            <label htmlFor="message">
              Message <span>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              minLength={10}
              rows={4}
              placeholder="What would you like to talk about?"
            />
            <button
              className="button button-primary submit-button"
              type="submit"
            >
              Validate message <ArrowRight size={16} />
            </button>
            <p className="form-status" role="status" aria-live="polite">
              {formState ||
                'This form validates your details only; no message is sent.'}
            </p>
          </form>
        </section>
      </main>
      <footer className="site-footer">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">AMN</span>Portfolio
          <span className="brand-dot">/</span>
        </a>
        <p>Designed with curiosity. Built with care.</p>
        <span>© {new Date().getFullYear()} · ABDIRAHIIM MOHAMD NUUR</span>
      </footer>
      {showTop && (
        <button
          className="back-to-top"
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </>
  );
}

export default App;
