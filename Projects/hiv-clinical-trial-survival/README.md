---
id: "hiv-survival"
title: "HIV Clinical Trial Survival Analysis (ACTG175)"
category: "Biostatistics"
period: "2025"
formulaBadge: "Cox PH · Log-rank p < 0.001"
tags: ["Python", "Lifelines", "Kaplan-Meier", "Cox PH", "Clinical Trial", "Survival Analysis"]

artifacts:
  paper: ""
  r_report: ""
  poster: ""
  slides: ""
  notebooks:
    - "Code Final.ipynb"
  datasets: []
  cover_image: ""

gallery: []

portfolio: {"status": {"en": "Analysis project", "id": "Proyek analisis"}, "summary": {"en": "Comparing survival-model assumptions in a clinical trial dataset.", "id": "Membandingkan asumsi model survival pada dataset uji klinis."}, "competencyIds": ["statistics"], "results": {"en": "Survival analysis connects censoring, model diagnostics and interpretable estimates. Findings apply to the analyzed cohort."}, "limitations": {"en": "Read the original artifact for full assumptions and evaluation. Individual contribution has not yet been documented for this case study."}}
---

# HIV Clinical Trial Survival Analysis (ACTG175)
> *Analisis Survival Uji Klinis HIV — Perbandingan Empat Regimen Antiretroviral*

---

## 🇬🇧 English Version

### 📌 Executive Summary
- **Objective**: Compare time-to-AIDS-defining-event or death across four antiretroviral treatment arms in the landmark ACTG175 randomized controlled trial.
- **Methodology**: Applied Kaplan-Meier estimation, log-rank test, and Cox Proportional Hazard regression on 2,139 participants; validated the PH assumption using Schoenfeld residuals.
- **Key Outcome**: Treatment arm was a significant predictor of survival (log-rank p < 0.001); higher baseline CD4 count was strongly protective (HR < 1.0 per 100-cell increase); prior antiretroviral use was associated with worse outcomes.
- **Deliverables**: Full analysis Jupyter notebook (`Code Final.ipynb`).

### 1. Background & Problem Statement
ACTG175 (NCT00000625) was a landmark 1996 trial that compared four HIV treatment regimens. The scientific question: do survival curves differ significantly across treatment arms, and which covariates (CD4 count, age, prior ART exposure) drive time-to-event outcomes? This analysis replicates and extends the original results using the publicly available dataset.

### 2. Urgency
Antiretroviral therapy selection has evolved dramatically since 1996, but the statistical methodology — survival analysis of censored time-to-event data — remains the gold standard for evaluating treatment efficacy in HIV and other chronic conditions. Mastering this on a real landmark dataset directly applies to contemporary clinical trial analysis.

### 3. Data Collection & Source
- **Data Source**: ACTG175 dataset (NCT00000625) — public domain clinical trial data.
- **Scale**: 2,139 participants.
- **Target**: Time to AIDS-defining event or death (days), censored at study end.
- **Key Covariates**: Treatment arm, baseline CD4 count, age, prior antiretroviral use.

### 4. Methodology
1. **Kaplan-Meier Curves**: Estimated survival probability per treatment arm; visualized with confidence bands.
2. **Log-rank Test**: Formal test of survival curve equality across all four arms.
3. **Cox PH Model**: Adjusted hazard ratios per covariate, controlling for confounding.
4. **PH Assumption Validation**: Schoenfeld residuals test and time-scaled residual plots.

### 5. Results & Impact
- **Treatment Effect**: Log-rank test p < 0.001 confirmed significant survival differences across arms.
- **CD4 Protection**: HR < 1.0 per 100-cell CD4 increase — baseline immune status strongly predicts survival.
- **Prior ART**: Associated with worse outcomes, consistent with resistance development.
- **Model Validity**: Cox model satisfied PH assumption for all key covariates (Schoenfeld residuals ns).

### 6. Artifacts & Deliverables
- 📓 **Analysis Notebook**: `Code Final.ipynb`

---

## 🇮🇩 Versi Bahasa Indonesia

### 📌 Ringkasan Eksekutif
- **Tujuan**: Membandingkan waktu-ke-kejadian-AIDS-defining atau kematian di empat lengan perlakuan antiretroviral dalam uji klinis acak landmark ACTG175.
- **Metodologi**: Estimasi Kaplan-Meier, uji log-rank, dan regresi Cox PH pada 2.139 peserta; validasi asumsi PH menggunakan residu Schoenfeld.
- **Hasil Utama**: Lengan pengobatan adalah prediktor signifikan kelangsungan hidup (log-rank p < 0,001); jumlah CD4 awal yang lebih tinggi bersifat protektif kuat (HR < 1,0 per kenaikan 100 sel); penggunaan antiretroviral sebelumnya dikaitkan dengan hasil yang lebih buruk.
- **Luaran Proyek**: Notebook analisis lengkap (`Code Final.ipynb`).

### 1. Latar Belakang & Masalah
ACTG175 (NCT00000625) adalah uji klinis landmark tahun 1996 yang membandingkan empat regimen pengobatan HIV. Pertanyaan ilmiahnya: apakah kurva kelangsungan hidup berbeda secara signifikan antar-lengan pengobatan, dan kovariat mana (jumlah CD4, usia, paparan ART sebelumnya) yang mendorong hasil *time-to-event*?

### 2. Urgensi
Pemilihan terapi antiretroviral telah berkembang pesat sejak 1996, namun metodologi statistika — analisis survival data *censored* — tetap menjadi standar emas untuk mengevaluasi kemanjuran pengobatan dalam HIV dan kondisi kronis lainnya.

### 3. Pengumpulan Data & Sumber
- **Sumber Data**: Dataset ACTG175 (NCT00000625) — domain publik.
- **Skala**: 2.139 peserta.
- **Target**: Waktu ke kejadian *AIDS-defining* atau kematian (hari), disensor pada akhir studi.
- **Kovariat Utama**: Lengan perlakuan, jumlah CD4 awal, usia, penggunaan antiretroviral sebelumnya.

### 4. Metodologi
1. **Kurva Kaplan-Meier**: Estimasi probabilitas kelangsungan hidup per lengan pengobatan.
2. **Uji Log-rank**: Uji formal kesetaraan kurva kelangsungan hidup semua lengan.
3. **Model Cox PH**: Rasio bahaya yang disesuaikan per kovariat.
4. **Validasi Asumsi PH**: Uji residu Schoenfeld dan plot residu berskala waktu.

### 5. Hasil & Dampak
- **Efek Pengobatan**: Log-rank p < 0,001 mengonfirmasi perbedaan kelangsungan hidup signifikan antar-lengan.
- **Proteksi CD4**: HR < 1,0 per kenaikan 100 sel CD4 — status imun awal menjadi prediktor kelangsungan hidup terkuat.
- **Penggunaan ART Sebelumnya**: Dikaitkan dengan hasil lebih buruk, konsisten dengan pengembangan resistansi.
- **Validitas Model**: Model Cox memenuhi asumsi PH untuk semua kovariat kunci.

### 6. Luaran Proyek & Artefak
- 📓 **Notebook Analisis**: `Code Final.ipynb`

---

## References
- Hammer, S.M. et al. (1996). *A trial comparing nucleoside monotherapy with combination therapy.* NEJM.
- ACTG175 dataset: https://classic.clinicaltrials.gov/ct2/show/NCT00000625
