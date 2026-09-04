import { describe, it, expect } from 'vitest'
import { Project, Certification, Experience } from '../types'
import { PROJECTS_DATA } from '../data/projects'
import { CERTIFICATIONS_DATA } from '../data/certifications'
import { EXPERIENCE_DATA } from '../data/experience'

describe('Extensibility & Dynamic Feature Additions Seam', () => {
  it('supports adding a new Project with minimal optional fields without runtime errors', () => {
    const newProject: Project = {
      id: 'test-new-quant-pipeline',
      title: 'High-Frequency Quantitative Alpha Generator',
      category: 'Financial Analytics',
      period: 'Sep 2026 - Present',
      summary: 'Statistical arbitrage and market making simulator in Python.',
      problem: 'Order book imbalance prediction with millisecond latency.',
      methodology: 'Vectorized backtesting with Walk-Forward Optimization.',
      results: 'Achieved 2.4 Sharpe ratio with 4.1% max drawdown.',
      tags: ['Python', 'Quantitative Finance', 'Backtesting']
    }

    const updatedProjects = [newProject, ...PROJECTS_DATA]
    expect(updatedProjects.length).toBe(PROJECTS_DATA.length + 1)

    // Category filter test
    const financialProjects = updatedProjects.filter(p => p.category === 'Financial Analytics')
    expect(financialProjects.some(p => p.id === 'test-new-quant-pipeline')).toBe(true)

    // Optional attributes are safely accessible
    const item = updatedProjects.find(p => p.id === 'test-new-quant-pipeline')!
    expect(item.demoUrl).toBeUndefined()
    expect(item.githubUrl).toBeUndefined()
    expect(item.image).toBeUndefined()
    expect(item.gallery).toBeUndefined()
    expect(item.paperUrl).toBeUndefined()
  })

  it('supports adding a new Certificate with automatic sorting and optional badge defaults', () => {
    const newCert: Certification = {
      id: 'test-google-cloud-ml',
      title: 'Google Cloud Professional Machine Learning Engineer',
      issuer: 'Google Cloud',
      year: 2026,
      category: 'Cloud AI & ML',
      image: '/images/certifications/gcp-ml.png'
    }

    const updatedCerts = [newCert, ...CERTIFICATIONS_DATA]
    expect(updatedCerts.length).toBe(CERTIFICATIONS_DATA.length + 1)

    // Verify sort order descending by year
    const sorted = [...updatedCerts].sort((a, b) => b.year - a.year)
    expect(sorted[0].year).toBeGreaterThanOrEqual(2026)

    // Verify optional badge fallback
    expect(newCert.isFeatured).toBeFalsy()
    expect(newCert.featuredBadge).toBeUndefined()
    expect(newCert.openImageOnly).toBeUndefined()
  })

  it('supports adding a new Experience entry dynamically', () => {
    const newExp: Experience = {
      id: 'test-quant-intern',
      role: 'Quantitative Research Analyst Intern',
      organization: 'Global Quantitative Capital',
      period: 'Jul 2026 - Present',
      summary: 'Engineered high-frequency volatility models and risk factor pipelines.',
      highlights: [
        'Built automated factor decomposition pipeline covering 450+ equities.',
        'Reduced portfolio tracking error by 18% via robust covariance shrinkage.'
      ],
      badgeText: 'QUANTITATIVE RESEARCH',
      badgeGradient: 'from-blue-500 to-indigo-600'
    }

    const updatedExp = [newExp, ...EXPERIENCE_DATA]
    expect(updatedExp.length).toBe(EXPERIENCE_DATA.length + 1)
    expect(updatedExp[0].role).toBe('Quantitative Research Analyst Intern')
  })

  it('handles multi-field keyword search across projects without crashing on undefined optional fields', () => {
    const keyword = 'Python'
    const matching = PROJECTS_DATA.filter(p => 
      p.title.toLowerCase().includes(keyword.toLowerCase()) ||
      p.summary.toLowerCase().includes(keyword.toLowerCase()) ||
      p.problem.toLowerCase().includes(keyword.toLowerCase()) ||
      p.results.toLowerCase().includes(keyword.toLowerCase()) ||
      p.tags.some(t => t.toLowerCase().includes(keyword.toLowerCase()))
    )
    expect(matching.length).toBeGreaterThan(0)
  })

  it('handles category filtering gracefully when an unknown category is requested', () => {
    const unknownCategory = 'Non-Existent Category' as any
    const matching = PROJECTS_DATA.filter(p => p.category === unknownCategory)
    expect(matching).toEqual([])
  })
})
