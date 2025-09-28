import React, { useRef } from 'react';
import ProjectCard from '../components/ProjectCard';
import background from '../assets/background.jpg';
import './Projects.css';

// IMAGENES PROYECTOS
import recircular1 from '../assets/projects/recircular1.png';
import recircular2 from '../assets/projects/recircular2.png';
import recircular3 from '../assets/projects/recircular3.png';
import parkhub1 from '../assets/projects/parkhub1.png';
import parkhub2 from '../assets/projects/parkhub2.png';
import parkhub3 from '../assets/projects/parkhub3.png';
import parkhub4 from '../assets/projects/parkhub4.png';
import powerbi1 from '../assets/projects/powerbi1.png';
import powerbi2 from '../assets/projects/powerbi2.png';
import powerbi3 from '../assets/projects/powerbi3.png';
import powerbi4 from '../assets/projects/powerbi4.png';

function Projects() {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      const width = carouselRef.current.offsetWidth;
      carouselRef.current.scrollBy({ left: -width, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const width = carouselRef.current.offsetWidth;
      carouselRef.current.scrollBy({ left: width, behavior: 'smooth' });
    }
  };

  return (
    <section
      className="projects-section"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h1 className="projects-title">Projects</h1>

      <div className="carousel-container">

        <div className="projects-carousel" ref={carouselRef}>
          <div className="project-slide">
            <ProjectCard
              title="Clustering Case | Financial Customer Segmentation"
              description="Segmentation of a financial institution's customers to promote the adoption of a second card; validation of the 4-cluster hypothesis"
              role="Cleaning/imputation and scaling | I applied K-Means/DBSCAN/Hierarchical/GMM, evaluated with Silhouette, and performed cluster profiling for marketing actions"
              technologies={["Python", "Jupyter", "Pandas", "Matplotlib", "Seaborn", "SciKit-Learn"]}
              repoLink="https://github.com/Tomaslopera/CasoAgrupamiento"
            />
          </div>
          <div className="project-slide">
            <ProjectCard
              title="Classification Case | Intrusion Detection"
              description="Binary classification for intrusion detection in transactions (Normal vs Attack), with an F1 score ≥ 80% and minimal false negatives"
              role="EDA and preprocessing | pipeline MinMaxScaler + OneHotEncoder | trained and compared LR/Tree/RF/SVM/Gradient Boosting with cross-validation and threshold adjustment to reduce false negatives"
              technologies={["Python", "Jupyter", "Pandas", "Matplotlib", "Seaborn", "Scikit-Learn"]}
              repoLink="https://github.com/Tomaslopera/CasoClasificacion"
            />
          </div>
          <div className="project-slide">
            <ProjectCard
              title="Regression Case | Insurance Premium Prediction"
              description="Prediction of insurance premiums based on demographic and lifestyle data, aiming for MAPE ≤ 15%"
              role="EDA | feature engineering | preprocessing (scaling/encoding) | model training and evaluation with metrics (R², MAE, RMSE, MAPE)"
              technologies={["Python", "Jupyter", "Pandas", "Matplotlib", "Seaborn", "Scikit-Learn"]}
              repoLink="https://github.com/Tomaslopera/CasoRegresion"
            />
          </div>
          <div className="project-slide">
            <ProjectCard
              title="Genetic Algorithm | Financial Portfolios"
              description="Financial portfolio optimizer that maximizes returns and minimizes risk using genetic algorithms"
              role="I implemented GA (fitness, crossover, mutation, penalties) and data pipeline (yfinance)"
              technologies={["Python", "Jupyter", "YFinance", "Numpy", "Matplotlib", "Seaborn"]}
              repoLink="https://github.com/Tomaslopera/GeneticAlgorithm_FinancialPortfolio"
            />
          </div>
          <div className="project-slide">
            <ProjectCard
              title="Power BI Projects"
              description="Collection of dashboards in Power BI to solve business cases (Video game sales, Global indicators, HR, and Personal finance)"
              role="Power Query (cleaning and integration), DAX measures, KPIs, maps, and navigation"
              images={[powerbi1, powerbi2, powerbi3, powerbi4]}
              technologies={["Power BI", "DAX", "Power Query"]}
              repoLink="https://github.com/Tomaslopera/PowerBI_Projects"
            />
          </div>
          <div className="project-slide">
            <ProjectCard
              title="Recircular"
              description="Circular economy marketplace for posting, buying, selling, and reusing materials and products"
              role="I designed the relational schema and developed the REST API (FastAPI, MySQL) for authentication, publications, and orders."
              images={[recircular1, recircular2, recircular3]}
              technologies={["React", "FastAPI", "MySQL"]}
              repoLink="https://github.com/Tomaslopera/Recircular"
            />
          </div>
          <div className="project-slide">
            <ProjectCard
              title="Parkhub"
              description="Parking space reservation application with registration/login, password change, reservations, and history"
              role="I built the REST API and data model (FastAPI, MySQL) for users, reservations, and reports."
              images={[parkhub1, parkhub2, parkhub3, parkhub4]}
              technologies={["React", "FastAPI", "MySQL"]}
              repoLink="https://github.com/Tomaslopera/ParkHub"
            />
          </div>
        </div>
      </div>

        <div className="carousel-controls">
            <button className="carousel-btn" onClick={scrollLeft}>◀</button>
            <button className="carousel-btn" onClick={scrollRight}>▶</button>
        </div>
    </section>
  );
}

export default Projects;
