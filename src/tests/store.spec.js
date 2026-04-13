import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useSystemStore } from '../store/system.js'

describe('System Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('debe tener el rol "all" por defecto', () => {
    const store = useSystemStore()
    expect(store.activeRole).toBe('all')
  })

  it('debe cambiar el rol correctamente', () => {
    const store = useSystemStore()
    store.setRole('qa')
    expect(store.activeRole).toBe('qa')
    store.setRole('dev')
    expect(store.activeRole).toBe('dev')
  })

  it('debe incrementar el uptime al hacer tick', () => {
    const store = useSystemStore()
    expect(store.uptime).toBe(0)
    store.tick()
    expect(store.uptime).toBe(1)
  })

  it('debe formatear el uptime correctamente', () => {
    const store = useSystemStore()
    store.uptime = 3661 // 1h 1m 1s
    expect(store.formattedUptime).toBe('01:01:01')
  })

  it('debe reducir la salud cuando se dispara una alerta de error', () => {
    const store = useSystemStore()
    const initialHealth = store.health
    store.triggerAlert('Error crítico', 'error')
    expect(store.health).toBeLessThan(initialHealth)
    expect(store.activeAlerts.length).toBe(1)
  })
})
