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
                title="AI Negotiation System Hackathon Winner"
                organization="EIA University - Sistecredito"
                dateRange="03/2025"
                details={[
                    "I worked on a team where we developed an artificial intelligence-based negotiation system to help customers with difficulties in paying their loans using Exploratory data analysis and data cleaning were performed to be implemented in the negotiation chatbot with a RAG."
                ]}
                repoLink="https://github.com/Tomaslopera/Hackathon_Sistecredito"
                />
            </div>
            <div className="academic-slide">
                <AcademicCard
                title="Logistic Agent Hackathon Runner-Up"
                organization="EIA University - Haceb"
                dateRange="08/2025"
                details={[
                    "I collaborated in a team to develop a logistics agent for Haceb's call center that responds in natural language about the current status of orders and inventory availability from a chatbot. Our solution implemented n8n to orchestrate the query flow, ETL from Google Drive to Postgres (Supabase), vector-based indexing to retrieve context, and response generation with OpenAI API."
                ]}
                repoLink="https://github.com/Tomaslopera/Hackathon_Haceb"
                />
            </div>
            <div className="academic-slide">
                <AcademicCard
                title="Business challenges for innovation | Validation of Design Technical Data Sheets"
                organization="EIA University - Cadena SA"
                dateRange="06/2025 – 10-11/2025 (4-5 months)"
                details={[
                    "I have been working on the construction of a workflow that extracts, validates and highlights key information form technical data sheets based on images using OCR with AWS, image recognition and deployment with Streamlit."
                ]}
                />
            </div>
            <div className="academic-slide">
                <AcademicCard
                title="Sistecredito University Project | Generative AI"
                organization="EIA University - Sistecrédito"
                dateRange="09/2025 - 11/2025"
                details={[
                    "Through the subject Project 4, I am working on a project focused on Generative AI in a real production environment."
                ]}
                />
            </div>           
            <div className="academic-slide">
                <AcademicCard
                title="Innovation Hackathon participant"
                organization="ISA"
                dateRange="05/2024"
                details={[
                    "I collaborated in a team to develop a solution based on data analysis of ISA's databases, focused on improving the maintenance of electrical towers and power distribution."
                ]}
                repoLink='https://github.com/Tomaslopera/Hackathon_ISA'
                />
            </div>
            <div className="academic-slide">
                <AcademicCard
                title="Researcher and Programmer in LED Light Project"
                organization="Lienxo"
                dateRange="06/2024 – 08/2024 (2 months)"
                details={[
                    "I participated in a research project involving LED light programming with the DMX protocol. Developed teamwork and programming skills while contributing to technical solutions for automation."
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
