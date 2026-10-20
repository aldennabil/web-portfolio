---
id: "coffeeshop"
title: "Bogor Coffee Wars: MDS & Sentiment NLP"
category: "Market Intelligence"
period: "2025"
formulaBadge: "2D Non-Metric MDS & Lexicon NLP"
tags: ["Python", "MDS", "NLP", "Google Maps Scraping", "Market Intelligence"]

artifacts:
  paper: ""
  r_report: ""
  poster: ""
  slides: ""
  notebooks:
    - "Bogor Coffee Wars Mengungkap Peta Persaingan Segmen Work From Cafe vs Lifestyle Menggunakan Analisis Data Ulasan Google Maps.ipynb"
    - "Text Analysis.ipynb"
  datasets:
    - "MDS Final.xlsx"
    - "Hasil Sentimen Analysis Final.xlsx"
    - "Text Analysis Baseline Result.xlsx"
  cover_image: "Hasil_MDS_CoffeeShop.png"

gallery:
  - "/artifacts/coffeeshop/Hasil_MDS_CoffeeShop.png"
  - "/artifacts/coffeeshop/plot_cell_23_1.png"
  - "/artifacts/coffeeshop/plot_text_analysis_22.png"

portfolio: {"spotlightOrder": 4, "status": {"en": "Personal project", "id": "Proyek pribadi"}, "summary": {"en": "Mapping how Bogor coffee shops compete.", "id": "Memetakan persaingan kedai kopi Bogor."}, "competencyIds": ["forecasting", "bi"], "contribution": {"en": "I developed this personal analysis of customer reviews and coffee-shop positioning.", "id": "Saya mengembangkan analisis pribadi tentang ulasan pelanggan dan posisi kedai kopi."}, "problem": {"en": "Review text contains practical signals about work-friendly and lifestyle-oriented venues.", "id": "Teks ulasan memuat informasi praktis tentang kedai untuk bekerja dan bersosialisasi."}, "methodology": {"en": "Text processing, sentiment analysis and multidimensional scaling were used to compare venue profiles.", "id": "Pemrosesan teks, analisis sentimen, dan multidimensional scaling digunakan untuk membandingkan profil kedai."}, "results": {"en": "A perceptual map makes differences between venue profiles easier to inspect and discuss.", "id": "Peta persepsi memudahkan peninjauan dan pembahasan perbedaan profil kedai."}, "limitations": {"en": "Online reviews are a self-selected sample. Map proximity summarizes the chosen attributes and is not proof of a commercial opportunity.", "id": "Ulasan daring merupakan sampel yang terseleksi sendiri. Kedekatan pada peta merangkum atribut terpilih, bukan bukti peluang komersial."}, "caption": {"en": "Coffee-shop perceptual map from the original analysis.", "id": "Peta persepsi kedai kopi dari analisis asli."}, "image": "/images/projects/spotlight-coffeeshop.jpg"}
---

# Bogor Coffee Wars: MDS & Sentiment NLP
> *Mengungkap Peta Persaingan Segmen Work-From-Cafe (WFC) vs Lifestyle Menggunakan Analisis Data Ulasan Google Maps dan 2D Multidimensional Scaling*

---

## 🇬🇧 English Version

### 📌 Executive Summary
- **Objective**: Map consumer perceptual positioning and competitive differentiation between Work-From-Cafe (WFC) and Social Lifestyle coffee shop venues in Bogor Kota.
- **Methodology**: Scraped 1,500+ Google Maps customer reviews, conducted Indonesian NLP sentiment and aspect-based keyword extraction, and modeled perceptual competitive proximity using 2D Multidimensional Scaling (MDS).
- **Key Outcome**: Quantified distinct spatial market clustering showing high-productivity venues differentiate strictly on Wi-Fi stability, power outlet density, and ambient noise, whereas lifestyle cafes dominate on aesthetic ambiance and specialty beverages.
- **Deliverables**: End-to-end Jupyter analysis notebooks, processed sentiment datasets, and 2D MDS perceptual map visualizations.

### 1. Background & Problem Statement
The coffee shop industry in Bogor Kota has experienced rapid saturation, splitting consumer demand into two divergent behavioral archetypes: remote workers seeking high-productivity Work-From-Cafe (WFC) spaces versus lifestyle visitors seeking aesthetic social hangouts. Business owners frequently fail to differentiate their marketing and spatial layouts, resulting in mixed-brand confusion and suboptimal customer retention.

### 2. Urgency
With rising commercial real estate lease costs in Bogor, coffee shop operators need empirical market intelligence regarding which functional and emotional attributes drive customer loyalty before choosing venue concepts and equipment investments.

### 3. Data Collection & Source
- **Data Source**: Unstructured customer text reviews and 1–5 star ratings scraped from Google Maps API/scrapers for popular coffee shops across Bogor Kota.
- **Attributes Analyzed**: Wi-Fi speed & stability, socket/electrical outlet availability, ambient acoustics, seating ergonomics, coffee flavor notes, food variety, and pricing tiers.
- **Pre-processing**: Indonesian stopword removal, slang normalization, tokenization, and lexicon-based polarity scoring.

### 4. Methodology
1. **Natural Language Processing & Sentiment Scoring**: Built text parsing pipelines in Python to extract attribute mentions and compute polarity sentiment indices across venues.
2. **Euclidean Distance Dissimilarity Matrix**: Constructed symmetric cross-venue dissimilarity matrices based on standardized attribute sentiment ratings.
3. **2D Non-Metric Multidimensional Scaling (MDS)**: Reduced multi-attribute distance spaces into an interpretable 2-dimensional perceptual map while minimizing Kruskal's Stress formula ($S < 0.10$).
4. **Cluster Interpretation**: Mapped orthogonal axes representing *Productivity vs Leisure* and *Affordability vs Premium Specialty Experience*.

