---
id: "deka"
title: "Centralized Normative Database & Benchmarking Platform"
category: "BI & Analytics"
period: "June 2026"
formulaBadge: "ETL & Norm(TB/T2B/P75)"
tags: ["Python", "Streamlit", "SQL ETL", "Statistical Norms", "SQLite"]
githubUrl: "https://github.com/aldennabil/market-research-analytics-platform"
demoUrl: "https://survey-norm.streamlit.app/"

artifacts:
  paper: ""
  r_report: ""
  poster: ""
  slides: ""
  notebooks: []
  datasets: []
  cover_image: "Photo 1.jpg"

gallery:
  - "/artifacts/deka/Photo 1.jpg"
  - "/artifacts/deka/Photo 2.jpg"
  - "/artifacts/deka/Photo 3.jpg"
  - "/artifacts/deka/Foto bareng.jpeg"

portfolio: {"spotlightOrder": 2, "status": {"en": "Collaborative analytics project", "id": "Proyek analitik kolaboratif"}, "summary": {"en": "From scattered surveys to one benchmarking workflow.", "id": "Dari survei terpisah menjadi satu alur benchmarking."}, "competencyIds": ["etl", "bi"], "contribution": {"en": "I led stakeholder discussions and work allocation, and implemented the dashboard and ETL workflow.", "id": "Saya memimpin diskusi pemangku kepentingan dan pembagian tugas, serta mengimplementasikan dashboard dan alur ETL."}, "teamContribution": {"en": "A teammate handled exploration, analytical visualizations, data cleaning and database insertion.", "id": "Rekan tim menangani eksplorasi, visualisasi analitis, pembersihan data, dan pemasukan ke database."}, "problem": {"en": "Separate survey workbooks made cross-project comparison difficult.", "id": "Workbook survei yang terpisah menyulitkan perbandingan antarproyek."}, "methodology": {"en": "The team consolidated survey records into a SQLite-backed application with a Streamlit interface and normative comparisons.", "id": "Tim menyatukan data survei dalam aplikasi berbasis SQLite, antarmuka Streamlit, dan perbandingan normatif."}, "results": {"en": "A single interface for finding historical norms and comparing survey results.", "id": "Satu antarmuka untuk mencari norma historis dan membandingkan hasil survei."}, "limitations": {"en": "The manual workflow was estimated at approximately four hours; no measured before/after timing is available. Cross-scale comparisons depend on comparable survey constructs.", "id": "Alur manual diperkirakan sekitar empat jam; belum ada pengukuran waktu sebelum dan sesudah. Perbandingan lintas skala bergantung pada kesetaraan konstruk survei."}, "caption": {"en": "Project presentation: the benchmarking workflow and expected benefits.", "id": "Presentasi proyek: alur benchmarking dan manfaat yang diharapkan."}, "image": "/images/projects/spotlight-deka.jpg"}
---

# Deka Insight – Centralized Normative Database System
> *Sistem Basis Data Normatif Terpusat & Platform Komparator Riset Pasar*

---

## 🇬🇧 English Version

### 📌 Executive Summary
- **Objective**: Consolidate 17 historical market research sensory survey datasets (8,800+ respondents) across disparate Excel spreadsheets into a unified relational database with automated benchmarking.
- **Methodology**: Engineered an automated Python/SQLite ETL pipeline with strict schema validation rules, algorithmic norm calculation engine (Top-Box TB/T2B/T3B, percentiles P25/P50/P75/P90, mean scores), and an interactive Streamlit UI.
- **Key Outcome**: Eliminated manual cross-workbook analysis, enabling instant 1-click product benchmarking against historical category norms for non-technical research executives.
- **Deliverables**: Production-grade Streamlit web dashboard, automated ingestion & backup pipeline, SQLite database schema, and complete documentation.

### 1. Background & Problem Statement
Market research agencies conduct dozens of product sensory and concept tests annually. Historically, each survey project was stored in isolated multi-tab Excel workbooks with varying column naming conventions and Likert scales (3-point, 5-point, 7-point, 9-point). Research teams lacked a unified repository to evaluate whether a new prototype's score (e.g., 78% Top-2-Box) represented stellar performance or mediocre mediocrity relative to historical category benchmarks.

### 2. Urgency
Cross-project comparisons previously required hours of manual Excel wrangling, risking human formula errors and delaying client deliverable turnarounds. An automated normative engine was essential to provide real-time competitive positioning.

### 3. Data Collection & Source
- **Data Source**: 17 historical sensory & concept survey projects (8,800+ raw respondent records across FMCG categories).
- **Scale Types**: 3-point, 5-point JAR (Just-About-Right), 7-point, and 9-point Hedonic sensory scales.
- **Structure**: Automated schema mapping linking demographics, monadic product codes, attribute ratings, and purchase intent.

### 4. Methodology
1. **Automated ETL & Validation Pipeline**: Built validation logic checking for column structure integrity, value domain constraints, and automated raw backups before loading to SQLite.
2. **Norms Computation Engine**: Developed caching algorithms calculating parametric (Mean, Standard Deviation) and non-parametric (P10, P25, P50, P75, P90) cutoffs across category slices.
3. **Dynamic Product Comparator**: Algorithmic scoring classifying product test results against historical norms (e.g., Top Quartile, Par, Below Norm).
4. **Streamlit UI**: Multi-tab application featuring Database Overview, Norm Explorer, 1-Click Product Comparator, and Ingestion Portal.

### 5. Results & Business Impact
- **Operational Efficiency**: Reduced normative reporting turnaround from ~4 hours of manual spreadsheet assembly to sub-second interactive lookups.
- **Data Governance**: Enforced standardized variable dictionaries and relational integrity across 8,800+ respondent records.

### 6. Artifacts & Deliverables
- 🚀 **Live Dashboard**: [https://survey-norm.streamlit.app/](https://survey-norm.streamlit.app/)
- 💻 **Source Code**: [GitHub Repository](https://github.com/aldennabil/market-research-analytics-platform)
- 📸 **Team Photos**: Available in project gallery

---

## 🇮🇩 Versi Bahasa Indonesia

### 📌 Ringkasan Eksekutif
- **Tujuan**: Mengonsolidasikan 17 dataset survei riset pasar historis (8.800+ responden) dari berbagai *spreadsheet* Excel ke dalam basis data relasional terpusat dengan sistem pembandingan normatif otomatis.
- **Metodologi**: Mengembangkan *pipeline* ETL Python/SQLite otomatis dengan validasi skema ketat, *engine* kalkulasi norma statistik (Top-Box TB/T2B/T3B, persentil P25/P50/P75/P90, nilai rata-rata), dan dasbor interaktif Streamlit.
- **Hasil Utama**: Menghilangkan proses komparasi manual antar-file Excel, memungkinkan *benchmarking* produk baru secara instan terhadap norma kategori historis bagi tim *market research*.
- **Luaran Proyek**: Dasbor analitik web Streamlit, *pipeline* otomatisasi dan pencadangan data, skema database SQLite, dan dokumentasi sistem.

### 1. Latar Belakang & Masalah
Agensi riset pasar menjalankan puluhan proyek uji sensori dan konsep produk setiap tahunnya. Sebelumnya, data survei tersimpan secara terpisah dalam file Excel dengan penamaan kolom dan skala Likert yang berbeda (skala 3, 5, 7, dan 9 poin). Hal ini menyulitkan analis untuk mengetahui apakah skor suatu produk baru (misal 78% Top-2-Box) tergolong unggul atau di bawah rata-rata kategori tanpa melakukan kompilasi manual yang memakan waktu.

### 2. Urgensi
Penyusunan laporan *benchmarking* manual membutuhkan waktu berjam-jam dan rentan kesalahan perhitungan rumus, memperlambat pengiriman *insight* kepada klien. Dibutuhkan sistem norma terpusat yang mampu memberikan tolok ukur kinerja produk secara instan.

### 3. Pengumpulan Data & Sumber
- **Sumber Data**: 17 proyek survei uji sensori & konsep produk FMCG (8.800+ data responden riil).
- **Jenis Skala**: Skala Hedonik (1–9), Just-About-Right (JAR), dan skala kepuasan Likert multi-poin.
- **Struktur**: Pemetaan skema terstandarisasi yang menghubungkan demografi, kode produk monadik, penilaian atribut rasa/kemasan, dan intensi beli.

### 4. Metodologi
1. **Pipeline ETL & Validasi Otomatis**: Membangun modul validasi struktur file, pengecekan batas nilai skala, dan *auto-backup* sebelum data diimpor ke SQLite.
2. **Engine Kalkulasi Norma**: Menghitung metrik parametrik (Mean, SD) dan non-parametrik (P10, P25, P50, P75, P90) per kategori produk secara efisien.
3. **Komparator Produk Dinamis**: Algoritma klasifikasi kinerja produk terhadap *database* norma historis (*Top Performer*, *At Par*, *Below Norm*).
4. **Dasbor Streamlit**: Aplikasi analitik dengan 4 modul utama: *Database Overview*, *Norm Explorer*, *Product Comparator*, dan *Data Ingestion Portal*.

### 5. Hasil & Dampak Bisnis
- **Efisiensi Waktu**: Memangkas waktu komparasi performa produk dari ~4 jam menjadi hitungan detik.
- **Tata Kelola Data**: Standardisasi kamus data (*data dictionary*) dan integritas relasional untuk seluruh arsip survei perusahaan.

### 6. Luaran Proyek & Artefak
- 🚀 **Link Aplikasi Live**: [https://survey-norm.streamlit.app/](https://survey-norm.streamlit.app/)
- 💻 **Repositori Kode**: [GitHub Repository](https://github.com/aldennabil/market-research-analytics-platform)
- 📸 **Dokumentasi Tim**: Tersedia pada galeri proyek

---
