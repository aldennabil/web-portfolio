---
id: "superconductor"
title: "Elastic Net Regularization & Optimization"
category: "Predictive ML"
period: "2025"
formulaBadge: "ElasticNet · 6/23 Features Zeroed"
tags: ["Python", "Scikit-learn", "ElasticNet", "Lasso", "Ridge", "Credit Risk", "Regularization"]

artifacts:
  paper: ""
  r_report: ""
  poster: ""
  slides: ""
  notebooks:
    - "LGD_ElasticNet.ipynb"
  datasets: []
  cover_image: ""

gallery: []

portfolio: {"status": {"en": "Analysis project", "id": "Proyek analisis"}, "summary": {"en": "Comparing regularization and optimization for regression.", "id": "Membandingkan regularisasi dan optimasi untuk regresi."}, "competencyIds": ["ml", "statistics"], "results": {"en": "The source folder includes LGD and material-property notebooks. Compare regularization and optimization choices in the individual analyses."}, "limitations": {"en": "Read the original artifact for full assumptions and evaluation. Individual contribution has not yet been documented for this case study."}}
---

# LGD Prediction with ElasticNet Regularization
> *Prediksi Loss Given Default (LGD) dengan Regularisasi ElasticNet*

---

## 🇬🇧 English Version

### 📌 Executive Summary
- **Objective**: Compare Lasso, Ridge, and ElasticNet regularization approaches for predicting Loss Given Default (LGD) in a credit risk context, optimizing model selection via AIC, BIC, and 5-fold CV RMSE.
- **Methodology**: Benchmarked OLS → Lasso (L1) → Ridge (L2) → ElasticNet (L1+L2) on academic credit risk data with 23 features; grid searched α and λ hyperparameters.
- **Key Outcome**: ElasticNet outperformed both Lasso and Ridge on held-out RMSE; L1 penalty zeroed 6 of 23 features, producing a sparse interpretable model consistent across RMSE and AIC criteria.
- **Deliverables**: Full Python analysis notebook (`LGD_ElasticNet.ipynb`).

### 1. Background & Problem Statement
Loss Given Default (LGD) — the fraction of an exposure lost when a borrower defaults — is a key capital input under Basel III. Multicollinearity among credit covariates makes standard OLS unreliable; regularized regression addresses this while enabling feature selection (Lasso) or coefficient shrinkage (Ridge) or both (ElasticNet).

### 2. Urgency
Inaccurate LGD models lead to systematic under- or over-provisioning of capital reserves. Under Basel III, banks must demonstrate model robustness and stability; ElasticNet's combined regularization directly addresses the correlated predictor challenge common in credit datasets.

### 3. Data Collection & Source
- **Data Source**: Academic credit risk dataset (processed).
- **Target**: LGD (continuous, bounded 0–1).
- **Features**: 23 credit covariates (amounts, durations, borrower demographics).
- **Challenge**: Multicollinearity among credit covariates; sparse high-value features.

### 4. Methodology
1. **Baseline OLS**: Reference model without regularization.
2. **Lasso (L1)**: Feature selection via coefficient shrinkage to zero.
3. **Ridge (L2)**: All-coefficient shrinkage; preferred when all features contribute.
4. **ElasticNet (L1+L2)**: Combined penalty; handles correlated predictors better than Lasso alone.
5. **Hyperparameter Tuning**: Grid search over α and λ with 5-fold cross-validation.
6. **Model Selection**: Compared on RMSE, AIC, and BIC.

### 5. Results & Impact
- **Best Model**: ElasticNet achieved lowest held-out RMSE across all tested α values.
- **Feature Sparsity**: L1 penalty zeroed 6 of 23 features → sparse, interpretable model.
- **Consistency**: Model rankings consistent between RMSE and AIC — validates selection criterion.

### 6. Artifacts & Deliverables
- 📓 **Analysis Notebook**: `LGD_ElasticNet.ipynb`

---

## 🇮🇩 Versi Bahasa Indonesia

### 📌 Ringkasan Eksekutif
- **Tujuan**: Membandingkan pendekatan regularisasi Lasso, Ridge, dan ElasticNet untuk memprediksi *Loss Given Default* (LGD) dalam konteks risiko kredit, mengoptimalkan pemilihan model via AIC, BIC, dan RMSE 5-fold CV.
- **Metodologi**: Membandingkan OLS → Lasso (L1) → Ridge (L2) → ElasticNet (L1+L2) pada data risiko kredit akademik dengan 23 fitur; pencarian grid atas hiperparameter α dan λ.
- **Hasil Utama**: ElasticNet mengungguli Lasso dan Ridge dalam RMSE *hold-out*; penalti L1 menolkan 6 dari 23 fitur, menghasilkan model yang jarang (*sparse*) dan dapat diinterpretasi.
- **Luaran Proyek**: Notebook analisis Python lengkap (`LGD_ElasticNet.ipynb`).

### 1. Latar Belakang & Masalah
*Loss Given Default* (LGD) adalah input modal kunci di bawah Basel III. Multikolinearitas di antara kovariat kredit membuat OLS standar tidak andal; regresi yang diregularisasi mengatasi hal ini sambil memungkinkan seleksi fitur.

### 2. Urgensi
Model LGD yang tidak akurat menyebabkan pencadangan modal yang sistematis kurang atau berlebihan. Di bawah Basel III, bank harus menunjukkan ketahanan dan stabilitas model; regularisasi gabungan ElasticNet langsung mengatasi tantangan prediktor yang berkorelasi.

### 3. Pengumpulan Data & Sumber
- **Sumber Data**: Dataset risiko kredit akademik (diproses).
- **Target**: LGD (kontinu, dibatasi 0–1).
- **Fitur**: 23 kovariat kredit.

### 4. Metodologi
1. **OLS Baseline**: Model referensi tanpa regularisasi.
2. **Lasso (L1)**: Seleksi fitur via penyusutan koefisien ke nol.
3. **Ridge (L2)**: Penyusutan semua koefisien.
4. **ElasticNet (L1+L2)**: Penalti gabungan.
5. **Tuning Hiperparameter**: Pencarian grid α dan λ dengan 5-fold CV.
6. **Pemilihan Model**: RMSE, AIC, BIC.

### 5. Hasil & Dampak
- **Model Terbaik**: ElasticNet mencapai RMSE *hold-out* terendah.
- **Kejarangan Fitur**: Penalti L1 menolkan 6 dari 23 fitur → model jarang dan mudah diinterpretasi.
- **Konsistensi**: Peringkat model konsisten antara RMSE dan AIC.

### 6. Luaran Proyek & Artefak
- 📓 **Notebook Analisis**: `LGD_ElasticNet.ipynb`

---

## References
- Zou, H. & Hastie, T. (2005). *Regularization and variable selection via the elastic net.* JRSS-B.
- Basel Committee on Banking Supervision (2006). *International Convergence of Capital Measurement.*
