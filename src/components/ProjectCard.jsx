import React, { useState } from 'react';
import './ProjectCard.css';

function ProjectCard({
  title,
  description = '',        // <- default string
  images = [],             // <- default array
  technologies = [],       // <- default array
  repoLink
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const validImages = Array.isArray(images) ? images.filter(Boolean) : [];
  const hasImages = validImages.length > 0;
  const hasMultipleImages = validImages.length > 1;

  const prevImage = () => setCurrentIndex(p => (p === 0 ? validImages.length - 1 : p - 1));
  const nextImage = () => setCurrentIndex(p => (p === validImages.length - 1 ? 0 : p + 1));
  const lines = Array.isArray(description)
    ? description
    : String(description).split(/\n+/).filter(Boolean);

  return (
    <div className="project-card">
      <h2>{title}</h2>

      {lines.map((line, idx) => (
        <p
          key={idx}
          className={`project-desc ${idx > 0 ? 'role' : ''}`}
        >
          {line}
        </p>
      ))}

      {hasImages && (
        <div className="image-container">
          <img
            src={validImages[currentIndex]}
            alt={`${title} screenshot ${currentIndex + 1}`}
            className="main-image"
            loading="lazy"
          />
          {hasMultipleImages && (
            <div className="image-controls">
              <button onClick={prevImage} className="image-arrow">◀</button>
              <button onClick={nextImage} className="image-arrow">▶</button>
            </div>
          )}
        </div>
      )}

      <div className="technologies">
        {(technologies || []).map((t, i) => {
          const isString = typeof t === 'string';
          const name = isString ? t : t.name;
          const icon = isString ? null : t.icon;
          return icon ? (
            <div key={i} className="tech-icon" title={name}>
              <img src={icon} alt={name} />
            </div>
          ) : (
            <span key={i} className="tech-chip">{name}</span>
          );
        })}
      </div>

      {repoLink && (
        <div style={{ textAlign: 'center' }}>
          <a href={repoLink} target="_blank" rel="noopener noreferrer" className="btn-repo">
            Repository
          </a>
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
