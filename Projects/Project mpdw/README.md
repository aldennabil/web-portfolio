---
id: "commodity-ts"
title: "Commodity Price Early-Warning Forecasting"
category: "Predictive ML"
period: "Dec 2025"
formulaBadge: "ETS vs LSTM • MAPE: 3.26%"
tags: ["Python", "R", "ETS", "ARIMA", "LSTM", "Prophet", "Time Series"]

artifacts:
  paper: "Kelompok 8 Paralel 1.pdf"
  r_report: "RM.html"
  poster: ""
  slides: ""
  notebooks:
    - "LSTM Final Model.ipynb"
    - "Prophet_MPDW.ipynb"
  datasets: []
  cover_image: "plot_LSTM_Final_Model_1.png"

gallery:
  - "/artifacts/commodity-ts/plot_LSTM_Final_Model_1.png"
  - "/artifacts/commodity-ts/plot_Prophet_MPDW_1.png"
  - "/artifacts/commodity-ts/plot_Prophet_MPDW_2.png"
  - "/artifacts/commodity-ts/plot_RM_1.png"
  - "/artifacts/commodity-ts/Ujian Lisan 1.jpeg"

portfolio: {"status": {"en": "Analysis project", "id": "Proyek analisis"}, "summary": {"en": "Comparing statistical and neural approaches to commodity forecasting.", "id": "Membandingkan pendekatan statistik dan neural untuk peramalan komoditas."}, "competencyIds": ["forecasting", "ml"], "results": {"en": "Compare ETS and LSTM in a limited-data forecasting setting. Inspect forecast horizon, preprocessing and evaluation in the report."}, "limitations": {"en": "Read the original artifact for full assumptions and evaluation. Individual contribution has not yet been documented for this case study."}}
---

# Seasonal Commodity Price Forecasting: ETS vs LSTM Deep Learning
> *Peramalan Harga Komoditas Pangan Musiman: Evaluasi ETS vs LSTM Deep Learning*

---

## 🇬🇧 English Version

### 📌 Executive Summary
- **Objective**: Build a 6-month advance price forecasting system for strategic food commodities (West Java rice prices, 2013–2024) to support early inflation warning.
- **Methodology**: Benchmarked classical ETS/ARIMA and Facebook Prophet against a stacked deep LSTM with Optuna tuning on 134 monthly observations with a 107/27 train-test split.
- **Key Outcome**: Optimized ETS achieved the lowest test MAPE of **3.26%**, outperforming LSTM and Prophet on this limited-sample monthly horizon.
- **Deliverables**: Research paper (PDF), full R Markdown analysis report (HTML), and LSTM & Prophet Jupyter notebooks.

### 1. Background & Problem Statement
West Java rice prices exhibit strong upward trends with irregular seasonal spikes driven by monsoon harvest cycles and Ramadhan demand surges. Policymakers need statistically validated medium-term price projections to schedule buffer stock releases before retail crises materialize.

### 2. Urgency
Unforecasted food price spikes disproportionately affect low-income households and trigger localized inflation. A 6-month early-warning window gives food agencies sufficient lead time for supply-side interventions.

### 3. Data Collection & Source
- **Data Source**: West Java rice price time series (BPS/PIHPS), monthly granularity.
- **Observations**: 134 months (2013–2024); train set n=107, test set n=27.
- **Pre-processing**: Missing value imputation via `na.approx`, ADF/KPSS stationarity tests, Box-Cox variance stabilization, differencing.

### 4. Methodology
1. **ETS (Holt-Winters)**: State-space Exponential Smoothing with MLE parameter estimation.
2. **ARIMA**: ACF/PACF-guided order selection with auto-ARIMA diagnostics.
3. **Facebook Prophet**: Additive seasonality with Indonesian holiday effects and change-point detection.
4. **LSTM**: Multi-layer stacked LSTM with sequence windowing, dropout regularization, and Optuna Bayesian hyperparameter search.
5. **Evaluation**: MAPE, RMSE, and MAE on held-out 27-period test window.

