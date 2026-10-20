# Anti-AI-Slop Frontend Engineering & Design Directives

> **Document Purpose**: Single source of truth (SSOT) establishing strict design standards, aesthetic constraints, and anti-patterns for Alden Nabil Wibowo Effendy's portfolio website. Any human developer or autonomous AI agent modifying code in this repository must comply with the rules defined herein.

---

## 1. Executive Summary: The "AI Slop" Problem

AI coding assistants and text-to-UI tools (Cursor, Claude Code, Lovable, v0) optimize for statistical averages across training datasets. Because training datasets are saturated with 2021 to 2024 Tailwind tutorial templates and component libraries, default outputs converge on an unmistakable, predictable aesthetic:

- Ubiquitous purple-to-cyan or indigo gradients on dark slate backgrounds.
- Symmetrical three-card feature grids with uniform rounded corners.
- Universal use of a single sans-serif typeface (Inter, Roboto, or Plus Jakarta Sans) with loose, unconsidered heading tracking.
- Decorative Lucide outline icons encased in soft pastel rounded rectangles beside every text block.
- Indiscriminate glassmorphism (`backdrop-blur`) and fuzzy radial light orbs without coherent lighting logic.
- Sluggish, uniform hover lifts (`hover:-translate-y-2 hover:shadow-xl transition-all duration-300`).
- Vague marketing copy ("Learn More", "Get Started", "Discover Insights").
- Missing edge states (empty lists, loading skeletons, error fallbacks, content overflow).

This document enforces explicit negative and positive constraints to ensure the portfolio communicates human craftsmanship, editorial authority, and statistical rigor.

---

## 2. Thirty AI Slop Fingerprints and Tactical Replacements

Derived from Jacob Perks' frontend design research (*"How to stop your frontend looking AI-generated: Thirty things that give it away, and what to use instead"*, Medium Bootcamp) and professional web design critiques:

