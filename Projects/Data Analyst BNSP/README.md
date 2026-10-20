---
id: "bnsp-da"
title: "BNSP Data Analyst Certification: AI Impact"
category: "BI & Analytics"
period: "2026"
formulaBadge: "BNSP Certified · 50k Student Records"
tags: ["Python", "Streamlit", "EDA", "Regression", "BI Dashboard", "Certification", "BNSP"]

artifacts:
  paper: ""
  r_report: ""
  poster: ""
  slides: ""
  notebooks: []
  datasets: []
  cover_image: ""

gallery:
  - "/artifacts/bnsp-da/Thumb Data Analyst BNSP.jpg"
  - "/artifacts/bnsp-da/Untitled Diagram.drawio (4).png"
  - "/artifacts/bnsp-da/plot_Analisis_AI_Mahasiswa_4.png"
  - "/artifacts/bnsp-da/plot_Analisis_AI_Mahasiswa_10.png"
  - "/artifacts/bnsp-da/visualisasi/1_distribusi_delta_ipk.png"
  - "/artifacts/bnsp-da/visualisasi/2_gpa_growth_by_ai_segment.png"
  - "/artifacts/bnsp-da/visualisasi/3_burnout_by_policy.png"
  - "/artifacts/bnsp-da/visualisasi/4_retention_vs_ai_dependency.png"

portfolio: {"status": {"en": "Analysis project", "id": "Proyek analisis"}, "summary": {"en": "Data-analysis work for a professional competency assessment.", "id": "Analisis data untuk asesmen kompetensi profesional."}, "competencyIds": ["bi", "statistics"], "results": {"en": "Explore the assessment context and available visual artifacts. Avoid interpreting observational comparisons as causal effects."}, "limitations": {"en": "Read the original artifact for full assumptions and evaluation. Individual contribution has not yet been documented for this case study."}}
---

# BNSP Data Analyst Certification: AI Impact on Student Academic Performance & Well-being
> *Sertifikasi Data Analyst BNSP: Dampak AI Generatif terhadap Performa Akademik dan Kesejahteraan Mahasiswa*

---

## 🇬🇧 English Version

### 📌 Executive Summary
- **Objective**: Conduct a full end-to-end data analysis project for the BNSP (Badan Nasional Sertifikasi Profesi) Data Analyst certification assessment — exploring how Generative AI usage affects GPA, burnout risk, and knowledge retention across 50,000 university students.
- **Methodology**: Completed a structured 3-day analytics workflow: business requirements definition, ETL/validation, EDA (11 visualizations), multiple linear regression, and a 5-page Streamlit Business Intelligence dashboard — presented to BNSP assessors.
- **Key Outcome**: Strong traditional study hours and intermediate prompt engineering skill emerged as the dominant positive GPA predictors; students under "Strictly Ban" AI policies showed higher exam anxiety than those under "Actively Encouraged" policies.
- **Deliverables**: Streamlit BI dashboard, analysis notebook, cleaned dataset, BRD, and full analysis report (BNSP certification requirements).

### 1. Background & Problem Statement
Universities and education consulting firms need evidence-based data to formulate AI governance policies. Unvalidated assumptions about GenAI's academic impact — either overly optimistic or pessimistic — can lead to ineffective or counterproductive campus policies affecting millions of students.

### 2. Urgency
The rapid adoption of GenAI tools (ChatGPT, Copilot, Gemini) in higher education has outpaced policy development. Institutions urgently require quantitative evidence to define appropriate usage guidelines, distinguish beneficial AI use from over-dependency, and identify vulnerable student profiles before burnout and GPA decline materialize.

### 3. Data Collection & Source
- **Data Source**: `ai_student_impact_dataset.csv` — 50,000 student records from diverse universities.
- **Cleaned Dataset**: `ai_student_clean.csv` — post-ETL with validated types, resolved anomalies, and imputed missing values.
- **Key Variables**: Post-semester GPA (target), Weekly GenAI hours (0–40h), AI dependency score, traditional study hours, institutional policy, burnout risk (Low/Medium/High), exam anxiety, skill retention score.

### 4. Methodology
1. **Business Requirements**: Defined 6 analytical questions for the education consulting firm's AI governance mandate.
2. **ETL & Data Validation**: Systematic cleaning pipeline — corrupt row removal, missing value treatment, outlier detection, type standardization — documented in `data_cleaning_log.txt`.
3. **EDA (11 visualizations)**: GPA distributions by AI intensity, burnout heatmaps, policy-anxiety cross-tabs, correlation heatmaps.
4. **Multiple Linear Regression**: Identified strongest GPA predictors; reported standardized coefficients and interpretation.
5. **BI Dashboard (Streamlit)**: 5 interactive pages — Overview, Segmentation, Policy Analysis, Subscription Equity, Regression findings — with KPI cards and drill-down filters.

### 5. Results & Impact
- **Top GPA Predictors**: Traditional study hours (β > 0) and intermediate prompt engineering skill were the strongest positive predictors; high AI dependency (β < 0) was negatively associated.
- **Policy Effect**: "Actively Encouraged" policy correlated with lower exam anxiety vs. "Strict Ban" — suggesting transparent guidance reduces anxiety more than prohibition.
- **Subscription Equity**: Premium AI subscribers showed marginally higher GPAs, indicating a potential digital equity concern.
- **Burnout Risk**: Heavy GenAI users (>25h/week) with low traditional study hours had the highest burnout risk profiles.
- **Certification**: Successfully passed BNSP Data Analyst assessment, demonstrating professional-level end-to-end analytics competency.

