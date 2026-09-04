import { describe, it, expect } from 'vitest'
import { PROJECTS_DATA } from '../data/projects'
import { CERTIFICATIONS_DATA } from '../data/certifications'
import { PILLARS_DATA } from '../data/skills'
import { EXPERIENCE_DATA } from '../data/experience'
import { PROFILE_DATA } from '../data/profile'

describe('Data Schema & Relational Integrity Seam', () => {
  describe('Profile Data Schema', () => {
    it('has all required profile fields and valid URLs', () => {
      expect(PROFILE_DATA.fullName).toBeTruthy()
      expect(PROFILE_DATA.roleTitle).toBeTruthy()
      expect(PROFILE_DATA.tagline).toBeTruthy()
      expect(PROFILE_DATA.email).toMatch(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)
      expect(PROFILE_DATA.github).toMatch(/^https?:\/\//)
      expect(PROFILE_DATA.linkedin).toMatch(/^https?:\/\//)
      expect(PROFILE_DATA.resumePath).toBeTruthy()
      expect(PROFILE_DATA.avatarPath).toBeTruthy()
    })
  })

  describe('Projects Data Schema', () => {
    it('all projects have unique IDs, required text fields, and non-empty tags', () => {
      const ids = new Set<string>()
      for (const p of PROJECTS_DATA) {
        expect(p.id, `Project must have an id: ${JSON.stringify(p)}`).toBeTruthy()
        expect(ids.has(p.id), `Duplicate project id found: ${p.id}`).toBe(false)
        ids.add(p.id)

        expect(p.title).toBeTruthy()
        expect(p.category).toBeTruthy()
        expect(p.period).toBeTruthy()
        expect(p.summary).toBeTruthy()
        expect(p.problem).toBeTruthy()
        expect(p.methodology).toBeTruthy()
        expect(p.results).toBeTruthy()
        expect(Array.isArray(p.tags)).toBe(true)
        expect(p.tags.length).toBeGreaterThan(0)
      }
    })

    it('all project links (githubUrl, demoUrl, paperUrl) use secure or valid protocols', () => {
      for (const p of PROJECTS_DATA) {
        if (p.githubUrl) {
          expect(p.githubUrl).toMatch(/^https?:\/\//)
        }
        if (p.demoUrl) {
          expect(p.demoUrl).toMatch(/^https?:\/\//)
        }
        if (p.paperUrl) {
          expect(p.paperUrl).toMatch(/^https?:\/\//)
        }
      }
    })
  })

  describe('Certifications Data Schema', () => {
    it('all certificates have unique IDs, titles, issuers, and valid image paths', () => {
      const ids = new Set<string>()
      for (const c of CERTIFICATIONS_DATA) {
        expect(c.id, `Certificate must have an id: ${JSON.stringify(c)}`).toBeTruthy()
        expect(ids.has(c.id), `Duplicate certification id found: ${c.id}`).toBe(false)
        ids.add(c.id)

        expect(c.title).toBeTruthy()
        expect(c.issuer).toBeTruthy()
        expect(c.year).toBeGreaterThanOrEqual(2020)
        expect(c.image).toBeTruthy()
        expect(c.image.startsWith('/') || c.image.startsWith('http')).toBe(true)
      }
    })
  })

  describe('Competency Pillars & Skills Relational Integrity', () => {
    it('all competency pillars contain valid skills and icon types', () => {
      const validIcons = ['bulb', 'robot', 'percentage']
      expect(PILLARS_DATA.length).toBeGreaterThan(0)

      for (const pillar of PILLARS_DATA) {
        expect(pillar.id).toBeTruthy()
        expect(pillar.title).toBeTruthy()
        expect(validIcons).toContain(pillar.iconType)
        expect(pillar.skills.length).toBeGreaterThan(0)

        for (const skill of pillar.skills) {
          expect(skill.id).toBeTruthy()
          expect(skill.name).toBeTruthy()
          expect(Array.isArray(skill.projectIds)).toBe(true)
        }
      }
    })

    it('every project referenced by skills exists in PROJECTS_DATA', () => {
      const validProjectIds = new Set(PROJECTS_DATA.map(p => p.id))
      for (const pillar of PILLARS_DATA) {
        for (const skill of pillar.skills) {
          for (const pid of skill.projectIds) {
            expect(
              validProjectIds.has(pid),
              `Skill "${skill.name}" references non-existent project id: "${pid}"`
            ).toBe(true)
          }
        }
      }
    })
  })

  describe('Experience Data Schema', () => {
    it('all experience items have valid structure, highlights, and badges', () => {
      const ids = new Set<string>()
      for (const exp of EXPERIENCE_DATA) {
        expect(exp.id).toBeTruthy()
        expect(ids.has(exp.id), `Duplicate experience id found: ${exp.id}`).toBe(false)
        ids.add(exp.id)

        expect(exp.role).toBeTruthy()
        expect(exp.organization).toBeTruthy()
        expect(exp.period).toBeTruthy()
        expect(exp.summary).toBeTruthy()
        expect(Array.isArray(exp.highlights)).toBe(true)
        expect(exp.highlights.length).toBeGreaterThan(0)
        expect(exp.badgeText).toBeTruthy()
        expect(exp.badgeGradient).toBeTruthy()
      }
    })
  })
})
