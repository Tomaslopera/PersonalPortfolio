import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <section className="skills-section">
      <div className="skills-container">
        <h1>Skills</h1>
        <div className="skills-subsections">
          <div className="skills-block">
            <h2>Professional</h2>
            <ul>
              <li>Teamwork and Communication</li>
              <li>Agile Methodologies (Scrum)</li>
              <li>Problem Solving</li>
              <li>Project Planning</li>
            </ul>
          </div>
          <div className="divider"></div>
          <div className="skills-block">
            <h2>Technical</h2>
            <ul>
              <li>Python, Pandas, NumPy</li>
              <li>SQL (MySQL, SQL Server)</li>
              <li>FastAPI, RESTful APIs</li>
              <li>React.js</li>
              <li>Git & GitHub</li>
              <li>AWS (EC2, S3, Lambda - basic)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
