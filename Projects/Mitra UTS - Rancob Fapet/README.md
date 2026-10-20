---
id: "consulting-anova"
title: "Statistical Consulting: RCBD ANOVA Research"
category: "Statistical Research"
period: "Jan – Mar 2026"
formulaBadge: "Two-Factor RCBD ANOVA + Tukey HSD"
tags: ["R", "RCBD ANOVA", "Tukey HSD", "Statistical Consulting", "ADEPT Framework"]

artifacts:
  paper: "TA1.Project1.Summaries_Kelompok 13.pdf"
  r_report: "proksimat_simplo.html"
  poster: "Poster.pdf"
  slides: ""
  notebooks: []
  datasets:
    - "Simplo.xlsx"
  cover_image: "plot_proksimat_simplo_1.png"

gallery:
  - "/artifacts/consulting-anova/plot_proksimat_simplo_1.png"
  - "/artifacts/consulting-anova/plot_proksimat_simplo_5.png"
  - "/artifacts/consulting-anova/plot_proksimat_simplo_9.png"
  - "/artifacts/consulting-anova/Poster.pdf"

portfolio: {"status": {"en": "Analysis project", "id": "Proyek analisis"}, "summary": {"en": "Experimental-design diagnostics and ANOVA for research.", "id": "Diagnostik rancangan percobaan dan ANOVA untuk penelitian."}, "competencyIds": ["statistics"], "results": {"en": "Inspect experimental assumptions, ANOVA and post-hoc comparisons in the research report."}, "limitations": {"en": "Read the original artifact for full assumptions and evaluation. Individual contribution has not yet been documented for this case study."}}
---

# Statistical Consulting: Two-Factor RCBD ANOVA
> *Konsultasi Statistika: Pemodelan ANOVA Faktorial RBSL Dua Faktor untuk Penelitian Laboratorium Pascasarjana*

---

## 🇬🇧 English Version

### 📌 Executive Summary
- **Objective**: Provide expert statistical consulting for a postgraduate researcher's 3-month microbial lab assay, modeling treatment effects using a Two-Factor Randomized Complete Block Design (RCBD) ANOVA.
- **Methodology**: Verified normality (Shapiro-Wilk) and additivity (Tukey non-additivity test) assumptions, fitted a two-factor RCBD ANOVA, and performed Tukey HSD post-hoc pairwise comparisons — all structured with the ADEPT framework (Assumption, Data, Estimation, Post-hoc, Transformation).
- **Key Outcome**: Identified statistically significant interaction effects between treatment factors and quantified pairwise mean differences with 95% confidence intervals for publication-ready reporting.
- **Deliverables**: R Knitr interactive HTML report, research poster (PDF), and project summary (PDF).

### 1. Background & Problem Statement
A postgraduate researcher in the Faculty of Animal Science (Fapet IPB) required rigorous statistical modeling for microbial proximate composition lab assay data collected over 3 months. The dataset involved multiple treatment factors under a blocked experimental design, demanding assumption validation and appropriate post-hoc testing to avoid Type I error inflation.

### 2. Urgency
Improper statistical modeling (e.g., ignoring block effects or applying t-tests instead of ANOVA with appropriate post-hoc corrections) leads to inflated false discovery rates and unreliable scientific conclusions unsuitable for peer-reviewed publication.

### 3. Data Collection & Source
- **Data Source**: Lab assay data from 3-month microbial proximate composition experiment (Fapet IPB).
- **Design**: Two-Factor Randomized Complete Block Design (RCBD).
- **Dataset**: `Simplo.xlsx` — replicate measurements across treatment combinations and blocks.

### 4. Methodology
1. **Assumption Verification**: Shapiro-Wilk test (normality of residuals), Bartlett's test (homogeneity of variance), Tukey's non-additivity test (block × treatment non-interaction).
2. **Two-Factor RCBD ANOVA**: Main effects, interaction terms, and block effects partitioned in the ANOVA table.
3. **Post-hoc Testing**: Tukey HSD (Honest Significant Difference) for all pairwise treatment comparisons with family-wise error rate control.
4. **ADEPT Framework Reporting**: Structured deliverable following standardized statistical consulting communication.

### 5. Results & Impact
- **Significant Interaction**: Treatment factor interaction was statistically significant, indicating the effect of Factor A depends on the level of Factor B.
- **Publication-Ready**: Delivered actionable post-hoc comparison tables and diagnostic plots meeting peer-review standards for the researcher's thesis and journal submission.

