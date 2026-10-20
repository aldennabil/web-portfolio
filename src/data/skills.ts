import { Competency, CompetencyPillar, LocalizedText } from '../types'

export interface Subskill extends LocalizedText {
  key: string;
  projectIds: string[];
}

export interface SkillCategory {
  id: string;
  label: LocalizedText;
  intersection: LocalizedText;
  subskills: Subskill[];
  projectIds: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'data-science',
    label: { en: 'Data Science & ML', id: 'Data Science & ML' },
    intersection: { en: 'Statistical thinking meets predictive modeling: preparing data, engineering features, and interpreting patterns before choosing a model.', id: 'Penalaran statistik bertemu pemodelan prediktif: menyiapkan data, merekayasa fitur, dan menafsirkan pola sebelum memilih model.' },
    subskills: [
      { en: 'Time series & forecasting', id: 'Deret waktu & peramalan', key: 'forecasting', projectIds: ["commodity-ts"] },
      { en: 'Exploratory data analysis', id: 'Analisis data eksploratif', key: 'eda', projectIds: ["gammafest", "coffeeshop", "susenas", "gsmarena-psd", "commodity-ts"] },
      { en: 'Data cleaning & feature engineering', id: 'Pembersihan data & rekayasa fitur', key: 'cleaning-features', projectIds: ["gammafest", "deka", "finsight", "bank-insurance", "gsmarena-psd"] },
      { en: 'Classification & model evaluation', id: 'Klasifikasi & evaluasi model', key: 'classification', projectIds: ["gammafest", "bank-insurance", "agrimine"] },
      { en: 'Python & R', id: 'Python & R', key: 'python-r', projectIds: ["gammafest", "commodity-ts", "coffeeshop", "bayesian-spatial", "consulting-anova"] },
    ],
    projectIds: ['gammafest', 'commodity-ts'],
  },
  {
    id: 'statistics-risk',
    label: { en: 'Statistics & Risk', id: 'Statistika & Risiko' },
    intersection: { en: 'Inference meets decision context: examining assumptions, uncertainty, and multivariate relationships rather than relying on a single prediction.', id: 'Inferensi bertemu konteks keputusan: mengkaji asumsi, ketidakpastian, dan hubungan multivariat, melampaui satu angka prediksi.' },
    subskills: [
      { en: 'Hypothesis testing & inference', id: 'Pengujian hipotesis & inferensi', key: 'inference', projectIds: ["consulting-anova", "cox-heart", "hiv-survival", "boxcox-gdp"] },
      { en: 'Bayesian reasoning', id: 'Penalaran Bayesian', key: 'bayesian', projectIds: ["bayesian-spatial"] },
      { en: 'Multivariate analysis', id: 'Analisis multivariat', key: 'multivariate', projectIds: ["coffeeshop", "stunting-sem", "minyakita"] },
      { en: 'Model assumptions & diagnostics', id: 'Asumsi & diagnostik model', key: 'diagnostics', projectIds: ["consulting-anova", "boxcox-gdp", "hiv-survival", "cox-heart"] },
      { en: 'Uncertainty & risk interpretation', id: 'Interpretasi ketidakpastian & risiko', key: 'risk', projectIds: ["credit-risk-ka", "hiv-survival", "cox-heart", "finsight"] },
    ],
    projectIds: ['bayesian-spatial', 'consulting-anova'],
  },
  {
    id: 'bi-systems',
    label: { en: 'BI & Data Systems', id: 'BI & Sistem Data' },
    intersection: { en: 'Data workflows meet stakeholder needs: building ETL and dashboards while coordinating people, requirements, and analytical delivery.', id: 'Alur data bertemu kebutuhan pengguna: membangun ETL dan dashboard sambil mengoordinasikan tim, kebutuhan, dan penyampaian analisis.' },
    subskills: [
      { en: 'ETL & data preparation', id: 'ETL & persiapan data', key: 'etl', projectIds: ["deka", "finsight", "susenas"] },
      { en: 'SQL & database workflows', id: 'SQL & alur database', key: 'sql', projectIds: ["deka"] },
      { en: 'Dashboard development', id: 'Pengembangan dashboard', key: 'dashboards', projectIds: ["deka", "finsight", "susenas"] },
      { en: 'Analytical visualization', id: 'Visualisasi analitis', key: 'visualization', projectIds: ["deka", "finsight", "coffeeshop", "susenas", "minyakita"] },
      { en: 'Stakeholder communication & team leadership', id: 'Komunikasi pengguna & kepemimpinan tim', key: 'leadership', projectIds: ["deka", "gammafest"] },
    ],
    projectIds: ['deka', 'finsight', 'coffeeshop'],
  },
]

