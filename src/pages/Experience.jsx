import React from "react";
import "./Experience.css";
import bg from "../assets/background1.jpeg";

const TIMELINE_SUMMARY = [
  { year: "Jan 2026 - Jul 2026", company: "Data & AI Intern" }
];

const EXPERIENCES = [
  {
    period: "Jan 2026 - Jul 2026",
    title: "Data & AI Intern",
    company: "Cadena SA",
    summary:
      "Description",
    role:
      "Role Description",
    stack: ["Python", "SQL", "ETL", "Textract", "S3", "RDS", "Lambda"],
  }
];

export default function Experience() {
  return (
    <section
      className="exp-page"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Header */}
      <div className="exp-hero">
        <h1>Professional Experience</h1>
      </div>

      <section className="timeline-top">
        {TIMELINE_SUMMARY.map((item, i) => (
            <div key={i} className="timeline-node">
            <span className="dot" />
            <h4>{item.year}</h4>
            <p>{item.company}</p>
            </div>
        ))}
      </section>


      {/* Timeline */}
      <div className="timeline">
        {EXPERIENCES.map((e, i) => (
          <div key={i} className="timeline-item">
            <div className="timeline-dot" />

            <div className="timeline-content">
              <span className="timeline-date">{e.period}</span>

              <div className="timeline-card">
                <h3>{e.title}</h3>
                <p className="company">{e.company}</p>

                <p className="summary">{e.summary}</p>
                <p className="role"><strong>Role:</strong> {e.role}</p>

                <div className="chips">
                  {e.stack.map((s, k) => (
                    <span key={k} className="chip small">{s}</span>
                  ))}
                </div>

                {e.repo && (
                  <a href={e.repo} target="_blank" rel="noreferrer" className="repo-btn">
                    Repository
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
