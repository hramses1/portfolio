import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

/**
 * Global System Store for the Portfolio.
 * Manages metrics, active nodes, and health status.
 */
export const useSystemStore = defineStore('system', () => {
  const health = ref(100)
  const activeAlerts = ref([])
  const currentEnvironment = ref('PRODUCTION')
  const uptime = ref(0)

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
    tick,
    triggerAlert,
    formattedUptime
  }
})
