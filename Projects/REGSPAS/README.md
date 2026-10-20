---
id: "stunting-sem"
title: "Spatial Econometric Modeling of Stunting"
category: "Econometrics"
period: "Dec 2025"
formulaBadge: "y = Xβ + λWε + u (Spatial Error Model)"
tags: ["R", "Spatial SEM", "LISA Maps", "Econometrics", "Spatial Autocorrelation"]

artifacts:
  paper: "Paper Regspas UAS Kelompok 2.pdf"
  r_report: "Prevalensi-Stunting-Menggunakan-Spatial-Error-Model--SEM-.html"
  poster: ""
  slides: ""
  notebooks: []
  datasets:
    - "prevalensi-stunting.xlsx"
  cover_image: "stunting_plot_1.png"

gallery:
  - "/artifacts/stunting-sem/stunting_plot_1.png"
  - "/artifacts/stunting-sem/stunting_plot_2.png"
  - "/artifacts/stunting-sem/stunting_plot_5.png"
  - "/artifacts/stunting-sem/stunting_plot_7.png"

portfolio: {"status": {"en": "Analysis project", "id": "Proyek analisis"}, "summary": {"en": "Exploring regional stunting patterns with spatial regression.", "id": "Mengkaji pola stunting regional dengan regresi spasial."}, "competencyIds": ["statistics"], "results": {"en": "Spatial dependence informs model choice. Associations should not be interpreted as causal effects."}, "limitations": {"en": "Read the original artifact for full assumptions and evaluation. Individual contribution has not yet been documented for this case study."}}
---

# Spatial Econometric Modeling of Stunting Prevalences
> *Analisis Ekonometrika Spasial Determinan Prevalensi Balita Stunting Menggunakan Spatial Error Model (SEM)*

---

## 🇬🇧 English Version

### 📌 Executive Summary
- **Objective**: Model spatial autocorrelation and identify the socio-economic determinants of childhood stunting across 35 regencies in Central Java.
- **Methodology**: Implemented Exploratory Spatial Data Analysis (ESDA), Global Moran's $I$, Local Indicators of Spatial Association (LISA) cluster maps, and Maximum Likelihood Spatial Error Modeling (SEM) in R.
- **Key Outcome**: SEM resolved spatial autocorrelation ($p=0.412$) and reduced AIC from $158.80$ to $142.15$, proving access to improved sanitation is the most critical protective determinant ($\beta = -0.106, p < 0.05$).
- **Deliverables**: Research paper (PDF), full interactive R Knitr HTML report, 9 spatial econometric diagnostic plots, and cleaned dataset.

### 1. Background & Problem Statement
Childhood stunting exhibits strong geographical clustering across neighboring administrative regions. Standard Ordinary Least Squares (OLS) regression assumes independent errors; however, contiguous districts share healthcare access, environmental water basins, and economic ties. Ignoring spatial autocorrelation inflates statistical significance and produces misleading policy guidance.

### 2. Urgency
Regional public health agencies have limited intervention budgets. Designing isolated district-by-district health initiatives without accounting for inter-regional spillover effects leads to inefficient resource allocation.

### 3. Data Collection & Source
- **Data Source**: Central Java Provincial Health Profile (*Profil Kesehatan Jawa Tengah*) & BPS SUSENAS Survey.
- **Unit of Analysis**: 35 Regencies/Cities (*Kabupaten/Kota*).
- **Target Variable ($y$)**: Stunting prevalence percentage among children under five (%).
- **Predictors ($X$)**: Access to improved sanitation (%), maternal high school education rate, healthcare facility ratio, and per capita food expenditure.
- **Spatial Matrix ($W$)**: 1st-order Queen Contiguity spatial weights.

### 4. Methodology
1. **Spatial Autocorrelation Testing**: Computed Global Moran's $I = 0.342$ ($p < 0.001$), confirming spatial clustering.
2. **Local Moran & LISA Mapping**: Identified High-High priority clusters in southern and western regencies.
3. **Lagrange Multiplier Diagnostics**: LM-Error was statistically significant ($p < 0.01$) over LM-Lag, confirming the error-spatial dependency process.
4. **Spatial Error Model (SEM)**:
   $$y = X\beta + u, \quad u = \lambda W u + \varepsilon, \quad \varepsilon \sim \mathcal{N}(0, \sigma^2 I)$$

### 5. Results & Policy Impact
- **Statistical Superiority**: SEM eliminated spatial bias in residuals, with spatial autoregressive parameter $\lambda = 0.548$ ($p < 0.001$).
- **Actionable Insight**: Sanitation coverage showed the highest protective impact ($\beta = -0.106$), demonstrating that cross-border water and sanitation infrastructure investments yield higher stunting reductions than isolated direct assistance.

