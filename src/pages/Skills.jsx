import React from 'react';
import './Skills.css';
import background from '../assets/background1.jpeg'; 

const Skill = ({ name}) => {

  return (
    <div className="skill-item">
      <span className="skill-name">{name}</span>
    </div>
  );
};

function Skills() {
  return (
    <section className="skills-section" style={{ backgroundImage: `url(${background})` }}>
      <div className="skills-container">
        <h1>Skills</h1>
        <div className="skills-subsections">
          <div className="skills-block">
            <h2>Professional</h2>
            <Skill name="Communication" />
            <Skill name="Teamwork" />
            <Skill name="Problem Solving" />
            <Skill name="Critical Thinking" />
            <Skill name="Strategic Planning" />
            <Skill name="Analytical Skills" />
          </div>
          <div className="divider"></div>
          <div className="skills-block">
            <h2>Technical</h2>
            <Skill name="SQL & Data Manipulation" />
            <Skill name="Python for data processing and automation" />
            <Skill name="ETL/ELT pipeline development and orchestration" />
            <Skill name="AWS Cloud Data Solutions" />
            <Skill name="Data Warehouse, Lake & Lakehouse Modeling"/>
            <Skill name="Big Data Tools & Concepts" />
            <Skill name="Exploratory Data Analysis and Visualization" />
            <Skill name="Foundations of AI & Machine Learning" />
            <Skill name="Feature engineering and preprocessing" />
            <Skill name="Generative AI & Large Language Models (LLMs)" />
            <Skill name="AWS AI Services" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
