import React from 'react';
import './Skills.css';
import background from '../assets/background.jpg'; 

const Skill = ({ name, level }) => {
  const percentage = (level / 5) * 100;

  return (
    <div className="skill-item">
      <span className="skill-name">{name}</span>
      <div className="skill-bar">
        <div className="filled" style={{ width: `${percentage}%` }}></div>
      </div>
      <span className="skill-percent">{percentage}%</span>
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
            <Skill name="Communication" level={4} />
            <Skill name="Teamwork" level={4} />
            <Skill name="Problem Solving" level={4} />
            <Skill name="Critical Thinking" level={4} />
            <Skill name="Strategic Planning" level={4} />
            <Skill name="Analytical Skills" level={4} />
          </div>
          <div className="divider"></div>
          <div className="skills-block">
            <h2>Technical</h2>
            <Skill name="Python" level={4} />
            <Skill name="SQL" level={4} />
            <Skill name="Pandas" level={4} />
            <Skill name="FastAPI" level={4} />
            <Skill name="AWS" level={3} />
            <Skill name="Git" level={4} />
            <Skill name="Scrum" level={3} />
            <Skill name="PowerBI" level={3} />
            <Skill name="Excel" level={4} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
