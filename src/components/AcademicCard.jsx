import React from 'react';
import './AcademicCard.css';

function AcademicCard({ title, organization, dateRange, details }) {
  return (
    <div className="academic-card">
      <h2>{title}</h2>
      <h4>{organization}</h4>
      <p className="date-range">{dateRange}</p>
      <ul className="details-list">
        {details.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

export default AcademicCard;
