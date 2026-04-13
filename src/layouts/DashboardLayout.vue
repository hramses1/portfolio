<script setup>
/**
 * Modern Clean Layout for Hector Arismendi's Portfolio.
 */
import { ref, onMounted } from 'vue'
import { useSystemStore } from '../store/system.js'

const store = useSystemStore()
const activeSection = ref('home')

const navItems = [
  { id: 'home', label: '01_INICIO', icon: '◈' },
  { id: 'experience', label: '02_TRAYECTORIA', icon: '⚡' },
  { id: 'projects', label: '03_PROYECTOS', icon: '📁' },
  { id: 'skills', label: '04_CONOCIMIENTOS', icon: '⚙' },
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
  <div class="bg-tech-bg text-tech-text selection:bg-tech-primary/10 min-h-screen selection:text-tech-primary">
    
    <!-- Minimal Side Navigation (Dock) - Desktop Only -->
    <div class="fixed left-0 top-0 h-full w-24 z-50 group/nav hidden xl:block">
      <nav class="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-8 transition-all duration-700 ease-in-out -translate-x-full group-hover/nav:translate-x-8">
        <button v-for="item in navItems" :key="item.id" 
                @click="scrollTo(item.id)"
                class="group relative flex items-center gap-4 transition-all duration-500">
          <span class="text-[10px] font-mono tracking-widest text-slate-500 group-hover:text-tech-primary transition-colors opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 whitespace-nowrap">
            {{ item.label }}
          </span>
          <div :class="[
            'w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500 backdrop-blur-md shrink-0 shadow-md',
            activeSection === item.id ? 'border-tech-primary bg-tech-primary text-white shadow-lg shadow-tech-primary/20' : 'border-slate-300 bg-slate-50 text-slate-400 hover:border-tech-primary/30 hover:text-tech-primary'
          ]">
            {{ item.icon }}
          </div>
        </button>
      </nav>
      <div class="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-slate-300 rounded-r-full group-hover/nav:opacity-0 transition-opacity"></div>
    </div>

    <!-- Mobile Navigation Bar -->
    <nav class="fixed bottom-0 left-0 w-full h-16 border-t border-slate-200 bg-slate-50/90 backdrop-blur-xl z-50 flex items-center justify-around xl:hidden px-4">
      <button v-for="item in navItems" :key="item.id" 
              @click="scrollTo(item.id)"
              class="flex flex-col items-center gap-1 transition-all">
        <div :class="[
          'text-lg transition-colors',
          activeSection === item.id ? 'text-tech-primary' : 'text-slate-400'
        ]">
          {{ item.icon }}
        </div>
        <span class="text-[8px] font-mono tracking-tighter uppercase" :class="activeSection === item.id ? 'text-tech-primary font-bold' : 'text-slate-500'">
          {{ item.id }}
        </span>
      </button>
    </nav>

    <!-- Top Header (Clean) -->
    <header class="fixed top-0 left-0 w-full h-16 md:h-20 border-b border-slate-200 bg-slate-100/80 backdrop-blur-xl z-40 px-6 md:px-12 flex items-center justify-between">
      <div class="flex items-center gap-4 md:gap-6">
        <span class="font-black text-lg md:text-xl tracking-tighter text-tech-text">PORT<span class="text-tech-primary">FOLIO</span></span>
        <div class="h-4 w-[1px] bg-slate-300 hidden sm:block"></div>
        <div class="hidden sm:flex items-center gap-3 text-[10px] font-mono text-slate-500 tracking-widest uppercase">
          <span class="w-2 h-2 rounded-full bg-tech-success shadow-sm"></span>
          SISTEMA_ACTIVO: {{ store.formattedUptime }}
        </div>
      </div>
      <div class="flex items-center gap-4 md:gap-8">
        <button @click="scrollTo('contact')" class="text-[9px] md:text-[10px] font-mono tracking-widest text-slate-600 hover:text-tech-primary transition-colors border-b border-slate-300 pb-1 uppercase">CONTACTAR</button>
        <div class="hidden md:block px-4 py-2 bg-slate-200/50 border border-slate-200 rounded-full text-[9px] font-mono tracking-widest text-slate-700 uppercase">
          Versión_2.0
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="relative z-10 pt-20">
      <RouterView />
    </main>

    <!-- Simple Footer -->
    <footer class="py-20 text-center border-t border-slate-100 relative z-10 bg-white">
      <p class="text-[10px] font-mono text-slate-400 tracking-[0.4em] uppercase">Desarrollado con excelencia en QA & Backend</p>
    </footer>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>
