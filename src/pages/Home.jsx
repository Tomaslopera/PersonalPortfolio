import React from "react";
import "./Home.css";
import foto from "../assets/about-photo.jpg";
import background from "../assets/background1.jpeg";

export default function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${background})` }}>
      <div className="home-content">
        <img src={foto} alt="Tomás Lopera" className="profile-pic" />

        <h1>Tomás Lopera Duque</h1>
        <h2>Software and Computer Engineering Student at Universidad EIA</h2>

        <section id="about" className="about-me">
          <p>
            I am a Software and Computer Engineering student at EIA University,
            expecting to graduate in 2026-2. My main focus is Data Engineering,
            Data Science, and AI. I specialize in transforming data into value
            through ingestion, exploration, preparation/transformation, and
            analysis/modeling. I have developed ETL/ELT processes, dimensional
            modeling, and feature engineering flows to train and evaluate ML
            models. I’ve also implemented RAG agents that combine retrieval in
            vector databases with response generation.
          </p>
        </section>

        {/* Technologies */}
        <section id="skills" className="panel">
          <h3>Technologies</h3>

          <h4>Languages & Core</h4>
          <div className="chips">
            <span className="chip">Java</span>
            <span className="chip">Python</span>
            <span className="chip">SQL</span>
            <span className="chip">Git/GitHub</span>
            <span className="chip">Bash</span>
          </div>

          <h4>Data & ML</h4>
          <div className="chips">
            <span className="chip">pandas</span>
            <span className="chip">NumPy</span>
            <span className="chip">scikit-learn</span>
            <span className="chip">matplotlib</span>
            <span className="chip">seaborn</span>
            <span className="chip">PySpark</span>
            <span className="chip">Databricks</span>
            <span className="chip">Power BI</span>
            <span className="chip">n8n</span>
            <span className="chip">Prefect</span>
          </div>

          <h4>AI</h4>
          <div className="chips">
            <span className="chip">PyTorch</span>
            <span className="chip">LangChain</span>
            <span className="chip">OpenAI API</span>
          </div>

          <h4>AWS</h4>
          <div className="chips">
            <span className="chip">S3</span>
            <span className="chip">Lambda</span>
            <span className="chip">IAM</span>
            <span className="chip">RDS</span>
            <span className="chip">Textract</span>
            <span className="chip">Rekognition</span>
          </div>
        </section>
      </div>
    </div>
  );
}