---
id: "boxcox-gdp"
title: "Java Economic Growth Modeling: Box-Cox"
category: "Econometrics"
period: "May 2025"
formulaBadge: "y^(λ) = β₀ + Σ βⱼxⱼ + ε"
tags: ["R", "Box-Cox", "Stepwise Regression", "SUSENAS", "Econometrics"]

artifacts:
  paper: "Penerapan Transformasi Box-Cox dan Regresi Stepwise dalam Pemodelan Pertumbuhan Ekonomi di Pulau .pdf"
  r_report: ""
  poster: ""
  slides: ""
  notebooks: []
  datasets:
    - "SUSENAS 2023.xlsx"
  cover_image: ""

portfolio: {"status": {"en": "Analysis project", "id": "Proyek analisis"}, "summary": {"en": "Examining response transformations in regional economic regression.", "id": "Mengkaji transformasi respons dalam regresi ekonomi regional."}, "competencyIds": ["statistics"], "results": {"en": "Box-Cox transformation and variable selection illustrate model diagnostics. Error-reduction claims require comparable evaluation scales."}, "limitations": {"en": "Read the original artifact for full assumptions and evaluation. Individual contribution has not yet been documented for this case study."}}
---

# Java Economic Growth Modeling: Box-Cox Power Transformation & Stepwise Regression
> *Penerapan Transformasi Box-Cox dan Regresi Stepwise dalam Pemodelan Pertumbuhan Ekonomi di Pulau Jawa*

---

## 🇬🇧 English Version

### 📌 Executive Summary
- **Objective**: Model regional GDP (PDRB) per capita across 119 districts/cities in Java Island using Box-Cox power transformations to correct non-normality and reduce multicollinearity.
- **Methodology**: Applied optimal Box-Cox lambda ($\hat{\lambda}$) estimation to normalize the skewed GDP response, then performed stepwise variable selection (AIC-guided) on SUSENAS 2023 socio-economic predictors.
- **Key Outcome**: Transformed model achieved **Adj. R² = 80.7%** and reduced MAE by **99%** (from 57,227 to 0.744 on the transformed scale), delivering publication-grade regression coefficients.
- **Deliverables**: Published research paper (PDF) and SUSENAS 2023 cleaned dataset.

### 1. Background & Problem Statement
GDP per capita (PDRB) across Java's 119 regencies/cities is highly right-skewed and multicollinear with socio-economic predictors from SUSENAS. Standard OLS regression on raw GDP violates normality and homoscedasticity assumptions, producing biased coefficients and unreliable confidence intervals for policy interpretation.

### 2. Urgency
Accurate district-level GDP modeling is essential for equitable fiscal transfer allocation (Dana Perimbangan) and targeted poverty reduction investments. Biased models misidentify key economic drivers and misdirect development spending.

### 3. Data Collection & Source
- **Data Source**: SUSENAS 2023 (Survei Sosial Ekonomi Nasional) — BPS Statistics Indonesia.
- **Unit of Analysis**: 119 regencies/cities (*Kabupaten/Kota*) across Java Island.
- **Dependent Variable**: GDP per capita (PDRB per kapita).
- **Predictors**: Household food expenditure share, educational attainment, access to clean water, sanitation coverage, employment rates, and poverty depth index.

### 4. Methodology
1. **Diagnostics**: Normality (Shapiro-Wilk), heteroscedasticity (Breusch-Pagan), and multicollinearity (VIF) tests on raw data.
2. **Box-Cox Transformation**: Estimated optimal power parameter $\hat{\lambda}$ via maximum log-likelihood; applied $y^{(\lambda)} = (y^\lambda - 1)/\lambda$.
3. **Stepwise Selection**: Backward/forward AIC-guided variable selection to identify the most parsimonious significant predictors.
4. **Model Validation**: Residual normality, constant variance, and independence checks post-transformation.

### 5. Results & Impact
- **Adj. R²**: 80.7% (up from ~55% in untransformed OLS).
- **MAE Reduction**: 99% improvement on the transformed scale (57,227 → 0.744).
- **Policy Insight**: Higher educational attainment and clean water access emerged as the two strongest positive GDP determinants across Java districts.

