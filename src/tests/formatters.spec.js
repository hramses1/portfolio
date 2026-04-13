import { describe, it, expect } from 'vitest'
import { formatSystemTime, calculateDuration } from '../utils/formatters.js'

describe('System Formatters', () => {
  describe('formatSystemTime', () => {
    it('debe formatear la fecha a HH:mm:ss', () => {
      const date = new Date('2026-04-12T14:30:05')
      const result = formatSystemTime(date)
      expect(result).toBe('14:30:05')
    })

    it('debe rellenar con ceros las horas/minutos/segundos de un solo dígito', () => {
      const date = new Date('2026-04-12T05:02:09')
      const result = formatSystemTime(date)
      expect(result).toBe('05:02:09')
    })
  })

  describe('calculateDuration', () => {
    it('debe calcular correctamente meses entre dos fechas del mismo año', () => {
      const result = calculateDuration('ene. 2024', 'abr. 2024')
      expect(result).toBe('(3 meses)')
    })

    it('debe calcular correctamente un año exacto', () => {
      const result = calculateDuration('ene. 2023', 'ene. 2024')
      expect(result).toBe('(1 año)')
    })

    it('debe calcular años y meses combinados', () => {
      const result = calculateDuration('nov. 2023', 'abr. 2025')
      expect(result).toBe('(1 año y 5 meses)')
    })

    it('debe manejar la palabra "actualidad" usando la fecha de hoy', () => {
      const now = new Date()
      const startYear = now.getFullYear() - 1
      const monthsMap = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sept', 'oct', 'nov', 'dic']
      const startMonth = monthsMap[now.getMonth()]
      
      const result = calculateDuration(`${startMonth}. ${startYear}`, 'actualidad')
      expect(result).toBe('(1 año)')
    })
  })
})
