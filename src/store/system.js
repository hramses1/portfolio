import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { ui } from '../i18n/ui.js'

const LANG_KEY = 'portfolio-lang'

/**
 * Picks the initial language: saved choice, then browser language, then Spanish.
 * @returns {'es'|'en'}
 */
function detectLang() {
  try {
    const saved = localStorage.getItem(LANG_KEY)
    if (ui[saved]) return saved
  } catch { /* storage bloqueado */ }
  return typeof navigator !== 'undefined' && navigator.language?.startsWith('en') ? 'en' : 'es'
}

/**
 * Global System Store for the Portfolio.
 * Manages metrics, active nodes, and health status.
 */
export const useSystemStore = defineStore('system', () => {
  const health = ref(100)
  const activeAlerts = ref([])
  const currentEnvironment = ref('PRODUCTION')
  const uptime = ref(0)
  const activeRole = ref('all') // 'all' | 'dev' | 'qa'
  const lang = ref(detectLang()) // 'es' | 'en'

  /**
   * Changes the interface language and remembers it for the next visit.
   * @param {'es'|'en'} value
   */
  function setLang(value) {
    if (!ui[value]) return
    lang.value = value
    try { localStorage.setItem(LANG_KEY, value) } catch { /* storage bloqueado */ }
    if (typeof document !== 'undefined') document.documentElement.lang = value
  }

  /**
   * Translates a UI key into the active language.
   * @param {string} key
   * @returns {string}
   */
  function t(key) {
    return ui[lang.value][key] ?? key
  }

  /**
   * Sets the active role filter.
   * @param {'all'|'dev'|'qa'} role 
   */
  function setRole(role) {
    activeRole.value = role
  }

  /**
   * Increments the system uptime.
   */
  function tick() {
    uptime.value++
  }

  /**
   * Triggers a system alert.
   * @param {string} message 
   * @param {'info'|'warning'|'error'} type 
   */
  function triggerAlert(message, type = 'info') {
    activeAlerts.value.push({
      id: Date.now(),
      message,
      type,
      timestamp: new Date().toISOString()
    })
    
    if (type === 'error') health.value = Math.max(0, health.value - 5)
  }

  const formattedUptime = computed(() => {
    const h = String(Math.floor(uptime.value / 3600)).padStart(2, '0')
    const m = String(Math.floor((uptime.value % 3600) / 60)).padStart(2, '0')
    const s = String(uptime.value % 60).padStart(2, '0')
    return `${h}:${m}:${s}`
  })

  return {
    health,
    activeAlerts,
    currentEnvironment,
    uptime,
    activeRole,
    lang,
    tick,
    triggerAlert,
    setRole,
    setLang,
    t,
    formattedUptime
  }
})