### 6. Artifacts & Deliverables
- 📄 **Research Paper (PDF)**: `Penerapan Transformasi Box-Cox dan Regresi Stepwise dalam Pemodelan Pertumbuhan Ekonomi di Pulau .pdf`
- 💾 **SUSENAS 2023 Dataset**: `SUSENAS 2023.xlsx`

---

## 🇮🇩 Versi Bahasa Indonesia

### 📌 Ringkasan Eksekutif
- **Tujuan**: Memodelkan PDRB per kapita di 119 kabupaten/kota Pulau Jawa menggunakan transformasi Box-Cox untuk mengoreksi ketidaknormalan distribusi dan mengurangi multikolinearitas.
- **Metodologi**: Mengestimasi parameter lambda ($\hat{\lambda}$) optimal untuk menormalkan PDRB yang menjulur, lalu melakukan seleksi variabel *stepwise* berbasis AIC dari prediktor sosial-ekonomi SUSENAS 2023.
- **Hasil Utama**: Model transformasi menghasilkan **Adj. R² = 80,7%** dan menurunkan MAE sebesar **99%** (dari 57.227 ke 0,744 pada skala transformasi).
- **Luaran Proyek**: Makalah penelitian (PDF) dan dataset SUSENAS 2023 hasil pembersihan.

### 1. Latar Belakang & Masalah
PDRB per kapita di 119 kabupaten/kota Pulau Jawa berdistribusi sangat menjulur kanan (*right-skewed*) dan memiliki multikolinearitas tinggi dengan prediktor sosial-ekonomi SUSENAS. Regresi OLS pada data mentah melanggar asumsi normalitas dan homoskedastisitas, menghasilkan koefisien bias dan interval kepercayaan yang tidak dapat diandalkan.

### 2. Urgensi
Pemodelan PDRB per kecamatan yang akurat sangat krusial untuk penghitungan Dana Perimbangan yang adil dan penetapan prioritas investasi pengentasan kemiskinan. Model yang bias salah mengidentifikasi pendorong ekonomi utama dan mengarahkan anggaran pembangunan secara tidak tepat.

### 3. Pengumpulan Data & Sumber
- **Sumber Data**: SUSENAS 2023 (Survei Sosial Ekonomi Nasional) — BPS.
- **Satuan Analisis**: 119 kabupaten/kota di Pulau Jawa.
- **Variabel Terikat**: PDRB per kapita.
- **Prediktor**: Pengeluaran pangan, tingkat pendidikan, akses air bersih, sanitasi, tingkat pengangguran, dan indeks kedalaman kemiskinan.

### 4. Metodologi
1. **Diagnostik**: Uji normalitas (Shapiro-Wilk), heteroskedastisitas (Breusch-Pagan), dan multikolinearitas (VIF).
2. **Transformasi Box-Cox**: Estimasi $\hat{\lambda}$ optimal via *maximum log-likelihood*, penerapan $y^{(\lambda)} = (y^\lambda - 1)/\lambda$.
3. **Seleksi Stepwise**: Seleksi variabel mundur/maju berbasis AIC.
4. **Validasi Model**: Pemeriksaan normalitas sisaan, ragam konstan, dan independensi setelah transformasi.

### 5. Hasil & Dampak
- **Adj. R²**: 80,7% (naik dari ~55% pada OLS data mentah).
- **Penurunan MAE**: 99% pada skala transformasi (57.227 → 0,744).
- **Insight Kebijakan**: Tingkat pendidikan dan akses air bersih terbukti sebagai pendorong PDRB positif terkuat di kabupaten/kota Pulau Jawa.

### 6. Luaran Proyek & Artefak
- 📄 **Makalah Ilmiah (PDF)**: `Penerapan Transformasi Box-Cox dan Regresi Stepwise dalam Pemodelan Pertumbuhan Ekonomi di Pulau .pdf`
- 💾 **Dataset SUSENAS 2023**: `SUSENAS 2023.xlsx`

---