| Category | AI Giveaway (The Tell) | Tactical Replacement (Human-Crafted) |
| :--- | :--- | :--- |
| **Color** | 1. Purple-to-cyan or blue-to-violet linear mesh gradients. | Flat, domain-grounded color tokens sampled from physical media (graphite, archival paper, deep obsidian, muted bronze). |
| **Color** | 2. Default Tailwind `indigo-600` primary buttons and `slate-900` backgrounds. | Tailored dark base (`#0c0e12`, `#12151b`) with restrained, high-contrast monochrome or warm slate accents. |
| **Color** | 3. Neon saturated accent pills scattered without functional hierarchy. | Single primary accent reserved strictly for interactive state and primary calls to action. |
| **Layout** | 4. Symmetrical 3-card or 4-card feature rows of identical height. | Asymmetric Bento grids with varying column spans (e.g., 2:1 or 1:2), staggered rows, and open typographic panels. |
| **Layout** | 5. The "Cardocalypse" (wrapping every paragraph and metric in a bordered card). | Use open space, typographic scale, and 1px hairline dividers (`border-t border-subtle`) instead of infinite containers. |
| **Layout** | 6. Predictable page sequence: Hero -> 3-Card Grid -> Logos -> Pricing -> FAQ Accordion -> Footer. | Narrative layout tailored to domain goals: Executive Hero -> Quantitative Impact Strip -> Flagship Case Studies -> Interactive Proof -> Methodology Archive. |
| **Layout** | 7. Uniform padding across all viewports (`p-6` or `p-8` everywhere). | Dynamic, intentional spatial rhythms: tight data density for metrics; expansive breathing room around editorial headers. |
| **Typography** | 8. Inter, Roboto, or System UI used for every element and weight. | High-character typographic pairing: Authoritative Serif / Display header paired with a disciplined Mono or clean Sans for data. |
| **Typography** | 9. Headings created by simply scaling body font up (`text-4xl font-bold`). | Display typography with intentional optical tracking: `letter-spacing: -0.035em` on large titles, `line-height: 1.05`. |
| **Typography** | 10. Equal visual weight given to titles, subtitles, and labels. | Dramatic typographic contrast leaps (e.g., 48px display title next to 12px uppercase monospace metadata label). |
| **Typography** | 11. Overuse of centered text for multi-line descriptive paragraphs. | Left-aligned body copy with strict measure limits (maximum 65 characters per line for optimal readability). |
| **Iconography** | 12. Default Lucide/Heroicon in a pastel rounded-square container. | Remove the decorative container; let typography structure the content. Use bespoke SVGs or domain-specific glyphs when needed. |
| **Iconography** | 13. An icon placed beside every single card title and list item. | Restrict icons strictly to functional wayfinding (external links, download triggers, disclosure arrows). |
| **Iconography** | 14. Stock illustrations or 3D floating shapes. | Authentic visual proof: actual system screenshots, reproducible SVG mathematical plots, and data visualizers. |
| **Surfaces** | 15. Heavy glassmorphism (`backdrop-blur-md bg-white/5 border-white/10`) applied everywhere. | Solid, deliberate surface colors with distinct elevation layers (`--bg-surface`, `--bg-elevated`) and subtle 1px border lines. |
| **Surfaces** | 16. Diffuse floating radial glow orbs randomly placed in the background. | Structured ambient lighting or clean, unornamented dark backgrounds with high text legibility. |
| **Surfaces** | 17. Multi-layer blurry box shadows (`shadow-2xl`) on flat cards. | Crisp, directional hairline borders or subtle elevation shadows (`0 1px 3px rgba(0,0,0,0.4)`). |
| **Motion** | 18. Bouncing cards that shift upward on hover (`hover:-translate-y-2`). | Micro-feedback on interactive triggers: 100ms scale compression (`active:scale-[0.98]`) or border-color transition. |
| **Motion** | 19. Perpetual floating or pulsing CSS animations on hero badges. | Static, high-clarity status pills. Reserve motion for active user interactions or live simulation rendering. |
| **Motion** | 20. Sluggish, uniform transitions (`transition: all 400ms ease-in-out`). | Snappy, property-specific transitions (`transition: color 150ms ease-out, border-color 150ms ease-out`). |
| **Copywriting** | 21. Generic action verbs ("Learn More", "Read More", "Explore"). | Contextual, task-oriented action triggers ("Inspect Model Architecture", "Run Probability Simulator", "Download ATS CV"). |
| **Copywriting** | 22. Cliché AI buzzwords ("Passionate developer", "Synergistic solutions", "Leveraging state-of-the-art AI"). | Concrete, grounded facts ("Tuned LightGBM via Optuna across 121k historical fixtures; ranked 3rd in Gammafest 2026"). |
| **Copywriting** | 23. Wall of text without scan paths or data anchors. | Scannable, hierarchical formatting with bold metric anchors, structured key-value tables, and clear outcome summaries. |
| **Components** | 24. Standard modal overlays with centered generic content. | Dedicated slide-over drawers or structured case study modals with tabbed methodology, data pipelines, and code snippets. |
| **Components** | 25. Filter pills that wrap awkwardly and lack clear active states. | Segmented controls with distinct active indicators and live counter badges (e.g., "Machine Learning (6)"). |
| **Components** | 26. Raw unformatted numbers (e.g., `121450`, `0.88412`). | Formatted mathematical and statistical notation (`121K+`, `AUC: 0.884`, `MAPE: 3.26%`). |
| **Edge States** | 27. Blank empty spaces when search queries or category filters yield no results. | Explicit, helpful empty-state views with a one-click "Reset all filters" button. |
| **Edge States** | 28. Broken or stretched aspect ratios when project thumbnails fail to load. | Deterministic 16:9 thumbnail containers with fallback SVG badges rendering mathematical equations specific to that domain. |
| **Edge States** | 29. Layout breaks and horizontal scrolling on mobile viewports. | Rigid defensive CSS (`max-width: 100vw`, `overflow-x: hidden`, responsive grid templates using `minmax()`). |
| **Edge States** | 30. Form buttons without loading spinners, disabled states, or toast confirmations. | Immediate tactile feedback on click: copy confirmation toast, download initiation status, and disabled button state while active. |

---

## 3. Strict Negative Design Constraints (Banned Tokens & Patterns)

When writing or editing styles and components in this repository:

