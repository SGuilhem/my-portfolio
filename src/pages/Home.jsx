import { useNavigate } from "react-router-dom";
import heroPhoto from "../assets/photo1.jpeg";
import heroPhoto2 from "../assets/photo2.jpeg";
import pronosJudo1 from "../assets/Thumbnails/PronosJudo1.png";
import interbudo1 from "../assets/Thumbnails/Interbudo1.png";
import javaScriptLogo from "../assets/logos/JS-logo.svg";
import nodeJSLightLogo from "../assets/logos/nodejs-light-logo.svg";
import nodeJSDarkLogo from "../assets/logos/nodejs-dark-logo.svg";
import html5Logo from "../assets/logos/html-logo.png";
import vueJSLogo from "../assets/logos/VueJs-logo.png";
import reactJSLogo from "../assets/logos/ReactJs-logo.png";
import restAPILogo from "../assets/logos/rest-api-logo.png";
import githubLogo from "../assets/logos/github-logo.png";
import responsiveDesignLogo from "../assets/logos/responsive-design-logo.png";
import tailwindLogo from "../assets/logos/tailwind-logo.png";
import typeScriptLogo from "../assets/logos/typescript-logo.png";
import storyBookLogo from "../assets/logos/storybook-logo.png";
/* import linkedinLogo from "../assets/logos/LinkedIn-logo.png"; */
import "../App.css";

