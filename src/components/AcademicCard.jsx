import React from 'react';
import './AcademicCard.css';

function AcademicCard({ title, organization, dateRange, details, repoLink }) {
  return (
    <div className="academic-card">
      <h2>{title}</h2>
      <h3>{organization}</h3>
      <p className="date-range">{dateRange}</p>

      <div className="card-details">
        <p>
          {Array.isArray(details) ? details.join(' ') : details}
        </p>
      </div>

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
