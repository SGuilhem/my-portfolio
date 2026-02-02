import { useNavigate } from "react-router-dom";
import heroPhoto from "../assets/photo.png";
import heroPhoto2 from "../assets/photo2.jpeg";
import pronosJudo1 from "../assets/Thumbnails/PronosJudo1.png";
import interbudo1 from "../assets/Thumbnails/Interbudo1.png";
import javaScriptLogo from "../assets/logos/JS-logo.svg";
import html5Logo from "../assets/logos/html-logo.png";
import vueJSLogo from "../assets/logos/VueJs-logo.png";
import reactJSLogo from "../assets/logos/ReactJs-logo.png";
import restAPILogo from "../assets/logos/rest-api-logo.png";
import githubLogo from "../assets/logos/github-logo.png";
import responsiveDesignLogo from "../assets/logos/responsive-design-logo.png";
import tailwindLogo from "../assets/logos/tailwind-logo.png";
import linkedinLogo from "../assets/logos/LinkedIn-logo.png";
import "../App.css";

function Home() {
  const navigate = useNavigate();

  const skills = [
    { logo: javaScriptLogo, name: "JavaScript" },
    { logo: reactJSLogo, name: "React" },
    { logo: vueJSLogo, name: "Vue.JS" },
    { logo: html5Logo, name: "HTML & CSS" },
    { logo: restAPILogo, name: "API REST" },
    { logo: githubLogo, name: "Git / GitHub" },
    { logo: responsiveDesignLogo, name: "Responsive Design" },
    { logo: tailwindLogo, name: "Tailwind CSS" },
  ];

  return (
    <>
      <section className="section hero">
        <div className="container">
          <div className="hero-content">
            <div>
              <h1 className="hero-title">Guilhem Saclier</h1>
              <h2 className="hero-subtitle">
                Développeur Front-End | Vue.Js & React.Js
              </h2>
              <p className="hero-text">
                Je conçois des interfaces web modernes et des projets concrets.
              </p>

              <div className="hero-actions">
                <button
                  className="btn primary"
                  onClick={() =>
                    document
                      .getElementById("projects")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Voir mes projets
                </button>
                <button
                  className="btn secondary"
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

            <div className="hero-avatar">
              <div className="avatar-wrapper">
                <img
                  src={heroPhoto}
                  alt="Photo de profil"
                  className="avatar-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container flex rows">
          <div className="w-3/5">
            <h2>À propos de moi</h2>
            <div>
              <p>
                Développeur front-end avec 3 ans d'expérience, passionné par le
                web et l'univers du digital. Curieux de nature, j'aime découvrir
                de nouvelles cultures à travers mes voyages, notamment en Asie,
                où j'ai développé un goût particulier pour la gastronomie
                locale. En dehors du code, je pratique le judo depuis bientôt 20
                ans (ceinture noire) et me lance dans le triathlon par défi
                personnel.
              </p>
            </div>
          </div>
          <div className="hero-avatar2">
            <div className="avatar-wrapper2">
              <img
                src={heroPhoto2}
                alt="Photo de profil"
                className="avatar-img2"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Mon Parcours</h2>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <span className="timeline-date">
                  Novembre 2021 — Décembre 2024
                </span>
                <h3>Développeur Front-End · Volatil</h3>
                <span className="timeline-place">
                  Mission Philip Morris International · Paris
                </span>

                <ul className="timeline-list">
                  <li>
                    Conception et développement d’interfaces{" "}
                    <strong>Vue.js</strong> orientées performance, UI/UX et
                    scalabilité (B2C / B2B)
                  </li>
                  <li>
                    Maintenance évolutive : gestion de bugs, optimisation
                    front-end, refactoring et amélioration continue
                  </li>
                  <li>
                    Contribution à un <strong>Design System</strong> via
                    Storybook et standardisation de composants réutilisables
                  </li>
                  <li>
                    Collaboration en anglais avec équipes produit (PO, QA,
                    back-end) en méthodologie <strong>SCRUM</strong>
                  </li>
                </ul>

                <div className="timeline-stack">
                  <span className="stack-badge">Vue.js</span>
                  <span className="stack-badge">Tailwind CSS</span>
                  <span className="stack-badge">Storybook</span>
                  <span className="stack-badge">Figma</span>
                  <span className="stack-badge">Jira</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content">
                <span className="timeline-date">
                  Septembre 2018 — Septembre 2019
                </span>
                <h3>Co-fondateur & Technicien · Smartfix</h3>
                <span className="timeline-place">Bruxelles</span>

                <ul className="timeline-list">
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

            <div className="timeline-item">
              <div className="timeline-content">
                <span className="timeline-date">
                  Septembre 2010 — Juillet 2018
                </span>
                <h3>Technicien Audiovisuel · Groupe ESRA</h3>
                <span className="timeline-place">Paris</span>

                <ul className="timeline-list">
                  <li>
                    Gestion et maintenance de matériel audiovisuel &
                    informatique
                  </li>
                  <li>
                    Installation et configuration de studios d’enregistrement
                  </li>
                  <li>Support technique auprès des étudiants et enseignants</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="container">
          <h2>Mes projets Personnels</h2>

          <div className="projects-grid">
            <div className="card">
              <div className="screenshot-placeholder">
                <img
                  src={pronosJudo1}
                  alt="Screenshot Pronos Judos"
                  className="project-img"
                />
              </div>
              <h3>Pronos Judo</h3>
              <p>
                Ligue de pronostics de judo lors des championnats du monde,
                championnats d'Europe, etc. Basée sur l'API IJF.
              </p>
              <button
                className="btn primary"
                onClick={() => navigate("/projets/pronos-judo")}
              >
                Plus d'infos
              </button>
            </div>

            <div className="card">
              <div className="screenshot-placeholder">
                <img
                  src={interbudo1}
                  alt="Screenshot Interbudo"
                  className="project-img"
                />
              </div>
              <h3>Site du club de judo Interbudo</h3>
              <p>
                Site de mon club de judo, mise à jour d'une version précédente
                (horaires, tarifs, informations de contact, etc.).
              </p>
              <button
                className="btn primary"
                onClick={() => navigate("/projets/interbudo")}
              >
                Plus d'infos
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Compétences</h2>
          <div className="skills">
            {skills.map(({ logo, name }) => (
              <div key={name} className="skill">
                <img src={logo} alt={name} className="skill-logo" />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container contact-section">
          <h2>Contact</h2>
          <div className="contact-list">
            <button
              className="btn secondary contact-item"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/guilhem-saclier-a3704a1b9/",
                  "_blank",
                )
              }
            >
              <img src={linkedinLogo} alt="LinkedIn" className="contact-logo" />
              <span>LinkedIn</span>
            </button>
            <button
              className="btn secondary contact-item"
              onClick={() =>
                window.open("https://github.com/SGuilhem", "_blank")
              }
            >
              <img src={githubLogo} alt="GitHub" className="contact-logo" />
              <span>GitHub</span>
            </button>
          </div>
          <p>Un projet en tête ? Discutons-en !</p>
          <button
            className="btn secondary"
            onClick={() => {
              window.location.href = "mailto:guilhemsaclier@gmail.com";
            }}
          >
            Me contacter
          </button>
        </div>
      </section>
    </>
  );
}

export default Home;
