# Product Requirements Document (PRD)

## Project Overview
- **Product Name**: Alden Nabil Wibowo Effendy — Personal Portfolio & Data Science Showcase
- **Target Host**: Vercel (Edge-optimized, zero-config single page app)
- **Primary Domain**: Statistical Data Science, Machine Learning, and Quantitative / Business Intelligence
- **Target Audience**: Technical Recruiters, Hiring Managers, Data Science Leads, Academic Researchers, and Prospective Clients

---

## 1. Problem Statement
Technical recruiters and hiring managers review hundreds of portfolio websites daily, the vast majority of which look like generic templates with superficial exploratory data analysis (EDA) or copied Kaggle notebooks. Alden possesses a rare academic background in rigorous mathematical statistics (Bayesian INLA-SPDE, Survival AFT/RMST, Two-Factor RCBD ANOVA, Elastic Net SGD/PGD) paired with proven real-world engineering (Gammafest 2026 3rd Winner on 121k+ match dataset, Streamlit norm benchmarking platform, Susenas data engineering, and FinSight BI dashboard). 

The portfolio must:
1. Instantly communicate this dual-threat positioning (**Statistical Data Scientist & ML Practitioner with Quantitative / BI direction**).
2. Showcase high-impact flagship case studies with **interactive data widgets** (interactive MDS map, Elo probability simulator, FinSight KPI ticker).
3. Standardize all 15+ project showcases with uniform 16:9 auto-resizing thumbnails and elegant mathematical formula fallbacks when project images are omitted.
4. Provide a friction-free, non-developer-friendly system to add, remove, and update projects and content in seconds.

---

## 2. Goals & Non-Goals

### Goals
- **Instant Visual "WOW" Factor**: Cyber-academic glassmorphic dark theme (`#0a0f1d`) with neon cyan (`#00f2fe`) and emerald (`#10b981`) accents, plus a smooth light-mode toggle.
- **Top 4 Flagship Spotlight**:
  1. **Gammafest 2026 Winner**: Football Match Outcome & Score Prediction (121k+ matches, 154 years, Elo rating reconstruction, LightGBM + Optuna).
  2. **Normative Market Research & Benchmarking Platform**: Streamlit self-service ETL platform & Likert percentile benchmarking engine for DEKA Insight.
  3. **FinSight (Capstone)**: Financial & Business Intelligence monitoring dashboard.
  4. **Bogor Coffee Wars (MDS & Sentiment Analysis)**: Market segmentation & consumer review NLP for Work-From-Cafe spaces in Bogor.
- **Interactive Data Widgets**: Embedded interactive visualizations directly in the flagship spotlights (interactive 2D MDS coffee map, live Elo/Poisson outcome simulator, FinSight KPI risk metrics).
- **Comprehensive Filterable Project Grid**: Filter pills across 4 core domains (*Machine Learning & AI*, *Statistical & Bayesian Modeling*, *Business Intelligence & Dashboards*, *Spatial & Econometrics*) with live search.
- **Uniform 16:9 Image Aspect Ratio & Dynamic Fallbacks**: Standardized auto-resizing thumbnail cards with domain-tailored formula badges for projects without photos.
- **Complete Profile & Leadership Showcase**: Education (IPB University, GPA 3.83), Organizational Leadership (SRE IPB Head of PR, STEM 2024 Project Leader, Gamma Sigma Beta), Certifications (BNSP Data Analyst, TOEIC 930/990, PMI, IBM, Microsoft), and Skills Matrix.
- **Instant Contact & Resume Hub**: One-click email copy with visual toast confirmation, direct download of ATS-friendly CV, and links to LinkedIn, GitHub, and Medium.
- **Effortless Maintenance for Non-Web Developers**: Dedicated `src/data/` configuration files with clear inline comments.

### Non-Goals
- Complex backend server or database setup (entire app is pre-rendered client-side for blistering Vercel performance and zero hosting costs).
- Third-party contact form services requiring monthly subscription fees or external API keys (replaced with one-click direct email copy and mailto triggers).

---

## 3. User Personas & Use Cases

### Persona 1: Tech Recruiter / Talent Sourcer
- **Goal**: Quickly scan GPA, top achievements, core technical stack (Python, R, SQL), and download Alden's CV in under 15 seconds.
- **Key Flow**: Land on Hero ➔ View Impact Metrics Bar (GPA 3.83, 121k+ records, Gammafest Winner) ➔ Click "Download CV" / "Copy Email" or view LinkedIn.

### Persona 2: Data Science / Quant Hiring Manager
- **Goal**: Evaluate methodological rigor, problem-solving depth, and code quality.
- **Key Flow**: Explore Flagship Case Studies ➔ Open interactive modal ➔ Test the Elo probability simulator and MDS 2D scatter plot ➔ Review problem statement, methodology, and metrics ➔ Inspect GitHub repositories.

