# 🛰️ System Monitor | Professional Portfolio

Un porfolio interactivo e innovador diseñado para perfiles de **SDET, QA Automation Engineer y Backend Developer**. Simula un panel de monitoreo de sistemas (System Monitor) para exponer habilidades técnicas, experiencia y proyectos mediante una interfaz altamente técnica y funcional.

## 🚀 Concepto Visual
- **Tema:** Modern Dark con acentos pastel.
- **Interactividad:** Mapa de nodos dinámico que conecta las diferentes áreas de especialidad.
- **Simulaciones en Tiempo Real:** 
  - **QA Runner:** Simulación de ejecución de suites de pruebas automatizadas.
  - **Backend Logs:** Terminal interactiva que muestra experiencia y formación como logs de servidor.
  - **Repository Monitor:** Galería de proyectos vinculada directamente a GitHub.

## 🛠️ Stack Tecnológico
- **Framework:** Vue 3 (Composition API) con JavaScript.
- **Arquitectura:** Modular y escalable (Layouts, Components, Stores, Utils, Composables).
- **Tipado:** Documentación y tipado profesional mediante **JSDoc**.
- **Estilos:** Tailwind CSS con una paleta personalizada "Modern Dark".
- **Estado Global:** Pinia para la gestión de métricas del sistema.
- **Testing:** Vitest para pruebas unitarias de componentes y utilidades.
- **Herramientas de Build:** Vite para un desarrollo ultra-rápido.

## 📂 Estructura del Proyecto
```text
src/
├── classes/        # Lógica de negocio pura
├── components/     # Componentes UI organizados por contexto (monitor, terminal, ui)
├── composables/    # Funciones reactivas reutilizables
├── layouts/        # Estructuras de página (DashboardLayout)
├── router/         # Configuración de navegación
├── store/          # Gestión del estado global con Pinia
├── tests/          # Suite de pruebas con Vitest
├── utils/          # Utilidades y datos del perfil (profileData.js)
└── views/          # Páginas principales del porfolio
```

## ⚙️ Configuración y Despliegue

### Requisitos Previos
- Node.js (v18 o superior)
- npm

### Instalación
```bash
npm install
```

### Desarrollo
```bash
npm run dev
```

### Ejecutar Pruebas
```bash
npm run test:unit
```

### Construcción para Producción
```bash
npm run build
```

## 👤 Personalización
Para actualizar tu información profesional y proyectos de GitHub, edita el archivo:
`src/utils/profileData.js`

---
Diseñado y desarrollado para demostrar excelencia en **Ingeniería de Software y QA Automation**.
