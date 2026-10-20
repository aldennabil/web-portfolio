---
id: "gsmarena-psd"
title: "Smartphone Market Scraping & Price Modeling"
category: "BI & Analytics"
period: "Sep 2025"
formulaBadge: "Web Scraping + R Regression (n=500+ SKUs)"
tags: ["Python", "R", "Web Scraping", "Data Cleaning", "Regression", "Market Analysis"]

artifacts:
  paper: ""
  r_report: "Code.html"
  poster: "Poster UTS.pdf"
  slides: ""
  notebooks:
    - "Scraper.ipynb"
    - "Shopee Scraper.ipynb"
  datasets:
    - "cleaned.csv"
  cover_image: "Poster UTS.png"

gallery:
  - "/artifacts/gsmarena-psd/Poster UTS.png"
  - "/artifacts/gsmarena-psd/plot_Code_9.png"
  - "/artifacts/gsmarena-psd/plot_Code_10.png"
  - "/artifacts/gsmarena-psd/plot_Code_11.png"

portfolio: {"status": {"en": "Analysis project", "id": "Proyek analisis"}, "summary": {"en": "Collecting smartphone specifications for price analysis.", "id": "Mengumpulkan spesifikasi smartphone untuk analisis harga."}, "competencyIds": ["etl", "statistics"], "results": {"en": "Web scraping and regression connect collected specifications with exploratory price analysis."}, "limitations": {"en": "Read the original artifact for full assumptions and evaluation. Individual contribution has not yet been documented for this case study."}}
---

# Smartphone Market Scraping & Price Modeling
> *Pengumpulan dan Pemodelan Data Spesifikasi & Harga Smartphone dari GSMArena dan Shopee*

---

## 🇬🇧 English Version

### 📌 Executive Summary
- **Objective**: Scrape smartphone technical specifications from GSMArena and market prices from Shopee, then model the relationship between hardware specs and retail pricing using regression analysis in R.
- **Methodology**: Built Python web scrapers for GSMArena (specs: processor node, RAM, storage, display size, battery, camera) and Shopee (retail price), cleaned and merged multi-source data, then applied regression diagnostics and stepwise modeling in R.
- **Key Outcome**: Identified RAM, processor lithography node (nm), and internal storage as the three strongest determinants of smartphone retail price; delivered a research poster and interactive R diagnostic report.
- **Deliverables**: Python scraper notebooks, cleaned merged dataset (`cleaned.csv`), interactive R HTML report, and UTS research poster.

### 1. Background & Problem Statement
Smartphone pricing in the Indonesian market is determined by a complex interplay of hardware specifications, brand premium, and market positioning. Understanding which technical features most drive retail price enables data-driven purchasing recommendations and competitive brand positioning analysis.

### 2. Urgency
Indonesian consumers spend significant income on smartphones without systematic price-spec benchmarking tools. Retailers and brands also lack quantitative evidence of which hardware improvements command the greatest price premiums.

### 3. Data Collection & Source
- **GSMArena Scraper**: Python (`Scraper.ipynb`) — scraped 500+ Samsung smartphones: processor nm node, RAM, internal storage, display size, battery capacity, primary camera MP.
- **Shopee Scraper**: Python (`Shopee Scraper.ipynb`) — scraped corresponding market retail prices from Shopee Indonesia.
- **Merged Dataset**: `cleaned.csv` — GSMArena specs joined with Shopee retail prices on device model name.

### 4. Methodology
1. **Web Scraping**: Custom Python scrapers with HTML parsing (BeautifulSoup/requests) for both GSMArena spec tables and Shopee product listings.
2. **Data Cleaning**: Regex-based extraction of numeric specs from mixed-format strings (e.g., "8/128 GB", "6.7 inch"), storage unit normalization (GB/TB), and price standardization.
3. **Regression Analysis (R)**: Stepwise multiple linear regression; VIF diagnostics for multicollinearity; residual diagnostic plots; model interpretation.
4. **Visualization**: Distribution plots, price-spec scatter plots, and correlation heatmaps.

### 5. Results & Impact
- **Price Drivers**: RAM and processor nm node (lower nm = more premium) were the strongest predictors; storage capacity had a smaller incremental premium effect.
- **Model Fit**: Regression model explained a significant portion of retail price variance across Samsung SKUs.

