import React, { useRef } from 'react';
import ProjectCard from '../components/ProjectCard';
import recircular1 from '../assets/projects/recircular1.png';
import recircular2 from '../assets/projects/recircular2.png';
import recircular3 from '../assets/projects/recircular3.png';
import background from '../assets/background.jpg';
import reactIcon from '../assets/technologies/react-logo.svg';
import pythonIcon from '../assets/technologies/python-logo.svg';
import sqlIcon from '../assets/technologies/sql-logo.png';
import fastapiIcon from '../assets/technologies/fastapi-logo.webp';
import './Projects.css';

function Projects() {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      const width = carouselRef.current.offsetWidth;
      carouselRef.current.scrollBy({ left: -width, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const width = carouselRef.current.offsetWidth;
      carouselRef.current.scrollBy({ left: width, behavior: 'smooth' });
    }
  };

  return (
    <section
      className="projects-section"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h1 className="projects-title">Projects</h1>

      <div className="carousel-container">

        <div className="projects-carousel" ref={carouselRef}>
          <div className="project-slide">
            <ProjectCard
              title="Recircular"
              description="In the current context, the circular economy has become a priority for many companies and organizations seeking to reduce environmental impact and promote sustainability. In this sense, the idea of ​​developing a Marketplace-type website project with a focus on the circular economy is proposed."
              images={[recircular1, recircular2, recircular3]}
              technologies={[
                { name: 'React', icon: reactIcon },
                { name: 'FastAPI', icon: fastapiIcon },
                { name: 'SQL', icon: sqlIcon },
              ]}
              repoLink="https://github.com/Tomaslopera/Recircular"
            />
          </div>

          <div className="project-slide">
            <ProjectCard
              title="Data Insights"
              description="A dashboard to visualize data using PowerBI and Python."
              images={[recircular2]}
              technologies={['PowerBI', 'Python']}
              repoLink="#"
            />
          </div>

          <div className="project-slide">
            <ProjectCard
              title="AI Injury Predictor"
              description="An AI model to detect injury risks for runners."
              images={[recircular3]}
              technologies={['Python', 'Scikit-learn']}
              repoLink="#"
            />
          </div>
        </div>
      </div>

        <div className="carousel-controls">
            <button className="carousel-btn" onClick={scrollLeft}>◀</button>
            <button className="carousel-btn" onClick={scrollRight}>▶</button>
        </div>
    </section>
  );
}

export default Projects;
