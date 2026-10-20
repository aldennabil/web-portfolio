---
id: "bayesian-spatial"
title: "Hybrid XGBoost–Bayesian Spatial Calibration for PM2.5"
category: "Statistical Research"
period: "2025 – 2026"
formulaBadge: "DBSC · R² = 0.642 (RMSE 14.26 μg/m³)"
tags: ["Python", "R", "XGBoost", "R-INLA", "BYM2", "SPDE", "Bayesian Spatial Modelling", "Air Quality", "PM2.5"]

artifacts:
  paper: "BAYES_K1_2 (1).docx"
  r_report: ""
  poster: ""
  slides: "PPT Bayes Kelompok 2.pptx"
  notebooks:
    - "Literature/Old Run/XGB + BYM/01_eda.ipynb"
    - "Literature/Old Run/XGB + BYM/03_xgboost.ipynb"
    - "Literature/Old Run/XGB + BYM/04_residual.ipynb"
    - "Literature/Old Run/XGB + BYM/06_model_comparison.ipynb"
  datasets:
    - "Literature/Old Run/XGB + BYM/data_land_23-25.csv"
  cover_image: "Thumbnail 1.png"

gallery:
  - "/artifacts/bayesian-spatial-pm25/Thumbnail 1.png"
  - "/artifacts/bayesian-spatial-pm25/plot_01_eda_4.png"
  - "/artifacts/bayesian-spatial-pm25/plot_01_eda_8.png"
  - "/artifacts/bayesian-spatial-pm25/plot_04_residual_2.png"
  - "/artifacts/bayesian-spatial-pm25/plot_06_model_comparison_1.png"
  - "/artifacts/bayesian-spatial-pm25/plot_06_model_comparison_2.png"

portfolio: {"status": {"en": "Analysis project", "id": "Proyek analisis"}, "summary": {"en": "Bayesian spatial calibration for Jakarta air-quality estimates.", "id": "Kalibrasi spasial Bayesian untuk estimasi kualitas udara Jakarta."}, "competencyIds": ["statistics", "ml"], "results": {"en": "Compare tree-based prediction with spatial residual modeling; inspect the original report for validation assumptions."}, "limitations": {"en": "Read the original artifact for full assumptions and evaluation. Individual contribution has not yet been documented for this case study."}}
---

# Hybrid XGBoost — Dynamic Bayesian Spatial Calibration for PM2.5 Prediction
> *Pemodelan Hybrid XGBoost – Dynamic Bayesian Spatial Calibration untuk Prediksi PM2.5 DKI Jakarta*

---

## 🇬🇧 English Version

### 📌 Executive Summary
- **Objective**: Develop a hybrid XGBoost + Bayesian spatial model for daily PM2.5 forecasting across Jakarta's 5 official monitoring stations (2023–2025), addressing the critical challenge of extremely sparse spatial likelihood with only 5 observation points.
- **Methodology**: Two-stage hybrid pipeline — XGBoost captures non-linear meteorological dynamics; residuals are modeled with R-INLA BYM2/SPDE; proposed Dynamic Bayesian Spatial Calibration (DBSC) with rolling 30-day window updates spatial priors weekly to handle seasonal non-stationarity.
- **Key Outcome**: Rolling Frequentist Window (R²=0.642, RMSE=14.26 μg/m³) and DBSC (R²=0.612) outperformed static hybrid models, which *degraded* below standalone XGBoost (R²=0.557) due to spatial non-stationarity across wet/dry seasons.
- **Deliverables**: Full research paper draft (DOCX), 7-model comparison notebooks, EDA pipeline, INLA SPDE/BYM2 R scripts, and air quality dataset (2023–2025).

### 1. Background & Problem Statement
PM2.5 (particulate matter < 2.5 μm) is a primary health hazard causing cardiovascular and pulmonary disease. Jakarta — one of Southeast Asia's most polluted cities — is monitored by only **5 official ISPU stations** across ~660 km², creating an **extremely sparse spatial likelihood** that makes standard geostatistics (Kriging, static BYM2) unreliable and prior-dominated.

### 2. Urgency
Accurate daily PM2.5 forecasting enables public health early-warning systems, pollution episode alerts, and evidence-based traffic/industry regulation. Jakarta's sparse monitoring network currently limits the spatial precision of official air quality estimates, leaving millions of residents in unmonitored areas without reliable exposure data.

### 3. Data Collection & Source
- **PM2.5 Data**: ISPU DKI Jakarta — 5 official stations (DKI1–DKI5), daily readings (Jan 2023 – Feb 2025).
- **Meteorological Data**: ERA5-Land reanalysis (ECMWF) — temperature (t2m, d2m, skt), wind (u10/v10, wind speed), surface pressure (sp), solar radiation (ssrd), heat flux (sshf), precipitation (tp).
- **Temporal Lag Features**: PM2.5_lag1, month, day_of_week, is_weekend.
- **Train/Test Split**: Jan 2023 – Sep 2024 (train) → Oct 2024 – Feb 2025 (test).

