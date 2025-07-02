import React from 'react';
import './AcademicCard.css';

function AcademicCard({ title, organization, dateRange, details, repoLink }) {
  return (
    <div className="academic-card">
      <h2>{title}</h2>
      <h3>{organization}</h3>
      <p className="date-range">{dateRange}</p>

      <ul className="details-list">
        {details.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {repoLink && (
        <a
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-repo"
        >
          Repository
        </a>
      )}
    </div>
  );
}

export default AcademicCard;
