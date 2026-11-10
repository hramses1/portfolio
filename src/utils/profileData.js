import { profileEs } from './profile.es.js'
import { profileEn } from './profile.en.js'

const profiles = { es: profileEs, en: profileEn }

/**
 * Returns the professional profile for a given language.
 * @param {'es'|'en'} lang - Active language.
 * @returns {object} Profile data (falls back to Spanish).
 */
export const getProfile = (lang) => profiles[lang] ?? profileEs