export interface RatedSkill {
  id: string;
  name: LocalizedText;
  kind: 'tool' | 'technical' | 'people';
  score: 1 | 2 | 3 | 4 | 5 | null;
  logos?: string[];
  toolNames?: string;
}

// Supplied self-assessments remain unchanged. Additional requested tools have no inferred score.
export const RATED_SKILLS: RatedSkill[] = [
  { id: 'python', name: { en: 'Python', id: 'Python' }, kind: 'tool', score: 4, logos: ['python'] },
  { id: 'r', name: { en: 'R', id: 'R' }, kind: 'tool', score: 4, logos: ['r'] },
  { id: 'eda', name: { en: 'Exploratory data analysis', id: 'Analisis data eksploratif' }, kind: 'technical', score: 4 },
  { id: 'cleaning', name: { en: 'Data cleaning', id: 'Pembersihan data' }, kind: 'technical', score: 5 },
  { id: 'forecasting', name: { en: 'Forecasting', id: 'Peramalan' }, kind: 'technical', score: 4 },
  { id: 'etl', name: { en: 'ETL', id: 'ETL' }, kind: 'technical', score: 4 },
  { id: 'sql', name: { en: 'SQL', id: 'SQL' }, kind: 'technical', score: 3 },
  { id: 'postgresql', name: { en: 'PostgreSQL', id: 'PostgreSQL' }, kind: 'tool', score: 3, logos: ['postgresql'] },
  { id: 'dashboards', name: { en: 'Dashboard development', id: 'Pengembangan dashboard' }, kind: 'technical', score: 3 },
  { id: 'leadership', name: { en: 'Team leadership', id: 'Kepemimpinan tim' }, kind: 'people', score: 4 },
  { id: 'excel', name: { en: 'Microsoft Excel', id: 'Microsoft Excel' }, kind: 'tool', score: null, logos: ["microsoftexcel"] },
  { id: 'spss', name: { en: 'IBM SPSS Statistics', id: 'IBM SPSS Statistics' }, kind: 'tool', score: null },
  { id: 'pandas', name: { en: 'pandas', id: 'pandas' }, kind: 'tool', score: null, logos: ["pandas"] },
  { id: 'numpy', name: { en: 'NumPy', id: 'NumPy' }, kind: 'tool', score: null, logos: ["numpy"] },
  { id: 'scipy', name: { en: 'SciPy', id: 'SciPy' }, kind: 'tool', score: null },
  { id: 'scikit-learn', name: { en: 'scikit-learn', id: 'scikit-learn' }, kind: 'tool', score: null, logos: ["scikitlearn"] },
  { id: 'xgboost', name: { en: 'XGBoost', id: 'XGBoost' }, kind: 'tool', score: null },
  { id: 'lightgbm', name: { en: 'LightGBM', id: 'LightGBM' }, kind: 'tool', score: null },
  { id: 'optuna', name: { en: 'Optuna', id: 'Optuna' }, kind: 'tool', score: null },
  { id: 'ets-arima', name: { en: 'ETS / ARIMA', id: 'ETS / ARIMA' }, kind: 'technical', score: null },
  { id: 'streamlit', name: { en: 'Streamlit', id: 'Streamlit' }, kind: 'tool', score: null, logos: ["streamlit"] },
  { id: 'powerbi', name: { en: 'Power BI', id: 'Power BI' }, kind: 'tool', score: null, logos: ["powerbi"] },
  { id: 'tableau', name: { en: 'Tableau', id: 'Tableau' }, kind: 'tool', score: null, logos: ["tableau"] },
  { id: 'jupyter', name: { en: 'Jupyter', id: 'Jupyter' }, kind: 'tool', score: null, logos: ["jupyter"] },
  { id: 'rstudio', name: { en: 'RStudio', id: 'RStudio' }, kind: 'tool', score: null },
  { id: 'git', name: { en: 'Git / GitHub', id: 'Git / GitHub' }, kind: 'tool', score: null, logos: ["git"] },
  { id: 'api', name: { en: 'APIs', id: 'API' }, kind: 'tool', score: null },
  { id: 'docker', name: { en: 'Docker', id: 'Docker' }, kind: 'tool', score: null, logos: ["docker"] },
  { id: 'redis', name: { en: 'Redis', id: 'Redis' }, kind: 'tool', score: null, logos: ["redis"] },
  { id: 'stakeholder', name: { en: 'Stakeholder communication', id: 'Komunikasi pemangku kepentingan' }, kind: 'people', score: null },
  { id: 'coordination', name: { en: 'Project coordination', id: 'Koordinasi proyek' }, kind: 'people', score: null },
  { id: 'writing', name: { en: 'Analytical writing', id: 'Penulisan analitis' }, kind: 'people', score: null },
  { id: 'framing', name: { en: 'Problem framing', id: 'Perumusan masalah' }, kind: 'people', score: null },
  { id: 'presentation', name: { en: 'Presentations', id: 'Presentasi' }, kind: 'people', score: null },
  { id: 'critical-thinking', name: { en: 'Critical thinking', id: 'Berpikir kritis' }, kind: 'people', score: null },
]

