import React from "react";
import bg from "../assets/background1.jpeg";
import "./Education.css";

import AcademicCard from "../components/AcademicCard";

const EDUCATION = [
{
    title: "High School",
    subtitle: "Colegio José María Berrio",
    period: "2016 - 2021",
    details: "",
  },
  {
    title: "Universidad EIA · Software & Computer Engineering",
    subtitle: "Undergraduate (expected graduation 2026-2)",
    period: "2022 — 2026",
    details:
      "Focus on Data Engineering, Data Science & AI. ETL/ELT, dimensional modeling, feature engineering, and RAG agents.",
  },
];

const LANGUAGES = [
  { name: "Spanish", level: "Native" },
  { name: "English", level: "B2" },
];

const CERTIFICATIONS = [
  {
    provider: "NVIDIA",
    name: "Fundamentals of Deep Learning",
    date: "2025-09",
    link: "https://learn.nvidia.com/certificates?id=WtrDHNh0RSKwXf9qJHsnbA",
    skills: ["DL", "PyTorch"],
  },
  {
    provider: "NVIDIA",
    name: "Building Transformed-Based Natural Language Processing Applications",
    date: "2025-09",
    link: "https://learn.nvidia.com/certificates?id=orZRVYt7SSiXpq0-ogUudQ#",
    skills: ["NLP", "BERT", "LangChain"],
  },
  {
    provider: "NVIDIA",
    name: "Building LLM Applications With Prompt Engineering",
    date: "2025-09",
    link: "https://learn.nvidia.com/certificates?id=k0zsEfJZTq613HxKZz9P7w#",
    skills: ["LangChain", "Prompt Engineering"],
  },
];

// Reusa tus experiencias (las que ya tenías en Academic)
const ACADEMIC_EXPERIENCES = [
  {
    title: "AI Negotiation System Hackathon Winner",
    organization: "EIA University - Sistecredito",
    dateRange: "03/2025",
    details: [
      "I worked on a team where we developed an artificial intelligence-based negotiation system to help customers with difficulties in paying their loans using Exploratory data analysis and data cleaning were performed to be implemented in the negotiation chatbot with a RAG",
    ],
    repoLink: "https://github.com/Tomaslopera/Hackathon_Sistecredito",
  },
  {
    title: "Logistic Agent Hackathon Runner-Up",
    organization: "EIA University - Haceb",
    dateRange: "08/2025",
    details: [
      "I collaborated in a team to develop a logistics agent for Haceb's call center that responds in natural language about the current status of orders and inventory availability from a chatbot. Our solution implemented n8n to orchestrate the query flow, ETL from Google Drive to Postgres (Supabase), vector-based indexing to retrieve context, and response generation with OpenAI API",
    ],
    repoLink: "https://github.com/Tomaslopera/Hackathon_Haceb",
  },
  {
    title:
      "Business challenges for innovation | Validation of Design Technical Data Sheets",
    organization: "EIA University - Cadena SA",
    dateRange: "06/2025 – 10-11/2025 (4-5 months)",
    details: [
      "I worked on the construction of a workflow that extracts, validates and highlights key information from technical data sheets based on images using OCR with AWS, image recognition with OpenCV and deployment with Streamlit. The solution was presented to the client Cadena SA, it includes a Scientific Documentation that supports the development of the project",
    ],
    repoLink: "https://github.com/Tomaslopera/Reto_Cadena"
  },
  {
    title: "Sistecredito University Project | Generative AI",
    organization: "EIA University - Sistecrédito",
    dateRange: "09/2025 - 11/2025",
    details: ["Through the subject Project 4, I am working on a project focused on Generative AI in a real production environment"],
  },
  {
    title: "Innovation Hackathon Participant",
    organization: "ISA",
    dateRange: "05/2024",
    details: [
      "I collaborated in a team to develop a solution based on data analysis of ISA's databases, focused on improving the maintenance of electrical towers and power distribution",
    ],
    repoLink: "https://github.com/Tomaslopera/Hackathon_ISA",
  },
  {
    title: "Researcher and Programmer in LED Light Project",
    organization: "Lienxo",
    dateRange: "06/2024 – 08/2024 (2 months)",
    details: [
      "I participated in a research project involving LED light programming with the DMX protocol. Developed teamwork and programming skills while contributing to technical solutions for automation",
    ],
  },
];

export default function Education() {
  return (
    <section
      className="edu-section"
      style={{ backgroundImage: `url(${bg})` }}
    >


      <section className="panel">
        <h2 className="sec-title">Education</h2>
        <div className="edu-grid">
          {EDUCATION.map((e, i) => (
            <article key={i} className="edu-card">
              <h3>{e.title}</h3>
              <p className="muted">{e.subtitle}</p>
              <p className="pill">{e.period}</p>
              <p className="desc">{e.details}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel">
        <h2 className="sec-title">Languages</h2>
        <div className="chip-row">
          {LANGUAGES.map((l, i) => (
            <span key={i} className="chip">
              {l.name} · {l.level}
            </span>
          ))}
        </div>
      </section>

      <section className="panel">
        <h2 className="sec-title">Certifications</h2>
        <div className="cert-grid">
          {CERTIFICATIONS.map((c, i) => (
            <article key={i} className="cert-card">
              <div className="cert-head">
                <span className="badge">{c.provider}</span>
                <span className="date">{c.date}</span>
              </div>
              <h3 className="cert-name">{c.name}</h3>
              {c.skills?.length ? (
                <div className="chip-row">
                  {c.skills.map((s, k) => (
                    <span key={k} className="chip small">
                      {s}
                    </span>
                  ))}
                </div>
              ) : null}
              {c.link ? (
                <a
                    className="cert-btn"
                    href={c.link}
                    target="_blank"
                    rel="noreferrer"
                >
                    View Credential
                </a>
                ) : null}
            </article>
          ))}
        </div>
      </section>

      {/* ===== Experiencia académica (reutiliza tus tarjetas) ===== */}
      <section className="panel">
        <h2 className="sec-title">Academic Experience</h2>
        <div className="exp-grid">
          {ACADEMIC_EXPERIENCES.map((x, i) => (
            <AcademicCard
              key={i}
              title={x.title}
              organization={x.organization}
              dateRange={x.dateRange}
              details={x.details}
              repoLink={x.repoLink}
            />
          ))}
        </div>
      </section>
    </section>
  );
}