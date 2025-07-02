import React, { useRef } from 'react';
import AcademicCard from '../components/AcademicCard';
import background from '../assets/background.jpg';
import './Academic.css';

function Academic() {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({ left: -500, behavior: 'smooth' });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({ left: 500, behavior: 'smooth' });
  };

  return (
    <section
        className="academic-section"
        id="academic"
        style={{ backgroundImage: `url(${background})` }}
        >
        <h1 className="academic-title">Academic Research & Experience</h1>

        <div className="academic-carousel-container">

            <div className="academic-carousel" ref={carouselRef}>
            <div className="academic-slide">
                <AcademicCard
                title="Researcher and Programmer in LED Light Project"
                organization="Lienxo"
                dateRange="06/2024 – 08/2024 (2 months)"
                details={[
                    'I participated in a research project involving LED light programming with the DMX protocol.',
                    'Developed teamwork and programming skills while contributing to technical solutions for automation.',
                ]}
                />
            </div>
            <div className="academic-slide">
                <AcademicCard
                title="Researcher and Programmer in LED Light Project"
                organization="Lienxo"
                dateRange="06/2024 – 08/2024 (2 months)"
                details={[
                    'I participated in a research project involving LED light programming with the DMX protocol.',
                    'Developed teamwork and programming skills while contributing to technical solutions for automation.',
                ]}
                />
            </div>
            <div className="academic-slide">
                <AcademicCard
                title="Researcher and Programmer in LED Light Project"
                organization="Lienxo"
                dateRange="06/2024 – 08/2024 (2 months)"
                details={[
                    'I participated in a research project involving LED light programming with the DMX protocol.',
                    'Developed teamwork and programming skills while contributing to technical solutions for automation.',
                ]}
                />
            </div>
            </div>

            <div className="academic-controls">
                <button className="academic-btn" onClick={scrollLeft}>◀</button>
                <button className="academic-btn" onClick={scrollRight}>▶</button>
            </div>

        </div>
    </section>

  );
}

export default Academic;
