# Applied Data Science Portfolio Implementation Plan

> For agentic workers: use superpowers:executing-plans to implement this plan task by task. Do not start implementation from this planning session. Preserve existing uncommitted work.

**Goal:** Deliver a distinctive, credible Applied Data Science portfolio within five working days, approximately 25 hours.

**Architecture:** Keep the React 18, TypeScript, Vite SPA and vanilla CSS. Present four homepage sections, four project spotlights, the complete project archive, and URL-addressable case studies. Keep project content in its existing source Markdown pipeline, with explicit contribution and evidence fields.

**Tech stack:** Existing React, TypeScript, Vite, Vitest, gray-matter and tsx. No UI framework, backend, CMS, dashboard embed, chart library, or runtime translation service.

**Spec:** The decision brief, content contracts, visual system and interaction contracts below constitute the proposed design specification. This is a reviewable implementation plan, not an assertion that implementation or validation has occurred.

## Execution status

Implemented locally. See [verification and remaining follow-ups](../../REBUILD_VERIFICATION.md). No deployment or public push performed.

## Global constraints

- Required order: Hero & Why Me; Projects; Experience & Credentials; Contact.
- Positioning: Applied Data Scientist, with ML, forecasting, multivariate analysis, and analytics applications. Risk is an application interest, not a claim of finance expertise.
- State final-year Statistics & Data Science undergraduate at IPB University, GPA 3.83/4.00. Do not imply the degree has been awarded.
- Preserve all 21 currently generated projects. Four receive spotlight treatment; others remain searchable and accessible.
- No widgets, invented business impact, unqualified production claims, proficiency percentages, decorative skill icons, or nested case-study modals.
- English is the authoring language. Indonesian must be supported through structured content and explicit fallbacks.
- Follow `docs/AGENTS.md`; no em dashes in new copy.
- Do not manually edit generated `src/data/projects.ts` as the permanent source of content changes.
- Preserve current hosting and access settings. This planning task authorizes no deployment, repository publication, or application code changes.

## Review focus

1. Missing Indonesian content must show a coherent English section with a language notice, not blanks or a misleading fully translated state.
2. Direct case-study URLs, reload, Back and Forward must resolve consistently, including invalid IDs.
3. Failed image, source, or clipboard operations must not break reading or falsely report success.
4. Content synchronization must preserve every project and must not restore disputed claims from old README text.
5. Team methods and awards must remain distinct from Alden's individual contributions.

## 1. Decision brief

The site must answer three questions without opening a modal: what Alden works on, what he personally contributed, and where the supporting work can be inspected.

Recommended hero:

- Eyebrow: `FINAL-YEAR STATISTICS & DATA SCIENCE UNDERGRADUATE`
- Heading: `Applied Data Science`
- Supporting line: `Machine learning, forecasting, and analytics for practical decisions.`
- Personal statement: `I work on data preparation, feature engineering, ETL, and dashboards, and lead collaborative analytics projects.`
- Credentials: IPB University; GPA 3.83/4.00; Gammafest 2026 third place, subject to checking the certificate.
- Primary action: `View selected projects`.
- Secondary action: `Download CV`.
- Contact remains visible in navigation.

Avoid the headline “Quantitative Analyst” at launch. The user's stated finance/economics knowledge is basic. “Risk analytics” can describe relevant project context without implying market, credit, or model-risk specialization.

The requested time-series lead and ML-support hierarchy is preserved in competency ordering. It is not sufficient evidence for expertise: “multivariate statistics” and “hybrid model” do not by themselves establish forecasting or risk competence. Exact personal contributions remain a content prerequisite, with omission of unverified specifics as the default.

The original four spotlights remain Gammafest, DEKA, FinSight and Coffee Shop. This favors demonstrated contribution, practical breadth and the user's selection. Place commodity forecasting first in the archive and link it directly from the first competency row. Do not describe forecasting as the strongest demonstrated specialty until its ownership and validation are established.

Visual redesign gets the largest work allocation. A short factual correction gate precedes publishing any redesigned content. Cosmetic priority cannot justify displaying a known disputed metric.

## 2. Revised competency taxonomy

