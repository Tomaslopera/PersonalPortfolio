import React from 'react';
import './ProjectCard.css';

function ProjectCard({ title, description, images, technologies, repoLink }) {
  return (
    <div className="project-card">
      <h2>{title}</h2>
      <p>{description}</p>

      <div className="project-images">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`${title} ${index}`} />
        ))}
      </div>

      <div className="technologies">
        {technologies.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>

      <a href={repoLink} target="_blank" rel="noopener noreferrer" className="btn-repo">
        Ver Repositorio
      </a>
    </div>
  );
}

export default ProjectCard;

