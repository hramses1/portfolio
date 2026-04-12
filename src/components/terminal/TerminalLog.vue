<script setup>
/**
 * TerminalLog Component.
 * Simulates a backend terminal outputting system logs/experience.
 */
import { ref, onMounted, onUnmounted } from 'vue'

const logs = ref([
  { type: 'info', timestamp: new Date().toISOString(), message: 'INITIALIZING_EXPERIENCE_MODULE...' },
  { type: 'success', timestamp: new Date().toISOString(), message: 'CONNECTION_ESTABLISHED: DATABASE_PORT_5432' }
])

const experience = [
  '>> LOADED: Senior QA Automation Engineer @ TechCorp (2022-Present)',
  '>> ROLE: Lead automation strategy for microservices architecture.',
  '>> TECH_STACK: Java, Selenium, RestAssured, Jenkins.',
  '>> STATUS: 100% SUCCESS RATE IN CI/CD PIPELINES.',
  '>> LOADED: Backend Developer @ SoftSolutions (2020-2022)',
  '>> ROLE: Designed and implemented scalable RESTful APIs.',
  '>> TECH_STACK: Node.js, Express, MongoDB, Docker.',
  '>> SYSTEM_CHECK: ALL_SYSTEMS_OPERATIONAL'
]

let interval

onMounted(() => {
  let index = 0
  interval = setInterval(() => {
    if (index < experience.length) {
      logs.value.push({
        type: experience[index].includes('SUCCESS') || experience[index].includes('OPERATIONAL') ? 'success' : 'info',
        timestamp: new Date().toISOString(),
        message: experience[index]
      })
      index++
      
      // Keep only last 15 logs for performance
      if (logs.value.length > 15) logs.value.shift()
    } else {
      clearInterval(interval)
    }
  }, 800)
})

onUnmounted(() => clearInterval(interval))
</script>

<template>
  <div class="bg-black/80 border border-white/10 rounded-lg overflow-hidden font-mono text-[11px] shadow-2xl">
    <!-- Terminal Header -->
    <div class="bg-white/5 px-4 py-2 border-b border-white/10 flex items-center justify-between">
      <div class="flex gap-2">
        <div class="w-2 h-2 rounded-full bg-red-500/50"></div>
        <div class="w-2 h-2 rounded-full bg-yellow-500/50"></div>
        <div class="w-2 h-2 rounded-full bg-green-500/50"></div>
      </div>
      <span class="text-gray-500 text-[9px] tracking-widest uppercase">system_logs.sh</span>
    </div>

    <!-- Terminal Content -->
    <div class="p-4 h-64 overflow-y-auto scrollbar-hide flex flex-col gap-1">
      <div v-for="(log, i) in logs" :key="i" class="flex gap-3">
        <span class="text-gray-600 shrink-0">[{{ log.timestamp.split('T')[1].split('.')[0] }}]</span>
        <span :class="{
          'text-system-info': log.type === 'info',
          'text-system-success': log.type === 'success',
          'text-system-error': log.type === 'error'
        }">{{ log.message }}</span>
      </div>
      <div class="animate-pulse inline-block w-2 h-4 bg-system-info mt-1"></div>
    </div>
  </div>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
