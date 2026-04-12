<script setup>
/**
 * Modern Web Layout for Hector Arismendi's Portfolio.
 */
import { ref, onMounted } from 'vue'
import { useSystemStore } from '../store/system.js'

const store = useSystemStore()
const activeSection = ref('home')

const navItems = [
  { id: 'home', label: '01_INICIO', icon: '◈' },
  { id: 'experience', label: '02_TRAYECTORIA', icon: '⚡' },
  { id: 'projects', label: '03_PROYECTOS', icon: '📁' },
  { id: 'skills', label: '04_STACK', icon: '⚙' },
  { id: 'education', label: '05_ACADEMIA', icon: '⌬' },
  { id: 'contact', label: '06_CONTACTO', icon: '✉' }
]

const scrollTo = (id) => {
  activeSection.value = id
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  setInterval(() => store.tick(), 1000)
})
</script>

<template>
  <div class="bg-system-bg text-gray-200 selection:bg-system-infra/40 min-h-screen selection:text-white">
    <!-- Fixed Background Elements -->
    <div class="fixed inset-0 pointer-events-none">
      <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-system-infra/10 rounded-full blur-[120px]"></div>
      <div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-system-success/5 rounded-full blur-[120px]"></div>
      <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-50 contrast-150"></div>
    </div>

    <!-- Minimal Side Navigation (Dock) - Desktop Only -->
    <div class="fixed left-0 top-0 h-full w-24 z-50 group/nav hidden xl:block">
      <nav class="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-8 transition-all duration-700 ease-in-out -translate-x-full group-hover/nav:translate-x-8">
        <button v-for="item in navItems" :key="item.id" 
                @click="scrollTo(item.id)"
                class="group relative flex items-center gap-4 transition-all duration-500">
          <span class="text-[10px] font-mono tracking-widest text-gray-400 group-hover:text-system-infra transition-colors opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 whitespace-nowrap">
            {{ item.label }}
          </span>
          <div :class="[
            'w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500 backdrop-blur-md shrink-0',
            activeSection === item.id ? 'border-system-infra bg-system-infra/10 text-system-infra shadow-[0_0_20px_rgba(221,214,254,0.3)]' : 'border-white/10 bg-white/5 text-gray-500 hover:border-white/30 hover:text-white'
          ]">
            {{ item.icon }}
          </div>
        </button>
      </nav>
      <div class="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-white/5 rounded-r-full group-hover/nav:opacity-0 transition-opacity"></div>
    </div>

    <!-- Mobile Navigation Bar -->
    <nav class="fixed bottom-0 left-0 w-full h-16 border-t border-white/5 bg-black/80 backdrop-blur-xl z-50 flex items-center justify-around xl:hidden px-4">
      <button v-for="item in navItems" :key="item.id" 
              @click="scrollTo(item.id)"
              class="flex flex-col items-center gap-1 transition-all">
        <div :class="[
          'text-lg transition-colors',
          activeSection === item.id ? 'text-system-infra' : 'text-gray-500'
        ]">
          {{ item.icon }}
        </div>
        <span class="text-[8px] font-mono tracking-tighter uppercase" :class="activeSection === item.id ? 'text-white' : 'text-gray-600'">
          {{ item.id }}
        </span>
      </button>
    </nav>

    <!-- Top Status (Glassmorphism) -->
    <header class="fixed top-0 left-0 w-full h-16 md:h-20 border-b border-white/5 backdrop-blur-xl z-40 px-6 md:px-12 flex items-center justify-between">
      <div class="flex items-center gap-4 md:gap-6">
        <span class="font-black text-lg md:text-xl tracking-tighter text-white">PORT<span class="text-system-infra">FOLIO</span></span>
        <div class="h-4 w-[1px] bg-white/10 hidden sm:block"></div>
        <div class="hidden sm:flex items-center gap-3 text-[10px] font-mono text-gray-500 tracking-widest">
          <span class="w-2 h-2 rounded-full bg-system-success animate-pulse"></span>
          NODE_STABLE: {{ store.formattedUptime }}
        </div>
      </div>
      <div class="flex items-center gap-4 md:gap-8">
        <button @click="scrollTo('contact')" class="text-[9px] md:text-[10px] font-mono tracking-widest hover:text-system-infra transition-colors border-b border-white/10 pb-1 uppercase">CONTACT_ME</button>
        <div class="hidden md:block px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[9px] font-mono tracking-widest text-white">
          v2.0_DEPLOYED
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="relative z-10 pt-20">
      <RouterView />
    </main>

    <!-- Simple Footer -->
    <footer class="py-20 text-center border-t border-white/5 relative z-10">
      <p class="text-[10px] font-mono text-gray-600 tracking-[0.4em] uppercase">Built with Excellence in QA & Backend</p>
    </footer>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>



<style scoped>
.router-link-active {
  @apply text-system-infra border-b-2 border-system-infra;
}
</style>