### 6. Artifacts & Deliverables
- 📊 **Interactive R Report (HTML)**: `Code.html`
- 🖼️ **Research Poster (PDF/PNG)**: `Poster UTS.pdf` / `Poster UTS.png`
- 📓 **GSMArena Scraper**: `Scraper.ipynb`
- 📓 **Shopee Scraper**: `Shopee Scraper.ipynb`
- 💾 **Cleaned Dataset**: `cleaned.csv`

---

## 🇮🇩 Versi Bahasa Indonesia

### 📌 Ringkasan Eksekutif
- **Tujuan**: Mengumpulkan spesifikasi teknis smartphone dari GSMArena dan harga pasar dari Shopee, lalu memodelkan hubungan antara spesifikasi perangkat keras dan harga eceran menggunakan analisis regresi di R.
- **Metodologi**: Membangun *scraper* Python untuk GSMArena (spesifikasi: prosesor nm, RAM, penyimpanan, ukuran layar, baterai, kamera) dan Shopee (harga pasar), membersihkan dan menggabungkan data multisumber, lalu menerapkan diagnostik regresi dan pemodelan stepwise di R.
- **Hasil Utama**: RAM, node litografi prosesor (nm), dan kapasitas penyimpanan internal teridentifikasi sebagai tiga penentu terkuat harga eceran smartphone; disertai poster penelitian dan laporan diagnostik R interaktif.
- **Luaran Proyek**: Notebook scraper Python, dataset gabungan bersih (`cleaned.csv`), laporan R HTML interaktif, dan poster penelitian UTS.

### 1. Latar Belakang & Masalah
Penetapan harga smartphone di pasar Indonesia dipengaruhi oleh kombinasi kompleks spesifikasi perangkat keras, premi merek, dan positioning pasar. Memahami fitur teknis mana yang paling mendorong harga eceran memungkinkan rekomendasi pembelian berbasis data dan analisis positioning merek yang kompetitif.

### 2. Urgensi
Konsumen Indonesia menghabiskan porsi pendapatan yang signifikan untuk smartphone tanpa alat *benchmarking* harga-spesifikasi yang sistematis. Pengecer dan merek juga kekurangan bukti kuantitatif tentang peningkatan perangkat keras mana yang memberikan premi harga terbesar.

### 3. Pengumpulan Data & Sumber
- **Scraper GSMArena**: Python (`Scraper.ipynb`) — scraping 500+ smartphone Samsung: nm prosesor, RAM, penyimpanan, ukuran layar, kapasitas baterai, MP kamera utama.
- **Scraper Shopee**: Python (`Shopee Scraper.ipynb`) — scraping harga eceran pasar dari Shopee Indonesia.
- **Dataset Gabungan**: `cleaned.csv` — spesifikasi GSMArena digabung dengan harga Shopee berdasarkan nama model.

### 4. Metodologi
1. **Web Scraping**: Scraper Python kustom dengan parsing HTML untuk tabel spesifikasi GSMArena dan listing produk Shopee.
2. **Pembersihan Data**: Ekstraksi numerik berbasis regex dari string format campuran (mis. "8/128 GB", "6.7 inci"), normalisasi satuan penyimpanan, dan standardisasi harga.
3. **Analisis Regresi (R)**: Regresi linier berganda stepwise; diagnostik VIF untuk multikolinearitas; plot diagnostik sisaan; interpretasi model.
4. **Visualisasi**: Plot distribusi, *scatter plot* harga-spesifikasi, dan *heatmap* korelasi.

### 5. Hasil & Dampak
- **Pendorong Harga**: RAM dan nm prosesor (nm lebih rendah = lebih premium) adalah prediktor terkuat; kapasitas penyimpanan memiliki efek premi inkremental yang lebih kecil.
- **Kecocokan Model**: Model regresi menjelaskan proporsi signifikan dari variansi harga eceran antar-SKU Samsung.

### 6. Luaran Proyek & Artefak
- 📊 **Laporan R Interaktif (HTML)**: `Code.html`
- 🖼️ **Poster Penelitian (PDF/PNG)**: `Poster UTS.pdf` / `Poster UTS.png`
- 📓 **Scraper GSMArena**: `Scraper.ipynb`
- 📓 **Scraper Shopee**: `Shopee Scraper.ipynb`
- 💾 **Dataset Bersih**: `cleaned.csv`

---
