<script setup>
/**
 * SystemHome - Immersive Landing Page.
 * Showcases Hector Arismendi's profile as a high-end tech product.
 */
import { profile } from '../utils/profileData.js'

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
    
    <!-- SECTION 01: HERO (THE CORE) -->
    <section id="home" class="min-h-screen flex items-center px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <div class="max-w-5xl z-10 py-20">
        <h2 class="text-[8px] md:text-[10px] font-mono tracking-[0.4em] md:tracking-[0.6em] text-system-infra mb-4 md:mb-6 animate-in fade-in slide-in-from-left-10 duration-1000">
          ENGINEERING_EXCELLENCE_v2.0
        </h2>
        <h1 class="text-5xl sm:text-7xl lg:text-9xl font-black tracking-tighter text-white leading-[0.9] mb-6 md:mb-8">
          {{ profile.identity.firstName }}<br/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/20">
            {{ profile.identity.lastName }}
          </span>
        </h1>
        <p class="text-base md:text-xl lg:text-2xl font-mono text-gray-400 max-w-2xl leading-relaxed mb-8 md:mb-12">
          {{ profile.identity.title }}. <span class="text-white">Garantizando calidad, escalabilidad y robustez</span> en cada despliegue.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 md:gap-6">
          <button @click="scrollToSection('experience')" 
                  class="px-8 py-4 bg-white text-black font-mono text-xs tracking-widest hover:bg-system-infra hover:text-white transition-all duration-500 uppercase w-full sm:w-auto">
            Start_Inspection
          </button>
          <div class="flex items-center gap-4 px-6 py-4 sm:py-0 border border-white/10 rounded-full w-full sm:w-auto justify-center">
            <span class="w-2 h-2 rounded-full bg-system-success"></span>
            <span class="text-[9px] md:text-[10px] font-mono text-gray-500 tracking-widest uppercase text-center">Available_for_New_Sprints</span>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 02: EXPERIENCE (THE JOURNEY) -->
    <section id="experience" class="min-h-screen py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-white/[0.01]">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div class="lg:w-1/3">
            <h3 class="text-xs font-mono text-system-infra tracking-[0.4em] uppercase mb-6 md:mb-8">02_LA_TRAYECTORIA</h3>
            <h2 class="text-3xl md:text-5xl font-bold text-white tracking-tighter leading-tight mb-6 md:mb-8">Experiencia en Automatización y Backend.</h2>
            <p class="text-gray-500 leading-relaxed font-mono text-sm">
              Cada rol ha sido una oportunidad para perfeccionar estrategias de calidad y construir sistemas escalables que soporten el crecimiento del negocio.
            </p>
          </div>
          <div class="lg:w-2/3 space-y-16 md:space-y-24">
            <div v-for="exp in profile.experience" :key="exp.company" class="relative group">
              <div class="absolute -left-4 md:-left-12 -top-4 md:top-0 text-6xl md:text-[80px] font-black text-white/[0.03] select-none pointer-events-none group-hover:text-system-infra/10 transition-colors">
                {{ exp.period.split('.')[0] }}
              </div>
              <div class="relative pl-0 border-l border-white/5 group-hover:border-system-infra transition-all duration-700">
                <div class="mb-6">
                  <span class="text-[9px] md:text-[10px] font-mono text-system-success tracking-widest">{{ exp.period }}</span>
                  <h4 class="text-2xl md:text-3xl font-bold text-white mt-2 leading-tight">{{ exp.role }}</h4>
                  <p class="text-system-infra font-mono text-xs uppercase tracking-widest mt-1">{{ exp.company }}</p>
                </div>
                <ul class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  <li v-for="ach in exp.achievements" :key="ach" class="text-[13px] md:text-sm text-gray-400 flex gap-3 p-4 bg-white/[0.02] border border-white/5 rounded-lg group-hover:bg-white/[0.05] transition-all">
                    <span class="text-system-success font-mono shrink-0">>></span>
                    <span>{{ ach }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 03: PROJECTS (THE REPOS) -->
    <section id="projects" class="min-h-screen py-20 md:py-32 px-6 md:px-12 lg:px-24">
      <div class="max-w-7xl mx-auto">
        <h3 class="text-xs font-mono text-system-infra tracking-[0.4em] uppercase mb-12 md:mb-16 text-center">03_PROYECTOS_DESTACADOS</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div v-for="project in profile.projects" :key="project.id" 
               class="group p-6 md:p-8 border border-white/5 bg-white/[0.02] rounded-3xl hover:border-system-infra/50 transition-all duration-500 flex flex-col justify-between h-full relative overflow-hidden">
            <div class="absolute -right-4 -top-4 text-6xl md:text-8xl font-black text-white/[0.02] group-hover:text-system-infra/[0.05] transition-colors pointer-events-none select-none">
              0{{ project.id }}
            </div>
            <div class="relative z-10">
              <div class="flex flex-wrap gap-2 mb-6">
                <span v-for="tag in project.tags" :key="tag" class="px-2 py-1 bg-white/5 border border-white/10 rounded text-[8px] md:text-[9px] font-mono text-gray-500 uppercase tracking-widest group-hover:text-system-infra transition-colors">
                  {{ tag }}
                </span>
              </div>
              <h4 class="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:translate-x-2 transition-transform duration-500 leading-tight">{{ project.name }}</h4>
              <p class="text-gray-400 text-[13px] md:text-sm leading-relaxed mb-8 font-mono italic opacity-70 group-hover:opacity-100 transition-opacity">
                "{{ project.description }}"
              </p>
            </div>
            <a :href="project.github" target="_blank" 
               class="inline-flex items-center gap-4 text-[9px] md:text-[10px] font-mono tracking-[0.2em] md:tracking-[0.3em] text-white hover:text-system-infra transition-all group-hover:gap-6 uppercase">
              VIEW_ON_GITHUB <span class="text-base md:text-lg">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 04: SKILLS (THE STACK) -->
    <section id="skills" class="min-h-screen py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-white/[0.01]">
      <div class="max-w-7xl mx-auto">
        <h3 class="text-xs font-mono text-system-infra tracking-[0.4em] uppercase mb-12 md:mb-16 text-center">04_TECHNICAL_STACK</h3>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          <!-- Testing & QA -->
          <div class="p-6 md:p-8 border border-white/5 bg-white/[0.02] rounded-3xl relative overflow-hidden group">
            <h4 class="text-xl md:text-2xl font-bold text-white mb-8 flex items-center gap-4">
              <span class="w-8 h-8 rounded-lg bg-system-success/20 flex items-center justify-center text-system-success text-sm">✓</span>
              QA & Testing
            </h4>
            <div class="space-y-6">
              <div v-for="s in profile.skills.testing" :key="s.name" class="space-y-2">
                <div class="flex justify-between items-center text-[9px] md:text-[10px] font-mono tracking-widest">
                  <div class="flex items-center gap-3">
                    <img v-if="s.icon" :src="`https://cdn.simpleicons.org/${s.icon}/white`" class="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" alt="" />
                    <span class="text-gray-400 uppercase">{{ s.name }}</span>
                  </div>
                  <span class="text-system-success">{{ s.level }}%</span>
                </div>
                <div class="h-[2px] bg-white/5 rounded-full overflow-hidden">
                  <div class="h-full bg-system-success transition-all duration-1000" :style="getLevelStyle(s.level)"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Backend -->
          <div class="p-6 md:p-8 border border-white/5 bg-white/[0.02] rounded-3xl relative overflow-hidden group">
            <h4 class="text-xl md:text-2xl font-bold text-white mb-8 flex items-center gap-4">
              <span class="w-8 h-8 rounded-lg bg-system-info/20 flex items-center justify-center text-system-info text-sm">λ</span>
              Backend Core
            </h4>
            <div class="flex flex-wrap gap-3">
              <div v-for="s in profile.skills.backend" :key="s.name" 
                    class="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono text-gray-400 hover:border-system-info hover:text-white transition-all cursor-default uppercase flex items-center gap-3 group/skill">
                <img v-if="s.icon" :src="`https://cdn.simpleicons.org/${s.icon}/gray`" class="w-3.5 h-3.5 group-hover/skill:brightness-200 transition-all" style="filter: grayscale(100%)" alt="" />
                {{ s.name }}
              </div>
            </div>
          </div>

          <!-- Databases & DevOps -->
          <div class="p-6 md:p-8 border border-white/5 bg-white/[0.02] rounded-3xl relative overflow-hidden group sm:col-span-2 lg:col-span-1">
            <h4 class="text-xl md:text-2xl font-bold text-white mb-8 flex items-center gap-4">
              <span class="w-8 h-8 rounded-lg bg-system-infra/20 flex items-center justify-center text-system-infra text-sm">⌬</span>
              Infrastructure
            </h4>
            <div class="space-y-8">
              <div>
                <p class="text-[9px] font-mono text-gray-600 mb-4 tracking-widest uppercase">Databases</p>
                <div class="flex flex-wrap gap-4">
                  <div v-for="s in profile.skills.databases" :key="s.name" class="flex items-center gap-2 group/db">
                    <img v-if="s.icon" :src="`https://cdn.simpleicons.org/${s.icon}/666666`" class="w-4 h-4 group-hover/db:brightness-200 transition-all" alt="" />
                    <span class="text-[10px] md:text-[11px] font-mono text-gray-400">/ {{ s.name }}</span>
                  </div>
                </div>
              </div>
              <div>
                <p class="text-[9px] font-mono text-gray-600 mb-4 tracking-widest uppercase">Infrastructure</p>
                <div class="flex flex-wrap gap-3">
                  <div v-for="s in profile.skills.devops" :key="s.name" class="px-3 py-1 bg-system-infra/10 border border-system-infra/30 rounded text-[9px] font-mono text-system-infra uppercase flex items-center gap-2 group/infra">
                    <img v-if="s.icon" :src="`https://cdn.simpleicons.org/${s.icon}/c4b5fd`" class="w-3.5 h-3.5 group-hover/infra:brightness-125 transition-all" alt="" />
                    {{ s.name }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 05: ACADEMY -->
    <section id="education" class="min-h-screen py-32 px-6 md:px-12 lg:px-24 bg-white/[0.01]">
      <div class="max-w-7xl mx-auto flex flex-col items-center">
        <h3 class="text-xs font-mono text-system-infra tracking-[0.4em] uppercase mb-16">05_ACADEMIC_FOUNDATION</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 w-full mb-24">
          <div v-for="edu in profile.education" :key="edu.institution" 
               class="p-10 border border-white/5 bg-black/40 rounded-3xl flex flex-col justify-between hover:border-white/20 transition-all group relative overflow-hidden text-left">
            <div v-if="edu.achievement" class="absolute top-0 right-0 bg-system-success/20 text-system-success px-4 py-1 text-[8px] font-mono uppercase tracking-widest">
              {{ edu.achievement }}
            </div>
            <div>
              <div class="text-[10px] font-mono text-system-success mb-4">{{ edu.period }}</div>
              <h4 class="text-3xl font-bold text-white mb-4 group-hover:translate-x-2 transition-transform">{{ edu.degree }}</h4>
              <p class="text-gray-500 font-mono text-sm uppercase tracking-widest">{{ edu.institution }}</p>
            </div>
          </div>
        </div>

        <!-- Certifications Grid -->
        <h4 class="text-xs font-mono text-gray-500 tracking-[0.3em] uppercase mb-12">Certificaciones_Validadas</h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          <div v-for="cert in profile.certifications" :key="cert.title" 
               class="p-6 border border-white/5 bg-white/[0.02] rounded-2xl hover:bg-white/[0.05] transition-all group flex flex-col justify-between h-full text-left">
            <div>
              <div class="flex justify-between items-start mb-4">
                <div class="text-[8px] font-mono text-system-infra uppercase tracking-tighter">{{ cert.category }}</div>
                <img v-if="cert.icon" :src="`https://cdn.simpleicons.org/${cert.icon}/white`" class="w-5 h-5 opacity-30 group-hover:opacity-100 transition-opacity" alt="" />
              </div>
              <h5 class="text-[13px] md:text-sm font-bold text-white mb-2 leading-tight group-hover:text-system-infra transition-colors">{{ cert.title }}</h5>
            </div>
            <div class="flex justify-between items-center mt-6">
              <span class="text-[9px] font-mono text-gray-600 uppercase">{{ cert.issuer }}</span>
              <span class="text-[9px] font-mono text-gray-500">{{ cert.date }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 06: CONTACT -->
    <section id="contact" class="min-h-screen py-32 px-6 md:px-12 lg:px-24 flex items-center">
      <div class="max-w-7xl mx-auto w-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h3 class="text-xs font-mono text-system-infra tracking-[0.4em] uppercase mb-8">06_CONNECT_GATEWAY</h3>
            <h2 class="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-12">¿Listo para el siguiente sprint?</h2>
            <p class="text-xl font-mono text-gray-500 leading-relaxed mb-12">
              Disponible para nuevos desafíos en <span class="text-white">Desarrollo Backend</span> y <span class="text-white">QA Automation</span>.
            </p>
            <div class="flex items-center gap-6">
              <div class="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center animate-pulse">
                <span class="w-2 h-2 rounded-full bg-system-success"></span>
              </div>
              <span class="text-[10px] font-mono text-gray-600 tracking-[0.3em] uppercase">Status: Receiving_Signals</span>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <!-- LinkedIn -->
            <a :href="profile.identity.linkedin" target="_blank" class="p-6 md:p-8 border border-white/5 bg-white/[0.02] rounded-3xl hover:border-system-info/50 transition-all group flex flex-col gap-6 text-left min-h-[200px]">
              <img src="https://cdn.simpleicons.org/linkedin/white" class="w-8 h-8 opacity-50 group-hover:opacity-100 transition-all" alt="LinkedIn" />
              <div class="mt-auto">
                <h4 class="text-xl font-bold text-white mb-1">LinkedIn</h4>
                <p class="text-[10px] font-mono text-gray-500 uppercase tracking-widest group-hover:text-system-info transition-colors">Professional_Network</p>
              </div>
            </a>

            <!-- WhatsApp -->
            <a :href="`https://wa.me/${profile.identity.phone.replace(/[^0-9]/g, '')}`" target="_blank" class="p-6 md:p-8 border border-white/5 bg-white/[0.02] rounded-3xl hover:border-system-success/50 transition-all group flex flex-col gap-6 text-left min-h-[200px]">
              <img src="https://cdn.simpleicons.org/whatsapp/white" class="w-8 h-8 opacity-50 group-hover:opacity-100 transition-all" alt="WhatsApp" />
              <div class="mt-auto">
                <h4 class="text-xl font-bold text-white mb-1">WhatsApp</h4>
                <p class="text-[10px] font-mono text-gray-500 uppercase tracking-widest group-hover:text-system-success transition-colors">Direct_Secure_Line</p>
              </div>
            </a>

            <!-- Email -->
            <a :href="`mailto:${profile.identity.email}`" class="p-6 md:p-8 border border-white/5 bg-white/[0.02] rounded-3xl hover:border-system-infra/50 transition-all group flex flex-col gap-6 text-left min-h-[200px]">
              <img src="https://cdn.simpleicons.org/gmail/white" class="w-8 h-8 opacity-50 group-hover:opacity-100 transition-all" alt="Email" />
              <div class="mt-auto">
                <h4 class="text-xl font-bold text-white mb-1">Email</h4>
                <p class="text-[10px] font-mono text-gray-500 uppercase tracking-widest group-hover:text-system-infra transition-colors">Digital_Transmission</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>






<style scoped>
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

.node-float {
  animation: float 4s ease-in-out infinite;
}
</style>
