/**
 * Perfil Profesional de Hector Arismendi.
 */
export const profile = {
  identity: {
    firstName: 'HECTOR',
    lastName: 'ARISMENDI',
    title: 'Software Developer | QA Automation Engineer',
    email: 'arismendiramses@gmail.com',
    phone: '+593-961613564',
    linkedin: 'https://www.linkedin.com/in/hector-arismendi-469551167/',
    description: 'Ingeniero de Software especializado en el desarrollo de soluciones backend escalables y el aseguramiento de la calidad integral. Pionero en la integración de Inteligencia Artificial Generativa y Prompt Engineering para optimizar procesos de desarrollo, debugging y automatización de pruebas robustas.'
  },

  education: [
    {
      institution: 'Universidad Estatal de Milagro',
      period: '2019 - 2023',
      degree: 'INGENIERIA DE SOFTWARE',
      achievement: '1ER. LUGAR EN FERIA DE CIENCIAS Y TECNOLOGÍAS (2022)',
      icon: 'unemi.ico'
    },
    {
      institution: 'INSTITUTO LIBERTADOR',
      period: '2011 - 2016',
      degree: 'BACHILLER EN CIENCIAS',
      icon: 'libertador.ico'
    }
  ],

  certifications: [
    { title: 'IA Generativa: Fundamentos', issuer: 'PMI', date: 'abr. 2026', category: 'IA', icon: 'pmi.ico' },
    { title: 'CI/CD en Gitlab vía FTP', issuer: 'Udemy', date: '2026', category: 'DevOps', icon: 'udemy' },
    { title: 'Gestión Efectiva del Tiempo', issuer: 'Platzi', date: '2024', category: 'Soft Skills', icon: 'platzi' },
    { title: 'Gestión de proyectos con M365', issuer: 'LinkedIn', date: '2024', category: 'Gestión', icon: 'linkedin' },
    { title: 'Gestión de datos con M365', issuer: 'LinkedIn', date: '2024', category: 'Datos', icon: 'linkedin' },
    { title: 'Aprende Data Science: Conceptos', issuer: 'LinkedIn', date: '2024', category: 'Datos', icon: 'linkedin' },
    { title: 'Fundamentos de análisis empresarial', issuer: 'Microsoft', date: '2024', category: 'Negocio', icon: 'microsoft' },
    { title: 'Product Owner esencial', issuer: 'LinkedIn', date: '2024', category: 'Producto', icon: 'linkedin' },
    { title: 'Liderazgo Proyectos Software', issuer: 'LinkedIn', date: '2023', category: 'Liderazgo', icon: 'linkedin' },
    { title: 'Mastering Visual Studio Code', issuer: 'Udemy', date: '2023', category: 'Herramientas', icon: 'udemy' },
    { title: 'Liderazgo: Gerencia en Tecnología', issuer: 'Udemy', date: '2023', category: 'Liderazgo', icon: 'udemy' },
    { title: 'Cloud Computing', issuer: 'Google Actívate', date: '2022', category: 'Cloud', icon: 'google' },
    { title: 'Python Programming Beyond Basics', issuer: 'Udemy', date: '2021', category: 'Desarrollo', icon: 'udemy' },
    { title: 'Microsoft Excel Ultimate 2021', issuer: 'Udemy', date: '2021', category: 'Herramientas', icon: 'udemy' },
    { title: 'Guide to Cyber Security', issuer: 'Udemy', date: '2021', category: 'Seguridad', icon: 'udemy' },
    { title: 'SQL para Principiantes', issuer: 'Udemy', date: '2021', category: 'Bases de Datos', icon: 'udemy' },
    { title: 'Analista Junior GeneXus 17', issuer: 'GeneXus', date: '2021', category: 'Desarrollo', icon: 'GeneXus.ico' }
  ],

  skills: {
    backend: [
      { name: 'JavaScript', level: 90, icon: 'javascript' },
      { name: 'Node.js', level: 90, icon: 'nodedotjs' },
      { name: 'TypeScript', level: 85, icon: 'typescript' },
      { name: 'Python', level: 95, icon: 'python' },
      { name: 'NestJS', level: 85, icon: 'nestjs' },
      { name: 'Express.js', level: 90, icon: 'express' }
    ],
    frontend: [
      { name: 'Vue', level: 85, icon: 'vuedotjs' },
      { name: 'React.js', level: 70, icon: 'react' },
      { name: 'HTML5', level: 95, icon: 'html5' }
    ],
    testing: [
      { name: 'Pytest', level: 95, icon: 'pytest' },
      { name: 'Selenium', level: 90, icon: 'selenium' },
      { name: 'Playwright', level: 85, icon: 'playwright' },
      { name: 'Cypress', level: 85, icon: 'cypress' },
      { name: 'Jest', level: 80, icon: 'jest' },
      { name: 'Postman', level: 90, icon: 'postman' }
    ],
    aiTools: [
      { name: 'Prompt Engineering', level: 95, icon: 'openai' },
      { name: 'Gemini CLI', level: 90, icon: 'googlegemini' },
      { name: 'Claude Code', level: 90, icon: 'anthropic' },
      { name: 'AI QA Automation', level: 95, icon: 'robotframework' }
    ],
    databases: [
      { name: 'MySQL', level: 90, icon: 'mysql' },
      { name: 'SQL Server', level: 85, icon: 'microsoftsqlserver' },
      { name: 'MongoDB', level: 80, icon: 'mongodb' },
      { name: 'Sequelize', level: 90, icon: 'sequelize' }
    ],
    devops: [
      { name: 'Docker', level: 80, icon: 'docker' },
      { name: 'GitLab CI/CD', level: 85, icon: 'gitlab' },
      { name: 'GitHub', level: 95, icon: 'github' },
      { name: 'RabbitMQ', level: 75, icon: 'rabbitmq' }
    ]
  },

  softSkills: [
    'Liderazgo de Equipos', 'Capacidad de Análisis', 'Resolución de Problemas',
    'Adaptación al Cambio', 'Trabajo en Equipo', 'Gestión de Proyectos'
  ],

  recommendations: [
    {
      name: 'Humberto Guiracocha Suarez',
      role: 'Web Developer Fullstack',
      relation: 'Trabajó con Hector en FUNIBER',
      text: 'Destaco su responsabilidad, su organización y su iniciativa por aprender cosas nuevas. Compartía sus conocimientos impulsando mejoras e integrando scripts para tareas de mantenimiento, optimizando procesos y facilitando el trabajo del equipo. Cuenta con conocimientos en backend, lo que le permite aportar un criterio técnico sólido.',
      linkedin: 'https://www.linkedin.com/in/humberto-guiracocha-suarez-48a944284/',
      avatar: 'Humberto.png'
    },
    {
      name: 'Kelly Nieto Artieda',
      role: 'UX/UI Designer & Product Designer',
      relation: 'Capacitó y asesoró a Hector en FUNIBER',
      text: 'Me impresionó su gran desempeño en tan poco tiempo. Aprendió del negocio rápidamente y aportó gran valor en proyectos transversales, además de su entusiasmo por innovar y traer nuevas propuestas tecnológicas a la mesa. Es un excelente profesional con un potencial increíble.',
      linkedin: 'https://www.linkedin.com/in/kellynietoa/',
      avatar: 'Kelly.png'
    },
    {
      name: 'Jordan Ubilla',
      role: 'Senior Software Developer | Team Leader',
      relation: 'Trabajó con Hector durante 3 años',
      text: 'Lo vi crecer de QA a programador en poco tiempo, algo que habla por sí solo de su capacidad autodidacta y determinación. Es responsable, técnicamente sólido, se adapta a cualquier tipo de proyecto y sabe trabajar en equipo de verdad. El tipo de ingeniero que hoy en día toda empresa necesita.',
      linkedin: 'https://www.linkedin.com/in/jordan-ubilla-5a8244264/',
      avatar: 'Jordan.png'
    },
    {
      name: 'Marlon Armijo',
      role: 'QA Tester and Automation Engineer',
      relation: 'Colega de rol QA en FUNIBER',
      text: 'Héctor fue mucho más allá de sus responsabilidades. Siempre atento a los detalles, anticipándose a problemas y promoviendo la automatización de procesos clave para agilizar tiempos y elevar el estándar de calidad. Suma no solo por su conocimiento, sino también por su actitud y buena energía.',
      linkedin: 'https://www.linkedin.com/in/marlonjal96/',
      avatar: 'Marlon.png'
    },
    {
      name: 'Loberlly Salazar Aspiazu',
      role: 'Full-Stack Developer & UX/UI Designer',
      relation: 'Trabajó con Hector en el mismo equipo',
      text: 'Apoyo clave para asegurar la calidad de nuestras entregas. Comprometido y con excelente criterio para identificar riesgos y proponer mejoras. Destaco su lado humano y cómo promueve un ambiente de trabajo alegre, acogedor y respetuoso.',
      linkedin: 'https://www.linkedin.com/in/loberlly-salazar-aspiazu-b099ab216/',
      avatar: 'Loberlly.png'
    },
    {
      name: 'Karen Morales',
      role: 'Fullstack Developer | JS/TS | UI/UX',
      relation: 'Trabajó con Hector en el mismo equipo',
      text: 'Héctor facilitaba enormemente mi trabajo con sus bugs bien documentados y contexto claro. No se conforma con los límites de su rol; escribía scripts de mantenimiento proactivamente y tiene un excelente ojo para el código como desarrollador.',
      linkedin: 'https://www.linkedin.com/in/klmoralesc/',
      avatar: 'Karen.png'
    }
  ],

  experience: [
    {
      company: 'Integrity Solutions',
      role: 'Analista QA',
      period: 'may. 2026 - actualidad',
      achievements: [
        'Crear Plan de pruebas y testing.',
        'Automatización de APIs con Postman y Jmeter.',
        'Automatización de pruebas con Pytest, Selenium, Jest y Unittest.',
        'Gestión de bases de datos SQL Server, SQLite, MySQL y MongoDB.',
        'Construcción de tests unitarios y End-to-End.'
      ],
      aptitudes: ['Python', 'Selenium', 'Pytest', 'Jest', 'Postman', 'JMeter', 'SQL Server', 'MongoDB', 'MySQL', 'Calidad de software', 'Pruebas funcionales']
    },
    {
      company: 'Banco Bolivariano',
      role: 'Analista QA',
      period: 'may. 2026 - actualidad',
      achievements: [
        'Crear Plan de pruebas y testing.',
        'Automatización de APIs con Postman y Jmeter.',
        'Automatización de pruebas con Pytest, Selenium, Jest y Unittest.',
        'Gestión de bases de datos SQL Server, SQLite, MySQL y MongoDB.',
        'Construcción de tests unitarios y End-to-End.'
      ],
      aptitudes: ['Python', 'Selenium', 'Pytest', 'Jest', 'Postman', 'JMeter', 'SQL Server', 'MongoDB', 'MySQL', 'Calidad de software', 'Pruebas funcionales']
    },
    {
      company: 'Fundación Universitaria Iberoamericana (FUNIBER)',
      icon: 'funiber.ico',
      role: 'Software Developer',
      period: 'abr. 2025 - feb. 2026',
      achievements: [
        'Implementación de lógica de negocio, controladores y servicios en backend.',
        'Desarrollo y mantenimiento de APIs REST con Node.js, Nestjs y Express.',
        'Integración de servicios externos usando Axios.',
        'Consultas y manipulación de datos con MySQL.',
        'Diseño y modificación de esquemas de base de datos.',
        'Creación y ejecución de migrations y seeds con Sequelize.',
        'Corrección de bugs y mejora continua del código existente.',
        'Refactorización para mejorar rendimiento y mantenibilidad.',
        'Implementación de validaciones y manejo de errores.',
        'Escritura de pruebas unitarias y de integración.',
        'Automatización de pruebas y soporte a QA.',
        'Análisis de calidad de código con SonarQube.',
        'Uso de Git y GitHub para control de versiones.',
        'Trabajo bajo metodología Scrum, participación en dailies y sprint reviews.',
        'Gestión de tareas en Asana.',
        'Apoyo en despliegues usando Docker y GitLab CI CD.',
        'Documentación técnica básica de endpoints y servicios.'
      ],
      aptitudes: ['Node.js', 'Administración de bases de datos', 'JavaScript', 'TypeScript', 'Microservicios']
    },
    {
      company: 'Fundación Universitaria Iberoamericana (FUNIBER)',
      icon: 'funiber.ico',
      role: 'Software Quality Assurance Analyst - Automation Semi-Senior',
      period: 'nov. 2023 - abr. 2025',
      achievements: [
        'Crear Plan de pruebas y testing.',
        'Simular rendimiento del producto.',
        'Mejora de estrategias de pruebas.',
        'Asegurar que el software está listo para el público objetivo.',
        'Automatización de pruebas con Pytest, Selenium, Playwright, Jest y Unittest.',
        'Gestión de bases de datos SQL Server, SQLite, MySQL y MongoDB.',
        'Mejora continua de prácticas de programación y calidad de código.',
        'Revisar las especificaciones del producto para predecir futuros errores.',
        'Desarrollo de script para la plataforma de Moodle.',
        'Automatización de APIs con Postman y Jmeter.',
        'Manejo de Arquitectura de microservicios.',
        'Construcción de tests unitarios y End-to-End.'
      ],
      aptitudes: ['Microservicios', 'JavaScript', 'MySQL', 'Python', 'Análisis de datos', 'Selenium WebDriver', 'Bases de datos', 'Scrum', 'Selenium', 'PHP', 'Docker', 'Desarrollo de API', 'Arquitectura', 'Pruebas funcionales', 'Git', 'Calidad de software', 'Jest']
    },
    {
      company: 'Freelancer',
      role: 'Freelance Developer',
      period: 'ago. 2022 - abr. 2024',
      achievements: [
        'Diseño y mantenimiento de sistemas con Flask y FastAPI.',
        'Automatización de pruebas con pytest y Selenium.',
        'Análisis de datos y generación de informes con Pandas y Matplotlib.',
        'Gestión de bases de datos SQL Server, SQLite y MySQL.'
      ],
      aptitudes: ['Análisis de datos', 'Entorno laboral', 'Facilidad de adaptación', 'Trabajo en equipo', 'Relaciones interpersonales', 'Actitud positiva', 'Pruebas funcionales']
    }
  ],

  projects: [
    {
      id: 1,
      name: 'Automatización E2E',
      description: 'Framework avanzado con Selenium y Pytest bajo patrón POM.',
      github: 'https://github.com/hramses1/automationE2E',
      tags: [
        { name: 'Python', icon: 'python' },
        { name: 'Selenium', icon: 'selenium' },
        { name: 'Pytest', icon: 'pytest' },
        { name: 'POM', icon: 'robotframework' }
      ]
    },
    {
      id: 2,
      name: 'Rabbit Alerts WhatsApp',
      description: 'Sistema de monitoreo y alertas de RabbitMQ hacia WhatsApp.',
      github: 'https://github.com/hramses1/Rabbit-Alerts',
      tags: [
        { name: 'RabbitMQ', icon: 'rabbitmq' },
        { name: 'WhatsApp', icon: 'whatsapp' },
        { name: 'Node.js', icon: 'nodedotjs' }
      ]
    },
    {
      id: 3,
      name: 'Telegram Search Bot',
      description: 'Bot de búsqueda automatizada de personas y placas via API.',
      github: 'https://github.com/hramses1/bot-telegram-search-person-ec',
      tags: [
        { name: 'Python', icon: 'python' },
        { name: 'Telegram', icon: 'telegram' },
        { name: 'API', icon: 'postman' }
      ]
    },
    {
      id: 4,
      name: 'API Gestión Usuarios Moodle',
      description: 'API para administración de usuarios y matriculaciones en Moodle.',
      github: 'https://github.com/hramses1/create-user-moodle-api',
      tags: [
        { name: 'Node.js', icon: 'nodedotjs' },
        { name: 'Moodle', icon: 'moodle' },
        { name: 'API', icon: 'postman' },
        { name: 'CRUD', icon: 'express' }
      ]
    },
    {
      id: 5,
      name: 'Automatización E2E Puppeteer',
      description: 'Automatización del navegador con Puppeteer y Jest. Framework robusto para pruebas E2E.',
      github: 'https://github.com/hramses1/Testing-Puppeteer',
      tags: [
        { name: 'Puppeteer', icon: 'puppeteer' },
        { name: 'Jest', icon: 'jest' },
        { name: 'JavaScript', icon: 'javascript' },
        { name: 'TypeScript', icon: 'typescript' }
      ]
    },
    {
      id: 6,
      name: 'QADash',
      description: 'Centro de mando web que convierte un proyecto pytest en una plataforma operable desde el navegador.',
      private: true,
      tags: [
        { name: 'Vue 3', icon: 'vuedotjs' },
        { name: 'Node.js', icon: 'nodedotjs' },
        { name: 'Socket.io', icon: 'socketdotio' },
        { name: 'Pytest', icon: 'pytest' }
      ],
      // Detalle ampliado: se muestra en el modal al hacer clic en la tarjeta.
      detail: {
        tagline: 'Centro de mando web para automatización QA',
        summary: 'Convierte un proyecto de pruebas con pytest en una plataforma operable desde el navegador: ejecutar, ver el progreso en vivo, entender el fallo, corregir el código y programar la siguiente corrida sin tocar la terminal. Hoy opera una suite real de 74 tests end-to-end de banca digital.',
        metrics: [
          { value: '74', label: 'Tests E2E' },
          { value: '231', label: 'Archivos consolidados' },
          { value: '103', label: 'Capturas indexadas' },
          { value: '15', label: 'Módulos' }
        ],
        highlights: [
          {
            title: 'Ejecución selectiva con progreso en vivo',
            text: 'Árbol de tests por módulo de negocio: se lanza la regresión completa, una carpeta o un solo caso. El progreso llega por WebSocket con reconexión automática, así que recargar la página no pierde la corrida.'
          },
          {
            title: 'Editor de código Python integrado',
            text: 'Resaltado de sintaxis, numeración de líneas y guardado directo sobre el archivo del proyecto. Ajustar un selector o un assert deja de exigir salir al IDE y volver.'
          },
          {
            title: 'Historial y analítica accionable',
            text: 'Cada corrida queda registrada con fecha, duración y resultado. KPIs de pass rate, cobertura real (tests nunca ejecutados) y detalle archivo por archivo, exportable a PDF. Gráficos SVG escritos a mano, sin librerías de charts.'
          },
          {
            title: 'Entornos y datos de prueba sin editar archivos',
            text: 'El .env se maneja como formulario y los entornos (preproducción, producción, UAT) se aplican con un clic. Los JSON de datos se editan en un formulario visual con versionado, y los 231 .txt de resultados se consolidan en una tabla filtrable con exportación a Excel.'
          },
          {
            title: 'Docker, Selenium Grid y calendarización',
            text: 'Ciclo de vida del contenedor de Selenium desde botones (con el comando docker compose a la vista) y vista del navegador en vivo por noVNC. Las regresiones se programan por hora, días y repeticiones, con parámetros que sobrescriben el .env solo para esa ejecución.'
          },
          {
            title: 'Multi-workspace y módulos configurables',
            text: 'Se conecta a cualquier proyecto pytest indicando sus rutas. Cada workspace tiene su configuración, reportes y programaciones, y los módulos se activan o desactivan por proyecto para que cada equipo vea solo lo que usa.'
          }
        ],
        stack: [
          { name: 'Vue 3', icon: 'vuedotjs' },
          { name: 'Node.js', icon: 'nodedotjs' },
          { name: 'Socket.io', icon: 'socketdotio' },
          { name: 'Pytest', icon: 'pytest' },
          { name: 'Selenium', icon: 'selenium' },
          { name: 'Docker', icon: 'docker' },
          { name: 'Electron', icon: 'electron' },
          { name: 'Tailwind', icon: 'tailwindcss' }
        ],
        gallery: [
          { src: './qadash/01-dashboard-tests.jpg', caption: 'Árbol de tests con selección por carpeta, archivo o caso individual.' },
          { src: './qadash/02-editor-codigo.jpg', caption: 'Editor Python integrado con resaltado de sintaxis.' },
          { src: './qadash/03-reportes-historial.jpg', caption: 'Historial de ejecuciones con filtros por fecha, estado y umbrales.' },
          { src: './qadash/04-analitica-kpis.jpg', caption: 'KPIs acumulados y tendencia de pass rate por ejecución.' },
          { src: './qadash/05-analitica-detalle.jpg', caption: 'Pass rate archivo por archivo, con casos sin ejecutar.' },
          { src: './qadash/06-variables-entorno.jpg', caption: 'Editor visual del .env y entornos guardados listos para aplicar.' },
          { src: './qadash/07-datos-txt.jpg', caption: '231 archivos .txt unificados en una tabla con exportación a Excel.' },
          { src: './qadash/08-datos-json.jpg', caption: 'Editor visual de datos de prueba con versiones guardadas.' },
          { src: './qadash/09-imagenes-error.jpg', caption: 'Galería de capturas de los tests fallidos, con buscador.' },
          { src: './qadash/10-docker-selenium.jpg', caption: 'Panel de Docker: acciones de compose y salida en vivo.' },
          { src: './qadash/11-calendarizacion.jpg', caption: 'Programaciones activas con hora, día y tests asociados.' },
          { src: './qadash/12-calendarizacion-nueva.jpg', caption: 'Nueva programación: hora, repeticiones, días y parámetros.' },
          { src: './qadash/13-configuracion-rutas.jpg', caption: 'Configuración de rutas del proyecto, pytest y grid remoto.' },
          { src: './qadash/14-modulos.jpg', caption: 'Activación y desactivación de módulos por proyecto.' },
          { src: './qadash/15-workspaces.jpg', caption: 'Selector de workspaces: un dashboard, todos los proyectos.' }
        ]
      }
    }
  ]
}