### 4. Methodology
1. **XGBoost (Stage 1)**: Hyperparameter-tuned regressor (max_depth=2, lr=0.05, n_estimators=200) on meteorological features; XGBoost imputation for missing values.
2. **Spatial Residual Modeling (Stage 2)**: R-INLA BYM2 and SPDE applied to XGBoost residuals (e = y − ŷ) to capture station-level spatial structure.
3. **Dynamic Bayesian Spatial Calibration (DBSC)**: Novel rolling-window approach — BYM2 refitted weekly on the past 30 days of residuals; spatial correction term updated dynamically rather than fixed from training-set estimate.
4. **7-Model Comparison**: Standalone XGBoost, INLA alone, XGBoost+BYM2 (static), XGBoost+SPDE, INLA-BYM+XGBoost (reversed), Rolling Frequentist (W=30), DBSC Rolling BYM2 (W=30).
5. **Prior Sensitivity Analysis**: PC Priors with conservative/neutral/aggressive settings to quantify flat likelihood impact.

### 5. Results & Impact

| Model | RMSE (μg/m³) | MAE | R² |
|---|---|---|---|
| **Rolling Frequentist (W=30)** | **14.26** | **10.52** | **0.642** |
| **DBSC Rolling BYM2 (W=30)** | 14.84 | 11.36 | 0.612 |
| INLA Alone | 15.68 | 12.00 | 0.567 |
| XGBoost (Tuned) | 15.87 | 12.35 | 0.557 |
| XGBoost + BYM2 (Static) | 17.27 | 13.58 | 0.475 |
| XGBoost + SPDE | 17.31 | 13.61 | 0.472 |
| INLA-BYM + XGBoost | 19.34 | 14.77 | 0.342 |

- **Critical Finding**: Static Bayesian hybrid models *underperformed* standalone XGBoost due to spatial non-stationarity. DKI4 (Lubang Buaya) residuals shifted from +3.57 (dry season, train) to -18.50 (wet season, test) — applying a fixed +3.0 correction amplified errors by ~21 μg/m³.
- **DBSC Novelty**: Dynamic spatial calibration recovered R²=0.612 by adapting spatial corrections weekly, demonstrating that Bayesian spatial models require temporal adaptation in sparse sensor environments.
- **Prior Sensitivity**: Posterior spatial fraction Φ shifted from 0.068 (conservative) to 0.479 (aggressive) — confirming flat likelihood; posterior dominated by prior choice with only 5 stations.

### 6. Artifacts & Deliverables
- 📄 **Research Paper Draft**: `BAYES_K1_2 (1).docx`
- 📓 **EDA Notebook**: `Literature/Old Run/XGB + BYM/01_eda.ipynb`
- 📓 **XGBoost Notebook**: `Literature/Old Run/XGB + BYM/03_xgboost.ipynb`
- 📓 **Residual Modeling**: `Literature/Old Run/XGB + BYM/04_residual.ipynb`
- 📓 **Model Comparison**: `Literature/Old Run/XGB + BYM/06_model_comparison.ipynb`
- 💾 **Air Quality Dataset**: `Literature/Old Run/XGB + BYM/data_land_23-25.csv`
- 📊 **INLA R Script**: `Literature/Old Run/XGB + BYM/05_inla-spde.R`

---

## 🇮🇩 Versi Bahasa Indonesia

### 📌 Ringkasan Eksekutif
- **Tujuan**: Mengembangkan model hybrid XGBoost + Bayesian spasial untuk prakiraan PM2.5 harian di 5 stasiun pemantau resmi Jakarta (2023–2025), mengatasi tantangan kritis *flat likelihood* spasial dengan hanya 5 titik observasi.
- **Metodologi**: Pipeline hybrid dua tahap — XGBoost menangkap dinamika meteorologi non-linear; residual dimodelkan dengan R-INLA BYM2/SPDE; *Dynamic Bayesian Spatial Calibration* (DBSC) dengan pembaruan *rolling window* 30 hari memperbarui prior spasial secara mingguan.
- **Hasil Utama**: *Rolling Frequentist* (R²=0,642, RMSE=14,26 μg/m³) dan DBSC (R²=0,612) mengungguli model hybrid statis yang justru *menurunkan performa* di bawah XGBoost mandiri (R²=0,557) akibat non-stasioneritas musiman.
- **Luaran Proyek**: Draft makalah ilmiah (DOCX), notebook perbandingan 7 model, pipeline EDA, skrip R INLA SPDE/BYM2, dan dataset kualitas udara 2023–2025.

### 1. Latar Belakang & Masalah
PM2.5 (partikel < 2,5 μm) merupakan bahaya kesehatan utama yang menyebabkan penyakit kardiovaskular dan paru. Jakarta — salah satu kota paling terpolusi di Asia Tenggara — hanya dipantau oleh **5 stasiun ISPU resmi** di ~660 km², menciptakan **flat likelihood spasial** yang membuat geostatistika standar (Kriging, BYM2 statis) tidak andal dan didominasi prior.

