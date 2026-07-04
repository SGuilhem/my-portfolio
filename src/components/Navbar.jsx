import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Accueil', href: '#hero' },
  { label: 'À propos', href: '#about' },
  { label: 'Parcours', href: '#parcours' },
  { label: 'Projets', href: '#projects' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]); // se relance si on change de page

  const handleLinkClick = (href) => {
    setIsOpen(false);
    const id = href.replace('#', '');

    // Si on est sur une page projet, on revient à Home d'abord
    if (location.pathname !== '/' && !location.pathname.endsWith('/my-portfolio/')) {
      navigate('/');
      // Attend que Home soit monté puis scroll
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <button
        className={`hamburger ${isOpen ? 'is-open' : ''}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        aria-expanded={isOpen}
      >
        <span className="hamburger-line" />
        <span className="hamburger-line" />
        <span className="hamburger-line" />
      </button>

      <div className={`nav-overlay ${isOpen ? 'is-open' : ''}`}>
        <nav className="nav-menu">
          {navLinks.map(({ label, href }, i) => (
            <button
              key={href}
              className={`nav-link ${
                activeSection === href.replace('#', '') ? 'is-active' : ''
              }`}
              onClick={() => handleLinkClick(href)}
              style={{ '--i': i }}
            >
              <span className="nav-link-number">0{i + 1}</span>
              <span className="nav-link-label">{label}</span>
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}

export default Navbar;