### 6. Artifacts & Deliverables
- 📊 **Streamlit Dashboard**: `dashboard.py` (interactive BI application)
- 📓 **Analysis Notebook**: `Analisis_AI_Mahasiswa.ipynb`
- 📄 **Business Requirement Document**: `Business Requirement Document.docx`
- 📄 **Analysis Report**: `Laporan Hasil Analisis.docx`
- 📄 **PPT Presentation**: `PPT.pdf`
- 💾 **Cleaned Dataset**: `ai_student_clean.csv`
- 🏆 **BNSP Certificate**: `Sertifikat Pelatihan BNSP SSMI 2026...pdf`

---

## 🇮🇩 Versi Bahasa Indonesia

### 📌 Ringkasan Eksekutif
- **Tujuan**: Melaksanakan proyek analisis data *end-to-end* untuk asesmen sertifikasi Data Analyst BNSP — mengeksplorasi dampak penggunaan AI Generatif terhadap IPK, risiko *burnout*, dan retensi pengetahuan pada 50.000 mahasiswa.
- **Metodologi**: Menyelesaikan alur kerja analitik 3 hari terstruktur: definisi kebutuhan bisnis, ETL/validasi, EDA (11 visualisasi), regresi linier berganda, dan dasbor BI Streamlit 5 halaman — dipresentasikan ke asesor BNSP.
- **Hasil Utama**: Jam belajar tradisional dan kemampuan *prompt engineering* tingkat menengah terbukti sebagai prediktor IPK positif terkuat; mahasiswa di bawah kebijakan "Strict Ban" menunjukkan kecemasan ujian lebih tinggi dibanding mahasiswa di bawah kebijakan "Actively Encouraged".
- **Luaran Proyek**: Dasbor BI Streamlit, notebook analisis, dataset bersih, BRD, dan laporan analisis lengkap (persyaratan sertifikasi BNSP).

### 1. Latar Belakang & Masalah
Universitas dan lembaga konsultan pendidikan membutuhkan data berbasis bukti untuk merumuskan kebijakan tata kelola AI. Asumsi yang tidak tervalidasi tentang dampak akademik GenAI dapat menghasilkan kebijakan kampus yang tidak efektif atau kontraproduktif.

### 2. Urgensi
Adopsi cepat tool GenAI (ChatGPT, Copilot, Gemini) di pendidikan tinggi telah melampaui kecepatan pengembangan kebijakan. Institusi membutuhkan bukti kuantitatif segera untuk mendefinisikan panduan penggunaan yang tepat, membedakan penggunaan AI yang bermanfaat dari ketergantungan berlebihan, dan mengidentifikasi profil mahasiswa yang rentan sebelum penurunan IPK dan *burnout* terjadi.

### 3. Pengumpulan Data & Sumber
- **Sumber Data**: `ai_student_impact_dataset.csv` — 50.000 rekaman mahasiswa dari berbagai universitas.
- **Dataset Bersih**: `ai_student_clean.csv` — pasca-ETL dengan tipe tervalidasi, anomali terselesaikan, dan nilai hilang terisi.
- **Variabel Utama**: IPK pasca-semester (target), jam/minggu GenAI (0–40j), skor ketergantungan AI, jam belajar tradisional, kebijakan institusi, risiko *burnout*, kecemasan ujian, skor retensi pengetahuan.

### 4. Metodologi
1. **Kebutuhan Bisnis**: Mendefinisikan 6 pertanyaan analitik untuk mandat tata kelola AI lembaga konsultan pendidikan.
2. **ETL & Validasi Data**: Pipeline pembersihan sistematis — penghapusan baris rusak, penanganan nilai hilang, deteksi *outlier*, standardisasi tipe — didokumentasikan di `data_cleaning_log.txt`.
3. **EDA (11 visualisasi)**: Distribusi IPK per intensitas AI, peta panas *burnout*, tabulasi silang kebijakan-kecemasan, *heatmap* korelasi.
4. **Regresi Linier Berganda**: Mengidentifikasi prediktor IPK terkuat; melaporkan koefisien terstandarisasi dan interpretasinya.
5. **Dasbor BI (Streamlit)**: 5 halaman interaktif — *Overview*, Segmentasi, Analisis Kebijakan, Ekuitas Langganan, Temuan Regresi — dengan kartu KPI dan filter *drill-down*.

### 5. Hasil & Dampak
- **Prediktor IPK Teratas**: Jam belajar tradisional (β > 0) dan kemampuan *prompt engineering* menengah adalah prediktor positif terkuat; ketergantungan AI tinggi (β < 0) berkorelasi negatif.
- **Efek Kebijakan**: Kebijakan "Actively Encouraged" berkorelasi dengan kecemasan ujian lebih rendah vs. "Strict Ban".
- **Ekuitas Langganan**: Pelanggan AI berbayar menunjukkan IPK sedikit lebih tinggi, mengindikasikan potensi kesenjangan digital.
- **Risiko Burnout**: Pengguna GenAI berat (>25j/minggu) dengan jam belajar tradisional rendah memiliki profil risiko *burnout* tertinggi.
- **Sertifikasi**: Lulus asesmen Data Analyst BNSP, membuktikan kompetensi analitik *end-to-end* tingkat profesional.

### 6. Luaran Proyek & Artefak
- 📊 **Dasbor Streamlit**: `dashboard.py`
- 📓 **Notebook Analisis**: `Analisis_AI_Mahasiswa.ipynb`
- 📄 **Dokumen Kebutuhan Bisnis**: `Business Requirement Document.docx`
- 📄 **Laporan Hasil Analisis**: `Laporan Hasil Analisis.docx`
- 📄 **Presentasi PPT**: `PPT.pdf`
- 💾 **Dataset Bersih**: `ai_student_clean.csv`
- 🏆 **Sertifikat BNSP**: `Sertifikat Pelatihan BNSP SSMI 2026...pdf`

---
