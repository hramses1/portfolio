/**
 * Collection of formatting utilities for the System Monitor.
 */

/**
 * Calculates the duration between two date strings.
 * @param {string} start - Start date (e.g., 'nov. 2023')
 * @param {string} end - End date (e.g., 'abr. 2025' or 'actualidad')
 * @returns {string} Formatted duration (e.g., '1 año y 6 meses')
 */
export function calculateDuration(start, end) {
  const monthsMap = {
    'ene': 0, 'feb': 1, 'mar': 2, 'abr': 3, 'may': 4, 'jun': 5,
    'jul': 6, 'ago': 7, 'sept': 8, 'oct': 9, 'nov': 10, 'dic': 11
  }

  const parseDate = (str) => {
    if (str.toLowerCase().includes('actualidad')) return new Date()
    const [month, year] = str.split('. ')
    return new Date(parseInt(year), monthsMap[month.toLowerCase()] || 0)
  }

  const startDate = parseDate(start)
  const endDate = parseDate(end)

  let totalMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth())
  if (totalMonths < 0) totalMonths = 0

  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12

  let result = []
  if (years > 0) result.push(`${years} ${years === 1 ? 'año' : 'años'}`)
  if (months > 0) result.push(`${months} ${months === 1 ? 'mes' : 'meses'}`)

  return result.length > 0 ? `(${result.join(' y ')})` : ''
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