### Persona 3: Academic / Research Collaborator
- **Goal**: Assess statistical competence in Bayesian modeling, survival analysis, and experimental design.
- **Key Flow**: Filter project grid by "Statistical & Bayesian Modeling" ➔ Inspect Jakarta PM2.5 INLA-SPDE project, HIV Survival RMST study, and ANOVA RCBD consulting report.

---

## 4. Information Architecture & Page Sections

```
[Sticky Glass Navigation Bar]
  ├── Brand / Logo: "ANWE. / Alden Nabil"
  ├── Navigation Links: [About] [Spotlights] [Projects] [Experience] [Credentials] [Contact]
  ├── Theme Toggle: [Dark / Light Mode Switcher]
  └── CTA: [Download CV]

[1. Hero Section]
  ├── Profile Picture (Optimized avatar with glowing glass rim)
  ├── Name & Subheading: "Alden Nabil Wibowo Effendy"
  ├── Dynamic Animated Role Badge: "Statistical Data Scientist | ML Practitioner | Quant & BI Enthusiast"
  ├── Quick Bio Summary (IPB Statistics & Data Science, GPA 3.83)
  ├── Quick Action Buttons: [Explore Projects] [View Resume] [Get in Touch]
  └── Social Links Bar: [GitHub] [LinkedIn] [Medium] [Email]

[2. Impact & Key Metrics Bar]
  ├── 3.83 Cumulative GPA
  ├── 121K+ Historical Records Analyzed
  ├── 🏆 Gammafest 2026 3rd Winner & Most Applicable
  └── 20+ Industry Certifications & Credentials

[2. "Why Me?" 3 Core Competency Pillars]
  ├── 💡 BI & Analytics Engineering (Star Schema, Advanced DAX, Analytical SQL CTEs, Executive Dashboards)
  ├── 🤖 Predictive Analytics & ML (Tabular ML LightGBM, Time Series Forecasting, CLV & RFM, A/B Testing)
  └── % Decision Science & Risk (Scenario Stress Testing, Cost-Sensitive Loss Matrix, Bayesian & Survival Models, Metric-to-Dollar Impact)
  └── Clickable Skill Behavior: Opens matched project explorer modal linking directly to full case studies.

[3. Complete 16-Project Catalog & Showcase]
  ├── 1. Football Outcome & Score Prediction (🏆 Gammafest 2026 3rd Winner - 121k+ matches, Elo, Optuna LightGBM)
  ├── 2. Centralized Normative Database & Benchmarking Platform (DEKA Insight - 17 surveys, 8.8k+ obs, Streamlit ETL)
  ├── 3. FinSight: Financial Risk & KPI Monitoring Platform (Capstone 2026 - Streamlit BI & Volatility Analysis)
  ├── 4. Bogor Coffee Wars: MDS & Sentiment NLP (Market Segmentation & Google Maps Text Mining)
  ├── 5. Bayesian Spatio-Temporal PM2.5 Estimation (INLA-SPDE with ERA5 Meteorology)
  ├── 6. Clinical Survival Analysis via RMST & AFT (2,139 HIV Patients, Log-Normal AFT)
  ├── 7. Spatial Econometric Modeling of Central Java Stunting (Spatial Error Models - SEM, LISA Maps)
  ├── 8. Superconductor Critical Temperature Optimization (Elastic Net Regularization - SGD vs PGD)
  ├── 9. Commodity Price Early-Warning Forecasting (12 Years Data, Optuna ETS vs LSTM, 3.26% MAPE)
  ├── 10. Minyakita Market Impact: Spatial Price Clustering (Geospatial Policy & Price Dispersion)
  ├── 11. Java Economic Growth Modeling: Box-Cox & Stepwise (119 Districts, 99% Error Reduction)
  ├── 12. West Java Food Spending & Nutrition Dashboard (125k+ Susenas Big Data, Star Schema)
  ├── 13. Statistical Consulting: Two-Factor RCBD ANOVA (Postgraduate Experimental Lab Collaboration)
  ├── 14. Urban NOx Emission Prediction via Stacked Regression (Datamatika 2026 Paper)
  ├── 15. AgriMine: Environmental Acoustic Signal Classification (CNN14 & MFCC Spectrograms)
  └── 16. GSMArena Hardware Specs: Web Scraping & EDA (Multi-attribute Tech Specs Mining in R)

[5. Education & Honors Highlight]
  ├── IPB University — B.S. in Statistics & Data Science (2023 - Present)
  ├── GPA: 3.83 / 4.00
  ├── Core Coursework Tags (Bayesian, Survival, Spatial, Optimization, ML, Resampling)
  └── Honors Spotlight: Gammafest Data Science Competition 2026

[6. Leadership & Organizational Experience Timeline]
  ├── Society of Renewable Energy (SRE), IPB Chapter — Head of External & PR (2025–2026)
  ├── Gamma Sigma Beta — Merchant Specialist & Alumni Database Admin (2025–2026)
  ├── STEM 2024 — Project Leader (77 students upskilled, 4.72/5 satisfaction) (2024)
  ├── PASSIONxFesma 2024 — Public Relations & Talent Scouting (2024)
  └── Executive PKU Student Organization — Head of Internal Relations (2023–2024)

[7. Certifications & Credentials Grid]
  ├── BNSP Certified Data Analyst (LSP TIK Global, 2026)
  ├── TOEIC Score 930 / 990 (ILA IPB, 2025)
  ├── Project Management Ready (Project Management Institute, 2024)
  ├── Project Leader Certification (STEM, 2024)
  ├── Career Essentials in Data Analysis (Microsoft & LinkedIn, 2025)
  ├── MLOps Implementation & Design (University of Indonesia, 2025)
  └── Expandable Modal / Drawer for full 20+ credentials list

[8. Technical Skills & Tools Matrix]
  ├── Programming & Statistical Computing: Python, R, SQL, C++, Bash
  ├── Statistical Methodologies: Bayesian INLA-SPDE, Survival AFT/RMST, RCBD ANOVA, Spatial Econometrics (SEM/OLS), Elastic Net Regularization
  ├── Machine Learning & AI: LightGBM, XGBoost, Optuna, Scikit-Learn, PyTorch, HuggingFace, NLP/Sentiment, Audio Classification
  ├── Business Intelligence & Dashboards: Streamlit, Tableau, PowerBI, Excel / Relational SQL DB
  └── Soft Skills: Data-Driven Strategy, Project Management, Cross-functional Leadership, Design Thinking

[9. Instant Action Hub & Contact Footer]
  ├── Title: "Open for Discussions, Collaborations & Opportunities"
  ├── Subtitle: "From developing predictive ML pipelines and BI dashboards to exploring new ideas across economic and risk analytics, I love connecting with fellow builders, researchers, and forward-thinking teams. Let’s discuss how we can work together!"
  ├── Quick Copy Email with Toast Feedback (`aldennabil31@gmail.com`)
  ├── Direct Mail Link & Social Links (LinkedIn, GitHub, Medium: @aldennabil31)
  ├── Resume PDF Viewer & Direct Download (`Alden Nabil Wibowo Effendy - Data Analyst.pdf`)
  └── Footer: Copyright © 2026 Alden Nabil Wibowo Effendy. Hosted on Vercel.
```