Replace the current three pillars and icon contract with capability rows. Separate capabilities, tools, project evidence and ownership.

| Public capability | Priority | Candidate content | Evidence and publication boundary |
|---|---|---|---|
| Forecasting & multivariate analysis | Lead in ordering | Time-series analysis, multivariate methods, hybrid approaches | Commodity forecasting, Coffee Shop, FinSight clustering. Specific forecasting implementation and hybrid ownership still need confirmation. |
| Applied machine learning | Support | Classification, feature engineering, model evaluation; XGBoost and Optuna where personally supported | Gammafest cleaning, partial feature engineering and leadership are user-confirmed. Team optimization/model selection must be attributed to teammates. |
| Statistical reasoning | Support | Hypothesis testing, Bayesian inference | Bayesian Spatial project and experimental analysis. No standalone econometrics/spatial/survival category; those projects stay in the archive. |
| Data preparation & ETL | Support | Data cleaning, ingestion, transformation and validation | DEKA and FinSight personal ETL contributions. Identify which stages Alden implemented versus teammate cleaning/database insertion. |
| BI & visualization | Support | Dashboard development, analytical communication | DEKA, FinSight, Coffee Shop. Power BI/Tableau remain tool candidates until matched to a specific artifact. |
| Engineering tools | Secondary tool inventory | PostgreSQL, Redis, APIs, Docker, agentic workflows | Add only with concrete usage evidence. Do not group these as established pipeline expertise by association. |

Use R as the language; RStudio is an environment. Use Bayesian inference as a method, not as a synonym for Optuna tuning.

Remove from the launch skills matrix unless individually substantiated: Advanced DAX, RFM, A/B testing, Metric-to-Dollar Value, financial stress testing, and individual cost-sensitive optimization expertise. Prophet appears in the commodity README, but personal ownership is unresolved. Preserve it as a project method where accurate; do not automatically promote it to a personal skill.

Competency presentation:

`Capability | Specific work I performed | Project evidence`

Each evidence link opens the relevant project directly. There is no intermediate skill modal and no self-assigned proficiency score. If a capability lacks a defensible contribution, show it only as a stated interest or omit it from the public matrix until confirmed.

## 3. Claim and contribution corrections

| Item | Evidence found | Launch treatment |
|---|---|---|
| Gammafest ownership | User: team leader, data cleaning, partial feature engineering; teammates handled optimization and model selection | Separate “My contribution” and “Team approach.” |
| Gammafest score | README says 2.69 to 1.98. Inspected final notebook cell 44 logs best Optuna value 2.6851579411416537. Report drafts contain approximately 2.68 and public score 3.2983. | Do not publish the improvement comparison until the matching run, split and metric are located. Do not substitute the inspected value as the definitive competition result. |
| Gammafest data size | Report describes 78,772 training and 42,422 test rows | Say “121,194 dataset rows” only after confirming counts; do not assume rows are unique fixtures or all training observations. |
| DEKA ownership | User: team leadership, stakeholder/lecturer discussion, work allocation, dashboard and ETL; teammate: exploration, visualization, cleaning, database insertion | Describe Alden's dashboard implementation separately from teammate analytical visualizations. Scope overlapping ETL stages precisely. |
| DEKA timing | User says approximately four hours, not measured | Prefer qualitative wording. If retained: “Estimated manual workflow: approximately four hours; no measured before/after timing.” Never “saved four hours per report.” |
| FinSight ownership | User: clustering, ETL, cleaning and dashboard; other work by collaborators | Keep those contributions. Do not imply ownership of VaR, Sharpe, forecasting, financial methodology or all application engineering. |
| Box-Cox MAE | User says same response; README describes transformed-scale results and inconsistent numeric formatting | Keep project, suppress the 99% claim pending original outputs confirming units, transformation/inverse transformation and evaluation population. |
| Degree | User confirms final-year undergraduate | Correct hero, CV-facing copy and metadata consistently. |
| “Production-grade” | README assertion does not establish operational adoption | Use “application,” “dashboard” or “project” unless deployment use and responsibility are documented. |

These findings are high-confidence observations of the inspected files and user statements. Correctness of the underlying analyses has not been independently reproduced.

## 4. Layout and reading order

Desktop uses a 12-column grid, maximum width 1200px. Asymmetry establishes emphasis; it does not change semantic reading order.

```text
NAME                       Projects  Experience  Contact   EN / ID
-----------------------------------------------------------------
HERO: 8 columns                         IDENTITY: 4 columns
Applied Data Science                   Portrait
Specific personal statement            IPB / final year / GPA
[Selected projects] [CV]                Competition credential
-----------------------------------------------------------------
WHY ME
Capability            My work                     Evidence link
Forecasting ...       Supported contribution      Commodity study
Applied ML ...        Cleaning / features         Gammafest
ETL ...               Pipeline / dashboard        DEKA
Other supported rows ...
-----------------------------------------------------------------
PROJECTS
Gammafest: 7 columns                    DEKA: 5 columns
Actual analytical visual               Dashboard screenshot
Problem / My role / Outcome             Problem / My role / Outcome

FinSight: 5 columns                     Coffee Shop: 7 columns
Dashboard / owned contribution          Perceptual map / personal work
-----------------------------------------------------------------
ALL PROJECTS: search + category select + result count
Title                 Method / context            Case study link
All 21 projects remain available; spotlight entries are labeled.
-----------------------------------------------------------------
EXPERIENCE: 8 columns                   CREDENTIALS: 4 columns
Relevant applied work / teaching        Degree in progress / awards
Leadership details                     Selected certificates + expand
-----------------------------------------------------------------
CONTACT
Email link / Copy email / LinkedIn / GitHub / CV
```

Mobile: one column, same order, compact navigation, no horizontal project carousel. Heading and actions precede portrait. Tables become labeled stacked rows. Project graphics retain aspect ratio. Avoid fixed content heights and CSS reordering.

Why Me answers with concrete contributions, not “bridging theory and business impact.” Keep it compact enough that the first project follows promptly.

Experience prioritizes relevant applied work and teaching, then organizational leadership. Describe DEKA as a collaborative project unless employment status is confirmed. Do not invent internship titles or dates.

## 5. Project detail and source requirements

Use a full-page case-study view at `?project=gammafest&lang=en`, with a clear “Back to projects” link. This provides shareability without introducing a routing package.

Each spotlight contains:

1. Problem and context.
2. My contribution, team responsibilities and project status.
3. Data constraints and validation approach.
4. Method and rationale, attributed correctly.
5. Findings with metric definitions and limitations.
6. One real visual with an explanatory caption.
7. Available code, report, demo and source links.

Show the insight and contribution in the homepage excerpt. Do not make readers open a notebook to discover what the project did. Retain concise existing detail for archive projects after correcting unsupported statements; comprehensive rewriting of 21 studies is outside the 25-hour scope.

| Project | Existing local link evidence | What is needed |
|---|---|---|
| Gammafest | GitHub URL already configured | Check public accessibility; identify final notebook/report; attach award proof and contribution statement. A live demo is unnecessary. |
| DEKA | GitHub URL configured; README has a Streamlit URL absent from generated project data | Resolve source/generated discrepancy; verify link and public-data suitability. A sanitized screenshot/report is sufficient if the app cannot be shared. |
| FinSight | Streamlit URL configured; GitHub URL missing; local source folders exist | Request actual team repository and permission to link it. Use existing brief, slides and screenshots if code remains private. |
| Coffee Shop | Notebooks, datasets and plots exist; no GitHub/demo URL configured | Highest-priority repository packaging candidate because it is personal work. A readable notebook export and plot can serve as launch evidence. No app required. |
| Commodity forecasting | Paper, R report and notebooks referenced; no repository URL configured | High-priority reproducibility link because forecasting is the desired lead. Confirm personal role, forecast horizon and evaluation. |
| Spatial, survival and other archive work | Project-specific artifacts vary | Report or notebook links suffice. Do not create a separate repository for every coursework project just for uniformity. |

These are local configuration findings, not live availability checks. Never invent URLs or require public client data. Missing source links do not remove a project; omit unavailable actions and retain accurate explanatory content.

