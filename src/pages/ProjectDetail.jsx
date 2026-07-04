import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import pronosJudo1 from "../assets/Thumbnails/PronosJudo1.png";
import pronosJudo2 from "../assets/Thumbnails/PronosJudo2.png";
import pronosJudo3 from "../assets/Thumbnails/PronosJudo3.png";
import pronosJudo4 from "../assets/Thumbnails/PronosJudo4.png";
import interbudo1 from "../assets/Thumbnails/Interbudo1.png";
import interbudo2 from "../assets/Thumbnails/Interbudo2.png";
import interbudo3 from "../assets/Thumbnails/Interbudo3.png";
import "../App.css";

const projectsData = {
  "pronos-judo": {
    title: "Pronos Judo",
    year: "2024",
    role: "Développeur Full-Stack",
    description: [
      "Pronos Judo est une ligue de pronostics dédiée au judo.",
      "J'ai développé cette application à la suite d'une ligue de pronostics que nous organisions chaque année entre membres de mon club lors des Championnats du monde et d'Europe. Ces pronostics étaient jusque-là gérés via Google Docs, une solution peu pratique et difficile à maintenir.",
      "L'application permet aux utilisateurs de prédire chaque jour les podiums des catégories prévues le lendemain. Les listes de judokas sélectionnables pour chaque catégorie sont alimentées automatiquement grâce à l'API officielle de la Fédération Internationale de Judo (IJF).",
      "À l'issue de chaque journée, des points sont attribués à chaque participant en fonction de la justesse de ses pronostics, et un classement général est mis à jour en temps réel.",
    ],
    technologies: ["VueJS", "JavaScript", "NodeJS", "API REST", "Tailwind CSS"],
    link: "https://pronos-judo.onrender.com/",
    screenshots: [pronosJudo1, pronosJudo2, pronosJudo3, pronosJudo4],
  },
  interbudo: {
    title: "Interbudo",
    year: "2024",
    role: "Développeur Front-End",
    description: [
      "Interbudo est un site vitrine créé pour un club de judo local.",
      "Il présente les horaires, les lieux des entraînements, les informations sur les dirigeants, les professeurs, les modalités d'inscription, calendriers du club, les partenaires et les contacts.",
      "C'est un projet complet alliant design moderne et informations pratiques pour les membres du club.",
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

  // Scroll en haut à l'arrivée
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  if (!project) {
    return (
      <section className="section" style={{ minHeight: '100svh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <h1>Projet non trouvé</h1>
          <button className="btn-primary" onClick={() => navigate("/")}>
            Retour à l'accueil
          </button>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Header du projet */}
      <section className="pd-hero">
        <div className="container">
          <button className="pd-back" onClick={() => navigate("/")}>
            ← Retour
          </button>

          <div className="pd-hero-content">
            <div className="pd-meta">
              <span className="pd-meta-item">{project.year}</span>
              <span className="pd-meta-sep">—</span>
              <span className="pd-meta-item">{project.role}</span>
            </div>
            <h1 className="pd-title">{project.title}</h1>
            <div className="pd-tags">
              {project.technologies.map((tech) => (
                <span key={tech} className="pd-tag">{tech}</span>
              ))}
            </div>
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="pd-cta"
          >
            <span>Voir le projet en direct</span>
            <span className="pd-cta-arrow">↗</span>
          </a>
        </div>
      </section>

      {/* Screenshot principal */}
      <div className="pd-main-screenshot">
        <img
          src={project.screenshots[0]}
          alt={project.title}
          onClick={() => setSelectedImage(project.screenshots[0])}
        />
      </div>

      {/* Contenu */}
      <section className="section pd-content">
        <div className="container">
          <div className="pd-grid">

            {/* Description */}
            <div className="pd-description">
              <h2 className="pd-section-label">À propos du projet</h2>
              {project.description.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* Screenshots secondaires */}
            <div className="pd-screenshots">
              <h2 className="pd-section-label">Aperçus</h2>
              <div className="pd-screenshots-grid">
                {project.screenshots.slice(1).map((screenshot, idx) => (
                  <div
                    key={idx}
                    className="pd-screenshot-card"
                    onClick={() => setSelectedImage(screenshot)}
                  >
                    <img
                      src={screenshot}
                      alt={`${project.title} aperçu ${idx + 2}`}
                    />
                    <div className="pd-screenshot-overlay">
                      <span>Agrandir</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Aperçu agrandi"
              className="lightbox-image"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectDetail;