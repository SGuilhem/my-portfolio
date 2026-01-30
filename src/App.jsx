import { useState } from "react";
import "./App.css";
import heroPhoto from "./assets/photo.png";
import pronosJudo1 from "./assets/PronosJudo1.png";
import interbudo1 from "./assets/Interbudo1.png";
import javaScriptLogo from "./assets/logos/JS-logo.svg";
import html5Logo from "./assets/logos/html-logo.png";
import vueJSLogo from "./assets/logos/VueJs-logo.png";
import reactJSLogo from "./assets/logos/ReactJs-logo.png";
import restAPILogo from "./assets/logos/rest-api-logo.png";
import githubLogo from "./assets/logos/github-logo.png";
import responsiveDesignLogo from "./assets/logos/responsive-design-logo.png";
import tailwindLogo from "./assets/logos/tailwind-logo.png";

function App() {
  return (
    <>
      {/* HERO */}
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

      {/* ABOUT */}
      <section className="section">
        <div className="container">
          <h2>À propos de moi</h2>
          <p>
            Développeur front-end avec 3 ans d’expérience, passionné par le web
            et l’univers du digital. Curieux de nature, j’aime découvrir de
            nouvelles cultures à travers mes voyages, notamment en Asie, où j’ai
            développé un goût particulier pour la gastronomie locale. En dehors
            du code, je pratique le judo depuis presque 20 ans (ceinture noire)
            et me lance dans le triathlon par défi personnel.
          </p>
        </div>
      </section>
      {/* MON PARCOURS */}
      <section className="section">
        <div className="container">
          <h2>Mon Parcours</h2>
          <p>
            J’ai débuté ma carrière en tant que technicien son après avoir
            validé un titre professionnel à l’Infa de Nogent-sur-Marne, en
            alternance à l’ESRA. J’y faisais partie d’une petite équipe
            technique chargée de la gestion du matériel audiovisuel, de la
            maintenance des studios et du réseau informatique de l’école (plus
            de 120 ordinateurs), ainsi que du support pédagogique auprès des
            étudiants et professeurs. <br/><br/>Par la suite, j’ai participé à la création
            d’une boutique de maintenance informatique et de réparation de
            smartphones à Bruxelles, une expérience entrepreneuriale
            enrichissante. <br/><br/>De retour à Paris pendant le confinement, j’ai
            profité de cette période pour me reconvertir vers le développement
            web via la formation de développeur web junior d’OpenClassRooms.
            Cette transition m’a permis de consolider mes bases techniques et de
            retrouver le plaisir de construire des projets concrets. <br/><br/>Ensuite,
            j’ai rejoint Volatil, où j’interviens sur des missions de
            sous-traitance pour Philip Morris International. J’y ai approfondi
            mes compétences en front-end et affiné ma manière de collaborer au
            sein d’équipes agiles et exigeantes.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section" id="projects">
        <div className="container">
          <h2>Mes projets</h2>

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
              <p>Ligue de pronostics de judo basée sur l’API IJF.</p>
              <button
                className="btn primary"
                onClick={() =>
                  window.open("https://pronos-judo.onrender.com/", "_blank")
                }
              >
                Voir le projet
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
              <h3>Site du Club de Judo</h3>
              <p>Site vitrine pour un club de judo.</p>
              <button
                className="btn primary"
                onClick={() =>
                  window.open("https://sguilhem.github.io/interbudo/", "_blank")
                }
              >
                Voir le projet
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section">
        <div className="container">
          <h2>Compétences</h2>
          <div className="skills">
            <div className="skill">
              <img src={vueJSLogo} alt="Vue.JS" className="skill-logo" />
              <span>Vue.JS</span>
            </div>
            <div className="skill">
              <img src={javaScriptLogo} alt="JavaScript" className="skill-logo" />
              <span>JavaScript</span>
            </div>
            <div className="skill">
              <img src={reactJSLogo} alt="React" className="skill-logo" />
              <span>React</span>
            </div>
            <div className="skill">
              <img src={html5Logo} alt="HTML & CSS" className="skill-logo" />
              <span>HTML & CSS</span>
            </div>
            <div className="skill">
              <img src={restAPILogo} alt="API REST" className="skill-logo" />
              <span>API REST</span>
            </div>
            <div className="skill">
              <img src={githubLogo} alt="Git / GitHub" className="skill-logo" />
              <span>Git / GitHub</span>
            </div>
            <div className="skill">
              <img src={responsiveDesignLogo} alt="Responsive Design" className="skill-logo" />
              <span>Responsive Design</span>
            </div>
            <div className="skill">
              <img src={tailwindLogo} alt="Tailwind CSS" className="skill-logo" />
              <span>Tailwind CSS</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section" id="contact">
        <div className="container">
          <h2>Contact</h2>
          <p>Un projet en tête ? Discutons-en !</p>
          <button className="btn secondary">Me contacter</button>
        </div>
      </section>
    </>
  );
}

export default App;
