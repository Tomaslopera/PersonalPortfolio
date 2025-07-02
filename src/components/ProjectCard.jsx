import React, { useState } from 'react';
import './ProjectCard.css';

function ProjectCard({ title, description, images, technologies, repoLink }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const hasMultipleImages = images.length > 1;

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="project-card">
      <h2>{title}</h2>
      <p>{description}</p>

      <div className="image-container">
        <img src={images[currentIndex]} alt={`${title} ${currentIndex}`} className="main-image" />
        {hasMultipleImages && (
          <div className="image-controls">
            <button onClick={prevImage} className="image-arrow">◀</button>
            <button onClick={nextImage} className="image-arrow">▶</button>
          </div>
        )}
      </div>

        <div className="technologies">
        {technologies.map((tech, index) => (
            <div key={index} className="tech-icon" title={tech.name}>
            <img src={tech.icon} alt={tech.name} />
            </div>
        ))}
        </div>


      <div style={{ textAlign: 'center' }}>
        <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-repo"
        >
            Repositorio
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
