---
id: "susenas"
title: "West Java Food Spending & Nutrition Dashboard"
category: "BI & Analytics"
period: "May 2025"
formulaBadge: "Susenas Big Data (125k+ rows)"
tags: ["Python", "R", "SUSENAS", "ETL", "Survey Analytics", "Data Visualization"]

artifacts:
  paper: ""
  r_report: ""
  poster: "Poster.pdf"
  slides: ""
  notebooks: []
  datasets:
    - "Data UAS Fixed.csv"
  cover_image: "Team.jpeg"

gallery:
  - "/artifacts/susenas/Poster.pdf"
  - "/artifacts/susenas/Team 2.jpeg"
  - "/artifacts/susenas/Team.jpeg"

portfolio: {"status": {"en": "Analysis project", "id": "Proyek analisis"}, "summary": {"en": "Structuring household food-spending data for visual analysis.", "id": "Menata data belanja pangan rumah tangga untuk analisis visual."}, "competencyIds": ["bi", "etl"], "results": {"en": "An analytical dashboard supports comparison of household spending and nutrition indicators."}, "limitations": {"en": "Read the original artifact for full assumptions and evaluation. Individual contribution has not yet been documented for this case study."}}
---

# West Java Food Spending & Nutrition Dashboard
> *Analitik Pengeluaran Pangan dan Gizi Rumah Tangga Jawa Barat dari Data SUSENAS Besar*

---

## 🇬🇧 English Version

### 📌 Executive Summary
- **Objective**: Clean, structure, and visualize 125,000+ West Java household records from SUSENAS 2023 into an analytics dashboard for regional food spending and nutritional vulnerability assessment.
- **Methodology**: Performed large-scale ETL on the SUSENAS survey master dataset — standardized variable coding, resolved schema inconsistencies, and structured a star-schema Fact & Dimension model for drill-down KPI analysis.
- **Key Outcome**: Delivered an interactive analytics dashboard with district-level breakdowns of food expenditure shares, nutritional intake proxies, and socio-economic household segmentation.
- **Deliverables**: Cleaned survey dataset (`Data UAS Fixed.csv`) and research poster (PDF).

### 1. Background & Problem Statement
West Java's SUSENAS 2023 survey data contains rich household-level spending, consumption, and socio-economic variables across 125,000+ respondents. However, raw SUSENAS output requires extensive recoding, variable harmonization, and schema design before it can support policy-relevant analytics on food insecurity or nutritional vulnerability.

### 2. Urgency
Regional nutrition and food insecurity patterns are invisible without standardized, analyzable data infrastructure. Policymakers require district-level household expenditure breakdowns to allocate social assistance programs and monitor progress toward SDG indicators.

### 3. Data Collection & Source
- **Data Source**: SUSENAS 2023 (Survei Sosial Ekonomi Nasional) — BPS Statistics Indonesia, West Java module.
- **Scale**: 125,000+ household respondent records.
- **Key Variables**: Total household expenditure, food expenditure breakdown by commodity group, calories/protein intake proxies, household composition, and socio-economic classification.

### 4. Methodology
1. **ETL Pipeline**: Standardized raw SUSENAS variable codes, merged sub-modules (consumption, expenditure, demographics), and applied domain-specific recoding.
2. **Star Schema Design**: Created Fact (household expenditure) and Dimension (region, time, household type) tables for structured KPI aggregation.
3. **Exploratory Analysis**: Distribution of food vs. non-food expenditure share, cross-tabulations by income decile and district.
4. **Dashboard Design**: Interactive KPI visualizations with filters by region, household type, and expenditure category.

### 5. Results & Impact
- **Policy Insight**: Identified districts with food expenditure shares >70% of total household budget — a key food insecurity proxy — and mapped them against regional poverty indicators.
- **Data Infrastructure**: Produced a reusable cleaned dataset enabling future longitudinal comparative analyses.

### 6. Artifacts & Deliverables
- 🖼️ **Research Poster (PDF)**: `Poster.pdf`
- 💾 **Cleaned Survey Dataset**: `Data UAS Fixed.csv`

---

## 🇮🇩 Versi Bahasa Indonesia

### 📌 Ringkasan Eksekutif
- **Tujuan**: Membersihkan, menyusun, dan memvisualisasikan 125.000+ catatan rumah tangga Jawa Barat dari SUSENAS 2023 menjadi dasbor analitik untuk penilaian pengeluaran pangan dan kerentanan gizi regional.
- **Metodologi**: ETL skala besar pada dataset master survei SUSENAS — standardisasi kode variabel, penyelesaian inkonsistensi skema, dan penyusunan model *star-schema* untuk analisis KPI *drill-down*.
- **Hasil Utama**: Dasbor analitik interaktif dengan rincian tingkat kabupaten untuk pangsa pengeluaran pangan, proksi asupan gizi, dan segmentasi sosial-ekonomi rumah tangga.
- **Luaran Proyek**: Dataset survei bersih (`Data UAS Fixed.csv`) dan poster penelitian (PDF).

### 1. Latar Belakang & Masalah
Data SUSENAS 2023 Jawa Barat mencakup 125.000+ responden rumah tangga dengan variabel pengeluaran, konsumsi, dan sosial-ekonomi yang kaya. Namun data mentah SUSENAS memerlukan *recoding*, harmonisasi variabel, dan desain skema yang ekstensif sebelum dapat mendukung analitik kebijakan terkait ketahanan pangan atau kerentanan gizi.

### 2. Urgensi
Pola gizi dan ketahanan pangan regional tidak terlihat tanpa infrastruktur data yang terstandarisasi dan dapat dianalisis. Pengambil kebijakan membutuhkan rincian pengeluaran rumah tangga tingkat kabupaten untuk mengalokasikan program bantuan sosial dan memantau indikator SDGs.

### 3. Pengumpulan Data & Sumber
- **Sumber Data**: SUSENAS 2023 (Survei Sosial Ekonomi Nasional) — BPS, modul Jawa Barat.
- **Skala**: 125.000+ rekaman responden rumah tangga.
- **Variabel Utama**: Total pengeluaran rumah tangga, rincian pengeluaran pangan per kelompok komoditas, proksi kalori/protein, komposisi keluarga, dan klasifikasi sosial-ekonomi.

### 4. Metodologi
1. **Pipeline ETL**: Standardisasi kode variabel SUSENAS mentah, penggabungan submodul (konsumsi, pengeluaran, demografi), dan *recoding* domain-spesifik.
2. **Desain Star Schema**: Tabel Fakta (pengeluaran RT) dan Dimensi (wilayah, waktu, tipe RT) untuk agregasi KPI terstruktur.
3. **Eksplorasi Analitik**: Distribusi pangsa pengeluaran pangan vs. non-pangan, tabulasi silang per desil pendapatan dan kabupaten.
4. **Desain Dasbor**: Visualisasi KPI interaktif dengan filter wilayah, tipe RT, dan kategori pengeluaran.

### 5. Hasil & Dampak
- **Insight Kebijakan**: Mengidentifikasi kabupaten dengan pangsa pengeluaran pangan >70% dari total anggaran RT — proksi utama ketahanan pangan — dan memetakannya terhadap indikator kemiskinan regional.
- **Infrastruktur Data**: Menghasilkan dataset bersih yang dapat digunakan kembali untuk analisis komparatif longitudinal ke depan.

### 6. Luaran Proyek & Artefak
- 🖼️ **Poster Penelitian (PDF)**: `Poster.pdf`
- 💾 **Dataset Survei Bersih**: `Data UAS Fixed.csv`

---
