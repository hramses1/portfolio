/**
 * Collection of formatting utilities for the System Monitor.
 */

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
