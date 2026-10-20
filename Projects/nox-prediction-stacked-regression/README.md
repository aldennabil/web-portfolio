---
id: "nox-stacked"
title: "NOx Emissions Prediction: Stacked Regression"
category: "Predictive ML"
period: "2026"
formulaBadge: "Stacked Ensemble · Competition Entry"
tags: ["Python", "XGBoost", "LightGBM", "Scikit-learn", "Stacking", "Environmental Analytics", "Competition"]

artifacts:
  paper: ""
  r_report: ""
  poster: ""
  slides: ""
  notebooks: []
  datasets: []
  cover_image: ""

gallery: []

portfolio: {"status": {"en": "Analysis project", "id": "Proyek analisis"}, "summary": {"en": "Combining regression models for NOx prediction.", "id": "Menggabungkan model regresi untuk prediksi NOx."}, "competencyIds": ["ml"], "results": {"en": "Stacked regression combines model predictions. Inspect the report for out-of-fold construction and evaluation."}, "limitations": {"en": "Read the original artifact for full assumptions and evaluation. Individual contribution has not yet been documented for this case study."}}
---

# NOx Emissions Prediction: Stacked Regression Ensemble
> *Prediksi Emisi NOx dengan Stacked Regression Ensemble — DBS Datamatika 2026*

---

## 🇬🇧 English Version

### 📌 Executive Summary
- **Objective**: Build an ensemble stacking model to predict nitrogen oxide (NOx) emissions for the DBS Datamatika 2026 competition, leveraging the complementary strengths of multiple regression base learners.
- **Methodology**: Stacked generalization combining Ridge, Random Forest, XGBoost, and LightGBM base learners with a Ridge meta-learner; out-of-fold predictions used as meta-features to prevent data leakage.
- **Key Outcome**: Stacked ensemble outperformed all individual base learners on held-out RMSE, consistent with ensemble theory; no single base learner dominated all 5-fold CV folds.
- **Deliverables**: Full competition notebook (`base_model_stacked_regression.ipynb`).

### 1. Background & Problem Statement
Accurate NOx emission prediction supports regulatory compliance and environmental monitoring. Single-model baselines plateau in performance due to the complementary nature of errors across different algorithm families — tree-based vs. linear — creating an opportunity for stacking to extract residual signal.

### 2. Urgency
NOx is a primary regulated air pollutant. Regulatory agencies require accurate real-time monitoring and forecasting models. Competition-grade ensemble methods are directly applicable to industrial sensor systems and emission compliance tracking.

### 3. Data Collection & Source
- **Data Source**: DBS Datamatika 2026 competition dataset (not publicly redistributable).
- **Target**: NOx emission level (continuous).
- **Features**: Combustion process variables, operational parameters.
- **Evaluation Metric**: RMSE on held-out test set.

### 4. Methodology
1. **Baseline Models**: Linear Regression, Ridge, Lasso as performance anchors.
2. **Base Learners**: Random Forest, XGBoost, LightGBM, SVR.
3. **Stacking**: Out-of-fold predictions from base learners → Ridge meta-learner (prevents data leakage).
4. **Cross-Validation**: 5-fold stratified CV for stable performance estimates.
5. **Comparison**: Systematic RMSE and MAE benchmarking across all base and stacked models.

### 5. Results & Impact
- **Winner**: Stacked Ensemble achieved the best RMSE and MAE across all evaluated models.
- **Complementarity**: No single base learner dominated all folds — stacking exploited uncorrelated errors.
- **Feature Importance**: Consistent ranking across tree-based models indicated stable signal in combustion variables.
- **Meta-Learner Efficiency**: Ridge meta-learner required only 5 features (OOF predictions) to surpass any individual model.

### 6. Artifacts & Deliverables
- 📓 **Competition Notebook**: `base_model_stacked_regression.ipynb`

---

## 🇮🇩 Versi Bahasa Indonesia

### 📌 Ringkasan Eksekutif
- **Tujuan**: Membangun model *ensemble stacking* untuk memprediksi emisi nitrogen oksida (NOx) pada kompetisi DBS Datamatika 2026, memanfaatkan kekuatan komplementer beberapa *base learner* regresi.
- **Metodologi**: *Stacked generalization* menggabungkan Ridge, Random Forest, XGBoost, dan LightGBM sebagai *base learner* dengan Ridge *meta-learner*; prediksi *out-of-fold* digunakan sebagai *meta-feature* untuk mencegah kebocoran data.
- **Hasil Utama**: *Ensemble stacked* mengungguli semua *base learner* individual dalam RMSE *hold-out*; tidak ada satu model pun yang mendominasi semua fold 5-fold CV.
- **Luaran Proyek**: Notebook kompetisi lengkap (`base_model_stacked_regression.ipynb`).

### 1. Latar Belakang & Masalah
Prediksi emisi NOx yang akurat mendukung kepatuhan regulasi dan pemantauan lingkungan. *Baseline* model tunggal mencapai batas kinerja karena sifat komplementer kesalahan antar-keluarga algoritma berbeda.

### 2. Urgensi
NOx adalah polutan udara yang diatur secara primer. Lembaga regulasi membutuhkan model pemantauan dan prakiraan *real-time* yang akurat. Metode *ensemble* tingkat kompetisi langsung diterapkan pada sistem sensor industri dan pelacakan kepatuhan emisi.

### 3. Pengumpulan Data & Sumber
- **Sumber Data**: Dataset kompetisi DBS Datamatika 2026 (tidak dapat didistribusikan ulang secara publik).
- **Target**: Tingkat emisi NOx (kontinu).
- **Fitur**: Variabel proses pembakaran, parameter operasional.
- **Metrik Evaluasi**: RMSE pada set uji *hold-out*.

### 4. Metodologi
1. **Model Baseline**: Regresi Linear, Ridge, Lasso sebagai jangkar kinerja.
2. **Base Learner**: Random Forest, XGBoost, LightGBM, SVR.
3. **Stacking**: Prediksi OOF dari *base learner* → Ridge *meta-learner*.
4. **Cross-Validation**: 5-fold stratified CV.
5. **Perbandingan**: Benchmarking RMSE dan MAE sistematis.

### 5. Hasil & Dampak
- **Model Terbaik**: *Stacked Ensemble* mencapai RMSE dan MAE terbaik di antara semua model.
- **Komplementaritas**: Tidak ada *base learner* yang mendominasi semua fold.
- **Efisiensi Meta-Learner**: Ridge *meta-learner* hanya membutuhkan 5 fitur (prediksi OOF) untuk melampaui model individual mana pun.

### 6. Luaran Proyek & Artefak
- 📓 **Notebook Kompetisi**: `base_model_stacked_regression.ipynb`

---

## References
- Wolpert, D.H. (1992). *Stacked generalization.* Neural Networks, 5(2), 241–259.
- DBS Datamatika 2026 Competition.
