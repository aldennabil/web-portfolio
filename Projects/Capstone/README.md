---
id: "finsight"
title: "FinSight: Financial Risk & KPI Intelligence Platform"
category: "Financial Analytics"
period: "Capstone 2026"
formulaBadge: "Sharpe Ratio & Liquidity Risk Classifier"
tags: ["Python", "Streamlit", "Risk Analysis", "Financial Intelligence", "KPI Analytics"]
demoUrl: "https://finsight-dashboard-monitoring.streamlit.app"

artifacts:
  paper: "Finsight - Project Brief .pdf"
  r_report: ""
  poster: ""
  slides: "FinSight-Presentation.pdf"
  notebooks: []
  datasets: []
  cover_image: "Thumbnail DBS Finsight.png"
  extra:
    - label: "User Guide"
      file: "FinSight - Product User Guide.pdf"

gallery:
  - "/artifacts/finsight/Dashboard docum finsight-dashboard-monitoring.streamlit.app.png"
  - "/artifacts/finsight/Thumbnail DBS Finsight.png"

portfolio: {"spotlightOrder": 3, "status": {"en": "Collaborative capstone", "id": "Capstone kolaboratif"}, "summary": {"en": "Cleaning, clustering and presenting financial data.", "id": "Membersihkan, mengelompokkan, dan menyajikan data keuangan."}, "competencyIds": ["etl", "bi", "forecasting"], "contribution": {"en": "I implemented data cleaning, ETL, clustering and dashboard work with a multidisciplinary team.", "id": "Saya mengerjakan pembersihan data, ETL, clustering, dan dashboard bersama tim multidisiplin."}, "teamContribution": {"en": "Web development, AI engineering and other data-science components were shared across collaborators.", "id": "Pengembangan web, rekayasa AI, dan komponen data science lain dikerjakan bersama para kolaborator."}, "problem": {"en": "Financial records need a consistent analytical structure before patterns can be communicated clearly.", "id": "Data keuangan memerlukan struktur analitis yang konsisten sebelum polanya dapat dikomunikasikan dengan jelas."}, "methodology": {"en": "Data preparation and ETL supported clustering and a dashboard for reviewing financial indicators.", "id": "Persiapan data dan ETL mendukung clustering dan dashboard untuk meninjau indikator keuangan."}, "results": {"en": "An integrated dashboard connecting prepared data with interpretable analytical views.", "id": "Dashboard terintegrasi yang menghubungkan data siap olah dengan tampilan analitis yang dapat ditafsirkan."}, "limitations": {"en": "This is a collaborative capstone. Financial-model authorship and operational adoption are not claimed.", "id": "Ini merupakan capstone kolaboratif. Kepemilikan model finansial dan adopsi operasional tidak diklaim."}, "caption": {"en": "FinSight application dashboard.", "id": "Dashboard aplikasi FinSight."}, "image": "/images/projects/spotlight-finsight.jpg"}
---

# FinSight: Financial Risk & KPI Intelligence Platform
> *Platform Intelijen Finansial, Manajemen Risiko Likuiditas, dan Pemantauan KPI Interaktif*

---

## 🇬🇧 English Version

### 📌 Executive Summary
- **Objective**: Develop an enterprise-grade financial risk monitoring and KPI intelligence platform designed for corporate treasurers, SMEs, and financial analysts.
- **Methodology**: Engineered automated financial data ingestion pipelines, dynamic volatility estimation, Sharpe ratio risk grading, and multi-scenario liquidity stress-testing in Streamlit.
- **Key Outcome**: Delivered a multi-page interactive executive analytics dashboard with automated early-warning alerts for working capital distress and investment portfolio variance.
- **Deliverables**: Live web platform, executive presentation slide deck, comprehensive product user guide, and project technical brief.

### 1. Background & Problem Statement
Small-to-medium enterprises (SMEs) and financial analysts frequently rely on static, fragmented spreadsheets for cash flow forecasting and risk assessment. These legacy workflows lack real-time risk grading, dynamic liquidity sensitivity analysis, and automated KPI alert mechanisms, increasing vulnerability to market shocks and working capital insolvency.

### 2. Urgency
Rapid macroeconomic interest rate shifts and supply chain volatility demand proactive risk monitoring. Businesses without automated financial intelligence risk delayed decision-making during liquidity crunches.

### 3. Data Collection & Source
- **Data Source**: Corporate balance sheets, income statements, cash flow statements, and historical market volatility series.
- **Financial Metrics**: Current Ratio, Quick Ratio, Debt-to-Equity (D/E), Operating Cash Flow margins, Value at Risk (VaR), and Sharpe Ratios.
- **Data Engine**: Automated Python data ingestion, validation, and time-series aggregation pipeline.

### 4. Methodology
1. **Financial Health Scoring**: Developed rule-based and ratio-based algorithmic scoring to classify liquidity risk into actionable tiers (Low, Moderate, High Risk).
2. **Dynamic Volatility & Portfolio Risk**: Modeled rolling Sharpe ratios and asset drawdowns for investment portfolio oversight.
3. **Interactive Scenario Modeling**: Implemented parametric sensitivity sliders enabling users to stress-test revenue shocks against fixed cost obligations.
4. **Streamlit Multi-Page UI**: Architected dedicated modules for Financial Summary, Cash Flow Analytics, Risk Grade Classification, and Executive KPI Reporting.