### 2. Urgensi
Prakiraan PM2.5 harian yang akurat memungkinkan sistem peringatan dini kesehatan masyarakat, peringatan episode polusi, dan regulasi lalu lintas/industri berbasis bukti. Jaringan pemantauan Jakarta yang jarang saat ini membatasi presisi spasial estimasi kualitas udara resmi.

### 3. Pengumpulan Data & Sumber
- **Data PM2.5**: ISPU DKI Jakarta — 5 stasiun resmi (DKI1–DKI5), bacaan harian (Jan 2023 – Feb 2025).
- **Data Meteorologi**: ERA5-Land reanalysis (ECMWF) — suhu, angin, tekanan permukaan, radiasi surya, fluks panas, curah hujan.
- **Fitur Lag Temporal**: PM2.5_lag1, bulan, hari dalam seminggu, indikator akhir pekan.
- **Split Latih/Uji**: Jan 2023 – Sep 2024 (latih) → Okt 2024 – Feb 2025 (uji).

### 4. Metodologi
1. **XGBoost (Tahap 1)**: Regressor dengan tuning hiperparameter pada fitur meteorologi; imputasi XGBoost untuk nilai hilang.
2. **Pemodelan Residual Spasial (Tahap 2)**: R-INLA BYM2 dan SPDE diterapkan pada residual XGBoost.
3. **Dynamic Bayesian Spatial Calibration (DBSC)**: Pendekatan *rolling-window* baru — BYM2 difit ulang mingguan pada 30 hari residual terakhir.
4. **Perbandingan 7 Model**: XGBoost mandiri, INLA saja, XGBoost+BYM2 (statis), XGBoost+SPDE, INLA-BYM+XGBoost (terbalik), *Rolling Frequentist* (W=30), DBSC Rolling BYM2 (W=30).
5. **Analisis Sensitivitas Prior**: PC Prior konservatif/netral/agresif untuk mengkuantifikasi dampak *flat likelihood*.

### 5. Hasil & Dampak

| Model | RMSE (μg/m³) | MAE | R² |
|---|---|---|---|
| **Rolling Frequentist (W=30)** | **14,26** | **10,52** | **0,642** |
| **DBSC Rolling BYM2 (W=30)** | 14,84 | 11,36 | 0,612 |
| INLA Saja | 15,68 | 12,00 | 0,567 |
| XGBoost (Tuned) | 15,87 | 12,35 | 0,557 |
| XGBoost + BYM2 (Statis) | 17,27 | 13,58 | 0,475 |
| XGBoost + SPDE | 17,31 | 13,61 | 0,472 |
| INLA-BYM + XGBoost | 19,34 | 14,77 | 0,342 |

- **Temuan Kritis**: Model hybrid Bayesian statis *berkinerja lebih buruk* dari XGBoost mandiri akibat non-stasioneritas spasial. Residual DKI4 (Lubang Buaya) bergeser dari +3,57 (musim kemarau, latih) ke -18,50 (musim hujan, uji).
- **Novelty DBSC**: Kalibrasi spasial dinamis memulihkan R²=0,612 dengan mengadaptasi koreksi spasial secara mingguan.
- **Sensitivitas Prior**: Fraksi spasial posterior Φ bergeser dari 0,068 (konservatif) ke 0,479 (agresif) — mengonfirmasi *flat likelihood* dengan hanya 5 stasiun.

### 6. Luaran Proyek & Artefak
- 📄 **Draft Makalah Ilmiah**: `BAYES_K1_2 (1).docx`
- 📓 **Notebook EDA**: `Literature/Old Run/XGB + BYM/01_eda.ipynb`
- 📓 **Notebook XGBoost**: `Literature/Old Run/XGB + BYM/03_xgboost.ipynb`
- 📓 **Pemodelan Residual**: `Literature/Old Run/XGB + BYM/04_residual.ipynb`
- 📓 **Perbandingan Model**: `Literature/Old Run/XGB + BYM/06_model_comparison.ipynb`
- 💾 **Dataset Kualitas Udara**: `Literature/Old Run/XGB + BYM/data_land_23-25.csv`
- 📊 **Skrip R INLA**: `Literature/Old Run/XGB + BYM/05_inla-spde.R`

---

## References
- Rue, H., Martino, S. & Chopin, N. (2009). *Approximate Bayesian inference using INLA.* JRSS-B.
- Leroux, B.G., Lei, X. & Breslow, N. (2000). *Estimation of disease rates in small areas: a new mixed model.* Statistics in Epidemiology.
- Hu, X. et al. (2026). *XGBoost Meets INLA: A Two-Stage Spatio-Temporal Forecasting.* Environmetrics.
- ISPU DKI Jakarta: https://udara.jakarta.go.id/
- ERA5-Land: https://cds.climate.copernicus.eu/
