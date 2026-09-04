import { CompetencyPillar } from '../types'

export const PILLARS_DATA: CompetencyPillar[] = [
  {
    id: "bi-engineering",
    title: "BI & Analytics Engineering",
    iconType: "bulb",
    skills: [
      { id: "star-schema", name: "Star Schema Modeling", projectIds: ["deka", "susenas", "gsmarena"] },
      { id: "adv-dax", name: "Advanced DAX & Measures", projectIds: ["deka", "finsight"] },
      { id: "sql-ctes", name: "Analytical SQL (CTEs)", projectIds: ["deka", "susenas"] },
      { id: "exec-dashboards", name: "Executive Dashboards", projectIds: ["finsight", "deka", "susenas"] }
    ]
  },
  {
    id: "predictive-ml",
    title: "Predictive Analytics & Machine Learning",
    iconType: "robot",
    skills: [
      { id: "tabular-ml", name: "Tabular ML (LightGBM/XGBoost)", projectIds: ["gammafest", "superconductor", "nox-stacked"] },
      { id: "time-series", name: "Time Series (ETS/LSTM/Prophet)", projectIds: ["commodity-ts"] },
      { id: "customer-analytics", name: "Customer & RFM Analytics", projectIds: ["coffeeshop", "skincare-nlp"] },
      { id: "ab-testing", name: "Hypothesis & A/B Testing", projectIds: ["flight-pricing", "consulting-anova"] }
    ]
  },
  {
    id: "decision-science",
    title: "Decision Science & Quantitative Risk",
    iconType: "percentage",
    skills: [
      { id: "stress-testing", name: "Scenario Stress Testing", projectIds: ["finsight", "minyakita"] },
      { id: "cost-matrix", name: "Cost-Sensitive Loss Matrix", projectIds: ["gammafest", "finsight"] },
      { id: "bayesian-survival", name: "Bayesian & Survival Models", projectIds: ["bayesian-spatial", "hiv-survival"] },
      { id: "metric-dollar", name: "Metric-to-Dollar Value", projectIds: ["finsight", "boxcox-gdp"] }
    ]
  }
]