## 6. Component refactoring map

```text
App
  SiteHeader                <- refactor Navbar; anchor links + language switch
  PortfolioHome
    Hero                    <- refactor existing Hero
    CompetencyMatrix        <- replace WhyMe and SkillModal interaction
    ProjectsSection         <- replace ProjectsCarousel
      ProjectSpotlight      <- shared content, variable grid span
      ProjectArchive        <- query/category/result count
    ExperienceSection       <- retain, revise ordering and attribution
    CredentialsSection      <- refactor CertificationsGrid
    ContactSection          <- retain, correct clipboard handling
  CaseStudyView              <- replaces ProjectModal; lazy-loaded
  ImageLightbox             <- retain only if accessible; otherwise image link
  SiteFooter
```

Use existing `src/components/` and `src/data/` rather than reorganizing the whole repository. Add `src/lib/portfolio-content.ts`, `src/lib/project-filters.ts`, `src/lib/url-state.ts`, `src/i18n/messages.ts`, and a small `src/hooks/usePortfolioLocation.ts`.

Keep experience detail as native disclosures in the timeline. Retire `ExperienceModal` after its content is migrated. No application-wide store or generic component framework.

## 7. Content and state contracts

Extend `src/types/index.ts`; keep stable project IDs.

| Contract | Required content |
|---|---|
| Locale | `en` or `id`; English default |
| Localized text | Required English, optional Indonesian |
| Competency | ID, localized label, priority, specific capabilities, project contribution references |
| Project editorial content | Spotlight order or null; competency IDs; localized summary, personal contribution, team contribution, insight and limitations |
| Claim | ID, localized statement, status (`verified`, `estimated`, `unverified`), evidence reference, attribution (`individual`, `team`) |
| Evidence reference | Internal source path and locator for review; optional public URL and public label |
| Project status | Personal, coursework, competition, collaborative project or operational application, supported by evidence |

Internal evidence paths stay in source metadata and are not published into browser payloads. A public claim must retain its meaning in both languages. Unverified numeric claims are excluded from generated display copy; estimates display their qualifier.

Add explicit `portfolio` editorial frontmatter to project READMEs, initially for the four spotlights and disputed claims. Extend `scripts/sync-projects.ts` to read it. Separate the English and Indonesian body before legacy section extraction, and anchor known heading matches. Current broad regex extraction must not guess locale or silently miss “Results & Impact.”

No dual ownership of project facts: README frontmatter/body is canonical; generated TypeScript is an output. Keep manually authored competency definitions in `skills.ts`, referencing existing project IDs and explicit contributions.

Language behavior:

- Put UI strings in typed EN/ID dictionaries.
- Translate navigation, hero, matrix, contact, and project summaries for launch.
- Translate complete case-study sections only when reviewed; otherwise render the whole section in English with a short notice.
- Preserve project and filter state when switching languages.
- Resolve language from valid URL parameter, then saved preference, then English. Storage failure falls back safely.
- Set document language and mark English fallback sections with their actual language.
- Do not use browser-time machine translation.

State ownership:

- URL: `lang`, `project`. One location hook owns reads, writes and `popstate`.
- Project archive: local search text and category; skill links can set a competency filter.
- Details: derive project from ID, never store a duplicate project object.
- Clipboard: local `idle`, `success`, `error`; await the operation before announcing success; clear timer on unmount.
- Images: one optional lightbox state. Do not open nested overlays.

Project links use real `href` values; intercept only ordinary same-tab activation. Preserve new-tab and modifier-key behavior. Back restores homepage archive state/scroll when opened in-app. Direct detail visits get a deterministic home link. Invalid IDs render a useful “Project not found” view with archive access.

Lazy-load case-study UI with visible loading/error recovery. Keep the small project dataset eager initially; split data only if measured bundle size warrants it.

The SPA remains a deliberate five-day compromise: per-project client-side titles are supported, but unique crawler-visible social previews and fully indexed localized static pages are deferred.

## 8. Typography and CSS migration

Visual direction: an analytical editorial portfolio using real plots and application screenshots. No decorative financial terminal styling.

