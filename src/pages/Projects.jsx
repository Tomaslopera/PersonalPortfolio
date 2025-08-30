import React, { useRef } from 'react';
import ProjectCard from '../components/ProjectCard';
import background from '../assets/background.jpg';
import reactIcon from '../assets/technologies/react-logo.svg';
import pythonIcon from '../assets/technologies/python-logo.svg';
import sqlIcon from '../assets/technologies/sql-logo.png';
import fastapiIcon from '../assets/technologies/fastapi-logo.webp';
import './Projects.css';

import recircular1 from '../assets/projects/recircular1.png';
import recircular2 from '../assets/projects/recircular2.png';
import recircular3 from '../assets/projects/recircular3.png';
import parkhub1 from '../assets/projects/parkhub1.png';
import parkhub2 from '../assets/projects/parkhub2.png';
import parkhub3 from '../assets/projects/parkhub3.png';
import parkhub4 from '../assets/projects/parkhub4.png';

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
              description={
                "Marketplace de economía circular para publicar, comprar, vender y reutilizar materiales y productos.\n" +
                "\nRol: Backend | diseñé el esquema relacional y desarrollé la API REST (FastAPI, MySQL) para autenticación, publicaciones y órdenes."
              }

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
              title="Parkhub"
              description={
                "Aplicación de reservas de parqueaderos con registro/login, cambio de contraseña, reservas e historial.\n" + "\n" +
                "Rol: Backend | construí la API REST y el modelo de datos (FastAPI, MySQL) para usuarios, reservas y reportes."
              }

              images={[parkhub1, parkhub2, parkhub3, parkhub4]}
              technologies={[
                { name: 'React', icon: reactIcon },
                { name: 'FastAPI', icon: fastapiIcon },
                { name: 'SQL', icon: sqlIcon },
              ]}
              repoLink="https://github.com/Tomaslopera/ParkHub"
            />
          </div>
          <div className="project-slide">
            <ProjectCard
              title="AI Injury Predictor"
              description={
                "Aplicación de reservas de parqueaderos con registro/login, cambio de contraseña, reservas e historial.\n" +
                "Rol: Backend | construí la API REST y el modelo de datos (FastAPI, MySQL) para usuarios, reservas y reportes."
              }
              technologies={['Python', 'Scikit-learn']}
              repoLink="#"
            />
          </div>
          <div className="project-slide">
            <ProjectCard
              title="AI Injury Predictor"
              description={
                "Aplicación de reservas de parqueaderos con registro/login, cambio de contraseña, reservas e historial.\n" +
                "Rol: Backend | construí la API REST y el modelo de datos (FastAPI, MySQL) para usuarios, reservas y reportes."
              }
              technologies={[
                {name: 'Python', icon: pythonIcon},
                {name: 'Scikit-learn'}
              ]}
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