### 5. Results & Business Impact
- **Perceptual Separation**: Clear spatial isolation between dedicated WFC brands (clustered tightly around functional utilities) and lifestyle cafes (clustered on visual aesthetics and menu novelty).
- **Actionable Strategy**: Identified an underserved "hybrid niche"—quiet productive spaces with artisanal specialty coffee—representing an open market expansion opportunity.

### 6. Artifacts & Deliverables
- 📓 **Primary Analysis Notebook**: `Bogor Coffee Wars Mengungkap Peta Persaingan Segmen Work From Cafe vs Lifestyle Menggunakan Analisis Data Ulasan Google Maps.ipynb`
- 📓 **Text Analysis Notebook**: `Text Analysis.ipynb`
- 💾 **MDS Distance Matrix Dataset**: `MDS Final.xlsx`
- 💾 **Sentiment Results Dataset**: `Hasil Sentimen Analysis Final.xlsx`
- 🖼️ **2D Perceptual Map**: `Hasil_MDS_CoffeeShop.png`

---

## 🇮🇩 Versi Bahasa Indonesia

### 📌 Ringkasan Eksekutif
- **Tujuan**: Memetakan persepsi konsumen dan diferensiasi persaingan antara segmen *Work-From-Cafe* (WFC) dan *Lifestyle Coffee Shop* di Kota Bogor.
- **Metodologi**: Melakukan *scraping* ulasan Google Maps, menerapkan *Natural Language Processing* (NLP) untuk analisis sentimen Bahasa Indonesia, dan memodelkan peta persepsi menggunakan *2D Multidimensional Scaling* (MDS).
- **Hasil Utama**: Mengidentifikasi pemisahan klaster yang jelas: kafe WFC bersaing ketat pada keandalan Wi-Fi, colokan listrik, dan ketenangan, sementara kafe gaya hidup unggul pada estetika visual dan variasi menu.
- **Luaran Proyek**: *Jupyter Notebook* lengkap, dataset analisis teks & sentimen, matriks jarak MDS, dan visualisasi peta persepsi 2D.

### 1. Latar Belakang & Masalah
Pertumbuhan kedai kopi di Kota Bogor mengalami saturasi tinggi, membagi konsumen ke dalam dua preferensi utama: pekerja *remote*/mahasiswa yang membutuhkan tempat WFC produktif, serta pengunjung sosial yang mencari suasana estetis untuk berkumpul. Banyak pemilik kafe kesulitan memposisikan mereknya secara tegas, sehingga konsep ruang dan strategi pemasaran menjadi tidak fokus.

### 2. Urgensi
Tingginya biaya sewa lokasi menuntut pemilik bisnis memahami atribut apa yang paling menentukan kepuasan segmen sasarannya sebelum mengalokasikan modal untuk renovasi interior atau fasilitas kerja.

### 3. Pengumpulan Data & Sumber
- **Sumber Data**: Ulasan teks ulasan dan rating bintang 1–5 hasil *scraping* Google Maps pada kedai kopi terkemuka di Kota Bogor.
- **Atribut yang Dianalisis**: Kecepatan Wi-Fi, ketersediaan colokan listrik, tingkat kebisingan (*ambience*), kenyamanan tempat duduk, rasa kopi, dan keterjangkauan harga.
- **Pra-pemrosesan Teks**: Pembersihan *noise*, *stopword removal* Bahasa Indonesia, normalisasi bahasa gaul/singkatan, dan pelabelan sentimen.

### 4. Metodologi
1. **Pemrosesan Bahasa Alami (NLP)**: Ekstraksi frekuensi kata kunci aspek dan kalkulasi skor polaritas sentimen ulasan pengunjung.
2. **Matriks Ketidaksamaan (*Dissimilarity Matrix*)**: Menghitung jarak Euclidean antar-kafe berdasarkan profil sentimen atribut layanan.
3. **Multidimensional Scaling 2D**: Mereduksi dimensi matriks jarak ke dalam ruang koordinat 2 dimensi dengan menjaga nilai *Stress* Kruskal tetap rendah ($S < 0.10$).
4. **Interpretasi Sumbu Perseptual**: Mengidentifikasi sumbu horizontal (Fungsional WFC vs Rekreasi Sosial) dan sumbu vertikal (Ekonomis vs Premium).

### 5. Hasil & Dampak Bisnis
- **Peta Posisi Pasar**: Terpetakannya posisi masing-masing kafe secara objektif, memperlihatkan klaster kafe yang kuat untuk kerja vs kafe yang hanya diminati untuk foto/nongkrong.
- **Peluang Pasar Baru**: Ditemukannya *gap* pasar pada segmen *hybrid*—kafe dengan fasilitas kerja yang tenang namun tetap menyajikan kopi *specialty* berkualitas tinggi.

### 6. Luaran Proyek & Artefak
- 📓 **Notebook Analisis Utama**: `Bogor Coffee Wars Mengungkap Peta Persaingan Segmen Work From Cafe vs Lifestyle Menggunakan Analisis Data Ulasan Google Maps.ipynb`
- 📓 **Notebook Pemrosesan Teks**: `Text Analysis.ipynb`
- 💾 **Dataset Matriks Jarak MDS**: `MDS Final.xlsx`
- 💾 **Dataset Hasil Sentimen**: `Hasil Sentimen Analysis Final.xlsx`
- 🖼️ **Visualisasi Peta Persepsi 2D**: `Hasil_MDS_CoffeeShop.png`

---
