---
id: "skincare-nlp"
title: "Skincare Review Sentiment Analysis (Bahasa)"
category: "BI & Analytics"
period: "2025"
formulaBadge: "TextBlob + Noise Robustness Testing"
tags: ["Python", "TextBlob", "NLTK", "NLP", "Sentiment Analysis", "Bahasa Indonesia", "Consumer Analytics"]

artifacts:
  paper: ""
  r_report: ""
  poster: ""
  slides: ""
  notebooks:
    - "textblob_sentiment_review_skincare.ipynb"
  datasets: []
  cover_image: ""

gallery: []

portfolio: {"status": {"en": "Analysis project", "id": "Proyek analisis"}, "summary": {"en": "Summarizing Indonesian skincare reviews through text analysis.", "id": "Merangkum ulasan skincare Indonesia melalui analisis teks."}, "competencyIds": ["ml", "bi"], "results": {"en": "Sentiment and aspect summaries provide descriptive signals about customer feedback."}, "limitations": {"en": "Read the original artifact for full assumptions and evaluation. Individual contribution has not yet been documented for this case study."}}
---

# Skincare Product Sentiment Analysis (Indonesian Reviews)
> *Analisis Sentimen Ulasan Produk Skincare dalam Bahasa Indonesia menggunakan TextBlob*

---

## 🇬🇧 English Version

### 📌 Executive Summary
- **Objective**: Build and evaluate a lexicon-based NLP pipeline for sentiment classification (Positive/Neutral/Negative) of Indonesian skincare product reviews, including robustness testing against noisy informal text.
- **Methodology**: Adapted TextBlob sentiment scoring to Indonesian informal language via polarity thresholds; tested pipeline on clean and noise-injected (typos, slang) dataset variants.
- **Key Outcome**: Pipeline demonstrated acceptable accuracy on clean data; noise injection testing revealed the performance degradation floor of lexicon-based methods on Bahasa Indonesia informal text, motivating transformer-based alternatives.
- **Deliverables**: Full NLP pipeline notebook (`textblob_sentiment_review_skincare.ipynb`).

### 1. Background & Problem Statement
Indonesian e-commerce platforms (Tokopedia, Shopee) host millions of product reviews containing valuable signals for product quality and customer satisfaction. English-centric tools like TextBlob perform poorly on Bahasa Indonesia without adaptation; formal Indonesian NLP resources are sparse, and informal register (slang, abbreviations) dominates consumer reviews.

### 2. Urgency
Businesses lose actionable insight when review analytics systems are either absent or performing below usable accuracy. A validated baseline pipeline — even lexicon-based — quantifies the performance gap, justifying investment in more sophisticated transformer models (IndoBERT).

### 3. Data Collection & Source
- **Data Source**: Curated Indonesian skincare product reviews (e-commerce).
- **Scale**: Small curated dataset + noise-injected variant for robustness testing.
- **Language**: Bahasa Indonesia (informal register).
- **Labels**: Positive / Neutral / Negative.

### 4. Methodology
1. **Text Preprocessing**: Lowercasing, punctuation removal, Indonesian stopword filtering.
2. **Sentiment Scoring**: TextBlob polarity applied to translated/adapted text; threshold calibration for Indonesian informal language.
3. **Noise Robustness Testing**: Pipeline tested on noise-injected version (typos, informal slang) to evaluate real-world robustness.
4. **Evaluation**: Accuracy and confusion matrix; comparison against ground-truth labels.

### 5. Results & Impact
- **Clean Data Performance**: Pipeline achieved acceptable accuracy on clean, well-formed reviews.
- **Noise Degradation**: Noise injection measurably reduced accuracy, quantifying the limitation of lexicon-based methods for informal Bahasa Indonesia.
- **Baseline Contribution**: Establishes a reproducible baseline; performance gap justifies IndoBERT fine-tuning as next step.

### 6. Artifacts & Deliverables
- 📓 **Analysis Notebook**: `textblob_sentiment_review_skincare.ipynb`

---

## 🇮🇩 Versi Bahasa Indonesia

### 📌 Ringkasan Eksekutif
- **Tujuan**: Membangun dan mengevaluasi *pipeline* NLP berbasis leksikon untuk klasifikasi sentimen (Positif/Netral/Negatif) ulasan produk skincare dalam Bahasa Indonesia, termasuk pengujian ketahanan terhadap teks informal yang berisik.
- **Metodologi**: Mengadaptasi penilaian sentimen TextBlob ke bahasa informal Indonesia via kalibrasi ambang batas polaritas; menguji *pipeline* pada varian dataset bersih dan yang diinjeksi *noise* (typo, slang).
- **Hasil Utama**: *Pipeline* menunjukkan akurasi yang dapat diterima pada data bersih; pengujian injeksi *noise* mengungkap batas degradasi kinerja metode berbasis leksikon pada teks informal Bahasa Indonesia.
- **Luaran Proyek**: Notebook *pipeline* NLP lengkap.

### 1. Latar Belakang & Masalah
Platform e-commerce Indonesia (Tokopedia, Shopee) menampung jutaan ulasan produk yang mengandung sinyal berharga untuk kualitas produk dan kepuasan pelanggan. Alat yang berpusat pada bahasa Inggris seperti TextBlob berkinerja buruk pada Bahasa Indonesia tanpa adaptasi; sumber daya NLP formal Bahasa Indonesia masih terbatas, dan register informal (slang, singkatan) mendominasi ulasan konsumen.

### 2. Urgensi
Bisnis kehilangan insight yang dapat ditindaklanjuti ketika sistem analitik ulasan absen atau berkinerja di bawah ambang batas yang dapat digunakan. *Pipeline* baseline yang tervalidasi — meski berbasis leksikon — mengkuantifikasi kesenjangan kinerja, membenarkan investasi pada model transformer yang lebih canggih.

### 3. Pengumpulan Data & Sumber
- **Sumber Data**: Ulasan produk skincare Indonesia yang dikurasi (e-commerce).
- **Skala**: Dataset kecil yang dikurasi + varian yang diinjeksi *noise*.
- **Bahasa**: Bahasa Indonesia (register informal).
- **Label**: Positif / Netral / Negatif.

### 4. Metodologi
1. **Pra-pemrosesan Teks**: *Lowercasing*, penghapusan tanda baca, penyaringan *stopword* Indonesia.
2. **Penilaian Sentimen**: Polaritas TextBlob diterapkan pada teks yang diadaptasi; kalibrasi ambang batas.
3. **Pengujian Ketahanan Noise**: *Pipeline* diuji pada versi yang diinjeksi *noise*.
4. **Evaluasi**: Akurasi dan matriks konfusi; perbandingan dengan label kebenaran.

### 5. Hasil & Dampak
- **Kinerja Data Bersih**: *Pipeline* mencapai akurasi yang dapat diterima pada ulasan yang terbentuk dengan baik.
- **Degradasi Noise**: Injeksi *noise* mengurangi akurasi secara terukur, mengkuantifikasi keterbatasan metode berbasis leksikon.
- **Kontribusi Baseline**: Membangun baseline yang dapat direproduksi; kesenjangan kinerja membenarkan fine-tuning IndoBERT sebagai langkah berikutnya.

### 6. Luaran Proyek & Artefak
- 📓 **Notebook Analisis**: `textblob_sentiment_review_skincare.ipynb`

---

## References
- Wongkar, M. & Angdresey, A. (2019). *Sentiment Analysis using Naive Bayes and TextBlob.* ICIC.
- Koto, F. et al. (2020). *IndoLEM and IndoBERT.* COLING.
