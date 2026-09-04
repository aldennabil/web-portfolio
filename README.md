# Alden Nabil Wibowo Effendy — Portfolio Web Application

Personal portfolio website for **Alden Nabil Wibowo Effendy**, Statistical Data Scientist, Quantitative Analyst, and Machine Learning Practitioner.

Built with **React 18**, **TypeScript**, and **Vite**, featuring an ultra-fast glassmorphic dark theme, interactive live metrics, project deep dives, and verified certifications showcase.

---

## 🚀 Live Demo
- **URL**: [https://aldennabil.vercel.app](https://aldennabil.vercel.app) *(or your deployed Vercel domain)*

---

## 🛠️ Tech Stack
- **Framework**: React 18 + Vite + TypeScript
- **Styling**: Modern Vanilla CSS Design System (Glassmorphism, CSS Custom Properties, Smooth Micro-animations)
- **Icons**: Lucide React
- **Deployment**: Vercel

---

## 📂 Project Structure
```text
├── public/                 # Static assets (images, certifications, resume, icons)
│   ├── images/
│   │   ├── certifications/ # High-res certificate proofs
│   │   ├── experience/     # Organization & career logos
│   │   └── projects/       # Project hero & benchmark graphics
│   ├── avatar.jpg          # Profile photo
│   └── resume.pdf          # Downloadable CV
├── src/
│   ├── components/         # Reusable React UI components
│   │   ├── About.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── data/               # Central data models
│   │   ├── certifications.ts
│   │   ├── experience.ts
│   │   ├── profile.ts
│   │   ├── projects.ts
│   │   └── skills.ts
│   ├── types/              # TypeScript interface definitions
│   │   └── index.ts
│   ├── App.tsx             # Root layout & component composition
│   ├── index.css           # Global design system tokens & animations
│   └── main.tsx            # Vite entry point
├── docs/                   # Complete architecture & content update guides
│   ├── ARCHITECTURE.md
│   ├── CONTENT_GUIDE.md
│   ├── DEPLOYMENT_GUIDE.md
│   └── PRD.md
├── vercel.json             # Vercel SPA routing configuration
└── package.json
```

---

## 💻 Local Development

### 1. Prerequisites
- Node.js (v18.0.0 or higher)
- npm or yarn

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/aldennabil/web-portfolio.git

# Navigate to project directory
cd web-portfolio

# Install dependencies
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 4. Build for Production
```bash
npm run build
npm run preview
```

---

## 📝 Content & Media Management
For step-by-step instructions on updating projects, skills, certificates, and work experience, see:
- 📖 [docs/CONTENT_GUIDE.md](docs/CONTENT_GUIDE.md)
- 🚀 [docs/DEPLOYMENT_GUIDE.md](docs/DEPLOYMENT_GUIDE.md)

---

## 📄 License
MIT License © 2026 Alden Nabil Wibowo Effendy. All rights reserved.