| Purpose | Decision |
|---|---|
| Display | Newsreader, weight 600; hero 40-64px responsive; line-height 1.1; tracking -0.03em |
| Body/UI | DM Sans, 16px body, line-height 1.6; paragraph measure 65ch |
| Metrics | Existing Fira Code where justified; use tabular numerals; no unnecessary font weights |
| Canvas/surfaces | `#0c0e12`, `#13171f`, `#1a1f2c` |
| Display/body | `#f8fafc`, `#cbd5e1` |
| Muted text | `#808ea3`, only where measured contrast is sufficient |
| Primary action/focus | `#38bdf8`; dark text on filled accent buttons |
| Dividers | White at 8% opacity; stronger focus outline is separate |
| Spacing | 4, 8, 12, 16, 24, 32, 48, 64, 96px scale |
| Corners/motion | 4-8px radii; 150ms color/border transitions; reduced-motion support |

Keep essential body text at least 7:1 against the canvas, as required by `docs/AGENTS.md`. Check actual foreground/background pairs on cards and hover states too. Do not use `--text-dim` for essential content.

Migration:

1. Define semantic tokens in `variables.css`: canvas, surface, elevated, border, focus, display/body/muted, primary, font, spacing.
2. Temporarily alias old tokens to semantic tokens so unchanged components keep working.
3. Split touched CSS into `layout.css`, `projects.css`, `credentials.css` and `overlays.css`; retain genuinely shared rules in `global.css`.
4. Remove migrated inline styles, glows, gradient badges, generic icon containers and uniform card treatment.
5. Remove aliases only after searching for remaining references.

Do not use `overflow-x: hidden` to conceal layout defects. Use wrapping, minimum-width control and local overflow for genuine tables/code. A reusable card is allowed for a project preview; it is not the default wrapper for every paragraph.

## 9. Execution schedule: five days, 25 hours

Estimates assume existing assets and code are reusable. Public repository cleanup and complete bilingual long-form writing are not included.

### Day 1: Content contract and visual foundation, 5 hours

**Files:** `src/types/index.ts`, `src/data/skills.ts`, `src/data/profile.ts`, four spotlight READMEs, disputed project READMEs, `scripts/sync-projects.ts`, `src/lib/portfolio-content.ts`, `src/styles/variables.css`, `src/tests/data-schema.test.ts`, new `src/tests/content-sync.test.ts`.

**Produces:** typed competencies and editorial metadata; canonical attribution; semantic tokens.

- [ ] Record current working-tree changes. Run existing tests, build and validation as a baseline; record pre-existing failures.
- [ ] Spend 90 minutes correcting degree/ownership and suppressing unresolved metrics. Apply safe defaults from section 11.
- [ ] Add focused failing tests: stable IDs retained, duplicate IDs rejected, all evidence references resolve, disputed numeric claims cannot enter public summaries, missing optional editorial data does not drop archive projects.
- [ ] Add bilingual parser fixtures covering “Results & Impact,” missing Indonesian sections, multiple notebooks and optional links.
- [ ] Extend types, source metadata and sync logic to satisfy those contracts. Preserve all artifact links, not just the first notebook.
- [ ] Establish tokens and the hero composition. Run focused tests and visually inspect hero at narrow and wide sizes.
- [ ] Review diff and create a scoped commit only during authorized implementation.

### Day 2: Homepage hierarchy and project archive, 5 hours

**Files:** `src/App.tsx`, `Hero.tsx`, `Navbar.tsx`, new `PortfolioHome.tsx`, `CompetencyMatrix.tsx`, `ProjectsSection.tsx`, `ProjectSpotlight.tsx`, `ProjectArchive.tsx`, `src/lib/project-filters.ts`, `src/styles/layout.css`, `src/styles/projects.css`, new `src/tests/project-filters.test.ts`.

**Consumes:** competencies and project editorial data.
**Produces:** four-section homepage and complete archive.