function Home() {
  const navigate = useNavigate();

  const skills = [
    { logo: javaScriptLogo, name: "JavaScript" },
    { logo: vueJSLogo, name: "Vue.JS" },
    { logo: reactJSLogo, name: "React" },
    { logo: html5Logo, name: "HTML & CSS" },
    { logo: tailwindLogo, name: "Tailwind CSS" },
    { logo: githubLogo, name: "Git / GitHub" },
    { logo: storyBookLogo, name: "Storybook" },
    {
      logo: nodeJSLightLogo,
      logoDark: nodeJSDarkLogo,
      name: "Node.js",
      themeable: true,
    },
    { logo: restAPILogo, name: "API REST" },
    { logo: responsiveDesignLogo, name: "Responsive Design" },
    { logo: typeScriptLogo, name: "TypeScript", inProgress: true },
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="section hero" id="hero">
        <div className="container">
          <div className="hero-topline">
            <span className="hero-tag">Portfolio — 2025</span>
            <span className="hero-tag">Disponible</span>
          </div>

          <div className="hero-title-block">
            <h1 className="hero-title">
              <span className="hero-title-line">Guilhem</span>
              <span className="hero-title-line hero-title-line--offset">
                Saclier
                <div className="hero-avatar">
                  <img
                    src={heroPhoto}
                    alt="Guilhem Saclier"
                    className="hero-avatar-img"
                  />
                </div>
              </span>
            </h1>
          </div>

          <div className="hero-bottom">
            <div className="hero-role">
              <span className="hero-role-line" />
              <span className="hero-role-text">
                Développeur Front-End · Vue.js & React
              </span>
            </div>
            <p className="hero-desc">
              J'aime concevoir des interfaces qui sont aussi agréables à utiliser qu'à développer.
            </p>
          </div>

          <div className="hero-actions">
            <button
              className="btn-primary"
              onClick={() =>
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Voir mes projets
            </button>
            <button
              className="btn-ghost"
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Me contacter
            </button>
          </div>
        </div>

        <div className="scroll-indicator">
          <span className="scroll-indicator-line" />
          <span className="scroll-indicator-text">Scroll</span>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="section about" id="about">
        <div className="container">
          <div className="section-header">
            <span className="section-number">01</span>
            <h2 className="section-title">À propos</h2>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <p className="about-intro">
                Développeur front-end avec 3 ans d'expérience, passionné par le
                web et l'univers du digital.
              </p>
              <p>
                Curieux de nature, j'aime découvrir de nouvelles cultures à
                travers mes voyages, notamment en Asie, où j'ai développé un
                goût particulier pour la gastronomie locale. En dehors du code,
                je pratique le judo depuis l'enfance (ceinture noire) et me
                lance dans le triathlon par défi personnel.
              </p>

              {/* <div className="about-stats">
                <div className="stat">
                  <span className="stat-number">3</span>
                  <span className="stat-label">Ans d'expérience</span>
                </div>
                <div className="stat">
                  <span className="stat-number">20</span>
                  <span className="stat-label">Ans de judo</span>
                </div>
                <div className="stat">
                  <span className="stat-number">2</span>
                  <span className="stat-label">Projets perso</span>
                </div>
              </div> */}
            </div>

            <div className="about-visual">
              <div className="about-img-wrapper">
                <img
                  src={heroPhoto2}
                  alt="Guilhem Saclier"
                  className="about-img"
                />
                <div className="about-img-accent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PARCOURS ===== */}
      <section className="section" id="parcours">
        <div className="container">
          <div className="section-header">
            <span className="section-number">02</span>
            <h2 className="section-title">Parcours</h2>
          </div>

          <div className="timeline">
            {/* Item 1 */}
            <div className="tl-item">
              <div className="tl-left">
                <span className="tl-year">2021</span>
                <span className="tl-year-end">2024</span>
              </div>
              <div className="tl-divider" />
              <div className="tl-right">
                <span className="tl-tag">Paris</span>
                <h3 className="tl-title">Développeur Front-End</h3>
                <span className="tl-company">
                  Volatil — Mission Philip Morris International
                </span>
                <ul className="tl-list">
                  <li>
                    Conception et développement d'interfaces{" "}
                    <strong>Vue.js</strong> orientées performance, UI/UX et
                    scalabilité (B2C / B2B)
                  </li>
                  <li>
                    Maintenance évolutive : gestion de bugs, optimisation
                    front-end, refactoring et amélioration continue
                  </li>
                  <li>
                    Contribution à un <strong>Design System</strong> partagé via{" "}
                    <strong>Storybook</strong>, standardisation des composants
                    réutilisables
                  </li>
                  <li>
                    Travail sur une architecture <strong>CMS WordPress</strong>{" "}
                    custom intégrée à un frontend Vue.js
                  </li>
                  <li>
                    Collaboration quotidienne en anglais avec Product Owners, QA
                    Engineers et développeurs backend dans des équipes
                    internationales en méthodologie <strong>SCRUM</strong>
                  </li>
                  <li>
                    Optimisation des performances, refactoring et amélioration
                    de la maintenabilité du code
                  </li>
                  <li>
                    Participation aux revues de code et pratiques de qualité
                    frontend (linting, standards d'équipe)
                  </li>
                </ul>
                <div className="tl-stack">
                  <span className="tl-badge">Vue.js</span>
                  <span className="tl-badge">Vuex</span>
                  <span className="tl-badge">Pinia</span>
                  <span className="tl-badge">Tailwind CSS</span>
                  <span className="tl-badge">Storybook</span>
                  <span className="tl-badge">Figma</span>
                  <span className="tl-badge">Jira</span>
                  <span className="tl-badge">Git</span>
                  <span className="tl-badge">Scrum</span>
                  <span className="tl-badge">WordPress</span>
                  <span className="tl-badge">Claude Code</span>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="tl-item">
              <div className="tl-left">
                <span className="tl-year">2018</span>
                <span className="tl-year-end">2019</span>
              </div>
              <div className="tl-divider" />
              <div className="tl-right">
                <span className="tl-tag">Bruxelles</span>
                <h3 className="tl-title">Co-fondateur & Technicien</h3>
                <span className="tl-company">Smartfix</span>
                <ul className="tl-list">
                  <li>
                    Réparation smartphones & PC, diagnostic hardware / software
                  </li>
                  <li>Maintenance informatique et optimisation de systèmes</li>
                  <li>
                    Installation réseau et configuration de postes à domicile
                  </li>
                </ul>
              </div>
            </div>

            {/* Item 3 */}
            <div className="tl-item">
              <div className="tl-left">
                <span className="tl-year">2010</span>
                <span className="tl-year-end">2018</span>
              </div>
              <div className="tl-divider" />
              <div className="tl-right">
                <span className="tl-tag">Paris</span>
                <h3 className="tl-title">Technicien Audiovisuel</h3>
                <span className="tl-company">Groupe ESRA</span>
                <ul className="tl-list">
                  <li>
                    Gestion et maintenance de matériel audiovisuel &
                    informatique
                  </li>
                  <li>
                    Installation et configuration de studios d'enregistrement
                  </li>
                  <li>Support technique auprès des étudiants et enseignants</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROJETS ===== */}
      <section className="section" id="projects">
        <div className="container">
          <div className="section-header">
            <span className="section-number">03</span>
            <h2 className="section-title">Projets</h2>
          </div>

          <div className="projects">
            {/* Projet 1 */}
            <div className="project-item">
              <div className="project-img-block">
                <img
                  src={pronosJudo1}
                  alt="Pronos Judo"
                  className="project-thumbnail"
                />
                <div className="project-img-overlay" />
              </div>
              <div className="project-info-block">
                <span className="project-index">01</span>
                <h3 className="project-name">Pronos Judo</h3>
                <p className="project-desc">
                  Ligue de pronostics de judo lors des championnats du monde et
                  d'Europe. Basée sur l'API officielle IJF.
                </p>
                <div className="project-tags">
                  <span className="project-tag">Vue.js</span>
                  <span className="project-tag">TypeScript</span>
                  <span className="project-tag">Node.js</span>
                  <span className="project-tag">API REST</span>
                  <span className="project-tag">Tailwind</span>
                </div>
                <button
                  className="btn-primary"
                  onClick={() => navigate("/projets/pronos-judo")}
                >
                  Voir le projet →
                </button>
              </div>
            </div>

            {/* Projet 2 — inversé */}
            <div className="project-item project-item--reverse">
              <div className="project-img-block">
                <img
                  src={interbudo1}
                  alt="Interbudo"
                  className="project-thumbnail"
                />
                <div className="project-img-overlay" />
              </div>
              <div className="project-info-block">
                <span className="project-index">02</span>
                <h3 className="project-name">Interbudo</h3>
                <p className="project-desc">
                  Site vitrine du club de judo Interbudo. Horaires, tarifs,
                  informations de contact et calendrier des événements.
                </p>
                <div className="project-tags">
                  <span className="project-tag">Vue.js</span>
                  <span className="project-tag">JavaScript</span>
                  <span className="project-tag">Tailwind</span>
                </div>
                <button
                  className="btn-primary"
                  onClick={() => navigate("/projets/interbudo")}
                >
                  Voir le projet →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMPÉTENCES ===== */}
      <section className="section" id="skills">
        <div className="container">
          <div className="section-header">
            <span className="section-number">04</span>
            <h2 className="section-title">Compétences</h2>
          </div>

          <div className="skills-list">
            {skills.map(({ logo, logoDark, name, themeable, inProgress }) => (
              <div key={name} className="skill-item">
                {themeable ? (
                  <>
                    <img
                      src={logo}
                      alt={name}
                      className="skill-icon skill-icon--light"
                    />
                    <img
                      src={logoDark}
                      alt={name}
                      className="skill-icon skill-icon--dark"
                    />
                  </>
                ) : (
                  <img src={logo} alt={name} className="skill-icon" />
                )}
                <span className="skill-name">
                  {name}
                  {inProgress && (
                    <span className="skill-badge-progress">En cours</span>
                  )}
                </span>
                <span className="skill-line" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section className="section" id="contact">
        <div className="container">
          <div className="section-header">
            <span className="section-number">05</span>
            <h2 className="section-title">Contact</h2>
          </div>

          <div className="contact-wrapper">
            <p className="contact-tagline">
              Un projet en tête ?<br />
              <span className="contact-tagline--accent">Discutons-en.</span>
            </p>

            <div className="contact-links">
              <a
                href="mailto:guilhemsaclier@gmail.com"
                className="contact-link"
              >
                <span className="contact-link-label">Email</span>
                <span className="contact-link-value">
                  guilhemsaclier@gmail.com
                </span>
                <span className="contact-link-arrow">↗</span>
              </a>

              <a
                href="https://www.linkedin.com/in/guilhem-saclier-a3704a1b9/"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <span className="contact-link-label">LinkedIn</span>
                <span className="contact-link-value">guilhem-saclier</span>
                <span className="contact-link-arrow">↗</span>
              </a>

              <a
                href="https://github.com/SGuilhem"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <span className="contact-link-label">GitHub</span>
                <span className="contact-link-value">SGuilhem</span>
                <span className="contact-link-arrow">↗</span>
              </a>
            </div>
          </div>

          <div className="contact-footer">
            <span className="contact-footer-text">
              © 2025 Guilhem Saclier — Fait avec React & Tailwind
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
