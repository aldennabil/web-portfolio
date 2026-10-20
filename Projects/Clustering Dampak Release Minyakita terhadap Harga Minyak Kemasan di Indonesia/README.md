---
id: "minyakita"
title: "Minyakita Market Impact: Spatial Price Clustering"
category: "Decision Science & Risk"
period: "2024"
formulaBadge: "Spatial Price Dispersion (K-Means)"
tags: ["Python", "Geospatial", "K-Means Clustering", "Web Scraping", "Policy Analytics"]

artifacts:
  paper: ""
  r_report: ""
  poster: ""
  slides: ""
  notebooks:
    - "Clustering_Minyak.ipynb"
    - "G1401231088_Alden Nabil Wibowo Effendy_Tugas Akhir Individu.ipynb"
  datasets:
    - "Hasil Cluster.csv"
  cover_image: "Thumbnail Clustering Dampak Release Minyakita terhadap Harga Minyak Kemasan di Indonesia.jpg"

gallery:
  - "/artifacts/minyakita/Thumbnail Clustering Dampak Release Minyakita terhadap Harga Minyak Kemasan di Indonesia.jpg"
  - "/artifacts/minyakita/plot_Clustering_Minyak_1.png"
  - "/artifacts/minyakita/plot_Clustering_Minyak_2.png"
  - "/artifacts/minyakita/plot_Clustering_Minyak_4.png"
  - "/artifacts/minyakita/plot_G1401231088_Alden_Nabil_W_1.png"

portfolio: {"status": {"en": "Analysis project", "id": "Proyek analisis"}, "summary": {"en": "Mapping regional cooking-oil price patterns.", "id": "Memetakan pola harga minyak goreng regional."}, "competencyIds": ["bi", "statistics"], "results": {"en": "Spatial clustering supports descriptive comparison; it does not by itself establish a policy effect."}, "limitations": {"en": "Read the original artifact for full assumptions and evaluation. Individual contribution has not yet been documented for this case study."}}
---

# Minyakita Market Impact: Spatial Price Clustering
> *Analisis Klasterisasi Spasial Dampak Pelepasan Minyakita terhadap Harga Minyak Kemasan di Indonesia*

---

## 🇬🇧 English Version

### 📌 Executive Summary
- **Objective**: Evaluate the spatial price dispersion of packaged cooking oil across Indonesian regencies before and after Minyakita's subsidized release, using K-Means geospatial clustering.
- **Methodology**: Collected regional commodity price data, applied K-Means clustering on price level and volatility features, and visualized regional compliance and stabilization gaps via interactive choropleth maps.
- **Key Outcome**: Identified distinct regional clusters: markets where Minyakita effectively stabilized prices, partial-compliance zones, and high-dispersion non-responsive regions.
- **Deliverables**: Jupyter notebooks, processed cluster dataset (`Hasil Cluster.csv`), and interactive Folium/Leaflet HTML geospatial maps.

### 1. Background & Problem Statement
The Indonesian government launched Minyakita (subsidized cooking oil) in 2022 to curb cooking oil price inflation following post-pandemic supply chain disruptions and palm oil export restrictions. However, market stabilization effectiveness varied widely across regions due to distribution bottlenecks, retailer compliance gaps, and inter-island logistics costs.

### 2. Urgency
Cooking oil is a household staple for 270+ million Indonesians. Uneven price stabilization leaves vulnerable low-income communities in price-stressed regions without effective subsidy protection.

### 3. Data Collection & Source
- **Data Source**: National Strategic Food Price Information Center (PIHPS) and government commodity portals — regional packaged cooking oil prices across all Indonesian regencies.
- **Observation**: Pre/post-Minyakita price levels and variance across 500+ regencies/cities.
- **Features for Clustering**: Mean price level, price volatility (std deviation), price gap vs. national HET (Harga Eceran Tertinggi/ceiling price).

### 4. Methodology
1. **Data Collection & Cleaning**: Scraped and merged multi-source price data; handled missing values and regional code alignment.
2. **Feature Engineering**: Computed rolling mean price, price volatility index, and deviation from the government HET.
3. **K-Means Clustering**: Optimal cluster count selected via Elbow method and Silhouette score; applied on standardized features.
4. **Geospatial Visualization**: Rendered interactive Folium choropleth maps at both kabupaten/kota and provincial granularity.