### 5. Results & Business Impact
- **Decision Speed**: Enabled instantaneous financial ratio diagnosis and risk categorization without manual spreadsheet formula maintenance.
- **Executive Clarity**: Provided non-technical C-suite stakeholders with intuitive visual risk radars and exportable presentation-ready reporting suites.

### 6. Artifacts & Deliverables
- 🚀 **Live Monitoring Platform**: [https://finsight-dashboard-monitoring.streamlit.app](https://finsight-dashboard-monitoring.streamlit.app)
- 📑 **Executive Presentation (PDF)**: `FinSight-Presentation.pdf`
- 📄 **Project Technical Brief (PDF)**: `Finsight - Project Brief .pdf`
- 📘 **Product User Guide (PDF)**: `FinSight - Product User Guide.pdf`

---

## 🇮🇩 Versi Bahasa Indonesia

### 📌 Ringkasan Eksekutif
- **Tujuan**: Membangun platform intelijen finansial dan pemantauan risiko likuiditas tingkat *enterprise* untuk analis keuangan, manajemen perusahaan, dan UMKM.
- **Metodologi**: Mengembangkan *pipeline* otomatisasi data keuangan, estimasi volatilitas dinamis, klasifikasi risiko berbasis Sharpe Ratio, serta simulasi *stress-testing* likuiditas interaktif di Streamlit.
- **Hasil Utama**: Menghasilkan dasbor eksekutif multi-halaman dengan sistem peringatan dini otomatis untuk potensi krisis modal kerja dan deviasi portofolio investasi.
- **Luaran Proyek**: Aplikasi dasbor *live*, dokumen presentasi eksekutif, panduan pengguna (*user guide*), dan ringkasan teknis proyek.

### 1. Latar Belakang & Masalah
Banyak perusahaan dan pelaku usaha masih mengandalkan file Excel statis yang terpisah-pisah untuk memproyeksikan arus kas dan menilai risiko keuangan. Alur kerja manual ini tidak memiliki penilaian risiko *real-time*, analisis sensitivitas likuiditas dinamis, dan sistem peringatan KPI otomatis, sehingga rentan terhadap guncangan pasar dan kebangkrutan modal kerja.

### 2. Urgensi
Perubahan suku bunga makroekonomi dan volatilitas pasar menuntut pemantauan risiko yang proaktif. Organisasi tanpa sistem intelijen keuangan otomatis berisiko terlambat mengambil keputusan krusial saat terjadi krisis likuiditas.

### 3. Pengumpulan Data & Sumber
- **Sumber Data**: Laporan posisi keuangan (neraca), laporan laba rugi, arus kas perusahaan, serta data historis pasar.
- **Metrik Keuangan**: Rasio Lancar (*Current Ratio*), Rasio Cepat (*Quick Ratio*), *Debt-to-Equity* (D/E), margin arus kas operasional, *Value at Risk* (VaR), dan *Sharpe Ratio*.
- **Pemrosesan Data**: *Pipeline* Python untuk standarisasi, validasi data, dan agregasi deret waktu finansial.

### 4. Metodologi
1. **Skoring Kesehatan Finansial**: Membangun algoritma penentuan tingkat risiko likuiditas ke dalam kategori terukur (*Low*, *Moderate*, *High Risk*).
2. **Volatilitas Dinamis & Risiko Portofolio**: Memodelkan rasio Sharpe bergulir dan *maximum drawdown* untuk pemantauan aset investasi.
3. **Simulasi Skenario Interaktif**: Fitur *stress-test* parameter dinamis untuk menguji ketahanan kas terhadap penurunan pendapatan vs beban tetap.
4. **Arsitektur Dasbor Streamlit**: Modul terstruktur mencakup *Executive Summary*, *Cash Flow Breakdown*, *Risk Radar*, dan *Interactive KPI Forecasting*.

### 5. Hasil & Dampak Bisnis
- **Kecepatan Analisis**: Memungkinkan diagnosis kesehatan rasio keuangan dan klasifikasi risiko secara instan tanpa pengelolaan rumus manual di Excel.
- **Komunikasi Eksekutif**: Menyajikan visualisasi intuitif bagi pengambil keputusan dan manajemen puncak melalui laporan interaktif yang siap dipresentasikan.

### 6. Luaran Proyek & Artefak
- 🚀 **Link Aplikasi Live**: [https://finsight-dashboard-monitoring.streamlit.app](https://finsight-dashboard-monitoring.streamlit.app)
- 📑 **Presentasi Proyek (PDF)**: `FinSight-Presentation.pdf`
- 📄 **Ringkasan Teknis (PDF)**: `Finsight - Project Brief .pdf`
- 📘 **Buku Panduan Pengguna (PDF)**: `FinSight - Product User Guide.pdf`

---