### 6. Artifacts & Deliverables
- 📊 **Interactive R Report (HTML)**: `proksimat_simplo.html`
- 📄 **Project Summary (PDF)**: `TA1.Project1.Summaries_Kelompok 13.pdf`
- 🖼️ **Research Poster (PDF)**: `Poster.pdf`
- 💾 **Lab Dataset**: `Simplo.xlsx`

---

## 🇮🇩 Versi Bahasa Indonesia

### 📌 Ringkasan Eksekutif
- **Tujuan**: Memberikan konsultasi statistika untuk peneliti pascasarjana dalam pemodelan data laboratorium proksimat mikrobial selama 3 bulan menggunakan ANOVA Faktorial Dua Faktor dengan Rancangan Blok Lengkap (RBSL).
- **Metodologi**: Memverifikasi asumsi normalitas (Shapiro-Wilk) dan aditivitas (uji non-aditivitas Tukey), melakukan ANOVA RBSL dua faktor, dan menerapkan uji perbandingan ganda Tukey HSD — semua menggunakan kerangka ADEPT.
- **Hasil Utama**: Mengidentifikasi efek interaksi yang signifikan antara faktor perlakuan dan mengkuantifikasi perbedaan rata-rata antarpasangan dengan interval kepercayaan 95% untuk pelaporan siap publikasi.
- **Luaran Proyek**: Laporan R Knitr interaktif (HTML), poster penelitian (PDF), dan ringkasan proyek (PDF).

### 1. Latar Belakang & Masalah
Seorang peneliti pascasarjana Fakultas Peternakan IPB membutuhkan pemodelan statistika yang ketat untuk data uji laboratorium komposisi proksimat mikrobial selama 3 bulan. Dataset melibatkan beberapa faktor perlakuan dalam rancangan percobaan berblok, menuntut validasi asumsi dan uji *post-hoc* yang tepat untuk menghindari inflasi Kesalahan Tipe I.

### 2. Urgensi
Pemodelan statistika yang tidak tepat (misal: mengabaikan efek blok atau menggunakan uji-t alih-alih ANOVA dengan koreksi *post-hoc*) menyebabkan tingkat penemuan palsu (*false discovery rate*) yang tinggi dan kesimpulan ilmiah yang tidak dapat dipertanggungjawabkan untuk publikasi ilmiah.

### 3. Pengumpulan Data & Sumber
- **Sumber Data**: Data uji laboratorium proksimat mikrobial dari Fapet IPB (3 bulan).
- **Rancangan**: Rancangan Blok Lengkap Berimbang (RBSL) Dua Faktor.
- **Dataset**: `Simplo.xlsx` — pengukuran ulangan pada setiap kombinasi perlakuan dan blok.

### 4. Metodologi
1. **Verifikasi Asumsi**: Uji Shapiro-Wilk (normalitas sisaan), uji Bartlett (kehomogenan ragam), uji non-aditivitas Tukey (independensi blok × perlakuan).
2. **ANOVA RBSL Dua Faktor**: Partisi efek utama, efek interaksi, dan efek blok pada tabel ANOVA.
3. **Uji Tukey HSD**: Perbandingan rata-rata semua pasangan perlakuan dengan pengendalian *family-wise error rate*.
4. **Pelaporan ADEPT**: Luaran terstruktur mengikuti standar komunikasi konsultasi statistika.

### 5. Hasil & Dampak
- **Interaksi Signifikan**: Interaksi antar-faktor perlakuan terbukti signifikan secara statistik, menunjukkan efek Faktor A bergantung pada tingkat Faktor B.
- **Siap Publikasi**: Tabel perbandingan *post-hoc* dan grafik diagnostik yang memenuhi standar *peer-review* untuk tesis dan artikel jurnal peneliti.

### 6. Luaran Proyek & Artefak
- 📊 **Laporan R Interaktif (HTML)**: `proksimat_simplo.html`
- 📄 **Ringkasan Proyek (PDF)**: `TA1.Project1.Summaries_Kelompok 13.pdf`
- 🖼️ **Poster Penelitian (PDF)**: `Poster.pdf`
- 💾 **Dataset Laboratorium**: `Simplo.xlsx`

---