### 5. Results & Impact
- **Cluster 1 (Compliant Markets)**: Regions where retail prices converged to ≤ HET after Minyakita release.
- **Cluster 2 (Partial Compliance)**: High-volatility regions with intermittent above-ceiling prices.
- **Cluster 3 (Non-Responsive)**: Remote/outer island markets with persistent price premiums above HET, indicating distribution failure.

### 6. Artifacts & Deliverables
- 📓 **Clustering Notebook**: `Clustering_Minyak.ipynb`
- 📓 **Individual Analysis Notebook**: `G1401231088_Alden Nabil Wibowo Effendy_Tugas Akhir Individu.ipynb`
- 💾 **Cluster Results Dataset**: `Hasil Cluster.csv`

---

## 🇮🇩 Versi Bahasa Indonesia

### 📌 Ringkasan Eksekutif
- **Tujuan**: Mengevaluasi dispersi harga minyak goreng kemasan secara spasial di seluruh kabupaten/kota Indonesia sebelum dan sesudah peluncuran Minyakita, menggunakan klasterisasi K-Means geospasial.
- **Metodologi**: Mengumpulkan data harga komoditas regional, menerapkan K-Means pada fitur tingkat harga dan volatilitas, serta memvisualisasikan kesenjangan kepatuhan dan stabilisasi melalui peta koroplet interaktif.
- **Hasil Utama**: Mengidentifikasi klaster pasar yang patuh, zona kepatuhan parsial, dan wilayah non-responsif dengan harga persisten di atas HET.
- **Luaran Proyek**: Notebook Jupyter, dataset klaster (`Hasil Cluster.csv`), dan peta HTML geospasial interaktif.

### 1. Latar Belakang & Masalah
Pemerintah Indonesia meluncurkan Minyakita (minyak goreng bersubsidi) pada 2022 untuk menekan inflasi harga minyak goreng pasca-pandemi dan restriksi ekspor CPO. Namun, efektivitas stabilisasi pasar sangat bervariasi antardaerah akibat hambatan distribusi, ketidakpatuhan pengecer, dan biaya logistik antarpulau.

### 2. Urgensi
Minyak goreng adalah kebutuhan pokok lebih dari 270 juta warga Indonesia. Stabilisasi harga yang tidak merata membiarkan komunitas berpenghasilan rendah di wilayah terdampak tanpa perlindungan subsidi yang efektif.

### 3. Pengumpulan Data & Sumber
- **Sumber Data**: PIHPS (Pusat Informasi Harga Pangan Strategis) dan portal komoditas pemerintah — harga minyak kemasan regional seluruh kabupaten/kota Indonesia.
- **Observasi**: Tingkat dan variansi harga pra/pasca-Minyakita di 500+ kabupaten/kota.
- **Fitur Klasterisasi**: Rata-rata harga, indeks volatilitas harga, dan deviasi dari HET pemerintah.

### 4. Metodologi
1. **Pengumpulan & Pembersihan Data**: *Scraping* dan penggabungan data harga multisumber; penanganan nilai hilang dan penyesuaian kode wilayah.
2. **Rekayasa Fitur**: Menghitung rata-rata harga bergulir, indeks volatilitas, dan selisih terhadap HET.
3. **K-Means Clustering**: Jumlah klaster optimal dipilih via metode *Elbow* dan skor *Silhouette*; diterapkan pada fitur terstandarisasi.
4. **Visualisasi Geospasial**: Peta koroplet Folium interaktif pada granularitas kabupaten/kota dan provinsi.

### 5. Hasil & Dampak
- **Klaster 1 (Pasar Patuh)**: Daerah dengan harga eceran yang konvergen ke ≤ HET setelah peluncuran Minyakita.
- **Klaster 2 (Kepatuhan Parsial)**: Daerah volatilitas tinggi dengan harga yang kadang melampaui HET.
- **Klaster 3 (Non-Responsif)**: Pasar terpencil/kepulauan terluar dengan premi harga persisten di atas HET, mengindikasikan kegagalan distribusi.

### 6. Luaran Proyek & Artefak
- 📓 **Notebook Klasterisasi**: `Clustering_Minyak.ipynb`
- 📓 **Notebook Analisis Individu**: `G1401231088_Alden Nabil Wibowo Effendy_Tugas Akhir Individu.ipynb`
- 💾 **Dataset Hasil Klaster**: `Hasil Cluster.csv`

---
