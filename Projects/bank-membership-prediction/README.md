---
id: "bank-insurance"
title: "Bank Insurance Membership Prediction"
category: "Predictive ML"
period: "2025"
formulaBadge: "Random Forest · ~12% Positive Class"
tags: ["R", "RMarkdown", "caret", "Random Forest", "Logistic Regression", "SMOTE", "Classification"]

artifacts:
  paper: ""
  r_report: ""
  poster: ""
  slides: ""
  notebooks: []
  datasets: []
  cover_image: ""

gallery: []

portfolio: {"status": {"en": "Analysis project", "id": "Proyek analisis"}, "summary": {"en": "Modeling bank insurance membership under class imbalance.", "id": "Memodelkan kepesertaan asuransi bank pada kelas tidak seimbang."}, "competencyIds": ["ml"], "results": {"en": "Inspect the classification workflow and evaluation trade-offs in the available report."}, "limitations": {"en": "Read the original artifact for full assumptions and evaluation. Individual contribution has not yet been documented for this case study."}}
---

# Bank Insurance Membership Prediction
> *Prediksi Kepesertaan Nasabah pada Produk Asuransi Jiwa Bank*

---

## 🇬🇧 English Version

### 📌 Executive Summary
- **Objective**: Build a binary classification model to predict whether a bank customer will subscribe to a term insurance product, enabling targeted marketing to reduce cost per acquisition.
- **Methodology**: Trained Logistic Regression, Decision Tree, and Random Forest classifiers on ~5,300 training records; applied SMOTE for 12% positive class imbalance; optimized via AUC-ROC and precision-recall evaluation.
- **Key Outcome**: Prior campaign outcome (`poutcome = success`) was the single strongest predictor; Random Forest achieved the best AUC; customers contacted via cellular had significantly higher subscription rates than telephone-contacted customers.
- **Deliverables**: Full R Markdown analysis report (HTML).

### 1. Background & Problem Statement
Insurance cross-selling through bank channels (bancassurance) is cost-effective but requires targeting the right customers. A model predicting subscription likelihood allows marketing teams to prioritize outreach, reducing cost per acquisition and improving campaign ROI. The severe class imbalance (~12% positive) requires specialized handling to avoid trivial majority-class prediction.

### 2. Urgency
Without predictive modeling, marketing campaigns must contact all customers, inflating cost per acquisition by ~8× for bancassurance products. Deploying a classification model reduces outreach volume while increasing conversion through better targeting.

### 3. Data Collection & Source
- **Data Source**: Bank marketing dataset (Moro et al., 2014) — publicly available.
- **Scale**: ~5,300 training records, ~45,000 testing records.
- **Target**: Binary — subscribed to term insurance (yes/no).
- **Key Features**: Age, job, marital status, education, contact type, prior campaign outcomes.
- **Imbalance**: ~12% positive class.

### 4. Methodology
1. **Exploratory Analysis**: Distribution and association analysis; identified prior campaign success as the strongest predictor.
2. **Preprocessing**: One-hot encoding for categorical variables; SMOTE for class imbalance.
3. **Model Training**: Logistic Regression, Decision Tree, Random Forest with cross-validation.
4. **Evaluation**: AUC-ROC, precision-recall curve (prioritized over accuracy for imbalanced data); threshold tuning.

### 5. Results & Impact
- **Top Predictor**: `poutcome = success` (prior campaign success) was the single strongest predictor across all models.
- **Best AUC Model**: Random Forest achieved the best AUC-ROC.
- **Business Insight**: Cellular contact vs. telephone showed significantly higher subscription rates — channel optimization opportunity.
- **Interpretability**: Logistic Regression provided the most interpretable coefficients for business reporting.

### 6. Artifacts & Deliverables
- 📊 **R Markdown Report**: `Prediksi Kepesertaan Nasabah.Rmd` → rendered HTML

---

## 🇮🇩 Versi Bahasa Indonesia

### 📌 Ringkasan Eksekutif
- **Tujuan**: Membangun model klasifikasi biner untuk memprediksi apakah nasabah bank akan berlangganan produk asuransi jiwa, memungkinkan pemasaran bertarget untuk mengurangi biaya per akuisisi.
- **Metodologi**: Melatih Regresi Logistik, Pohon Keputusan, dan Random Forest pada ~5.300 data latih; menerapkan SMOTE untuk ketidakseimbangan kelas positif 12%; optimasi via AUC-ROC dan evaluasi presisi-recall.
- **Hasil Utama**: Hasil kampanye sebelumnya (`poutcome = success`) adalah prediktor tunggal terkuat; Random Forest mencapai AUC terbaik; nasabah yang dihubungi via seluler memiliki tingkat berlangganan jauh lebih tinggi.
- **Luaran Proyek**: Laporan R Markdown (HTML).

### 1. Latar Belakang & Masalah
Cross-selling asuransi melalui saluran bank (bancassurance) hemat biaya namun membutuhkan penargetan nasabah yang tepat. Ketidakseimbangan kelas yang parah (~12% positif) memerlukan penanganan khusus untuk menghindari prediksi kelas mayoritas yang trivial.

### 2. Urgensi
Tanpa pemodelan prediktif, kampanye pemasaran harus menghubungi semua nasabah, menggembungkan biaya per akuisisi ~8× untuk produk bancassurance. Model klasifikasi mengurangi volume jangkauan sambil meningkatkan konversi melalui penargetan yang lebih baik.

### 3. Pengumpulan Data & Sumber
- **Sumber Data**: Dataset pemasaran bank (Moro et al., 2014) — tersedia publik.
- **Skala**: ~5.300 data latih, ~45.000 data uji.
- **Target**: Biner — berlangganan asuransi jiwa (ya/tidak).
- **Fitur Utama**: Usia, pekerjaan, status perkawinan, pendidikan, jenis kontak, hasil kampanye sebelumnya.
- **Ketidakseimbangan**: ~12% kelas positif.

### 4. Metodologi
1. **Eksplorasi Data**: Analisis distribusi dan asosiasi; mengidentifikasi keberhasilan kampanye sebelumnya sebagai prediktor terkuat.
2. **Pra-pemrosesan**: *One-hot encoding* untuk variabel kategorikal; SMOTE untuk ketidakseimbangan kelas.
3. **Pelatihan Model**: Regresi Logistik, Pohon Keputusan, Random Forest dengan *cross-validation*.
4. **Evaluasi**: AUC-ROC, kurva presisi-recall; penyetelan ambang batas.

### 5. Hasil & Dampak
- **Prediktor Teratas**: `poutcome = success` adalah prediktor tunggal terkuat di semua model.
- **Model AUC Terbaik**: Random Forest mencapai AUC-ROC terbaik.
- **Insight Bisnis**: Kontak seluler vs. telepon menunjukkan tingkat berlangganan yang jauh lebih tinggi.
- **Interpretabilitas**: Regresi Logistik memberikan koefisien yang paling mudah diinterpretasi untuk pelaporan bisnis.

### 6. Luaran Proyek & Artefak
- 📊 **Laporan R Markdown**: `Prediksi Kepesertaan Nasabah.Rmd`

---

## References
- Moro, S., Cortez, P. & Rita, P. (2014). *A data-driven approach to predict the success of bank telemarketing.* Decision Support Systems.
