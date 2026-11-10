<script setup>
/**
 * SystemHome - Modern Clean Tech Landing Page.
 * Showcases Hector Arismendi's profile with a soft, professional aesthetic.
 */
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { getProfile } from '../utils/profileData.js'
import { useSystemStore } from '../store/system.js'
import { calculateDuration } from '../utils/formatters.js'

const store = useSystemStore()
const profile = computed(() => getProfile(store.lang))
const t = store.t
const showAllCerts = ref(false)
const certsLimit = 8

const activeProject = ref(null)
const lightboxIndex = ref(null)

/**
 * Opens the detail modal of a project that has extended information.
 * @param {object} project - Project entry from the profile data.
 */
const openProject = (project) => {
  if (!project.detail) return
  activeProject.value = project
  lightboxIndex.value = null
}

/**
 * Closes the project detail modal and any screenshot opened from it.
 */
const closeProject = () => {
  activeProject.value = null
  lightboxIndex.value = null
}

/**
 * Opens the gallery of the active project on a given screenshot.
 * @param {number} index - Position of the screenshot inside the gallery.
 */
const openLightbox = (index) => {
  lightboxIndex.value = index
}

/**
 * Moves through the gallery of the active project, wrapping around both ends.
 * @param {number} step - Offset to apply to the current index (-1 or 1).
 */
const moveLightbox = (step) => {
  if (lightboxIndex.value === null || !activeProject.value) return
  const total = activeProject.value.detail.gallery.length
  lightboxIndex.value = (lightboxIndex.value + step + total) % total
}

/**
 * Closes the topmost overlay (screenshot first, then the modal) when Escape is pressed.
 * @param {KeyboardEvent} event - Keyboard event fired on the document.
 */
const handleEscape = (event) => {
  if (event.key !== 'Escape') return
  if (lightboxIndex.value !== null) lightboxIndex.value = null
  else if (activeProject.value) closeProject()
}

// Evita que la página siga scrolleando detrás del modal abierto.
watch(activeProject, (project) => {
  document.body.style.overflow = project ? 'hidden' : ''
})

onMounted(() => document.addEventListener('keydown', handleEscape))
onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
  document.body.style.overflow = ''
})

/**
 * Parses start and end from period string for duration calculation.
 */
const getDuration = (period) => {
  const parts = period.split(' - ')
  if (parts.length < 2) return ''
  return calculateDuration(parts[0], parts[1], store.lang)
}

/**
 * Filtered Experience based on active role.
 */
const filteredExperience = computed(() => {
  if (store.activeRole === 'all') return profile.value.experience
  if (store.activeRole === 'dev') {
    return profile.value.experience.filter(exp => 
      exp.role.toLowerCase().includes('developer') || 
      exp.company.toLowerCase().includes('freelance')
    )
  }
  if (store.activeRole === 'qa') {
    return profile.value.experience.filter(exp => 
      exp.role.toLowerCase().includes('assurance') ||
      exp.role.toLowerCase().includes('automation') ||
      exp.role.toLowerCase().includes('qa')
    )
  }
  return profile.value.experience
})

/**
 * Dynamic Hero Content
 */
const heroContent = computed(() => {
  const k = { qa: 'Qa', dev: 'Dev' }[store.activeRole] ?? 'All'
  return { title: t(`hero${k}Title`), description: t(`hero${k}Text`) }
})

/**
 * Dynamic Experience Section Content
 */
const experienceContent = computed(() => {
  const k = { qa: 'Qa', dev: 'Dev' }[store.activeRole] ?? 'All'
  return { title: t(`exp${k}Title`), description: t(`exp${k}Text`) }
})

const visibleCertifications = computed(() => {
  return showAllCerts.value ? profile.value.certifications : profile.value.certifications.slice(0, certsLimit)
})

const getLevelStyle = (level) => ({ width: `${level}%` })

/**
 * Handles smooth scrolling to sections.
 * @param {string} id 
 */
