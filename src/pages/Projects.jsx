import React from "react";
import ProjectCard from "../components/ProjectCard";
import background from "../assets/background1.jpeg";
import "./Projects.css";

// IMAGENES PROYECTOS
import recircular1 from "../assets/projects/recircular1.png";
import recircular2 from "../assets/projects/recircular2.png";
import recircular3 from "../assets/projects/recircular3.png";
import parkhub1 from "../assets/projects/parkhub1.png";
import parkhub2 from "../assets/projects/parkhub2.png";
import parkhub3 from "../assets/projects/parkhub3.png";
import parkhub4 from "../assets/projects/parkhub4.png";
import powerbi1 from "../assets/projects/powerbi1.png";
import powerbi2 from "../assets/projects/powerbi2.png";
import powerbi3 from "../assets/projects/powerbi3.png";
import powerbi4 from "../assets/projects/powerbi4.png";
import coingecko1 from "../assets/projects/CoinGecko1.png";
import coingecko2 from "../assets/projects/CoinGecko2.png";
import coingecko3 from "../assets/projects/CoinGecko3.png";
import coingecko4 from "../assets/projects/CoinGecko4.png";

export default function Projects() {
  return (
    <section
      className="projects-section"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h1 className="projects-title">Projects</h1>

      {/* GRID VERTICAL / RESPONSIVE */}
      <div className="projects-grid">
        <ProjectCard
          title="Clustering Case | Financial Customer Segmentation"
          description="Segmentation of a financial institution's customers to promote the adoption of a second card; validation of the 4-cluster hypothesis"
          role="Cleaning/imputation and scaling | I applied K-Means/DBSCAN/Hierarchical/GMM, evaluated with Silhouette, and performed cluster profiling for marketing actions"
          technologies={["Python", "Jupyter", "Pandas", "Matplotlib", "Seaborn", "Scikit-Learn"]}
          repoLink="https://github.com/Tomaslopera/CasoAgrupamiento"
        />

        <ProjectCard
          title="Classification Case | Intrusion Detection"
          description="Binary classification for intrusion detection in transactions (Normal vs Attack), with an F1 score ≥ 80% and minimal false negatives"
          role="EDA and preprocessing | pipeline MinMaxScaler + OneHotEncoder | trained and compared LR/Tree/RF/SVM/Gradient Boosting with cross-validation and threshold adjustment to reduce false negatives"
          technologies={["Python", "Jupyter", "Pandas", "Matplotlib", "Seaborn", "Scikit-Learn"]}
          repoLink="https://github.com/Tomaslopera/CasoClasificacion"
        />

        <ProjectCard
          title="Classification Case | Telco Customer Churn"
          description="Binary classification model to predict customer churn in a telecommunications company, identifying high-risk customers for retention strategies"
          role="EDA | preprocessing (IterativeImputer + OrdinalEncoder) | feature selection with SHAP, and model comparison (Logistic Regression, KNN, Decision Tree, Random Forest) | achieved accuracy ≈ 0.84 with robust pipeline and no data leakage"
          technologies={["Python", "Jupyter", "Pandas", "Matplotlib", "Scikit-Learn", "SHAP"]}
          repoLink="https://github.com/Tomaslopera/Telco_Classification"
        />

        <ProjectCard
          title="Regression Case | Insurance Premium Prediction"
          description="Prediction of insurance premiums based on demographic and lifestyle data, aiming for MAPE ≤ 15%"
          role="EDA | feature engineering | preprocessing (scaling/encoding) | model training and evaluation with metrics (R², MAE, RMSE, MAPE)"
          technologies={["Python", "Jupyter", "Pandas", "Matplotlib", "Seaborn", "Scikit-Learn"]}
          repoLink="https://github.com/Tomaslopera/CasoRegresion"
        />

        <ProjectCard
          title="Genetic Algorithm | Financial Portfolios"
          description="Financial portfolio optimizer that maximizes returns and minimizes risk using genetic algorithms"
          role="Implemented GA (fitness, crossover, mutation, penalties) and data pipeline (yfinance)"
          technologies={["Python", "Jupyter", "YFinance", "Numpy", "Matplotlib", "Seaborn"]}
          repoLink="https://github.com/Tomaslopera/GeneticAlgorithm_FinancialPortfolio"
        />

        <ProjectCard
          title="ETL/ELT CoinGecko | Prefect"
          description="Implementation of an ETL/ELT flow using Prefect to extract data from CoinGecko's public API, transform it with pandas, and persist it in Parquet in S3 and/or Postgres (RDS)"
          role="Prefect decorators & custom tasks; AWS resources (S3, RDS)"
          technologies={["Prefect", "Python", "Pandas", "Boto3", "PyArrow", "PostgreSQL", "Amazon S3"]}
          images={[coingecko1, coingecko2, coingecko3, coingecko4]}
          repoLink="https://github.com/Tomaslopera/ETL-ELT_CoinGecko"
        />

        <ProjectCard
          title="Power BI Projects"
          description="Collection of dashboards in Power BI to solve business cases (Video game sales, Global indicators, HR, and Personal finance)"
          role="Power Query (cleaning/integration), DAX, KPIs, maps, navigation"
          images={[powerbi1, powerbi2, powerbi3, powerbi4]}
          technologies={["Power BI", "DAX", "Power Query"]}
          repoLink="https://github.com/Tomaslopera/PowerBI_Projects"
        />

        <ProjectCard
          title="Recircular"
          description="Circular economy marketplace for posting, buying, selling, and reusing materials and products"
          role="Relational schema & REST API (FastAPI, MySQL) for auth, publications and orders"
          images={[recircular1, recircular2, recircular3]}
          technologies={["React", "FastAPI", "MySQL"]}
          repoLink="https://github.com/Tomaslopera/Recircular"
        />

        <ProjectCard
          title="Parkhub"
          description="Parking space reservation application with registration/login, password change, reservations, and history"
          role="REST API & data model (FastAPI, MySQL) for users, reservations and reports"
          images={[parkhub1, parkhub2, parkhub3, parkhub4]}
          technologies={["React", "FastAPI", "MySQL"]}
          repoLink="https://github.com/Tomaslopera/ParkHub"
        />
      </div>
    </section>
  );
}