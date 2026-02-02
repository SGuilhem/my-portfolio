import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import pronosJudo1 from "../assets/Thumbnails/PronosJudo1.png";
import pronosJudo2 from "../assets/Thumbnails/PronosJudo2.png";
import pronosJudo3 from "../assets/Thumbnails/PronosJudo3.png";
import interbudo1 from "../assets/Thumbnails/Interbudo1.png";
import interbudo2 from "../assets/Thumbnails/Interbudo2.png";
import interbudo3 from "../assets/Thumbnails/Interbudo3.png";
import "../App.css";

const projectsData = {
  "pronos-judo": {
    title: "Pronos Judo",
    description: [
      "Pronos Judo est une ligue de pronostics dédiée au judo.",
      "J’ai développé cette application à la suite d’une ligue de pronostics que nous organisions chaque année entre membres de mon club lors des Championnats du monde et d'Europe. Ces pronostics étaient jusque-là gérés via Google Docs, une solution peu pratique et difficile à maintenir.",
      "L’application permet aux utilisateurs de prédire chaque jour les podiums des catégories prévues le lendemain. Les listes de judokas sélectionnables pour chaque catégorie sont alimentées automatiquement grâce à l’API officielle de la Fédération Internationale de Judo (IJF), qui fournit les combattants engagés pour chaque édition de compétition.",
      "À l’issue de chaque journée, des points sont attribués à chaque participant en fonction de la justesse de ses pronostics, et un classement général est mis à jour en temps réel.",
    ],
    technologies: ["VueJS", "JavaScript", "NodeJS", "API REST", "Tailwind CSS"],
    link: "https://pronos-judo.onrender.com/",
    screenshots: [pronosJudo1, pronosJudo2, pronosJudo3],
  },
  interbudo: {
    title: "Site du Club de Judo - Interbudo",
    description: [
      "Interbudo est un site vitrine créé pour un club de judo local.",
      "Il présente les horaires, les lieux des entraînements, les informations sur les dirigeants, les professeurs, les modalités d'inscription, calendriers du club, les parteinaires et les contacts.",
      "les événements du club et les photos de l'équipe. C'est un projet complet alliant design moderne et informations pratiques pour les membres du club.",
    ],
    technologies: ["VueJS", "HTML", "CSS", "JavaScript", "Tailwind CSS"],
    link: "https://sguilhem.github.io/interbudo/",
    screenshots: [interbudo1, interbudo2, interbudo3],
  },
};

function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projectsData[projectId];
  const [selectedImage, setSelectedImage] = useState(null);

  if (!project) {
    return (
      <section className="section">
        <div className="container">
          <h1>Projet non trouvé</h1>
          <button className="btn primary" onClick={() => navigate("/")}>
            Retour à l'accueil
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <button className="btn secondary" onClick={() => navigate("/")}>
          ← Retour
        </button>

        <h1 className="project-title">{project.title}</h1>

        <div className="project-detail-grid">
          <div>
            <h2 className="project-preview">Aperçu du projet</h2>
            <div className="screenshots">
              {project.screenshots.map((screenshot, idx) => (
                <div
                  key={idx}
                  className="screenshot-card"
                  onClick={() => setSelectedImage(screenshot)}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={screenshot}
                    alt={`${project.title} screenshot ${idx + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="project-info">
            <h2>À propos</h2>
            {project.description.map((paragraph, index) => (
              <p
                key={index}
                style={{ marginBottom: "16px", lineHeight: "1.8" }}
              >
                {paragraph}
              </p>
            ))}

            <h3 style={{ marginTop: "24px", marginBottom: "12px" }}>
              Technologies utilisées
            </h3>
            <div className="project-tech">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>

            <button
              className="btn primary project-cta hide-on-mobile"
              onClick={() => window.open(project.link, "_blank")}
            >
              Voir le projet en direct
            </button>
          </div>
        </div>
        <div className="mobile-cta">
          <button
            className="btn primary project-cta show-on-mobile"
            onClick={() => window.open(project.link, "_blank")}
          >
            Voir le projet en direct
          </button>
        </div>
      </div>

      {selectedImage && (
        <div
          className="lightbox-overlay"
          onClick={() => setSelectedImage(null)}
        >
          <div className="lightbox-content">
            <button
              className="lightbox-close"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Screenshot en grand"
              className="lightbox-image"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default ProjectDetail;
