---
id: "cox-heart"
title: "Cox PH Model: Heart Failure Survival"
category: "Biostatistics"
period: "2024"
formulaBadge: "Cox PH · Serum Creatinine (HR > 1)"
tags: ["R", "survival", "RMarkdown", "Cox Proportional Hazard", "Clinical Data", "Biostatistics"]

artifacts:
  paper: ""
  r_report: "Cox PH - Heart Failure Data.html"
  poster: ""
  slides: ""
  notebooks: []
  datasets: []
  cover_image: ""

gallery: []

portfolio: {"status": {"en": "Analysis project", "id": "Proyek analisis"}, "summary": {"en": "Assessing heart-failure survival with Cox regression.", "id": "Mengkaji survival gagal jantung dengan regresi Cox."}, "competencyIds": ["statistics"], "results": {"en": "Inspect censoring and proportional-hazards diagnostics before interpreting estimated associations."}, "limitations": {"en": "Read the original artifact for full assumptions and evaluation. Individual contribution has not yet been documented for this case study."}}
---

# Cox Proportional Hazard Model — Heart Failure Survival
> *Model Cox Proportional Hazard untuk Analisis Survival Gagal Jantung*

---

## 🇬🇧 English Version

### 📌 Executive Summary
- **Objective**: Identify the clinical factors most predictive of mortality in 299 heart failure patients using Cox proportional hazard regression on a 285-day follow-up dataset.
- **Methodology**: Performed univariate Cox screening of all 13 clinical covariates, fitted a multivariate Cox model with significant predictors, and validated the proportional hazards assumption via Schoenfeld residuals and log-log survival plots.
- **Key Outcome**: Serum creatinine (HR > 1.0) and ejection fraction (HR < 1.0) were the two independent predictors of mortality; model passed the PH assumption check for all included variables.
- **Deliverables**: R Markdown analysis report (HTML).

### 1. Background & Problem Statement
Heart failure carries high short-term mortality (~32% event rate in this dataset). Identifying which clinical features — biochemical markers vs. functional measurements — are the independent drivers of death allows clinicians to stratify patients for intensive monitoring and early intervention.

### 2. Urgency
Clinical decision support systems for heart failure require validated, quantitative risk models. Understanding adjusted hazard ratios (HR with 95% CI) translates directly into patient risk communication and treatment prioritization in ICU/CCU settings.

### 3. Data Collection & Source
- **Data Source**: Heart failure clinical records (Chicco & Jurman, 2020) — publicly available.
- **Scale**: 299 patients, 13 clinical features.
- **Target**: Time-to-death (days), followed up to 285 days; ~32% deaths observed.
- **Key Features**: Serum creatinine, ejection fraction, serum sodium, age, platelets, CPK.

### 4. Methodology
1. **Univariate Cox Models**: Screened all 13 covariates individually for statistical significance.
2. **Multivariate Cox Model**: Adjusted model retaining covariates with significant univariate effects.
3. **PH Assumption Check**: Schoenfeld residuals test (global and per-covariate); log-log survival plots.
4. **Clinical Interpretation**: HR and 95% CI reported; absolute risk translation for clinical application.

### 5. Results & Impact
- **Serum Creatinine**: Strongest predictor (HR > 1.0) — renal dysfunction as a mortality driver in HF.
- **Ejection Fraction**: Strongest protective factor (HR < 1.0 per unit increase) — cardiac function capacity.
- **Age**: Borderline effect; HR confidence interval crossed 1.0 despite AIC improvement with inclusion.
- **Model Validity**: All included covariates satisfied the PH assumption (Schoenfeld residuals p > 0.05).

### 6. Artifacts & Deliverables
- 📊 **R Markdown Report**: `Cox PH - Heart Failure Data.Rmd` → rendered HTML

---

## 🇮🇩 Versi Bahasa Indonesia

### 📌 Ringkasan Eksekutif
- **Tujuan**: Mengidentifikasi faktor klinis yang paling prediktif terhadap mortalitas pada 299 pasien gagal jantung menggunakan regresi Cox PH pada data tindak lanjut 285 hari.
- **Metodologi**: Skrining univariat Cox semua 13 kovariat klinis, model Cox multivariat dengan prediktor signifikan, dan validasi asumsi PH via residu Schoenfeld dan plot log-log.
- **Hasil Utama**: Kreatinin serum (HR > 1,0) dan fraksi ejeksi (HR < 1,0) adalah dua prediktor independen mortalitas; model memenuhi asumsi PH untuk semua variabel.
- **Luaran Proyek**: Laporan R Markdown (HTML).

### 1. Latar Belakang & Masalah
Gagal jantung memiliki mortalitas jangka pendek yang tinggi (~32% tingkat kejadian dalam dataset ini). Mengidentifikasi fitur klinis mana — penanda biokimia vs. pengukuran fungsional — yang merupakan pendorong independen kematian memungkinkan klinisi untuk melakukan stratifikasi risiko pasien dan intervensi dini.

### 2. Urgensi
Sistem dukungan keputusan klinis untuk gagal jantung membutuhkan model risiko kuantitatif yang tervalidasi. Memahami hazard ratio (HR dengan 95% CI) yang disesuaikan diterjemahkan langsung ke komunikasi risiko pasien dan prioritas pengobatan di ICU/CCU.

### 3. Pengumpulan Data & Sumber
- **Sumber Data**: Rekam klinis gagal jantung (Chicco & Jurman, 2020) — tersedia publik.
- **Skala**: 299 pasien, 13 fitur klinis.
- **Target**: Waktu-ke-kematian (hari), tindak lanjut hingga 285 hari; ~32% kematian teramati.

### 4. Metodologi
1. **Model Cox Univariat**: Skrining 13 kovariat secara individu.
2. **Model Cox Multivariat**: Model yang disesuaikan mempertahankan kovariat dengan efek univariat signifikan.
3. **Pemeriksaan Asumsi PH**: Uji residu Schoenfeld; plot log-log.
4. **Interpretasi Klinis**: HR dan 95% CI dilaporkan.

### 5. Hasil & Dampak
- **Kreatinin Serum**: Prediktor terkuat (HR > 1,0) — disfungsi ginjal sebagai pendorong mortalitas pada HF.
- **Fraksi Ejeksi**: Faktor protektif terkuat (HR < 1,0 per satuan kenaikan).
- **Usia**: Efek borderline; interval kepercayaan HR melewati 1,0.
- **Validitas Model**: Semua kovariat memenuhi asumsi PH.

### 6. Luaran Proyek & Artefak
- 📊 **Laporan R Markdown**: `Cox PH - Heart Failure Data.Rmd`

---

## References
- Chicco, D. & Jurman, G. (2020). *Machine learning can predict survival of patients with heart failure.* BMC Medical Informatics.
- Cox, D.R. (1972). *Regression models and life-tables.* JRSS-B.
