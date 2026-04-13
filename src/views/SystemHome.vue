<script setup>
/**
 * SystemHome - Modern Clean Tech Landing Page.
 * Showcases Hector Arismendi's profile with a soft, professional aesthetic.
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
    
    <!-- SECCIÓN 01: INICIO (CORE) -->
    <section id="home" class="min-h-screen flex items-center px-6 md:px-12 lg:px-24 relative overflow-hidden bg-tech-bg">
      <div class="absolute top-0 right-0 w-1/2 h-full bg-slate-200/30 skew-x-[-12deg] translate-x-20 hidden lg:block"></div>
      
      <div class="max-w-5xl z-10 py-20">
        <h2 class="text-[8px] md:text-[10px] font-mono tracking-[0.4em] md:tracking-[0.6em] text-tech-primary mb-4 md:mb-6 animate-in fade-in slide-in-from-left-10 duration-1000 uppercase font-bold">
          Ingeniería_de_Software_v2.0
        </h2>
        <h1 class="text-5xl sm:text-7xl lg:text-9xl font-black tracking-tighter text-tech-text leading-[0.9] mb-6 md:mb-8">
          {{ profile.identity.firstName }}<br/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-tech-primary to-tech-info">
            {{ profile.identity.lastName }}
          </span>
        </h1>
        <p class="text-base md:text-xl lg:text-2xl font-mono text-slate-500 max-w-2xl leading-relaxed mb-8 md:mb-12">
          {{ profile.identity.title }}. <span class="text-tech-text font-bold">Garantizando calidad, escalabilidad y robustez</span> en cada despliegue.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 md:gap-6">
          <button @click="scrollToSection('experience')" 
                  class="px-8 py-4 bg-tech-primary text-white font-mono text-xs tracking-widest hover:bg-tech-text transition-all duration-500 shadow-lg shadow-tech-primary/20 uppercase w-full sm:w-auto">
            Iniciar_Inspección
          </button>
          <div class="flex items-center gap-4 px-6 py-4 sm:py-0 border border-slate-200 bg-white rounded-full w-full sm:w-auto justify-center shadow-sm">
            <span class="w-2 h-2 rounded-full bg-tech-success animate-pulse"></span>
            <span class="text-[9px] md:text-[10px] font-mono text-slate-500 tracking-widest uppercase text-center font-bold">Disponible_para_proyectos</span>
          </div>
        </div>
      </div>
    </section>

    <!-- SECCIÓN 02: TRAYECTORIA -->
    <section id="experience" class="min-h-screen py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-slate-200/20 border-y border-slate-200/50">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div class="lg:w-1/3">
            <h3 class="text-xs font-mono text-tech-primary tracking-[0.4em] uppercase mb-6 md:mb-8 font-bold">02_LA_TRAYECTORIA</h3>
            <h2 class="text-3xl md:text-5xl font-bold text-tech-text tracking-tighter leading-tight mb-6 md:mb-8">Experiencia en Desarrollo y Calidad.</h2>
            <p class="text-slate-500 leading-relaxed font-mono text-sm font-medium">
              Cada rol ha sido una oportunidad para perfeccionar estrategias de calidad y construir sistemas escalables que soporten el crecimiento del negocio.
            </p>
          </div>
          <div class="lg:w-2/3 space-y-16 md:space-y-24">
            <div v-for="exp in profile.experience" :key="exp.period" class="relative group">
              <div class="absolute -left-4 md:-left-12 -top-4 md:top-0 text-6xl md:text-[80px] font-black text-slate-300/30 select-none pointer-events-none group-hover:text-tech-primary/5 transition-colors">
                {{ exp.period.split(' ')[0] }}
              </div>
              <div class="relative pl-0 border-l-2 border-slate-200 group-hover:border-tech-primary transition-all duration-700">
                <div class="mb-6 ml-6">
                  <span class="text-[9px] md:text-[10px] font-mono text-tech-success tracking-widest font-bold uppercase bg-tech-success/10 px-2 py-1 rounded">{{ exp.period }}</span>
                  <h4 class="text-2xl md:text-3xl font-bold text-tech-text mt-4 leading-tight">{{ exp.role }}</h4>
                  <p class="text-tech-info font-mono text-xs uppercase tracking-widest mt-1 font-bold">{{ exp.company }}</p>
                </div>
                
                <!-- Achievements -->
                <ul class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 ml-6 mb-8">
                  <li v-for="ach in exp.achievements" :key="ach" class="text-[13px] md:text-sm text-slate-600 flex gap-3 p-4 bg-white border border-slate-100 rounded-xl group-hover:shadow-md transition-all shadow-sm font-medium">
                    <span class="text-tech-primary font-mono shrink-0">>></span>
                    <span>{{ ach }}</span>
                  </li>
                </ul>

                <!-- Aptitudes vinculadas -->
                <div class="ml-6 flex flex-wrap gap-2">
                  <span v-for="apt in exp.aptitudes" :key="apt" class="px-3 py-1 bg-slate-100/50 border border-slate-200 rounded text-[9px] font-mono text-slate-500 uppercase font-bold tracking-tighter">
                    {{ apt }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECCIÓN 03: PROYECTOS -->
    <section id="projects" class="min-h-screen py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-tech-bg">
      <div class="max-w-7xl mx-auto">
        <h3 class="text-xs font-mono text-tech-primary tracking-[0.4em] uppercase mb-12 md:mb-16 text-center font-bold">03_PORTAFOLIO_DE_PROYECTOS</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          <div v-for="project in profile.projects" :key="project.id" 
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
              </div>
              <h4 class="text-xl md:text-2xl font-bold text-tech-text mb-4 group-hover:text-tech-primary transition-colors duration-500 leading-tight">{{ project.name }}</h4>
              <p class="text-slate-500 text-[12px] md:text-sm leading-relaxed mb-8 font-mono italic font-medium">
                "{{ project.description }}"
              </p>
            </div>
            <a :href="project.github" target="_blank" 
               class="inline-flex items-center gap-4 text-[9px] md:text-[10px] font-mono tracking-[0.2em] md:tracking-[0.3em] text-tech-text hover:text-tech-primary transition-all group-hover:gap-6 uppercase font-bold">
              VER_EN_GITHUB <span class="text-base md:text-lg">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- SECCIÓN 04: CONOCIMIENTOS -->
    <section id="skills" class="min-h-screen py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-slate-200/20 border-y border-slate-200/50">
      <div class="max-w-7xl mx-auto">
        <h3 class="text-xs font-mono text-tech-primary tracking-[0.4em] uppercase mb-12 md:mb-16 text-center font-bold">04_STACK_TÉCNICO_SENIOR</h3>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          <!-- Desarrollo Core -->
          <div class="p-6 md:p-8 border border-slate-200 bg-white rounded-3xl relative overflow-hidden group shadow-sm">
            <h4 class="text-xl md:text-2xl font-bold text-tech-text mb-8 flex items-center gap-4">
              <span class="w-8 h-8 rounded-lg bg-tech-info/10 flex items-center justify-center text-tech-info text-sm">λ</span>
              Desarrollo Core
            </h4>
            <div class="space-y-8">
              <div>
                <p class="text-[9px] font-mono text-slate-400 mb-4 tracking-widest uppercase font-bold">Backend & Frontend</p>
                <div class="flex flex-wrap gap-3">
                  <div v-for="s in [...profile.skills.backend, ...profile.skills.frontend]" :key="s.name" class="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-full text-[10px] font-mono text-slate-600 flex items-center gap-2 group/skill hover:shadow-sm transition-all">
                    <img v-if="s.icon" :src="`https://cdn.simpleicons.org/${s.icon}`" class="w-3.5 h-3.5" alt="" />
                    {{ s.name }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- QA & Databases -->
          <div class="p-6 md:p-8 border border-slate-200 bg-white rounded-3xl relative overflow-hidden group shadow-sm">
            <h4 class="text-xl md:text-2xl font-bold text-tech-text mb-8 flex items-center gap-4">
              <span class="w-8 h-8 rounded-lg bg-tech-success/10 flex items-center justify-center text-tech-success text-sm">✓</span>
              QA & Persistencia
            </h4>
            <div class="space-y-8">
              <div>
                <p class="text-[9px] font-mono text-slate-400 mb-4 tracking-widest uppercase font-bold">QA Automation</p>
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
                <p class="text-[9px] font-mono text-slate-400 mb-4 tracking-widest uppercase font-bold">Bases de Datos</p>
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

          <!-- DevOps & Soft Skills -->
          <div class="p-6 md:p-8 border border-slate-200 bg-white rounded-3xl relative overflow-hidden group sm:col-span-2 lg:col-span-1 shadow-sm">
            <h4 class="text-xl md:text-2xl font-bold text-tech-text mb-8 flex items-center gap-4">
              <span class="w-8 h-8 rounded-lg bg-tech-infra/10 flex items-center justify-center text-tech-infra text-sm">⌬</span>
              Especialidades
            </h4>
            <div class="space-y-8">
              <div>
                <p class="text-[9px] font-mono text-slate-400 mb-4 tracking-widest uppercase font-bold">DevOps & Infra</p>
                <div class="flex flex-wrap gap-3">
                  <div v-for="s in profile.skills.devops" :key="s.name" class="px-3 py-1 bg-white border border-slate-100 rounded text-[9px] font-mono text-tech-infra uppercase flex items-center gap-2 font-bold shadow-sm">
                    <img v-if="s.icon" :src="`https://cdn.simpleicons.org/${s.icon}`" class="w-3.5 h-3.5" alt="" />
                    {{ s.name }}
                  </div>
                </div>
              </div>
              <div>
                <p class="text-[9px] font-mono text-slate-400 mb-4 tracking-widest uppercase font-bold">Aptitudes Interpersonales</p>
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
      <div class="max-w-7xl mx-auto flex flex-col items-center">
        <h3 class="text-xs font-mono text-tech-primary tracking-[0.4em] uppercase mb-12 md:mb-16 font-bold">05_FORMACIÓN_ACADÉMICA</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full mb-16 md:mb-24">
          <div v-for="edu in profile.education" :key="edu.institution" 
               class="p-8 md:p-10 border border-slate-200 bg-white rounded-3xl flex flex-col justify-between hover:border-tech-primary/20 transition-all group relative overflow-hidden text-left shadow-sm">
            <div v-if="edu.achievement" class="absolute top-0 right-0 bg-tech-success text-white px-4 py-1 text-[8px] font-mono uppercase tracking-widest font-bold shadow-sm">
              {{ edu.achievement }}
            </div>
            <div>
              <div class="text-[10px] font-mono text-tech-success mb-4 font-bold uppercase">{{ edu.period }}</div>
              <h4 class="text-2xl md:text-3xl font-bold text-tech-text mb-4 group-hover:translate-x-2 transition-transform leading-tight">{{ edu.degree }}</h4>
              <p class="text-slate-500 font-mono text-xs md:text-sm uppercase tracking-widest font-bold">{{ edu.institution }}</p>
            </div>
          </div>
        </div>

        <!-- Certificaciones Grid -->
        <h4 class="text-xs font-mono text-slate-400 tracking-[0.3em] uppercase mb-10 md:mb-12 font-bold">Certificaciones_Validadas</h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
          <div v-for="cert in profile.certifications" :key="cert.title" 
               class="p-6 border border-slate-200 bg-white rounded-2xl hover:shadow-lg transition-all group flex flex-col justify-between h-full text-left shadow-sm">
            <div>
              <div class="flex justify-between items-start mb-4">
                <div class="text-[8px] font-mono text-tech-infra uppercase tracking-tighter font-bold bg-tech-infra/10 px-2 py-0.5 rounded">{{ cert.category }}</div>
                <img v-if="cert.icon === 'linkedin'" src="https://cdn.jsdelivr.net/npm/simple-icons@11.6.0/icons/linkedin.svg" class="w-5 h-5 opacity-80" alt="LinkedIn" />
                <img v-else-if="cert.icon === 'microsoft'" src="https://cdn.jsdelivr.net/npm/simple-icons@11.6.0/icons/microsoft.svg" class="w-5 h-5 opacity-80" alt="Microsoft" />
                <img v-else-if="cert.icon" :src="`https://cdn.simpleicons.org/${cert.icon}`" class="w-5 h-5 opacity-80" alt="" />
              </div>
              <h5 class="text-[13px] md:text-sm font-bold text-tech-text mb-2 leading-tight group-hover:text-tech-primary transition-colors font-bold">{{ cert.title }}</h5>
            </div>
            <div class="flex justify-between items-center mt-6 border-t border-slate-50 pt-4">
              <span class="text-[9px] font-mono text-slate-400 uppercase font-bold">{{ cert.issuer }}</span>
              <span class="text-[9px] font-mono text-slate-300 font-bold">{{ cert.date }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECCIÓN 06: RECOMENDACIONES -->
    <section id="recommendations" class="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-slate-50/50 border-y border-slate-200/50">
      <div class="max-w-7xl mx-auto">
        <h3 class="text-xs font-mono text-tech-primary tracking-[0.4em] uppercase mb-12 md:mb-16 text-center font-bold">06_VALIDACIONES_DEL_EQUIPO</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <div v-for="rec in profile.recommendations" :key="rec.name" 
               class="p-8 border border-slate-200 bg-white rounded-3xl hover:shadow-xl transition-all duration-500 flex flex-col justify-between group relative overflow-hidden shadow-sm">
            <!-- Quote Decoration -->
            <div class="absolute -top-2 -left-2 text-8xl font-serif text-slate-100 group-hover:text-tech-primary/10 transition-colors select-none">"</div>
            
            <div class="relative z-10">
              <p class="text-[13px] leading-relaxed text-slate-600 mb-8 italic font-medium">
                {{ rec.text }}
              </p>
            </div>

            <div class="flex items-center justify-between border-t border-slate-50 pt-6">
              <div class="flex flex-col">
                <h4 class="text-sm font-bold text-tech-text group-hover:text-tech-primary transition-colors leading-tight">{{ rec.name }}</h4>
                <p class="text-[10px] text-slate-400 font-medium mt-1 leading-tight">{{ rec.role }}</p>
                <p class="text-[9px] text-tech-info font-bold mt-1 uppercase tracking-tighter">{{ rec.relation }}</p>
              </div>
              <a :href="rec.linkedin" target="_blank" class="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center hover:bg-tech-info/10 transition-colors group/ln">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@11.6.0/icons/linkedin.svg" class="w-4 h-4 opacity-40 group-hover/ln:opacity-100 transition-opacity" style="filter: brightness(0) saturate(100%) invert(31%) sepia(94%) saturate(1114%) hue-rotate(211deg) brightness(95%) contrast(93%);" alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECCIÓN 07: CONTACTO -->
    <section id="contact" class="py-20 md:py-32 px-6 md:px-12 lg:px-24 flex items-center bg-slate-900 text-white relative overflow-hidden">
      <div class="max-w-7xl mx-auto w-full relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h3 class="text-xs font-mono text-tech-info tracking-[0.4em] uppercase mb-6 md:mb-8 font-bold">06_PUERTA_DE_ENLACE</h3>
            <h2 class="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none mb-8">¿Listo para el siguiente sprint?</h2>
            <p class="text-lg font-mono text-slate-400 leading-relaxed mb-8">
              Disponible para nuevos desafíos en <span class="text-tech-info font-bold underline decoration-tech-info/30 underline-offset-4 uppercase">Desarrollo Backend</span> y <span class="text-tech-success font-bold underline decoration-tech-success/30 underline-offset-4 uppercase">QA Automation</span>.
            </p>
            <div class="flex items-center gap-6">
              <div class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center animate-pulse">
                <span class="w-2 h-2 rounded-full bg-tech-success shadow-lg shadow-tech-success/50"></span>
              </div>
              <span class="text-[10px] font-mono text-slate-500 tracking-[0.3em] uppercase whitespace-nowrap font-bold">Estado: Recibiendo_Señales</span>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            <!-- LinkedIn -->
            <a :href="profile.identity.linkedin" target="_blank" class="p-6 border border-white/10 bg-white/5 rounded-3xl hover:bg-white/10 transition-all group flex flex-col gap-4 text-left shadow-2xl">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@11.6.0/icons/linkedin.svg" class="w-6 h-6 invert opacity-80" alt="LinkedIn" />
              <div class="mt-4">
                <h4 class="text-lg font-bold text-white mb-1">LinkedIn</h4>
                <p class="text-[9px] font-mono text-slate-400 uppercase tracking-tighter group-hover:text-tech-info transition-colors font-bold">Red_Profesional</p>
              </div>
            </a>

            <!-- WhatsApp -->
            <a :href="`https://wa.me/${profile.identity.phone.replace(/[^0-9]/g, '')}`" target="_blank" class="p-6 border border-white/10 bg-white/5 rounded-3xl hover:bg-white/10 transition-all group flex flex-col gap-4 text-left shadow-2xl">
              <img src="https://cdn.simpleicons.org/whatsapp" class="w-6 h-6 opacity-80" alt="WhatsApp" />
              <div class="mt-4">
                <h4 class="text-lg font-bold text-white mb-1">WhatsApp</h4>
                <p class="text-[9px] font-mono text-slate-400 uppercase tracking-tighter group-hover:text-tech-success transition-colors font-bold">Línea_Directa</p>
              </div>
            </a>

            <!-- Email -->
            <a :href="`mailto:${profile.identity.email}`" class="p-6 border border-white/10 bg-white/5 rounded-3xl hover:bg-white/10 transition-all group flex flex-col gap-4 text-left shadow-2xl">
              <img src="https://cdn.simpleicons.org/gmail" class="w-6 h-6 opacity-80" alt="Email" />
              <div class="mt-4">
                <h4 class="text-lg font-bold text-white mb-1">Email</h4>
                <p class="text-[9px] font-mono text-slate-400 uppercase tracking-tighter group-hover:text-tech-info transition-colors font-bold">Transmisión</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="absolute right-0 bottom-0 text-[20vw] font-black text-white/[0.02] select-none pointer-events-none tracking-tighter uppercase leading-none">
        HELLO
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
