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

      {/* ABOUT */}
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
                locale. En dehors du code, je pratique le judo depuis presque 20
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

      {/* MON PARCOURS */}
      <section className="section">
        <div className="container">
          <h2>Mon Parcours</h2>
          <p>
            J'ai débuté ma carrière en tant que technicien son après avoir
            validé un titre professionnel à l'Infa de Nogent-sur-Marne, en
            alternance à l'ESRA. J'y faisais partie d'une petite équipe
            technique chargée de la gestion du matériel audiovisuel, de la
            maintenance des studios et du réseau informatique de l'école (plus
            de 120 ordinateurs), ainsi que du support pédagogique auprès des
            étudiants et professeurs. <br />
            <br />
            Par la suite, j'ai participé à la création d'une boutique de
            maintenance informatique et de réparation de smartphones à
            Bruxelles, une expérience entrepreneuriale enrichissante. <br />
            <br />
            De retour à Paris pendant le confinement, j'ai profité de cette
            période pour me reconvertir vers le développement web via la
            formation de développeur web junior d'OpenClassRooms. Cette
            transition m'a permis de consolider mes bases techniques et de
            retrouver le plaisir de construire des projets concrets. <br />
            <br />
            Ensuite, j'ai rejoint Volatil, où je suis intervenu sur des missions
            de sous-traitance pour Philip Morris International. J'y ai
            approfondi mes compétences en front-end et affiné ma manière de
            collaborer au sein d'équipes agiles et exigeantes.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
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

      {/* SKILLS */}
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

export default Home;
