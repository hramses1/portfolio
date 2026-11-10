/**
 * Collection of formatting utilities for the System Monitor.
 */

const MONTHS = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic']
// Equivalentes en inglés que difieren del español (el resto coincide por prefijo).
const MONTHS_EN = { jan: 0, apr: 3, aug: 7, dec: 11 }

const LABELS = {
  es: { year: 'año', years: 'años', month: 'mes', months: 'meses', and: 'y' },
  en: { year: 'year', years: 'years', month: 'month', months: 'months', and: 'and' }
}

/**
 * Calculates the duration between two date strings.
 * @param {string} start - Start date (e.g., 'nov. 2023' or 'Nov 2023')
 * @param {string} end - End date (e.g., 'abr. 2025', 'Apr 2025', 'actualidad' or 'present')
 * @param {'es'|'en'} [lang='es'] - Language of the returned text.
 * @returns {string} Formatted duration (e.g., '(1 año y 6 meses)' or '(1 year and 6 months)')
 */
export function calculateDuration(start, end, lang = 'es') {
  const parseDate = (str) => {
    const text = str.toLowerCase()
    if (text.includes('actualidad') || text.includes('present')) return new Date()
    const [month, year] = text.replace('.', '').split(' ')
    const key = month.slice(0, 3)
    const index = MONTHS.indexOf(key)
    return new Date(parseInt(year), index >= 0 ? index : (MONTHS_EN[key] ?? 0))
  }

  const startDate = parseDate(start)
  const endDate = parseDate(end)

  let totalMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth())
  if (totalMonths < 0) totalMonths = 0

  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12
  const l = LABELS[lang] ?? LABELS.es

  let result = []
  if (years > 0) result.push(`${years} ${years === 1 ? l.year : l.years}`)
  if (months > 0) result.push(`${months} ${months === 1 ? l.month : l.months}`)

  return result.length > 0 ? `(${result.join(` ${l.and} `)})` : ''
}

/**
 * Formats a timestamp into a human-readable system log format.
 * @param {string|Date} date - The date to format.
 * @returns {string} Formatted time string (HH:mm:ss).
 */
export function formatSystemTime(date) {
  const d = new Date(date)
  const h = String(d.getHours()).padStart(2, '0')
  const m = String(d.getMinutes()).padStart(2, '0')
  const s = String(d.getSeconds()).padStart(2, '0')
  return `${h}:${m}:${s}`
}

/**
 * Simulates a delay for system operations.
 * @param {number} ms - Milliseconds to wait.
 * @returns {Promise<void>}
 */
export const systemDelay = (ms) => new Promise(resolve => setTimeout(resolve, ms))