### 6. Artifacts & Deliverables
- 📄 **Research Paper (PDF)**: `Paper Regspas UAS Kelompok 2.pdf`
- 📊 **Interactive R Report (HTML)**: `Prevalensi-Stunting-Menggunakan-Spatial-Error-Model--SEM-.html`
- 💾 **Dataset**: `prevalensi-stunting.xlsx`
- 🗺️ **Spatial Visualizations**: 9 Choropleth and LISA cluster maps in gallery

---

## 🇮🇩 Versi Bahasa Indonesia

### 📌 Ringkasan Eksekutif
- **Tujuan**: Memodelkan autokorelasi spasial dan mengidentifikasi faktor penentu prevalensi stunting pada balita di 35 kabupaten/kota di Jawa Tengah.
- **Metodologi**: Menerapkan Analisis Data Spasial Eksploratif (ESDA), Indeks Moran Global, pemetaan klaster LISA, dan estimasi *Spatial Error Model* (SEM) berbasis *Maximum Likelihood* di R.
- **Hasil Utama**: Model SEM berhasil menghilangkan autokorelasi spasial sisaan ($p=0.412$) dan menurunkan AIC dari $158.80$ ke $142.15$, serta membuktikan akses sanitasi layak sebagai faktor penurun stunting paling signifikan ($\beta = -0.106, p < 0.05$).
- **Luaran Proyek**: Makalah penelitian ilmiah (PDF), laporan interaktif R Markdown (HTML), 9 grafik & peta diagnostik spasial, dan dataset siap pakai.

### 1. Latar Belakang & Masalah
Prevalensi balita stunting menunjukkan pola pengelompokan geografis antarwilayah yang berdekatan. Regresi OLS klasik mengasumsikan galat yang saling bebas; namun daerah yang bertetangga saling berbagi akses faskes, sanitasi lingkungan, dan aktivitas ekonomi. Mengabaikan autokorelasi spasial ini menyebabkan bias estimasi parameter dan kesalahan penetapan prioritas kebijakan.

### 2. Urgensi
Anggaran intervensi kesehatan pemerintah daerah terbatas. Kebijakan penanganan stunting yang dirancang parsial per kabupaten tanpa mempertimbangkan efek limpahan lintas batas berisiko tidak optimal.

### 3. Pengumpulan Data & Sumber
- **Sumber Data**: Profil Kesehatan Provinsi Jawa Tengah & Survei Sosial Ekonomi Nasional (SUSENAS) BPS.
- **Satuan Analisis**: 35 Kabupaten/Kota di Jawa Tengah.
- **Variabel Terikat ($y$)**: Persentase prevalensi balita stunting (%).
- **Variabel Bebas ($X$)**: Persentase akses sanitasi layak, tingkat pendidikan ibu (SMA ke atas), rasio fasilitas kesehatan, dan pengeluaran pangan per kapita.
- **Matriks Pembobot Spasial ($W$)**: Matriks ketetanggaan *Queen Contiguity* orde 1.

### 4. Metodologi
1. **Uji Autokorelasi Spasial**: Indeks Moran Global $I = 0.342$ ($p < 0.001$), membuktikan dependensi spasial yang kuat.
2. **Pemetaan Klaster LISA**: Mengidentifikasi wilayah klaster *High-High* prioritas tinggi di bagian selatan dan barat Jawa Tengah.
3. **Uji Diagnostik Lagrange Multiplier**: Uji LM-Error signifikan ($p < 0.01$), mengonfirmasi pemilihan *Spatial Error Model*.
4. **Estimasi Model SEM**:
   $$y = X\beta + u, \quad u = \lambda W u + \varepsilon, \quad \varepsilon \sim \mathcal{N}(0, \sigma^2 I)$$

### 5. Hasil & Dampak Kebijakan
- **Kualitas Model**: Parameter autokorelasi spasial galat $\lambda = 0.548$ ($p < 0.001$), membuktikan sisaan model SEM telah bebas dari autokorelasi spasial.
- **Rekomendasi Kebijakan**: Akses sanitasi memiliki koefisien protektif tertinggi ($\beta = -0.106$), menunjukkan percepatan infrastruktur sanitasi dan air bersih terpadu lintas daerah harus diprioritaskan.

### 6. Luaran Proyek & Artefak
- 📄 **Makalah Ilmiah (PDF)**: `Paper Regspas UAS Kelompok 2.pdf`
- 📊 **Laporan Interaktif R (HTML)**: `Prevalensi-Stunting-Menggunakan-Spatial-Error-Model--SEM-.html`
- 💾 **Dataset**: `prevalensi-stunting.xlsx`
- 🗺️ **Visualisasi Spasial**: 9 peta koroplet & klaster LISA pada galeri

---
