---
id: "gammafest"
title: "Football Outcome & Score Prediction"
category: "Predictive ML"
period: "Apr – Jun 2026"
award: "🏆 3RD WINNER • GAMMAFEST 2026"
formulaBadge: "λ ~ Poisson(Elo_diff)"
tags: ["Python", "LightGBM", "Optuna", "Elo Rating", "Ensemble Stacking"]
githubUrl: "https://github.com/aldennabil/football-outcome-prediction-gammafest"

artifacts:
  paper: "FINAL/DSC26013_Bumbu Ireng Pak Jenggot_Laporan.pdf"
  r_report: ""
  poster: ""
  slides: "FINAL/DSC26013_Bumbu Ireng Pak Jenggot_Presentasi.pdf"
  notebooks:
    - "FINAL/DSC26013_Bumbu Ireng Pak Jenggot/DSC26013_Bumbu_Ireng_Pak_Jenggot_Notebook.ipynb"
  datasets: []
  extra:
    - label: "Third-place certificate"
      file: "FINAL/Sertifikat Gammafest 2026 - Juara 3.pdf"
    - label: "Most Applicable award"
      file: "FINAL/Sertifikat Gammafest 2026 - Most Applicable.pdf"
  cover_image: "3.jpg"

gallery:
  - "/artifacts/gammafest/3.jpg"
  - "/artifacts/gammafest/4.jpg"
  - "/artifacts/gammafest/5.jpg"
portfolio: {"spotlightOrder": 1, "status": {"en": "Competition team leader", "id": "Ketua tim kompetisi"}, "summary": {"en": "Reconstructing team history for football prediction.", "id": "Merekonstruksi riwayat tim untuk prediksi sepak bola."}, "competencyIds": ["ml", "forecasting"], "contribution": {"en": "I led the team, cleaned the data, and contributed to feature engineering.", "id": "Saya memimpin tim, membersihkan data, dan berkontribusi pada rekayasa fitur."}, "teamContribution": {"en": "Teammates led model selection, optimization and tuning. The team approach combined chronological Elo features with Poisson and LightGBM models.", "id": "Rekan tim menangani pemilihan model, optimasi, dan tuning. Pendekatan tim menggabungkan fitur Elo kronologis dengan model Poisson dan LightGBM."}, "problem": {"en": "Historical performance features were missing from the competition test data.", "id": "Fitur performa historis tidak tersedia pada data uji kompetisi."}, "methodology": {"en": "The team reconstructed historical features and compared predictions using the competition-specific AW-MAE loss.", "id": "Tim merekonstruksi fitur historis dan membandingkan prediksi menggunakan loss AW-MAE khusus kompetisi."}, "results": {"en": "Third place at Gammafest 2026. My work focused on data readiness, feature engineering and team coordination.", "id": "Juara tiga Gammafest 2026. Kontribusi saya berfokus pada kesiapan data, rekayasa fitur, dan koordinasi tim."}, "limitations": {"en": "Internal validation and leaderboard scores describe different evaluations. The improvement figure is withheld while the matching run is reconciled.", "id": "Validasi internal dan skor leaderboard berasal dari evaluasi berbeda. Angka peningkatan belum ditampilkan sampai sumber eksperimennya dipastikan."}, "caption": {"en": "Gammafest competition and team documentation.", "id": "Dokumentasi tim dan kompetisi Gammafest."}, "image": "/images/projects/spotlight-gammafest.jpg"}
---

# Football Match Outcome & Score Prediction
> *Prediksi Hasil Pertandingan Sepak Bola Menggunakan Ensemble Machine Learning — Juara 3 GammaFest 2026*

---

## 🇬🇧 English Version

### 📌 Executive Summary
- **Objective**: Predict multi-class match outcomes (Home Win / Draw / Away Win) across 121,000+ historical international matches while addressing severe class imbalance and non-stationary dynamic form.
- **Methodology**: Engineered zero-leakage chronological Elo rating state-propagation (56 predictive metrics) and trained a stacked ensemble model (LightGBM, XGBoost, Poisson estimators) optimized via Optuna Bayesian tuning.
- **Key Outcome**: Reduced non-linear AW-MAE loss from 2.69 to 1.98 and achieved top-tier weighted F1-score, securing **3rd Place Nationwide** at GammaFest 2026.
- **Deliverables**: Python reproducible pipeline, ablation study, and Elo rating simulation engine.

### 1. Background & Problem Statement
Predicting football match outcomes is a challenging multi-class classification problem characterized by severe class imbalance (draws are systematically underrepresented at ~25%) and high outcome variance due to sports dynamics. The challenge required building a model that generalizes across global leagues and historical eras without temporal data leakage.

### 2. Urgency
Accurate probabilistic outcome modeling is crucial for sports analytics platforms, performance benchmarking, and dynamic probability rating systems that adapt to evolving team rosters and momentum.