---

## 5. Functional Requirements

### 5.1 Project Card Thumbnail & Fallback System
- Every project card MUST render a standard `16:9` aspect ratio container.
- If `image` is provided:
  - Render with `object-fit: cover` and lazy loading.
  - Hover zoom effect (`transform: scale(1.04)`).
- If `image` is blank (`""` or omitted):
  - Render a stylized dark gradient card with a category-tailored mathematical formula badge (e.g. $\text{INLA-SPDE}$, $\text{Cox PH}$, $\text{Elastic Net}$, $\text{Poisson / Elo}$, $\text{MDS 2D}$) and domain icon.

### 5.2 Interactive Data Widgets
1. **Interactive 2D MDS Coffee Map Explorer**:
   - SVG/Canvas-based scatter plot showing real MDS coordinate clusters for Bogor coffee shops.
   - Filter between *Work From Cafe* (WFC) vs. *Lifestyle* clusters.
   - Hover card displaying coffee shop name, sentiment rating, and key review attributes.
2. **Gammafest Elo & Poisson Match Simulator**:
   - Sliders for Home Team Elo vs. Away Team Elo.
   - Live calculated Expected Goals ($\lambda_{home}$, $\lambda_{away}$) and simulated Win / Draw / Loss probabilities.
3. **FinSight Risk & KPI Metric Gauge**:
   - Interactive financial ticker showing dynamic metrics (Liquidity, Volatility, Sharpe Ratio, Risk Grade).

### 5.3 Non-Developer Content Management
- All data MUST be separated into `src/data/`:
  - `src/data/profile.ts`: Bio, socials, contact info, metrics.
  - `src/data/projects.ts`: Array of projects with clear TypeScript types and comments.
  - `src/data/experience.ts`: Leadership and organizational milestones.
  - `src/data/certifications.ts`: List of certifications and credentials.
  - `src/data/skills.ts`: Categorized skills and proficiency levels.

---

## 6. Non-Functional Requirements
- **Performance**: 95+ Google Lighthouse score for Performance, Accessibility, Best Practices, and SEO.
- **Responsiveness**: Fully fluid across mobile (320px+), tablet (768px+), laptop (1024px+), and ultra-wide desktops (1440px+).
- **Zero-Config Vercel Compatibility**: Pure static Vite output (`dist/`) ready for instant edge deployment.
