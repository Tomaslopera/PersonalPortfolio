import React from 'react';
import './Home.css';
import foto from '../assets/about-photo.jpg';
import background from '../assets/background.jpg';

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${background})` }}>
      <div className="home-content">
        <h1>Tomás Lopera Duque</h1>
        <h2>Software and Computer Engineering Student at Universidad EIA</h2>
        <div className="about-me">
          <h2></h2>
          <p>
            I am a Software and Computer Engineering student at Universidad EIA, interested in Data Engineering, Data Science and Data Analysis. I have worked on projects where I apply data processing and analysis, SQL database management, backend development and agile methodologies (Scrum). I am currently deepening my knowledge in data engineering and cloud technologies (AWS).
          </p>
          <p>
            Soy estudiante de Ingeniería de Sistemas y Computación en la Universidad EIA, con interés en Data Engineering, Data Science y Data Analysis. He trabajado en proyectos donde aplico procesamiento y análisis de datos, manejo de bases de datos SQL, desarrollo backend y metodologías ágiles (Scrum). Actualmente, profundizo mis conocimientos en ingeniería de datos y tecnologías en la nube (AWS).
          </p>
          <br />
        </div>
        <img src={foto} alt="Tomás Lopera" className="profile-pic" />
      </div>
    </div>
  );
}

export default Home;
