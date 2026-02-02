import React from "react";
import "./Home.css";
import foto from "../assets/about-photo.jpg";
import background from "../assets/background1.jpeg";

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${background})` }}>
      <div className="home-content">
        <img src={foto} alt="Tomás Lopera" className="profile-pic" />

        <h1>Tomás Lopera Duque</h1>
        <h2>Data & AI Intern @ Cadena | Software Engineering Student @ EIA University</h2>

        <section id="about" className="about-me">
          <p>
            Data & AI Intern passionate about building scalable data solutions that support analytics and AI use cases. Experienced in SQL, Python, ETL/ELT pipelines and AWS cloud data services. Skilled in data manipulation, exploratory analysis, data modeling and foundational machine learning concepts. Continuously expanding expertise and knowledge in modern data engineering and cloud technologies to deliver reliable and efficient data workflows.
          </p>
        </section>

        {/* Technologies */}
        <section id="skills" className="panel">
          <h3>Technologies</h3>

          <h4>Languages & Core</h4>
          <div className="chips">
            <span className="chip">SQL</span>
            <span className="chip">Python</span>
            <span className="chip">Git/GitHub</span>
            <span className="chip">Bash</span>
            <span className="chip">Java</span>
            <span className="chip">Docker</span>
          </div>

          <h4>Data Engineering</h4>
          <div className="chips">
            <span className="chip">pandas</span>
            <span className="chip">PySpark</span>
            <span className="chip">AWS Orchestration</span>
            <span className="chip">Databricks</span>
            <span className="chip">dbt</span>            
            <span className="chip">Prefect</span>
            <span className="chip">Airflow</span>
            <span className="chip">Power BI</span>
          </div>

          <h4>Data Science &AI</h4>
          <div className="chips">
            <span className="chip">pandas</span>
            <span className="chip">scikit-learn</span>
            <span className="chip">matplotlib</span>
            <span className="chip">seaborn</span>
            <span className="chip">n8n</span>
            <span className="chip">LangChain</span>
            <span className="chip">OpenAI API</span>
          </div>

          <h4>AWS</h4>
          <div className="chips">
            <span className="chip">S3</span>
            <span className="chip">EC2</span>
            <span className="chip">Lambda</span>
            <span className="chip">IAM</span>
            <span className="chip">RDS</span>
            <span className="chip">Glue</span>
            <span className="chip">Redshift</span>
            <span className="chip">Athena</span>
            <span className="chip">SageMaker</span>
            <span className="chip">Textract</span>
          </div>
        </section>
        <div className="home-cta">
          <Link to="/skills" className="skills-btn">
            Skills
          </Link>
        </div>
      </div>
    </div>
  );
}