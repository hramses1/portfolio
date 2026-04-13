# 🛰️ Portafolio Profesional | Hector Arismendi

Un porfolio interactivo, moderno e innovador diseñado para perfiles de **Software Developer** y **QA Analyst & Automation Engineer**. El sitio ofrece una experiencia personalizada mediante un selector de roles dinámico que adapta el contenido al perfil técnico que el visitante desee explorar.

## 🚀 Características Clave
- **Selector de Roles Dinámico:** Cambia entre los perfiles de Desarrollador, QA Automation o Vista Unificada. El contenido (Hero, Trayectoria, Skills) se adapta y filtra automáticamente con transiciones suaves.
- **Cálculo Automático de Experiencia:** Visualización del tiempo exacto trabajado en cada posición (ej. "1 año y 6 meses").
- **Sección de Proyectos:** Galería técnica con etiquetas enriquecidas e iconografía de marca para cada tecnología utilizada.
- **Testimonios de LinkedIn:** Sección de recomendaciones validadas con fotos de perfil y enlaces directos a los recomendadores.
- **Diseño "Clean Tech":** Estética profesional en modo claro suavizado, optimizada para legibilidad y alto impacto visual.
- **Totalmente Responsive:** Navegación optimizada para móviles (barra inferior tipo App) y escritorio (menú lateral interactivo).

## 🛠️ Stack Tecnológico
- **Frontend:** Vue 3 (Composition API) con JavaScript.
- **Estado Global:** Pinia para la gestión dinámica del selector de roles.
- **Estilos:** Tailwind CSS con una paleta personalizada "Clean Tech".
- **Iconografía:** Integración masiva de Simple Icons y JSDelivr para un reconocimiento rápido de marcas tecnológicas.
- **Testing:** Vitest para la validación de utilidades críticas.
- **Build & CI/CD:** Vite y GitHub Actions para despliegue automatizado a GitHub Pages.

## 📂 Estructura Modular
```text
src/
├── components/     # Componentes UI reutilizables
├── layouts/        # DashboardLayout con navegación inteligente
├── store/          # Pinia Store (Lógica de roles y uptime)
├── utils/          # Perfil de datos (profileData.js) y formateadores
├── views/          # SystemHome (Landing Page inmersiva)
└── tests/          # Suite de pruebas unitarias
```

## ⚙️ Instalación y Desarrollo
1. Instalar dependencias: `npm install`
2. Iniciar entorno de desarrollo: `npm run dev`
3. Generar build de producción: `npm run build`

## 👤 Personalización
Para actualizar la información profesional, proyectos o certificaciones, simplemente edita:
`src/utils/profileData.js`

---
Diseñado y desarrollado por **Hector Arismendi** para demostrar excelencia técnica en Desarrollo y QA.
