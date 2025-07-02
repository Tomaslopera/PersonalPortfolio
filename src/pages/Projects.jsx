import React from 'react';
import ProjectCard from '../components/ProjectCard';
import recircular1 from '../assets/projects/recircular1.png';
import recircular2 from '../assets/projects/recircular2.png';
import recircular3 from '../assets/projects/recircular3.png';
import background from '../assets/background.jpg';
import './Projects.css'; // Asegúrate que este CSS exista

function Projects() {
  return (
    <section className="projects-section" id="projects" style={{ backgroundImage: `url(${background})` }}>
      <h1 className="projects-title">Projects</h1>

      <div className="projects-grid">
        <ProjectCard
          title="Recircular"
          description="A marketplace focused on the circular economy for exchanging reusable products."
          images={[recircular1, recircular2, recircular3]}
          technologies={['React', 'FastAPI', 'MySQL']}
          repoLink="https://github.com/Tomaslopera/Recircular"
        />
        <ProjectCard
          title="Recircular"
          description="A marketplace focused on the circular economy for exchanging reusable products."
          images={[recircular1, recircular2, recircular3]}
          technologies={['React', 'FastAPI', 'MySQL']}
          repoLink="https://github.com/Tomaslopera/Recircular"
        />
        <ProjectCard
          title="Recircular"
          description="A marketplace focused on the circular economy for exchanging reusable products."
          images={[recircular1, recircular2, recircular3]}
          technologies={['React', 'FastAPI', 'MySQL']}
          repoLink="https://github.com/Tomaslopera/Recircular"
        />
        <ProjectCard
          title="Recircular"
          description="A marketplace focused on the circular economy for exchanging reusable products."
          images={[recircular1, recircular2, recircular3]}
          technologies={['React', 'FastAPI', 'MySQL']}
          repoLink="https://github.com/Tomaslopera/Recircular"
        />
        <ProjectCard
          title="Recircular"
          description="A marketplace focused on the circular economy for exchanging reusable products."
          images={[recircular1, recircular2, recircular3]}
          technologies={['React', 'FastAPI', 'MySQL']}
          repoLink="https://github.com/Tomaslopera/Recircular"
        />
        {/* Puedes duplicar este ProjectCard para más proyectos */}
      </div>
    </section>
  );
}

export default Projects;