### 3. Data Collection & Source
- **Data Source**: Official GammaFest 2026 Competition Dataset (121,000+ historical international matches from 1872 to 2026).
- **Target Variables**: Match outcome (Home / Draw / Away) and Poisson expected goals.
- **Feature Space**: Match metadata, chronological team performance, Elo ratings, and rolling win-rate/goal difference windows (5, 10, 20 matches).
- **Validation Strategy**: Strict time-series split by season to prevent look-ahead bias.

### 4. Methodology
1. **Feature Engineering**: Built dynamic Elo ratings updated sequentially post-match, combined with rolling offensive/defensive form statistics.
2. **Baseline Benchmarks**: Evaluated Logistic Regression and Random Forest models as calibration baselines.
3. **Gradient Boosting & Tuning**: Trained LightGBM and XGBoost estimators with Optuna Bayesian hyperparameter search.
4. **Ensemble Stacking**: Meta-learner trained on out-of-fold probability predictions.
5. **Threshold Calibration**: Platt scaling applied to probability distributions to maximize draw recall by ~8 percentage points.

### 5. Results & Impact
- **Competition Standing**: **3rd Place Nationwide** — GammaFest 2026 Data Science Competition.
- **Performance**: Loss dropped from 2.69 (baseline AW-MAE) to 1.98; Elo differential emerged as the single highest-gain feature group in ablation testing.

### 6. Artifacts & Deliverables
- 💻 **Source Code**: [GitHub Repository](https://github.com/aldennabil/football-outcome-prediction-gammafest)
- 📸 **Competition Photos**: Available in image gallery

---

## 🇮🇩 Versi Bahasa Indonesia

### 📌 Ringkasan Eksekutif
- **Tujuan**: Memprediksi hasil pertandingan sepak bola (*Home Win / Draw / Away Win*) pada 121.000+ pertandingan internasional dengan mengatasi ketimpangan kelas dan tren performa dinamis.
- **Metodologi**: Mengembangkan sistem rating Elo kronologis tanpa *data leakage* (56 metrik prediktif) serta model *ensemble stacking* (LightGBM, XGBoost, Poisson) dengan optimasi Bayesian Optuna.
- **Hasil Utama**: Menurunkan *loss* AW-MAE dari 2.69 menjadi 1.98 dan meraih F1-score tinggi, mengantarkan tim meraih **Juara 3 Nasional** pada GammaFest 2026.
- **Luaran Proyek**: *Pipeline* Python *end-to-end*, studi ablasi fitur, dan dokumentasi model.

### 1. Latar Belakang & Masalah
Prediksi hasil pertandingan sepak bola merupakan permasalahan klasifikasi multi-kelas dengan ketimpangan data yang tinggi (hasil seri/draw hanya sekitar 25%) dan variansi hasil yang besar. Tantangannya adalah membangun model yang mampu menggeneralisasi performa tim lintas liga dan musim tanpa kebocoran data (*temporal leakage*).

### 2. Urgensi
Pemodelan probabilitas yang akurat sangat dibutuhkan dalam industri analitik olahraga, evaluasi performa tim berbasis data, dan sistem rating kekuatan tim yang responsif terhadap perubahan performa terkini.

### 3. Pengumpulan Data & Sumber
- **Sumber Data**: Dataset resmi Kompetisi Data Science GammaFest 2026 (121.000+ data pertandingan internasional 1872–2026).
- **Target Prediksi**: Hasil akhir pertandingan (Menang Kandang / Seri / Menang Tandang).
- **Fitur Utama**: Metadata pertandingan, histori kekuatan tim berbasis Elo rating, serta statistik bergulir (*rolling goal difference* pada jendela 5, 10, dan 20 laga).
- **Strategi Validasi**: *Time-series cross validation* berdasarkan musim/tahun pertandingan.

### 4. Metodologi
1. **Rekayasa Fitur**: Membangun algoritma pembaruan Elo rating secara berurutan setelah setiap laga serta metrik momentum tim.
2. **Model Acuan (*Baseline*)**: Regresi Logistik dan Random Forest sebagai tolok ukur kalibrasi.
3. **Model Boosted**: LightGBM dan XGBoost yang dioptimasi menggunakan Bayesian Search via Optuna.
4. **Ensemble Stacking**: Menggabungkan probabilitas *out-of-fold* dengan meta-learner untuk meningkatkan generalisasi.
5. **Kalibrasi Probabilitas**: Menerapkan *Platt scaling* untuk meningkatkan *recall* kelas seri sebesar ~8%.

### 5. Hasil & Dampak
- **Prestasi Kompetisi**: **Juara 3 Nasional** — GammaFest 2026 Data Science Competition.
- **Akurasi & Penurunan Loss**: AW-MAE berkurang dari 2.69 menjadi 1.98, dengan diferensial rating Elo terbukti sebagai kontributor performa terbesar pada uji ablasi.

### 6. Luaran Proyek & Artefak
- 💻 **Repositori Kode**: [GitHub Repository](https://github.com/aldennabil/football-outcome-prediction-gammafest)
- 📸 **Dokumentasi & Penghargaan**: Tersedia pada galeri foto

---
