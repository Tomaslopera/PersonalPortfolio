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
            I am a Systems and Computer Engineering student at EIA University, expecting to
            graduate in 2026-2. My main focus is Data Engineering, Data Science, and AI. I am
            specializing in transforming data into value through ingestion, exploration,
            preparation/transformation, and analysis/modeling processes. I have developed
            ETL/ELT processes, dimensional modeling, and feature engineering flows to train and
            evaluate ML models. I have also implemented RAG agents that combine retrieval in
            vector databases with response generation. I am currently delving deeper into data
            engineering, data science, and generative AI.
          </p>
          <p>
            Soy estudiante de Ingeniería de Sistemas y Computación en la Universidad EIA con expectativas de Grado en 2026-2. Mi enfoque principal es la Ingeniería de Datos, Ciencia de Datos e IA. Me estoy especializando en la transformación de datos en valor mediante procesos de ingestión, exploración, preparación/transformación, análisis/modelado. He desarrollado procesos ETL/ELT, modelado dimensional y flujos de ingeniería de características para entrenar y evaluar modelos de ML. También, he implementado agentes RAG que combinan la recuperación en bases de datos vectoriales con la generación de respuestas. Actualmente estoy profundizando en ingeniería de datos, ciencia de datos e IA generativa.
          </p>
          <br />
          <h2>Technologies</h2>
          <p>
            Java, Python, pandas, NumPy, scikit-learn, matplotlib, seaborn, SQL, FastAPI, Streamlit, n8n, OpenAI API, AWS, Git/GitHub, Power BI, PySpark, Databricks, Langchain
          </p>
        </div>
        <img src={foto} alt="Tomás Lopera" className="profile-pic" />
      </div>
    </div>
  );
}

export default Home;
