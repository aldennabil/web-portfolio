---
id: "agrimine"
title: "Agricultural Sound Classification — AgriMine 2025"
category: "Predictive ML"
period: "2025"
formulaBadge: "CNN-14 + EfficientNet-B0 · Multi-Res Spectrogram"
tags: ["Python", "PyTorch", "Librosa", "CNN-14", "EfficientNet", "Audio Classification", "Competition"]

artifacts:
  paper: ""
  r_report: ""
  poster: ""
  slides: ""
  notebooks: []
  datasets: []
  cover_image: ""

gallery: []

portfolio: {"status": {"en": "Analysis project", "id": "Proyek analisis"}, "summary": {"en": "Classifying agricultural audio with spectrogram-based models.", "id": "Mengklasifikasikan audio pertanian dengan model berbasis spektrogram."}, "competencyIds": ["ml"], "results": {"en": "Inspect the competition notebook for feature representations and model comparisons."}, "limitations": {"en": "Read the original artifact for full assumptions and evaluation. Individual contribution has not yet been documented for this case study."}}
---

# Agricultural Sound Classification — AgriMine 2025
> *Klasifikasi Suara Pertanian dengan Deep Learning — AgriMine 2025*

---

## 🇬🇧 English Version

### 📌 Executive Summary
- **Objective**: Build a competitive deep learning audio classifier for the AgriMine 2025 Kaggle competition — identifying agricultural conditions from audio recordings.
- **Methodology**: Extracted multi-resolution Log-Mel spectrograms from raw audio; fine-tuned CNN-14 (PANNs) and EfficientNet-B0 on spectrogram images; applied Test-Time Augmentation (TTA) and weighted ensemble averaging.
- **Key Outcome**: Multi-resolution spectrograms consistently outperformed single-resolution; TTA provided ~1–2% leaderboard improvement; EfficientNet-B0 outperformed CNN-14 after domain-specific fine-tuning.
- **Deliverables**: Competition pipeline notebook (`EffNet_B0_Log_Mel_Multi_Res.ipynb`).

### 1. Background & Problem Statement
Automated audio classification of agricultural sounds enables precision agriculture applications: detecting machinery faults, crop stress indicators, or pest activity without continuous human monitoring. The challenge is building robust classifiers with limited labeled agricultural audio data.

### 2. Urgency
Precision agriculture reduces resource waste and increases crop yield through timely interventions. Automated acoustic monitoring is a cost-effective alternative to sensor networks for early detection of field events.

### 3. Data Collection & Source
- **Data Source**: AgriMine 2025 competition dataset (Kaggle) — not publicly redistributable.
- **Format**: Variable-length audio recordings.
- **Features**: Log-Mel spectrograms at multiple frequency resolutions (low/mid/high emphasis).
- **Challenge**: Limited labeled data; cross-domain generalization.

### 4. Methodology
1. **Feature Extraction**: Log-Mel spectrograms at multiple resolutions — captures different temporal-frequency structures simultaneously.
2. **CNN-14 Baseline**: Pre-trained audio classifier from PANNs (Pre-trained Audio Neural Networks).
3. **EfficientNet-B0**: Fine-tuned on multi-resolution spectrogram image inputs.
4. **Test-Time Augmentation**: Averaged predictions across augmented test samples (pitch shift, time stretch).
5. **Ensemble**: Weighted averaging of CNN-14 and EfficientNet-B0 predictions.

### 5. Results & Impact
- **Multi-Resolution Win**: Multi-resolution spectrograms > single-resolution input across all model configurations.
- **TTA Gain**: Consistent ~1–2% classification accuracy improvement on competition leaderboard.
- **Fine-tuning Effect**: EfficientNet-B0 outperformed CNN-14 after domain-specific training.

### 6. Artifacts & Deliverables
- 📓 **Competition Notebook**: `EffNet_B0_Log_Mel_Multi_Res.ipynb`

---

## 🇮🇩 Versi Bahasa Indonesia

### 📌 Ringkasan Eksekutif
- **Tujuan**: Membangun klasifikasi audio *deep learning* kompetitif untuk kompetisi AgriMine 2025 (Kaggle) — mengidentifikasi kondisi pertanian dari rekaman audio.
- **Metodologi**: Ekstraksi *Log-Mel spectrogram* multi-resolusi dari audio mentah; *fine-tuning* CNN-14 (PANNs) dan EfficientNet-B0 pada gambar spektrogram; *Test-Time Augmentation* (TTA) dan pembobotan ensemble.
- **Hasil Utama**: Spektrogram multi-resolusi secara konsisten mengungguli input resolusi tunggal; TTA memberikan peningkatan ~1–2% pada *leaderboard*; EfficientNet-B0 mengungguli CNN-14 setelah *fine-tuning* domain-spesifik.
- **Luaran Proyek**: Notebook pipeline kompetisi (`EffNet_B0_Log_Mel_Multi_Res.ipynb`).

### 1. Latar Belakang & Masalah
Klasifikasi audio pertanian otomatis memungkinkan aplikasi pertanian presisi: mendeteksi kerusakan mesin, indikator stres tanaman, atau aktivitas hama tanpa pemantauan manusia yang berkelanjutan.

### 2. Urgensi
Pertanian presisi mengurangi pemborosan sumber daya dan meningkatkan hasil panen melalui intervensi tepat waktu. Pemantauan akustik otomatis adalah alternatif hemat biaya dari jaringan sensor untuk deteksi dini kejadian lapangan.

### 3. Pengumpulan Data & Sumber
- **Sumber Data**: Dataset kompetisi AgriMine 2025 (Kaggle) — tidak dapat didistribusikan ulang.
- **Format**: Rekaman audio dengan panjang variabel.
- **Fitur**: Spektrogram Log-Mel pada berbagai resolusi frekuensi.

### 4. Metodologi
1. **Ekstraksi Fitur**: Log-Mel spektrogram multi-resolusi — menangkap struktur temporal-frekuensi yang berbeda secara bersamaan.
2. **CNN-14 Baseline**: Pengklasifikasi audio pre-trained dari PANNs.
3. **EfficientNet-B0**: *Fine-tuned* pada input gambar spektrogram multi-resolusi.
4. **Test-Time Augmentation**: Rata-rata prediksi pada sampel uji yang diaugmentasi.
5. **Ensemble**: Pembobotan rata-rata prediksi CNN-14 dan EfficientNet-B0.

### 5. Hasil & Dampak
- **Keunggulan Multi-Resolusi**: Spektrogram multi-resolusi > input resolusi tunggal di semua konfigurasi model.
- **Keuntungan TTA**: Peningkatan akurasi ~1–2% pada *leaderboard* kompetisi secara konsisten.
- **Efek Fine-tuning**: EfficientNet-B0 mengungguli CNN-14 setelah pelatihan domain-spesifik.

### 6. Luaran Proyek & Artefak
- 📓 **Notebook Kompetisi**: `EffNet_B0_Log_Mel_Multi_Res.ipynb`

---

## References
- Kong, Q. et al. (2020). *PANNs: Large-Scale Pretrained Audio Neural Networks.* IEEE TASLP.
- Tan, M. & Le, Q. (2019). *EfficientNet: Rethinking Model Scaling for CNNs.* ICML.
