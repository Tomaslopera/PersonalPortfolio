import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import background from "../assets/background1.jpeg";
import "./Projects.css";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Data Engineering", "Data Science", "AI", "Backend", "BI"];

  const projects = [
    {
      title: "AWS ETL + Data Warehouse + BI",
      description:
        "End-to-end data pipeline for the Olist dataset using AWS services and Prefect. Automates ETL flow from PostgreSQL (RDS) to S3 (staging zone), integrates with Redshift Serverless via Glue Data Catalog, and connects the Data Warehouse to PowerBI",
      role: "Design & implementation of ETL flow | AWS orchestration (RDS, EC2, S3, Glue, Redshift) | automation with Prefect & crontab | BI integration",
      technologies: ["Python", "Prefect", "PostgreSQL (RDS)", "Amazon S3", "AWS Glue", "Redshift Serverless", "Power BI", "Pandas", "Boto3"],
      repoLink: "https://github.com/Tomaslopera/AWS_ECommerce_DW",
      category: "Data Engineering",
    },
    {
      title: "ETL/ELT CoinGecko | Prefect",
      description:
        "Implementation of an ETL/ELT flow using Prefect to extract data from CoinGecko's public API, transform it with pandas, and persist it in Parquet in S3 and/or Postgres (RDS)",
      role: "Prefect decorators & custom tasks | AWS resources (S3, RDS)",
      technologies: ["Prefect", "Python", "Pandas", "Boto3", "PyArrow", "PostgreSQL", "Amazon S3"],
      repoLink: "https://github.com/Tomaslopera/ETL-ELT_CoinGecko",
      category: "Data Engineering",
    },
    {
      title: "Colombian Export Data Warehouse | DIAN",
      description:
        "Implementation of a Data Warehouse for Colombian export data using DIAN’s open datasets, built on a star schema with ETL processes in Python and cloud architecture proposed on AWS for analytical exploration and BI visualization.",
      role: "ETL development | data modeling | AWS architecture design",
      technologies: ["Python", "Pandas", "SQLAlchemy"],
      repoLink: "https://github.com/Tomaslopera/DIAN_Exportations",
      category: "Data Engineering",
    },
    {
      title: "Books to Scrape | ETL Pipeline (Web Scraping + PostgreSQL)",
      description:
        "Automated ETL pipeline that extracts, transforms, and loads book data from Books to Scrape using Selenium and BeautifulSoup. The data is cleaned and normalized with Pandas and loaded into a PostgreSQL database using SQLAlchemy.",
      role: "ETL design | Selenium web scraping | data modeling | PostgreSQL integration",
      technologies: ["Python", "Selenium", "BeautifulSoup", "Pandas", "SQLAlchemy", "PostgreSQL"],
      repoLink: "https://github.com/Tomaslopera/BooksToScrape",
      category: "Data Engineering",
    },
    {
      title: "MovieLens Lakehouse | Databricks",
      description:
        "Implementation of a Lakehouse architecture in Databricks using the MovieLens dataset, applying the Medallion (Bronze → Silver → Gold) model for ingestion, cleansing, and analytical modeling with Spark and Delta Lake.",
      role: "ETL pipeline design | Delta Lake modeling | Databricks notebooks",
      technologies: ["Databricks", "PySpark", "Delta Lake", "Python", "SQL", "Lakehouse", "Medallion Architecture"],
      repoLink: "https://github.com/Tomaslopera/Databricks_Lakehouse",
      category: "Data Engineering",
    },
    {
      title: "Classification Case | Telco Customer Churn",
      description:
        "Binary classification model to predict customer churn in a telecommunications company, identifying high-risk customers for retention strategies",
      role:
        "EDA | preprocessing (IterativeImputer + OrdinalEncoder) | feature selection with SHAP, and model comparison (Logistic Regression, KNN, Decision Tree, Random Forest) | achieved accuracy ≈ 0.84 with robust pipeline and no data leakage",
      technologies: ["Python", "Jupyter", "Pandas", "Matplotlib", "Scikit-Learn", "SHAP"],
      repoLink: "https://github.com/Tomaslopera/Telco_Classification",
      category: "Data Science",
    },
    {
      title: "Clustering Case | Financial Customer Segmentation",
      description:
        "Segmentation of a financial institution's customers to promote the adoption of a second card; validation of the 4-cluster hypothesis",
      role:"Cleaning/imputation and scaling | applied K-Means/DBSCAN/Hierarchical/GMM, evaluated with Silhouette, and performed cluster profiling for marketing actions",
      technologies: ["Python", "Jupyter", "Pandas", "Matplotlib", "Seaborn", "Scikit-Learn"],
      repoLink: "https://github.com/Tomaslopera/CasoAgrupamiento",
      category: "Data Science",
    },
    {
      title: "Classification Case | Intrusion Detection",
      description:
        "Binary classification for intrusion detection in transactions (Normal vs Attack), with an F1 score ≥ 80% and minimal false negatives",
      role:"EDA and preprocessing | pipeline MinMaxScaler + OneHotEncoder | trained and compared LR/Tree/RF/SVM/Gradient Boosting with cross-validation and threshold adjustment to reduce false negatives",
      technologies: ["Python", "Jupyter", "Pandas", "Matplotlib", "Seaborn", "Scikit-Learn"],
      repoLink: "https://github.com/Tomaslopera/CasoClasificacion",
      category: "Data Science",
    },
    {
      title: "Regression Case | Insurance Premium Prediction",
      description:
        "Prediction of insurance premiums based on demographic and lifestyle data, aiming for MAPE ≤ 15%",
      role:"EDA | feature engineering | preprocessing (scaling/encoding) | model training and evaluation with metrics (R², MAE, RMSE, MAPE)",
      technologies: ["Python", "Jupyter", "Pandas", "Matplotlib", "Seaborn", "Scikit-Learn"],
      repoLink: "https://github.com/Tomaslopera/CasoRegresion",
      category: "Data Science",
    },
    {
      title: "Time Series Case | Fuel Consumption Forecasting",
      description:
        "Evaluation case for predicting fuel consumption using time series modeling. Compares statistical, machine learning, and neural network approaches to forecast the 'Gasoleos' variable from the energy dataset `fuel_consumption`.",
      role:"Model development and comparison (SARIMAX, Linear Regression, Decision Trees, Random Forest, RNN) | Evaluated performance with MAPE | RNN achieved 4% and SARIMAX 8%",
      technologies: ["Python", "Pandas", "Statsmodels", "Scikit-Learn", "TensorFlow", "Matplotlib", "Skforecast"],
      repoLink: "https://github.com/Tomaslopera/TimeSeries_FuelConsumption",
      category: "Data Science",
    },
    {
      title: "Genetic Algorithm | Financial Portfolios",
      description:"Financial portfolio optimizer that maximizes returns and minimizes risk using genetic algorithms",
      role: "Implemented GA (fitness, crossover, mutation, penalties) and data pipeline (yfinance)",
      technologies: ["Python", "Jupyter", "YFinance", "Numpy", "Matplotlib", "Seaborn"],
      repoLink: "https://github.com/Tomaslopera/GeneticAlgorithm_FinancialPortfolio",
      category: "AI",
    },
    {
      title: "AgentKit Fintech Assistant | OpenAI",
      description:"Development of a financial AI agent using OpenAI Agent Builder and ChatKit Starter Pack to analyze client, product, and transaction data, providing investment recommendations, credit risk alerts, and personalized financial insights.",
      role: "Agent configuration, prompt engineering | data modeling | use-case design",
      technologies: ["OpenAI Agent Builder", "ChatKit", "File Search", "Vector Store"],
      repoLink: "https://github.com/Tomaslopera/AgentKit_Fintech",
      category: "AI",
    },
    {
      title: "Power BI Projects",
      description:
        "Collection of dashboards in Power BI to solve business cases (Video game sales, Global indicators, HR, and Personal finance)",
      role: "Power Query (cleaning/integration), DAX, KPIs, maps, navigation",
      technologies: ["Power BI", "DAX", "Power Query"],
      repoLink: "https://github.com/Tomaslopera/PowerBI_Projects",
      category: "BI",
    },
    {
      title: "Recircular",
      description:
        "Circular economy marketplace for posting, buying, selling, and reusing materials and products",
      role: "Relational schema & REST API (FastAPI, MySQL) for auth, publications and orders",
      technologies: ["React", "FastAPI", "MySQL"],
      repoLink: "https://github.com/Tomaslopera/Recircular",
      category: "Backend",
    },
    {
      title: "Parkhub",
      description:
        "Parking space reservation application with registration/login, password change, reservations, and history",
      role: "REST API & data model (FastAPI, MySQL) for users, reservations and reports",
      technologies: ["React", "FastAPI", "MySQL"],
      repoLink: "https://github.com/Tomaslopera/ParkHub",
      category: "Backend",
    },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section
      className="projects-section"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h1 className="projects-title">Projects</h1>

      {/* Category Filter */}
      <div className="filter-container">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}