### 5. Results & Impact
- **Best Model**: State-space ETS achieved **3.26% MAPE**, proving superior generalization on limited monthly macro data.
- **LSTM Insight**: Deep learning models overfit on small-sample regimes; classical parametric models remain more stable for monthly economic series.

### 6. Artifacts & Deliverables
- 📄 **Research Paper (PDF)**: `Kelompok 8 Paralel 1.pdf`
- 📊 **Interactive R Report (HTML)**: `RM.html`
- 📓 **LSTM Notebook**: `LSTM Final Model.ipynb`
- 📓 **Prophet Notebook**: `Prophet_MPDW.ipynb`

---

## 🇮🇩 Versi Bahasa Indonesia

### 📌 Ringkasan Eksekutif
- **Tujuan**: Membangun sistem peramalan harga komoditas pangan (harga beras Jawa Barat 2013–2024) sebagai peringatan dini inflasi 6 bulan ke depan.
- **Metodologi**: Membandingkan ETS/ARIMA, Facebook Prophet, dan LSTM *deep learning* dengan tuning Optuna pada 134 observasi bulanan (split latih 107 / uji 27).
- **Hasil Utama**: ETS menghasilkan MAPE terbaik **3.26%**, mengungguli LSTM dan Prophet pada data bulanan berukuran terbatas.
- **Luaran Proyek**: Makalah ilmiah (PDF), laporan R Markdown interaktif (HTML), dan notebook LSTM & Prophet.

### 1. Latar Belakang & Masalah
Harga beras Jawa Barat menunjukkan tren naik dengan lonjakan musiman yang dipicu siklus panen hujan dan lonjakan permintaan Ramadhan. Pembuat kebijakan membutuhkan proyeksi jangka menengah yang tervalidasi secara statistik untuk merencanakan operasi pasar sebelum kelangkaan terjadi.

### 2. Urgensi
Lonjakan harga pangan yang tidak terprediksi menekan daya beli masyarakat berpenghasilan rendah dan memicu inflasi daerah. Jendela peramalan 6 bulan memberikan waktu yang cukup bagi badan pangan untuk intervensi sisi penawaran.

### 3. Pengumpulan Data & Sumber
- **Sumber Data**: Deret waktu harga beras bulanan Jawa Barat (BPS/PIHPS).
- **Observasi**: 134 bulan (2013–2024); set latih n=107, set uji n=27.
- **Pra-pemrosesan**: Imputasi nilai hilang dengan `na.approx`, uji stasioneritas ADF/KPSS, transformasi Box-Cox, dan diferensiasi.

### 4. Metodologi
1. **ETS**: *Exponential Smoothing* berbasis *state-space* dengan estimasi parameter MLE.
2. **ARIMA**: Seleksi ordo berbasis ACF/PACF dan diagnostik *auto-ARIMA*.
3. **Facebook Prophet**: Musiman aditif dengan efek hari libur dan deteksi *change-point*.
4. **LSTM**: Arsitektur *stacked* multi-layer dengan *windowing* sekuens, *dropout*, dan Bayesian Optuna.
5. **Evaluasi**: MAPE, RMSE, dan MAE pada 27 periode uji.

### 5. Hasil & Dampak
- **Model Terbaik**: ETS meraih **MAPE 3.26%**, membuktikan keunggulan metode parametrik pada deret waktu bulanan makro berukuran kecil.
- **Insight LSTM**: Model *deep learning* cenderung *overfit* pada data berukuran kecil; ETS lebih stabil dan mudah diinterpretasi.

### 6. Luaran Proyek & Artefak
- 📄 **Makalah Ilmiah (PDF)**: `Kelompok 8 Paralel 1.pdf`
- 📊 **Laporan R Interaktif (HTML)**: `RM.html`
- 📓 **Notebook LSTM**: `LSTM Final Model.ipynb`
- 📓 **Notebook Prophet**: `Prophet_MPDW.ipynb`

---
