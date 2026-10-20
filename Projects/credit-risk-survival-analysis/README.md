---
id: "credit-risk-ka"
title: "Credit Risk Time-to-Default (Kaplan-Meier)"
category: "Biostatistics"
period: "2025"
formulaBadge: "Kaplan-Meier · Log-rank p < 0.05"
tags: ["R", "survival", "ggplot2", "Kaplan-Meier", "Log-rank", "Credit Risk", "Survival Analysis"]

artifacts:
  paper: ""
  r_report: ""
  poster: ""
  slides: ""
  notebooks: []
  datasets: []
  cover_image: ""

gallery: []

portfolio: {"status": {"en": "Analysis project", "id": "Proyek analisis"}, "summary": {"en": "Comparing time-to-default patterns with survival analysis.", "id": "Membandingkan pola waktu gagal bayar dengan analisis survival."}, "competencyIds": ["statistics"], "results": {"en": "Kaplan-Meier and log-rank comparisons describe observed default trajectories in the study data."}, "limitations": {"en": "Read the original artifact for full assumptions and evaluation. Individual contribution has not yet been documented for this case study."}}
---

# Credit Risk & Survival Analysis — Time-to-Default Modeling
> *Analisis Survival Risiko Kredit: Pemodelan Waktu-ke-Gagal-Bayar dengan Kaplan-Meier*

---

## 🇬🇧 English Version

### 📌 Executive Summary
- **Objective**: Model time-to-default in the German Credit Dataset using Kaplan-Meier estimation and log-rank testing to identify risk stratification factors and estimate median default times by credit history and loan purpose.
- **Methodology**: Constructed life tables, estimated non-parametric Kaplan-Meier survival curves by risk group, tested curve divergence with the log-rank test, and identified the critical early-stage monitoring window.
- **Key Outcome**: Credit history was the dominant stratification factor; loan purpose showed statistically significant curve divergence (p < 0.05); survival curves diverge earliest in the first 12 months.
- **Deliverables**: Full R analysis (`Syntax.Rmd`).

### 1. Background & Problem Statement
In credit risk, understanding *when* a borrower defaults — not just *whether* — is critical for provision scheduling and loan pricing. Survival analysis provides a framework for modeling time-to-event data with censoring, directly applicable to loan default timelines and portfolio early-warning systems.

### 2. Urgency
Provisioning based only on default probability (PD) without considering time dynamics misestimates expected loss timing. Institutions that identify early default windows (first 12 months) can deploy targeted interventions — hardship programs, restructuring — before default becomes irreversible.

### 3. Data Collection & Source
- **Data Source**: German Credit Dataset (UCI Machine Learning Repository / Kaggle) — publicly available.
- **Scale**: ~1,000 loan records.
- **Target**: Time-to-default (months), censored at loan maturity.
- **Key Variables**: Credit amount, duration, purpose, age, employment status, credit history.

### 4. Methodology
1. **Life Table Construction**: Actuarial method to estimate survival probability at each observed event time.
2. **Kaplan-Meier Estimation**: Non-parametric survival curves by credit history group and loan purpose.
3. **Log-rank Test**: Formal test of curve equality across stratification variables.
4. **Median Survival Identification**: Time at which 50% survival probability is reached per group.

### 5. Results & Impact
- **Credit History Effect**: Borrowers with past defaults showed significantly lower median time-to-default.
- **Loan Purpose Effect**: Car vs. consumer goods loans showed statistically significant curve divergence (p < 0.05).
- **Critical Window**: Curves diverge most in the first 12 months → early-stage monitoring is most valuable.

### 6. Artifacts & Deliverables
- 📊 **R Analysis Script**: `Syntax.Rmd`

---

## 🇮🇩 Versi Bahasa Indonesia

### 📌 Ringkasan Eksekutif
- **Tujuan**: Memodelkan waktu-ke-gagal-bayar pada German Credit Dataset menggunakan estimasi Kaplan-Meier dan uji log-rank untuk mengidentifikasi faktor stratifikasi risiko dan memperkirakan median waktu gagal bayar berdasarkan riwayat kredit dan tujuan pinjaman.
- **Metodologi**: Menyusun tabel kehidupan, mengestimasi kurva survival Kaplan-Meier non-parametrik berdasarkan kelompok risiko, menguji divergensi kurva dengan uji log-rank, dan mengidentifikasi jendela pemantauan tahap awal yang kritis.
- **Hasil Utama**: Riwayat kredit adalah faktor stratifikasi dominan; tujuan pinjaman menunjukkan divergensi kurva yang signifikan secara statistik (p < 0,05); kurva survival paling divergen dalam 12 bulan pertama.
- **Luaran Proyek**: Analisis R lengkap (`Syntax.Rmd`).

### 1. Latar Belakang & Masalah
Dalam risiko kredit, memahami *kapan* peminjam gagal bayar — bukan hanya *apakah* — sangat penting untuk penjadwalan pencadangan dan penetapan harga pinjaman. Analisis survival menyediakan kerangka kerja untuk memodelkan data *time-to-event* dengan *censoring*, yang langsung berlaku untuk garis waktu gagal bayar pinjaman.

### 2. Urgensi
Pencadangan yang hanya didasarkan pada probabilitas gagal bayar (PD) tanpa mempertimbangkan dinamika waktu salah memperkirakan waktu kerugian yang diharapkan. Institusi yang mengidentifikasi jendela gagal bayar awal (12 bulan pertama) dapat menerapkan intervensi bertarget sebelum gagal bayar menjadi tidak dapat dipulihkan.

### 3. Pengumpulan Data & Sumber
- **Sumber Data**: German Credit Dataset (UCI Machine Learning Repository) — tersedia publik.
- **Skala**: ~1.000 rekaman pinjaman.
- **Target**: Waktu-ke-gagal-bayar (bulan), disensor pada jatuh tempo pinjaman.
- **Variabel Utama**: Jumlah kredit, durasi, tujuan, usia, status pekerjaan, riwayat kredit.

### 4. Metodologi
1. **Konstruksi Tabel Kehidupan**: Metode aktuaria untuk mengestimasi probabilitas survival.
2. **Estimasi Kaplan-Meier**: Kurva survival non-parametrik berdasarkan kelompok riwayat kredit dan tujuan pinjaman.
3. **Uji Log-rank**: Uji formal kesetaraan kurva antar kelompok stratifikasi.
4. **Identifikasi Median Survival**: Waktu di mana probabilitas survival 50% tercapai per kelompok.

### 5. Hasil & Dampak
- **Efek Riwayat Kredit**: Peminjam dengan gagal bayar masa lalu menunjukkan median waktu-ke-gagal-bayar yang jauh lebih rendah.
- **Efek Tujuan Pinjaman**: Pinjaman mobil vs. barang konsumsi menunjukkan divergensi kurva yang signifikan (p < 0,05).
- **Jendela Kritis**: Kurva paling divergen dalam 12 bulan pertama → pemantauan tahap awal paling berharga.

### 6. Luaran Proyek & Artefak
- 📊 **Skrip Analisis R**: `Syntax.Rmd`

---

## References
- Kaplan, E.L. & Meier, P. (1958). *Nonparametric estimation from incomplete observations.* JASA.
- German Credit Dataset, UCI Machine Learning Repository.
