import { describe, it, expect } from 'vitest'
import { formatSystemTime } from '../utils/formatters.js'

describe('System Formatters', () => {
  it('should format date to HH:mm:ss', () => {
    const date = new Date('2026-04-12T14:30:05')
    const result = formatSystemTime(date)
    expect(result).toBe('14:30:05')
  })

  it('should pad single digit hours/minutes/seconds', () => {
    const date = new Date('2026-04-12T05:02:09')
    const result = formatSystemTime(date)
    expect(result).toBe('05:02:09')
  })
})
