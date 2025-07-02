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
                title="Innovation Hackathon participant"
                organization="ISA"
                dateRange="05/2024"
                details={[
                    'I collaborated in a team to develop a solution based on data analysis of IS\'s databases, focused on improving the maintenance of electrical towers and power distribution.',
                    'I used data analysis techniques to identify patterns and propose strategies to optimize the maintenance process, which could result in greater operational efficiency.',
                    'We presented the solution to a panel of judges, highlighting the importance of data analysis in decision making for effective maintenance of electrical infrastructures.'
                ]}
                repoLink='https://github.com/Tomaslopera/Hackathon_ISA'
                />
            </div>
            <div className="academic-slide">
                <AcademicCard
                title="AI Negotiation System Hackathon Winner"
                organization="EIA University - Sistecredito"
                dateRange="03/2025"
                details={[
                    'I collaborated in a team to develop an AI-based negotiation system designed to assist customers facing difficulties in repaying their loans.',
                    'The Solution analyzed historical data and generated personalized payment agreements, considering adjustments in installments and interest rates.',
                    'We conducted exploratory data analysis and data cleaning to ensure accurate implementation in the negotiation chatbot.'
                ]}
                repoLink="https://github.com/Tomaslopera/Hackathon_Sistecredito"
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