export const COMPETENCIES: Competency[] = [
  { id: 'forecasting', label: { en: 'Forecasting & multivariate analysis', id: 'Peramalan & analisis multivariat' }, description: { en: 'A focus on time-dependent patterns, multivariate structure, and practical interpretation.', id: 'Fokus pada pola waktu, struktur multivariat, dan interpretasi praktis.' }, projectIds: ['commodity-ts', 'coffeeshop'] },
  { id: 'ml', label: { en: 'Applied machine learning', id: 'Machine learning terapan' }, description: { en: 'Data cleaning and feature-engineering contributions in collaborative prediction projects.', id: 'Kontribusi pembersihan data dan rekayasa fitur pada proyek prediksi kolaboratif.' }, projectIds: ['gammafest', 'superconductor'] },
  { id: 'statistics', label: { en: 'Statistical reasoning', id: 'Penalaran statistik' }, description: { en: 'Hypothesis testing, model assumptions, and Bayesian inference grounded in analytical work.', id: 'Pengujian hipotesis, asumsi model, dan inferensi Bayesian dalam pekerjaan analitis.' }, projectIds: ['bayesian-spatial', 'consulting-anova'] },
  { id: 'etl', label: { en: 'Data preparation & ETL', id: 'Persiapan data & ETL' }, description: { en: 'Building the data preparation and ETL workflows behind DEKA and FinSight dashboards.', id: 'Membangun persiapan data dan alur ETL untuk dashboard DEKA dan FinSight.' }, projectIds: ['deka', 'finsight'] },
  { id: 'bi', label: { en: 'BI & visualization', id: 'BI & visualisasi' }, description: { en: 'Dashboard implementation and analytical views that make prepared data easier to use.', id: 'Implementasi dashboard dan tampilan analitis agar data siap olah lebih mudah digunakan.' }, projectIds: ['deka', 'finsight', 'coffeeshop'] },
]

// Compatibility for legacy components, which are no longer rendered.
export const PILLARS_DATA: CompetencyPillar[] = COMPETENCIES.map(item => ({ id: item.id, title: item.label.en, iconType: 'bulb', skills: [{ id: item.id, name: item.label.en, projectIds: item.projectIds }] }))