const scrollToSection = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div class="flex flex-col">
    
    <!-- SECCIÓN 01: INICIO (CORE) -->
    <section id="home" class="min-h-screen flex items-center px-6 md:px-12 lg:px-24 relative overflow-hidden bg-tech-bg">
      <div class="absolute top-0 right-0 w-1/2 h-full bg-slate-200/30 skew-x-[-12deg] translate-x-20 hidden lg:block"></div>
      
      <div class="max-w-5xl z-10 py-20">
        <h2 class="text-[8px] md:text-[10px] font-mono tracking-[0.4em] md:tracking-[0.6em] text-tech-primary mb-4 md:mb-6 animate-in fade-in slide-in-from-left-10 duration-1000 uppercase font-bold">
          {{ t('heroKicker') }}
        </h2>
        <h1 class="text-5xl sm:text-7xl lg:text-9xl font-black tracking-tighter text-tech-text leading-[0.9] mb-6 md:mb-8 text-left">
          {{ profile.identity.firstName }}<br/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-tech-primary to-tech-info">
            {{ profile.identity.lastName }}
          </span>
        </h1>
        
        <Transition name="fade" mode="out-in">
          <p :key="store.activeRole" class="text-base md:text-xl lg:text-2xl font-mono text-slate-500 max-w-2xl leading-relaxed mb-8 md:mb-12 text-left">
            <span class="text-tech-text font-bold">{{ heroContent.title }}</span>. {{ heroContent.description }}
          </p>
        </Transition>

        <div class="flex flex-col sm:flex-row gap-4 md:gap-6">
          <button @click="scrollToSection('experience')" 
                  class="px-8 py-4 bg-tech-primary text-white font-mono text-xs tracking-widest hover:bg-tech-text transition-all duration-500 shadow-lg shadow-tech-primary/20 uppercase w-full sm:w-auto font-bold">
            {{ t('heroCta') }}
          </button>
          <div class="flex items-center gap-4 px-6 py-4 sm:py-0 border border-slate-200 bg-white rounded-full w-full sm:w-auto justify-center shadow-sm">
            <span class="w-2 h-2 rounded-full bg-tech-success animate-pulse"></span>
            <span class="text-[9px] md:text-[10px] font-mono text-slate-500 tracking-widest uppercase text-center font-bold">{{ t('heroAvailable') }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- SECCIÓN 02: TRAYECTORIA -->
    <section id="experience" class="min-h-screen py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-slate-200/20 border-y border-slate-200/50">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div class="lg:w-1/3">
            <h3 class="text-xs font-mono text-tech-primary tracking-[0.4em] uppercase mb-6 md:mb-8 font-bold">{{ t('expSection') }}</h3>
            <Transition name="fade" mode="out-in">
              <div :key="store.activeRole">
                <h2 class="text-3xl md:text-5xl font-bold text-tech-text tracking-tighter leading-tight mb-6 md:mb-8 text-left">{{ experienceContent.title }}</h2>
                <p class="text-slate-500 leading-relaxed font-mono text-sm font-medium text-left">
                  {{ experienceContent.description }}
                </p>
              </div>
            </Transition>
          </div>
          <div class="lg:w-2/3">
            <TransitionGroup name="fade" tag="div" class="space-y-16 md:space-y-24">
              <div v-for="exp in filteredExperience" :key="exp.period" class="relative group">
                <div class="absolute -left-4 md:-left-12 -top-4 md:top-0 text-6xl md:text-[80px] font-black text-slate-300/30 select-none pointer-events-none group-hover:text-tech-primary/5 transition-colors">
                  {{ exp.period.split(' ')[0] }}
                </div>
                <div class="relative pl-0 border-l-2 border-slate-200 group-hover:border-tech-primary transition-all duration-700">
                  <div class="mb-6 ml-6">
                    <div class="flex justify-between items-start gap-4">
                      <div class="flex flex-col text-left">
                        <div class="flex flex-wrap items-center gap-2">
                          <span class="text-[9px] md:text-[10px] font-mono text-tech-success tracking-widest font-bold uppercase bg-tech-success/10 px-2 py-1 rounded w-fit">{{ exp.period }}</span>
                          <span class="text-[9px] md:text-[10px] font-mono text-slate-400 font-bold uppercase tracking-widest">{{ getDuration(exp.period) }}</span>
                        </div>
                        <h4 class="text-2xl md:text-3xl font-bold text-tech-text mt-4 leading-tight">{{ exp.role }}</h4>
                        <p class="text-tech-info font-mono text-xs uppercase tracking-widest mt-1 font-bold">{{ exp.company }}</p>
                      </div>
                      <div class="shrink-0">
                        <img v-if="exp.icon" :src="exp.icon" class="w-12 h-12 md:w-16 md:h-16 object-contain bg-white rounded-2xl border border-slate-100 shadow-md p-2 opacity-100 transition-all duration-500 group-hover:shadow-lg group-hover:scale-105" alt="" />
                      </div>
                    </div>
                  </div>
                  
                  <!-- Achievements -->
                  <ul class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 ml-6 mb-8">
                    <li v-for="ach in exp.achievements" :key="ach" class="text-[13px] md:text-sm text-slate-600 flex gap-3 p-4 bg-white border border-slate-100 rounded-xl group-hover:shadow-md transition-all shadow-sm font-medium text-left">
                      <span class="text-tech-primary font-mono shrink-0">>></span>
                      <span>{{ ach }}</span>
                    </li>
                  </ul>

                  <!-- Aptitudes vinculadas -->
                  <div class="ml-6 flex flex-wrap gap-2">
                    <span v-for="apt in exp.aptitudes" :key="apt" class="px-3 py-1 bg-slate-100/50 border border-slate-200 rounded text-[9px] font-mono text-slate-500 uppercase font-bold tracking-tighter shadow-sm">
                      {{ apt }}
                    </span>
                  </div>
                </div>
              </div>
            </TransitionGroup>
          </div>
        </div>
      </div>
    </section>

    <!-- SECCIÓN 03: PROYECTOS -->
    <section id="projects" class="min-h-screen py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-tech-bg">
      <div class="max-w-7xl mx-auto">
        <h3 class="text-xs font-mono text-tech-primary tracking-[0.4em] uppercase mb-12 md:mb-16 text-center font-bold">{{ t('projSection') }}</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          <div v-for="project in profile.projects" :key="project.id" 
               @click="openProject(project)"
               :class="project.detail ? 'cursor-pointer' : ''"
               class="group p-6 md:p-8 border border-slate-200 bg-white rounded-3xl hover:border-tech-primary/30 transition-all duration-500 flex flex-col justify-between h-full relative overflow-hidden shadow-sm hover:shadow-xl">
            <div class="absolute -right-4 -top-4 text-6xl md:text-8xl font-black text-slate-100 group-hover:text-slate-200 transition-colors pointer-events-none select-none">
              0{{ project.id }}
            </div>
            <div class="relative z-10">
              <div class="flex flex-wrap gap-2 mb-6">
                <span v-for="tag in project.tags" :key="tag.name" class="px-2 py-1 bg-slate-50 border border-slate-100 rounded text-[8px] md:text-[9px] font-mono text-slate-500 uppercase tracking-widest flex items-center gap-2 group-hover:bg-tech-primary/5 transition-colors">
                  <img v-if="tag.icon" :src="`https://cdn.simpleicons.org/${tag.icon}`" class="w-3 h-3 opacity-80 group-hover:opacity-100 transition-opacity" alt="" />
                  {{ tag.name }}
                </span>
                <span v-if="project.private" class="px-2 py-1 bg-tech-primary/5 border border-tech-primary/20 rounded text-[8px] md:text-[9px] font-mono text-tech-primary uppercase tracking-widest">
                  {{ t('projPrivate') }}
                </span>
              </div>
              <h4 class="text-xl md:text-2xl font-bold text-tech-text mb-4 group-hover:text-tech-primary transition-colors duration-500 leading-tight text-left">{{ project.name }}</h4>
              <p class="text-slate-500 text-[12px] md:text-sm leading-relaxed mb-8 font-mono italic font-medium text-left">
                "{{ project.description }}"
              </p>
            </div>
            <button v-if="project.detail" type="button"
                    class="inline-flex items-center gap-4 text-[9px] md:text-[10px] font-mono tracking-[0.2em] md:tracking-[0.3em] text-tech-primary transition-all group-hover:gap-6 uppercase font-bold">
              {{ t('projViewDetail') }} <span class="text-base md:text-lg">→</span>
            </button>
            <a v-else :href="project.github" target="_blank" @click.stop
               class="inline-flex items-center gap-4 text-[9px] md:text-[10px] font-mono tracking-[0.2em] md:tracking-[0.3em] text-tech-text hover:text-tech-primary transition-all group-hover:gap-6 uppercase font-bold">
              {{ t('projViewGithub') }} <span class="text-base md:text-lg">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- SECCIÓN 04: CONOCIMIENTOS -->
    <section id="skills" class="min-h-screen py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-slate-200/20 border-y border-slate-200/50">
      <div class="max-w-7xl mx-auto">
        <h3 class="text-xs font-mono text-tech-primary tracking-[0.4em] uppercase mb-12 md:mb-16 text-center font-bold">{{ t('skillsSection') }}</h3>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 text-left">
          <!-- Desarrollo Core / Lenguajes -->
          <div class="p-6 md:p-8 border border-slate-200 bg-white rounded-3xl relative overflow-hidden group shadow-sm">
            <Transition name="fade" mode="out-in">
              <h4 :key="store.activeRole" class="text-xl md:text-2xl font-bold text-tech-text mb-8 flex items-center gap-4 text-left">
                <span class="w-8 h-8 rounded-lg bg-tech-info/10 flex items-center justify-center text-tech-info text-sm">λ</span>
                {{ store.activeRole === 'qa' ? t('skillsLangs') : t('skillsCore') }}
              </h4>
            </Transition>
            <div class="space-y-8">
              <div>
                <p class="text-[9px] font-mono text-slate-400 mb-4 tracking-widest uppercase font-bold text-left">{{ t('skillsMainStack') }}</p>
                <div class="flex flex-wrap gap-3">
                  <div v-for="s in (store.activeRole === 'qa' ? profile.skills.backend.filter(s => ['JavaScript', 'Node.js', 'TypeScript', 'Python'].includes(s.name)) : [...profile.skills.backend, ...profile.skills.frontend])" :key="s.name" class="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-full text-[10px] font-mono text-slate-600 flex items-center gap-2 group/skill hover:shadow-sm transition-all">
                    <img v-if="s.icon" :src="`https://cdn.simpleicons.org/${s.icon}`" class="w-3.5 h-3.5" alt="" />
                    {{ s.name }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- QA & Databases -->
          <div class="p-6 md:p-8 border border-slate-200 bg-white rounded-3xl relative overflow-hidden group shadow-sm">
            <h4 class="text-xl md:text-2xl font-bold text-tech-text mb-8 flex items-center gap-4 text-left">
              <span class="w-8 h-8 rounded-lg bg-tech-success/10 flex items-center justify-center text-tech-success text-sm">✓</span>
              {{ t('skillsQaPersist') }}
            </h4>
            <div class="space-y-8">
              <div>
                <p class="text-[9px] font-mono text-slate-400 mb-4 tracking-widest uppercase font-bold text-left">{{ t('skillsQaAuto') }}</p>
                <div class="space-y-3">
                  <div v-for="s in profile.skills.testing" :key="s.name" class="space-y-1">
                    <div class="flex justify-between items-center text-[9px] font-mono">
                      <div class="flex items-center gap-2">
                        <img v-if="s.icon === 'sonarqube'" src="https://cdn.jsdelivr.net/npm/simple-icons@11.6.0/icons/sonarqube.svg" class="w-3.5 h-3.5" alt="" />
                        <img v-else-if="s.icon === 'playwright'" src="https://cdn.jsdelivr.net/npm/simple-icons@11.6.0/icons/playwright.svg" class="w-3.5 h-3.5" alt="" />
                        <img v-else-if="s.icon" :src="`https://cdn.simpleicons.org/${s.icon}`" class="w-3.5 h-3.5" alt="" />
                        <span class="text-slate-500 font-bold">{{ s.name }}</span>
                      </div>
                      <span class="text-tech-success font-bold">{{ s.level }}%</span>
                    </div>
                    <div class="h-1 bg-slate-100 rounded-full overflow-hidden">
                      <div class="h-full bg-tech-success transition-all duration-1000" :style="getLevelStyle(s.level)"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p class="text-[9px] font-mono text-slate-400 mb-4 tracking-widest uppercase font-bold text-left">{{ t('skillsDb') }}</p>
                <div class="flex flex-wrap gap-3">
                  <div v-for="s in profile.skills.databases" :key="s.name" class="flex items-center gap-2 bg-slate-50 px-2 py-1 rounded border border-slate-100 shadow-sm">
                    <img v-if="s.icon === 'microsoftsqlserver'" src="https://cdn.jsdelivr.net/npm/simple-icons@11.6.0/icons/microsoftsqlserver.svg" class="w-3.5 h-3.5" alt="" />
                    <img v-else-if="s.icon" :src="`https://cdn.simpleicons.org/${s.icon}`" class="w-3.5 h-3.5" alt="" />
                    <span class="text-[10px] font-mono text-slate-500 font-bold">/ {{ s.name }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- IA & DevOps -->
          <div class="p-6 md:p-8 border border-slate-200 bg-white rounded-3xl relative overflow-hidden group sm:col-span-2 lg:col-span-1 shadow-sm">
            <h4 class="text-xl md:text-2xl font-bold text-tech-text mb-8 flex items-center gap-4 text-left">
              <span class="w-8 h-8 rounded-lg bg-tech-infra/10 flex items-center justify-center text-tech-infra text-sm">⌬</span>
              {{ t('skillsVanguard') }}
            </h4>
            <div class="space-y-8">
              <div>
                <p class="text-[9px] font-mono text-slate-400 mb-4 tracking-widest uppercase font-bold text-left">{{ t('skillsAi') }}</p>
                <div class="flex flex-wrap gap-3">
                  <div v-for="s in profile.skills.aiTools" :key="s.name" class="px-3 py-1.5 bg-tech-primary/5 border border-tech-primary/10 rounded-full text-[10px] font-mono text-tech-primary flex items-center gap-2 font-bold shadow-sm">
                    <img v-if="s.icon" :src="`https://cdn.simpleicons.org/${s.icon}`" class="w-3.5 h-3.5" alt="" />
                    {{ s.name }}
                  </div>
                </div>
              </div>
              <div>
                <p class="text-[9px] font-mono text-slate-400 mb-4 tracking-widest uppercase font-bold text-left">{{ t('skillsDevops') }}</p>
                <div class="flex flex-wrap gap-3">
                  <div v-for="s in profile.skills.devops" :key="s.name" class="px-3 py-1 bg-white border border-slate-100 rounded text-[9px] font-mono text-tech-infra uppercase flex items-center gap-2 font-bold shadow-sm">
                    <img v-if="s.icon" :src="`https://cdn.simpleicons.org/${s.icon}`" class="w-3.5 h-3.5" alt="" />
                    {{ s.name }}
                  </div>
                </div>
              </div>
              <div>
                <p class="text-[9px] font-mono text-slate-400 mb-4 tracking-widest uppercase font-bold text-left">{{ t('skillsSoft') }}</p>
                <div class="flex flex-wrap gap-2">
                  <span v-for="skill in profile.softSkills" :key="skill" class="text-[9px] font-mono text-slate-500 bg-slate-50 px-2 py-1 rounded border border-slate-100 uppercase tracking-tighter font-bold shadow-sm">
                    {{ skill }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECCIÓN 05: ACADEMIA -->
    <section id="education" class="min-h-screen py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-tech-bg">
      <div class="max-w-7xl mx-auto flex flex-col items-center text-left">
        <h3 class="text-xs font-mono text-tech-primary tracking-[0.4em] uppercase mb-12 md:mb-16 font-bold">{{ t('eduSection') }}</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full mb-16 md:mb-24">
          <div v-for="edu in profile.education" :key="edu.institution" 
               class="p-8 md:p-10 border border-slate-200 bg-white rounded-3xl flex flex-col justify-between hover:border-tech-primary/20 transition-all group relative overflow-hidden text-left shadow-sm">
            <div v-if="edu.achievement" class="absolute top-0 right-0 bg-tech-success text-white px-4 py-1 text-[8px] font-mono uppercase tracking-widest font-bold shadow-sm">
              {{ edu.achievement }}
            </div>
            <div>
              <div class="flex justify-between items-start mb-4">
                <div class="text-[10px] font-mono text-tech-success font-bold uppercase">{{ edu.period }}</div>
                <img v-if="edu.icon" :src="edu.icon" class="w-16 h-16 object-contain opacity-100 group-hover:scale-110 transition-all duration-500" alt="" />
              </div>
              <h4 class="text-2xl md:text-3xl font-bold text-tech-text mb-4 group-hover:translate-x-2 transition-transform leading-tight text-left">{{ edu.degree }}</h4>
              <p class="text-slate-500 font-mono text-xs md:text-sm uppercase tracking-widest font-bold text-left">{{ edu.institution }}</p>
            </div>
          </div>
        </div>

        <!-- Certificaciones Grid -->
        <h4 class="text-xs font-mono text-slate-400 tracking-[0.3em] uppercase mb-10 md:mb-12 font-bold">{{ t('certsTitle') }}</h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
          <div v-for="cert in visibleCertifications" :key="cert.title" 
               class="p-6 border border-slate-100 bg-white rounded-2xl hover:shadow-lg transition-all group flex flex-col justify-between h-full text-left shadow-sm animate-in fade-in zoom-in duration-500">
            <div>
              <div class="flex justify-between items-start mb-4 text-left">
                <div class="text-[8px] font-mono text-tech-infra uppercase tracking-tighter font-bold bg-tech-infra/10 px-2 py-0.5 rounded">{{ cert.category }}</div>
                <img v-if="cert.icon === 'linkedin'" src="https://cdn.jsdelivr.net/npm/simple-icons@11.6.0/icons/linkedin.svg" class="w-5 h-5 opacity-80" alt="LinkedIn" />
                <img v-else-if="cert.icon === 'microsoft'" src="https://cdn.jsdelivr.net/npm/simple-icons@11.6.0/icons/microsoft.svg" class="w-5 h-5 opacity-80" alt="Microsoft" />
                <img v-else-if="cert.icon && cert.icon.endsWith('.ico')" :src="`./${cert.icon}`" class="w-6 h-6 object-contain bg-white rounded-lg border border-slate-50 shadow-sm p-1 opacity-100" alt="" />
                <img v-else-if="cert.icon" :src="`https://cdn.simpleicons.org/${cert.icon}`" class="w-5 h-5 opacity-80" alt="" />
              </div>
              <h5 class="text-[13px] md:text-sm font-bold text-tech-text mb-2 leading-tight group-hover:text-tech-primary transition-colors font-bold text-left">{{ cert.title }}</h5>
            </div>
            <div class="flex justify-between items-center mt-6 border-t border-slate-50 pt-4">
              <span class="text-[9px] font-mono text-slate-400 uppercase font-bold">{{ cert.issuer }}</span>
              <span class="text-[9px] font-mono text-slate-300 font-bold">{{ cert.date }}</span>
            </div>
          </div>
        </div>

        <!-- View More Button -->
        <div v-if="profile.certifications.length > certsLimit" class="mt-12">
          <button @click="showAllCerts = !showAllCerts" 
                  class="px-8 py-3 border border-slate-200 bg-white text-tech-primary font-mono text-[10px] tracking-widest hover:bg-tech-primary hover:text-white transition-all duration-500 rounded-full shadow-sm uppercase font-bold font-bold">
            {{ showAllCerts ? t('certsLess') : t('certsMore') }}
          </button>
        </div>
      </div>
    </section>

    <!-- SECCIÓN 06: RECOMENDACIONES -->
    <section id="recommendations" class="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-slate-50/50 border-y border-slate-200/50">
      <div class="max-w-7xl mx-auto">
        <h3 class="text-xs font-mono text-tech-primary tracking-[0.4em] uppercase mb-12 md:mb-16 text-center font-bold">{{ t('recSection') }}</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <div v-for="rec in profile.recommendations" :key="rec.name" 
               class="p-8 border border-slate-200 bg-white rounded-3xl hover:shadow-xl transition-all duration-500 flex flex-col justify-between group relative overflow-hidden shadow-sm">
            <div class="absolute -top-2 -left-2 text-8xl font-serif text-slate-100 group-hover:text-tech-primary/10 transition-colors select-none">"</div>
            
            <div class="relative z-10">
              <p class="text-[13px] leading-relaxed text-slate-600 mb-8 italic font-medium text-left">
                {{ rec.text }}
              </p>
            </div>

            <div class="flex items-center justify-between border-t border-slate-50 pt-6">
              <div class="flex items-center gap-4">
                <img v-if="rec.avatar" :src="rec.avatar" class="w-12 h-12 rounded-full object-cover border-2 border-slate-100 shadow-sm" alt="" />
                <div class="flex flex-col text-left">
                  <h4 class="text-sm font-bold text-tech-text group-hover:text-tech-primary transition-colors leading-tight text-left">{{ rec.name }}</h4>
                  <p class="text-[10px] text-slate-400 font-medium mt-1 leading-tight text-left">{{ rec.role }}</p>
                  <p class="text-[9px] text-tech-info font-bold mt-1 uppercase tracking-tighter text-left">{{ rec.relation }}</p>
                </div>
              </div>
              <a :href="rec.linkedin" target="_blank" class="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center hover:bg-tech-info/10 transition-colors group/ln shrink-0 ml-4">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@11.6.0/icons/linkedin.svg" class="w-4 h-4 opacity-40 group-hover/ln:opacity-100 transition-opacity" style="filter: brightness(0) saturate(100%) invert(31%) sepia(94%) saturate(1114%) hue-rotate(211deg) brightness(95%) contrast(93%);" alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECCIÓN 07: CONTACTO -->
    <section id="contact" class="py-20 md:py-32 px-6 md:px-12 lg:px-24 flex items-center bg-slate-900 text-white relative overflow-hidden">
      <div class="max-w-7xl mx-auto w-full relative z-10 text-left">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h3 class="text-xs font-mono text-tech-info tracking-[0.4em] uppercase mb-6 md:mb-8 font-bold">{{ t('contactSection') }}</h3>
            <h2 class="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none mb-8 text-left">{{ t('contactTitle') }}</h2>
            <p class="text-lg font-mono text-slate-400 leading-relaxed mb-8 text-left">
              {{ t('contactPre') }} <span class="text-tech-info font-bold underline decoration-tech-info/30 underline-offset-4 uppercase">{{ t('contactBackend') }}</span> {{ t('contactAnd') }} <span class="text-tech-success font-bold underline decoration-tech-success/30 underline-offset-4 uppercase">{{ t('contactQa') }}</span>.
            </p>
            <div class="flex items-center gap-6">
              <div class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center animate-pulse">
                <span class="w-2 h-2 rounded-full bg-tech-success shadow-lg shadow-tech-success/50"></span>
              </div>
              <span class="text-[10px] font-mono text-slate-500 tracking-[0.3em] uppercase whitespace-nowrap font-bold">{{ t('contactStatus') }}</span>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            <a :href="profile.identity.linkedin" target="_blank" class="p-6 border border-white/10 bg-white/5 rounded-3xl hover:bg-white/10 transition-all group flex flex-col gap-4 text-left shadow-2xl">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@11.6.0/icons/linkedin.svg" class="w-6 h-6 invert opacity-80" alt="LinkedIn" />
              <div class="mt-4">
                <h4 class="text-lg font-bold text-white mb-1">LinkedIn</h4>
                <p class="text-[9px] font-mono text-slate-400 uppercase tracking-tighter group-hover:text-tech-info transition-colors font-bold text-left">{{ t('contactLinkedin') }}</p>
              </div>
            </a>

            <a :href="`https://wa.me/${profile.identity.phone.replace(/[^0-9]/g, '')}`" target="_blank" class="p-6 border border-white/10 bg-white/5 rounded-3xl hover:bg-white/10 transition-all group flex flex-col gap-4 text-left shadow-2xl">
              <img src="https://cdn.simpleicons.org/whatsapp" class="w-6 h-6 opacity-80" alt="WhatsApp" />
              <div class="mt-4">
                <h4 class="text-lg font-bold text-white mb-1 text-left">WhatsApp</h4>
                <p class="text-[9px] font-mono text-slate-400 uppercase tracking-tighter group-hover:text-tech-success transition-colors font-bold text-left">{{ t('contactWhatsapp') }}</p>
              </div>
            </a>

            <a :href="`mailto:${profile.identity.email}`" class="p-6 border border-white/10 bg-white/5 rounded-3xl hover:bg-white/10 transition-all group flex flex-col gap-4 text-left shadow-2xl">
              <img src="https://cdn.simpleicons.org/gmail" class="w-6 h-6 opacity-80" alt="Email" />
              <div class="mt-4">
                <h4 class="text-lg font-bold text-white mb-1 text-left">Email</h4>
                <p class="text-[9px] font-mono text-slate-400 uppercase tracking-tighter group-hover:text-tech-info transition-colors font-bold text-left">{{ t('contactEmail') }}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="absolute right-0 bottom-0 text-[20vw] font-black text-white/[0.02] select-none pointer-events-none tracking-tighter uppercase leading-none">
        HELLO
      </div>
    </section>

    <!-- Modal de detalle del proyecto -->
    <Transition name="fade">
      <div v-if="activeProject"
           class="fixed inset-0 z-[60] bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-0 md:p-8"
           @click.self="closeProject">
        <article class="relative w-full max-w-4xl max-h-screen md:max-h-[90vh] overflow-y-auto bg-white md:rounded-3xl shadow-2xl text-left">
          <!-- Cabecera fija del modal -->
          <header class="sticky top-0 z-10 flex items-start justify-between gap-4 px-6 md:px-10 pt-7 pb-5 border-b border-slate-200 bg-white backdrop-blur-xl md:rounded-t-3xl">
            <div>
              <h4 class="text-2xl md:text-4xl font-black text-tech-text leading-tight mb-2">{{ activeProject.name }}</h4>
              <p class="text-[10px] md:text-[11px] font-mono text-tech-primary uppercase tracking-[0.25em]">{{ activeProject.detail.tagline }}</p>
            </div>
            <button type="button" @click="closeProject"
                    class="shrink-0 w-9 h-9 rounded-full border border-slate-200 text-slate-400 hover:text-tech-text hover:border-tech-primary/40 transition-colors font-mono">✕</button>
          </header>

          <div class="px-6 md:px-10 py-8">
            <div class="flex flex-wrap items-center gap-3 mb-6">
              <span v-if="activeProject.private" class="px-2 py-1 rounded bg-slate-50 border border-slate-100 text-slate-500 text-[9px] font-mono uppercase tracking-[0.25em]">{{ t('projPrivateFull') }}</span>
            </div>

            <p class="text-slate-500 text-[13px] md:text-sm leading-relaxed mb-8">{{ activeProject.detail.summary }}</p>

            <!-- Métricas -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-10">
              <div v-for="metric in activeProject.detail.metrics" :key="metric.label"
                   class="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div class="text-2xl md:text-3xl font-black text-tech-primary leading-none mb-2">{{ metric.value }}</div>
                <div class="text-[8px] md:text-[9px] font-mono text-slate-500 uppercase tracking-[0.2em]">{{ metric.label }}</div>
              </div>
            </div>

            <!-- Funcionalidades -->
            <h5 class="text-[9px] font-mono text-slate-400 uppercase tracking-[0.3em] mb-5">{{ t('projSolves') }}</h5>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10">
              <div v-for="item in activeProject.detail.highlights" :key="item.title" class="flex gap-3">
                <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-tech-primary shrink-0"></span>
                <div>
                  <h6 class="text-sm md:text-base font-bold text-tech-text mb-1.5 leading-snug">{{ item.title }}</h6>
                  <p class="text-slate-500 text-[12px] md:text-[13px] leading-relaxed">{{ item.text }}</p>
                </div>
              </div>
            </div>

            <!-- Stack -->
            <h5 class="text-[9px] font-mono text-slate-400 uppercase tracking-[0.3em] mb-4">{{ t('projStack') }}</h5>
            <div class="flex flex-wrap gap-2 mb-10">
              <span v-for="tag in activeProject.detail.stack" :key="tag.name"
                    class="px-2 py-1 bg-slate-50 border border-slate-100 rounded text-[8px] md:text-[9px] font-mono text-slate-500 uppercase tracking-widest flex items-center gap-2">
                <img v-if="tag.icon" :src="`https://cdn.simpleicons.org/${tag.icon}`" class="w-3 h-3 opacity-80" alt="" />
                {{ tag.name }}
              </span>
            </div>

            <!-- Galería -->
            <h5 class="text-[9px] font-mono text-slate-400 uppercase tracking-[0.3em] mb-4">{{ t('projShots') }} ({{ activeProject.detail.gallery.length }})</h5>
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              <button v-for="(shot, index) in activeProject.detail.gallery" :key="shot.src" type="button"
                      @click="openLightbox(index)"
                      class="group relative rounded-xl overflow-hidden border border-slate-200 bg-slate-50 hover:border-tech-primary/40 transition-all duration-300">
                <img :src="shot.src" :alt="shot.caption" loading="lazy"
                     class="w-full h-24 md:h-28 object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500" />
                <span class="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-white/90 text-[8px] font-mono text-slate-500">{{ String(index + 1).padStart(2, '0') }}</span>
              </button>
            </div>
          </div>
        </article>
      </div>
    </Transition>

    <!-- Lightbox de la galería del proyecto abierto -->
    <Transition name="fade">
      <div v-if="activeProject && lightboxIndex !== null"
           class="fixed inset-0 z-[70] bg-slate-900/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
           @click.self="lightboxIndex = null">
        <button type="button" @click="lightboxIndex = null"
                class="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white text-2xl font-mono">✕</button>
        <button type="button" @click="moveLightbox(-1)"
                class="absolute left-2 md:left-8 text-white/70 hover:text-white text-3xl font-mono px-3 py-2">‹</button>
        <button type="button" @click="moveLightbox(1)"
                class="absolute right-2 md:right-8 text-white/70 hover:text-white text-3xl font-mono px-3 py-2">›</button>
        <figure class="max-w-6xl w-full">
          <img :src="activeProject.detail.gallery[lightboxIndex].src" :alt="activeProject.detail.gallery[lightboxIndex].caption"
               class="w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl bg-white" />
          <figcaption class="mt-4 text-center text-[11px] md:text-xs font-mono text-white/70">
            {{ String(lightboxIndex + 1).padStart(2, '0') }} / {{ String(activeProject.detail.gallery.length).padStart(2, '0') }} · {{ activeProject.detail.gallery[lightboxIndex].caption }}
          </figcaption>
        </figure>
      </div>
    </Transition>

  </div>
</template>

<style>
.fade-enter-active, .fade-leave-active { transition: opacity 0.5s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