- [ ] Define a pure filter accepting projects, query, category and optional competency ID; return matching projects in stable editorial order.
- [ ] Test combined filters, case-insensitive matching, zero results and reset restoring all 21 IDs.
- [ ] Implement hero, open competency rows, alternating spotlight spans and archive.
- [ ] Replace clickable `div` navigation with links/buttons; make complete controls keyboard reachable.
- [ ] Add result count and explicit reset action. Missing images render a neutral title/context fallback.
- [ ] Verify at 375, 768 and 1440px; check Indonesian-length text and long titles without fixed-height clipping.
- [ ] Run focused tests, inspect diff and commit the coherent homepage change.

### Day 3: Case studies, sources and bilingual state, 5 hours

**Files:** new `CaseStudyView.tsx`, `src/lib/url-state.ts`, `src/hooks/usePortfolioLocation.ts`, `src/i18n/messages.ts`, `src/tests/url-state.test.ts`, `src/tests/localization.test.ts`; modify `App.tsx`, `scripts/sync-projects.ts`, project READMEs.

**Consumes:** project IDs, editorial content and evidence links.
**Produces:** shareable case studies, EN/ID UI and predictable navigation.

- [ ] Define pure URL parsing/serialization: accept known project IDs and locales; distinguish missing from invalid project IDs; preserve unrelated query parameters.
- [ ] Test round-trip encoding, invalid IDs/locales, locale changes preserving the selected project and missing translations returning English with the correct locale marker.
- [ ] Implement the location hook, case-study view, Back behavior and loading/error recovery.
- [ ] Write four concise English case studies using contribution-aware content. Add available artifact links and captions.
- [ ] Translate UI, hero, matrix and project summaries. Use section-level English fallback for untranslated detail.
- [ ] Manually verify refresh, Back/Forward, modified clicks, direct URLs, missing IDs, and language switching mid-case-study.
- [ ] Run focused tests, inspect diff and commit.

### Day 4: Experience, contact and visual refinement, 5 hours

**Files:** `ExperienceSection.tsx`, `CertificationsGrid.tsx` or replacement `CredentialsSection.tsx`, `ContactSection.tsx`, `ImageLightbox.tsx`, `src/data/experience.ts`, `index.html`, `src/styles/credentials.css`, `src/styles/overlays.css`, remaining touched component styles.

**Consumes:** existing experience/certificate records and revised attribution.
**Produces:** complete narrative and usable interaction states.

- [ ] Prioritize relevant work/teaching; preserve other experience in disclosures. Move credentials out of the Why Me tab.
- [ ] Use real project graphics, meaningful captions and explicit image dimensions. Compress launch images and lazy-load below-fold media.
- [ ] Add visible email link; await clipboard success and show actionable failure feedback.
- [ ] Keep image dialog only if focus entry/return, Escape, background inertness and keyboard containment work. Otherwise use an ordinary full-image link.
- [ ] Check actual color contrast; remove old glows, gradient badges and decorative icons.
- [ ] Check font loading/fallback and CV download. Do not claim a file download completed when only a link was activated.
- [ ] Run build and relevant tests; inspect keyboard flow and responsive rendering; commit.

### Day 5: Release verification and contingency, 5 hours

**Files:** `src/tests/` as needed for uncovered behavior; `docs/CONTENT_GUIDE.md`, `docs/AI_AGENT_CONTEXT.md`, `docs/PORTFOLIO_STRATEGY.md`, `docs/DEPLOYMENT_GUIDE.md`; fixes confined to verified defects.

**Produces:** validated release candidate, corrected maintenance instructions and rollback reference.

- [ ] Reserve two hours for defects, unavailable links or unexpected content drift.
- [ ] Run `npm run projects:validate`, then `npm run projects:sync`; review generated diff for loss or revived claims.
- [ ] Run sync a second time and confirm no additional generated changes.
- [ ] Run `npm run test` and `npm run build`; resolve failures relevant to release.
- [ ] Preview the production build. Test 375/768/1440px, 200% zoom, keyboard navigation, reduced motion, failed images, unavailable storage/clipboard, empty archive results and both languages.
- [ ] Check all displayed links, awards and CV; source links must open the intended artifact. Hide unavailable actions without deleting projects.
- [ ] Measure performance against section 10. Fix observed bottlenecks, not hypothetical ones.
- [ ] If reviewers are available, run the 30-second test. If not, explicitly record conversion as unvalidated.
- [ ] Update repository documents to match the shipped hierarchy, taxonomy and content ownership. Record release commit and rollback method before publishing through the established deployment workflow.

