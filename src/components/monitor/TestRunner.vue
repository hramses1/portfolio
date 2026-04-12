<script setup>
/**
 * TestRunner Component.
 * Simulates an automated test runner (like Cypress or Jest UI).
 */
import { ref, onMounted } from 'vue'

const tests = ref([
  { id: 1, name: 'REST_API_AUTH_VALIDATION', status: 'PENDING', time: '0ms' },
  { id: 2, name: 'UI_END_TO_END_CHECKOUT', status: 'PENDING', time: '0ms' },
  { id: 3, name: 'DB_MIGRATION_INTEGRITY', status: 'PENDING', time: '0ms' },
  { id: 4, name: 'SECURITY_PATCH_VULNERABILITY', status: 'PENDING', time: '0ms' }
])

const runTests = () => {
  tests.value.forEach((test, index) => {
    setTimeout(() => {
      test.status = 'RUNNING'
      setTimeout(() => {
        test.status = 'PASSED'
        test.time = `${(Math.random() * 500 + 100).toFixed(0)}ms`
      }, 1000)
    }, index * 1200)
  })
}

onMounted(() => {
  setTimeout(runTests, 1000)
})
</script>

<template>
  <div class="bg-black/80 border border-white/10 rounded-lg overflow-hidden font-mono text-[11px] shadow-2xl">
    <!-- Header -->
    <div class="bg-white/5 px-4 py-2 border-b border-white/10 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <div class="w-3 h-3 border border-white/20 flex items-center justify-center">
          <div class="w-1.5 h-1.5 bg-system-success"></div>
        </div>
        <span class="text-white text-[10px] tracking-widest uppercase">qa_test_runner_v2</span>
      </div>
      <div class="flex gap-4">
        <span class="text-gray-500 text-[9px]">TOTAL: {{ tests.length }}</span>
        <span class="text-system-success text-[9px]">PASSED: {{ tests.filter(t => t.status === 'PASSED').length }}</span>
      </div>
    </div>

    <!-- Runner Table -->
    <div class="p-2 flex flex-col gap-1 max-h-64 overflow-y-auto">
      <div v-for="test in tests" :key="test.id" 
           class="flex items-center justify-between p-2 hover:bg-white/5 transition-colors group">
        <div class="flex items-center gap-3">
          <div :class="{
            'w-1.5 h-1.5 rounded-full': true,
            'bg-gray-600 animate-pulse': test.status === 'PENDING',
            'bg-system-info animate-spin': test.status === 'RUNNING',
            'bg-system-success shadow-[0_0_8px_rgba(167,243,208,0.5)]': test.status === 'PASSED'
          }"></div>
          <span class="text-gray-400 group-hover:text-white transition-colors">{{ test.name }}</span>
        </div>
        <div class="flex gap-4 text-gray-500 text-[9px]">
           <span>{{ test.time }}</span>
           <span :class="{
             'text-system-success font-bold': test.status === 'PASSED',
             'text-system-info': test.status === 'RUNNING'
           }">[{{ test.status }}]</span>
        </div>
      </div>
    </div>

    <!-- Progress Bar -->
    <div class="h-1 bg-white/5 relative">
      <div class="absolute h-full bg-system-success transition-all duration-500"
           :style="{ width: `${(tests.filter(t => t.status === 'PASSED').length / tests.length) * 100}%` }"></div>
    </div>
  </div>
</template>