### Banned Color Tokens
- Do **NOT** use `indigo-600` (`#4f46e5`), default Tailwind blue (`#2563eb`), or vibrant purple (`#9333ea`, `#8b5cf6`) as dominant background or border gradients.
- Do **NOT** use multi-color mesh gradient overlays across hero or section backgrounds.
- Do **NOT** use acid neon cyan (`#00f2fe`) as an all-purpose glow.

### Banned Layout & Structural Patterns
- Do **NOT** build rows of three identical card containers with centered icons and centered text.
- Do **NOT** nest cards inside cards inside cards.
- Do **NOT** leave large blocks of text centered across viewports wider than 600px.

### Banned Typography Patterns
- Do **NOT** rely solely on Inter or Plus Jakarta Sans for both titles and body text.
- Do **NOT** use loose, positive letter-spacing on display headings larger than 24px.
- Do **NOT** style headings with generic gradient text fills (`bg-gradient-to-r text-transparent bg-clip-text`).

### Banned Motion Patterns
- Do **NOT** apply `-translate-y` hover transforms to static informational cards.
- Do **NOT** use `transition: all` across multiple properties. Specify exact properties (`transition: border-color 0.15s ease, opacity 0.15s ease`).

---

## 4. Approved Design System Architecture

### 1. Color Palette Tokens
```css
:root {
  /* Surfaces: Deep, warm graphite & carbon (not cold purple-blue) */
  --bg-canvas: #0c0e12;
  --bg-surface: #13171f;
  --bg-surface-elevated: #1a1f2c;
  --bg-surface-hover: #222838;

  /* Borders: Hairline precision */
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-medium: rgba(255, 255, 255, 0.16);
  --border-focus: #38bdf8;

  /* Typography */
  --text-display: #f8fafc;
  --text-body: #cbd5e1;
  --text-muted: #808ea3;
  --text-dim: #4c566a;

  /* Restrained Accents: Quantitative / Financial */
  --accent-primary: #38bdf8;       /* Precision technical cyan */
  --accent-primary-subtle: rgba(56, 189, 248, 0.1);
  --accent-success: #10b981;       /* Statistical significance / positive delta */
  --accent-amber: #f59e0b;         /* Warning / volatile */
  --accent-bronze: #d97706;        /* Academic honors */
}
```

### 2. Typography Strategy
- **Display Headings**: High-contrast, editorial serif or technical display (*Newsreader*, *Playfair Display*, or *Space Grotesk*) loaded via Google Fonts or system fallbacks.
  - Heading style: `font-family: var(--font-display); font-weight: 600; letter-spacing: -0.03em; line-height: 1.1;`
- **Body & Interface Text**: Clean, readable sans-serif (*DM Sans*, *Geist*, or system UI).
  - Body style: `font-family: var(--font-sans); font-size: 0.95rem; line-height: 1.6; color: var(--text-body);`
- **Quantitative & Code Text**: Monospaced font (*Geist Mono*, *JetBrains Mono*, or *Fira Code*).
  - Data style: `font-family: var(--font-mono); font-size: 0.85rem; letter-spacing: -0.01em;`

### 3. Layout Pacing & Bento Architecture
- Group related features in asymmetric Bento grids:
  - Anchor item: 2-column or 2-row span with interactive visualizer or primary case study graphic.
  - Secondary items: 1-column items providing supporting data, architectural notes, or key metrics.
- Break sections with hairline horizontal rules: `border-top: 1px solid var(--border-subtle); margin: 4rem 0;`.

---

## 5. Agent Instructions for Code Reviews & Edits

Before completing any frontend code change, verify the following checklist:

1. **AI Slop Audit**: Does any new component introduce a 3-card grid, purple gradient, or unformatted number? If yes, refactor to Bento or tabular format.
2. **Typography Audit**: Are headings styled with negative tracking and an approved font family?
3. **Contrast Verification**: Does body text meet WCAG AAA contrast against `--bg-canvas`?
4. **Motion Audit**: Is animation restricted strictly to user-triggered feedback?
5. **No Em Dashes**: In accordance with user rules, all documentation and copy must use colons, commas, or parentheses instead of em dashes.