## 10. Acceptance and scope controls

Launch blockers:

- All original project IDs remain represented and reachable.
- No unresolved numerical headline, fabricated ownership, or misleading completed-degree claim.
- Four section order, direct case-study links and language fallbacks work.
- Typecheck/build, tests and content validation pass.
- No keyboard trap, inaccessible primary action, body-level horizontal overflow or false clipboard success.
- Available project sources and CV work; unavailable external sources do not render broken primary actions.

Performance targets, to measure rather than promise:

- Initial JavaScript at most 200KB gzip; initial transferred images/fonts at most 800KB.
- LCP at most 2.5s and CLS at most 0.1 in a documented mobile lab run.
- Lighthouse performance above 95 on mobile and desktop is the repository stretch target. Record browser/tool version and median of three equivalent runs.
- Lab measurements are not field performance claims. No loading of full PDFs/notebooks until requested.

Thirty-second review protocol:

Ask three readers, preferably including someone who reviews data candidates, to identify the intended role, two projects, one personal contribution and the next action after 30 seconds. Target at least two of three answering correctly without coaching. This is a small usability check, not evidence of a hiring conversion uplift.

If time slips, defer complete Indonesian long-form translation, additional archive essays, repository packaging and decorative refinement. Preserve all projects, truthful summaries, source availability, accessibility and core navigation. Widgets remain excluded.

Do not expand into stack upgrades, a CMS, animations, a finance simulator, an AI assistant, a backend contact form or an analytics dashboard.

## 11. Open questions, with nonblocking defaults

The user requested questions in this file, not an interruption.

| Question | Default until answered |
|---|---|
| Which forecasting model/components did you personally implement, and which “hybrid model” do you mean? | Lead category expresses focus; show only supported contributions. Do not claim hybrid-model authorship. |
| Which artifacts demonstrate PostgreSQL, Redis, Docker, APIs, Power BI, Tableau and agentic workflow use? | Do not list them as demonstrated competencies yet. |
| Where is the Gammafest 1.98 result, with run, split and evaluation context? | Suppress the improvement comparison; keep project, role and substantiated award. |
| Can the Box-Cox output show both MAEs on identical units and evaluation observations? | Suppress 99% reduction; retain methodological description. |
| Can DEKA's source/data/screenshots be public, and what stages were yours versus your teammate's? | Use only established public-safe visuals; no client dataset publication; attribute ownership conservatively. |
| Which FinSight team repository may be linked, and what exact components did you own? | Use user-confirmed cleaning, ETL, clustering and dashboard; omit repository button until an actual URL is supplied. |
| Is there an expected graduation month/year and target job geography? | Final-year undergraduate; no invented graduation or work-authorization statement. |
| Is complete Indonesian translation required at launch? | Bilingual shell and summaries; clearly marked English fallback for unreviewed details. |
| Is a five-day deadline five calendar days from this plan or another date? | Plan five consecutive work sessions totaling 25 hours; confirm actual release date before deployment. |
| Is the repeated “visual redesign” priority intentional? | Treat priority as visual redesign, evidence correction, case-study depth; widgets excluded. |

## 12. Technical references and planning verification

- [W3C dialog pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/): focus entry, keyboard containment, Escape and focus return if a lightbox remains.
- [W3C language declarations](https://www.w3.org/International/questions/qa-html-language-declarations): document language and language marking for fallback sections.
- [Vite features](https://vite.dev/guide/features.html): module loading capabilities; this plan does not require a Vite upgrade.

Planning inspection covered the existing components, data interfaces, project link inventory, sync parser, tests, CSS tokens, the supplied documentation, selected project READMEs and Gammafest reports/notebook outputs. No underlying model was rerun; no external project URL was verified live; no implementation tests were executed for this documentation-only change.

Execution begins only when requested. The first implementation task is to preserve the existing dirty working tree and establish the baseline, not to overwrite the current frontend.
