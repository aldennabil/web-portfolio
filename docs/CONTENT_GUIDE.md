# Non-Developer Content Management Guide

Welcome! This guide explains how to easily add, edit, or remove projects, update your bio, add certifications, or change links without writing any complex code.

All website content is located inside the simple, human-readable **`src/data/`** directory.

---

## 1. How to Add a New Project

1. Open `src/data/projects.ts` in your code editor.
2. Scroll to the `PROJECTS_DATA` list.
3. Copy this template and paste it at the top or bottom of the array:

```ts
{
  id: "my-new-project",
  title: "Your Project Title Here",
  category: "Predictive Analytics & Machine Learning", // "BI & Analytics Engineering" | "Predictive Analytics & Machine Learning" | "Decision Science & Risk"
  period: "July 2026",
  award: "Optional Award (e.g. 🏆 3rd Place)", // Leave "" if none
  summary: "A 2-3 sentence overview describing the objective, methodology, and key quantitative outcome.",
  tags: ["Python", "PyTorch", "Time Series", "SQL"],
# 📘 Alden Nabil's Portfolio — Non-Developer Content Guide

Welcome! This guide is designed so you can easily update your **bio, projects, certificate proof images, experience milestones, and downloadable CV** at any time without touching complex application code.

All website data is centralized inside simple, readable files in **`src/data/`** (and mapped in `public/images/`).

---

## 📁 1. Asset Folders Directory Map

To add or update photos, PDFs, or banners, simply drop the files into the corresponding folder inside `public/`:

```
public/
├── avatar.jpg                           <-- Your hero portrait (Foto KTM)
├── resume.pdf                           <-- Downloadable ATS Resume / CV PDF
├── images/
│   ├── certifications/                 <-- All Certificate proof photos (PNG/JPG)
│   │   ├── bnsp-data-analyst.png
│   │   ├── toeic-score-report.png
│   │   ├── pmi-pm-ready.png
│   │   └── ...
│   ├── projects/                        <-- Project 16:9 thumbnails & gallery photos
│   │   ├── finsight-dashboard.png
│   │   ├── coffee-wars-mds.png
│   │   ├── deka-team.jpg
│   │   └── ...
│   └── experience/                      <-- Experience header banners & team photos
│       ├── sre-banner.jpg
│       ├── stem-team.jpg
│       └── ...
```

---

## 🎓 2. How to Update Certifications & Proof Images

All certifications are configured in `src/data/certifications.ts`. Each row in the portfolio holds **exactly 4 certificates** on desktop.

### 🖼️ Adding / Updating a Certificate Image:
1. Save your certificate screenshot or exported PNG into `public/images/certifications/` (e.g., `my-new-cert.png`).
2. Open `src/data/certifications.ts` and add or edit the entry:

```typescript
{
  id: "bnsp-data-analyst",
  title: "BNSP Certified Data Analyst",
  issuer: "LSP TIK Global • National Professional Certification Board",
  year: 2026,
  category: "Professional National Certification",
  image: "/images/certifications/bnsp-data-analyst.png", // <-- Your certificate proof image
  pdfUrl: "/images/certifications/bnsp-data-analyst.png", // <-- Opens image directly (or PDF)
  isFeatured: true,                                       // <-- Set true for glowing neon highlight
  featuredBadge: "⭐ FEATURED CREDENTIAL",               // <-- Custom ribbon text
  openImageOnly: true                                     // <-- Set true to show only cropped image
}
```

> [!TIP]
> **Highlighting Key Credentials**: Setting `isFeatured: true` will automatically give the certificate card a vibrant cyan/amber neon glowing border and a top ribbon badge!

---

## 🚀 3. How to Update Projects, Action Links & Multi-Photo Gallery

All 16 projects are managed in `src/data/projects.ts`.

### 📝 Example Project Schema:
```typescript
{
  id: "gammafest",
  title: "Football Outcome & Score Prediction",
  category: "Predictive Analytics & ML",
  period: "Apr – Jun 2026",
  award: "🏆 3rd Winner & Most Applicable • Gammafest 2026",
  
  // 16:9 Thumbnail Image (or leave "" to auto-generate a sleek mathematical formula badge)
  image: "/images/projects/gammafest-thumb.png",
  formulaBadge: "λ ~ Poisson(Elo_diff)",
  
  summary: "Modeled 121,000+ matches over 154 years with zero leakage and optimized hybrid LightGBM models.",
  
  // Modal Deep-Dive Sections:
  problem: "Forecasting outcomes across 121,000+ matches with severe train-test feature disparity.",
  methodology: "Designed zero-leakage Elo rating state-propagation generating 56 metrics + Optuna LightGBM.",
  results: "Reduced non-linear AW-MAE from 2.69 to 1.98, winning 3rd Place nationwide.",
  
  tags: ["Python", "LightGBM", "Optuna", "Elo Rating"],
  
  // External Action Buttons (leave blank "" if not yet available):
  githubUrl: "https://github.com/aldennabil/football-outcome-prediction-gammafest",
  paperUrl: "https://example.com/paper.pdf",
  demoUrl: "https://gammafest-demo.streamlit.app",
  
  // Multi-Photo Gallery (Up to 5 images shown at the bottom of the case study modal):
  gallery: [
    "/images/projects/gammafest-chart1.png",
    "/images/projects/gammafest-chart2.png",
    "/images/projects/gammafest-award.jpg"
  ]
}
```

---

## 👔 4. How to Update Leadership & Experience

All 7 organizational leadership entries are managed in `src/data/experience.ts`:

```typescript
{
  id: "sre",
  role: "Head of External and Public Relations",
  organization: "Society of Renewable Energy (SRE), IPB Chapter",
  period: "Jan 2025 – Jan 2026",
  summary: "Secured 10 media partnerships and orchestrated 2 major inter-organizational study events.",
  
  // Modal Popup Bullet Points:
  highlights: [
    "Secured 10 strategic media partnerships and orchestrated 2 major study events.",
    "Expanded community reach to an active network of over 100 participants.",
    "Directed external relations and stakeholder engagement."
  ],
  
  // Optional Documentation Gallery (up to 5 team photos):
  gallery: [
    "/images/experience/sre-team.jpg",
    "/images/experience/sre-event.jpg"
  ]
}
```

---

## 👤 5. Updating Bio, Links & Downloadable CV

Open `src/data/profile.ts`:

```typescript
export const PROFILE_DATA = {
  fullName: "ALDEN NABIL WIBOWO EFFENDY",
  roleTitle: "Statistical Data Scientist & Quantitative Analyst",
  tagline: "Statistics & Data Science undergraduate at IPB University (GPA: 3.83/4.00) specializing in tabular machine learning, BI data modeling, and econometric risk forecasting.",
  location: "South Tangerang, Indonesia",
  email: "aldennabil31@gmail.com",
  github: "https://github.com/aldennabil",
  linkedin: "https://linkedin.com/in/aldennabil",
  medium: "https://medium.com/@aldennabil31",
  resumePath: "/resume.pdf"
};
```

To update your CV file, simply overwrite `public/resume.pdf` with your updated PDF.

---

## ⚡ 6. Deploying Changes

Once you update any text or images:
1. Test locally by running: `npm run dev`
2. Push your changes to GitHub:
   ```bash
   git add .
   git commit -m "Update portfolio projects and proof images"
   git push origin main
   ```
3. Vercel will **automatically build and deploy** your changes live to **`aldennabil.vercel.app`** in less than 30 seconds!
