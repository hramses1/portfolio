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
    description: 'Ingeniero de Software especializado en el desarrollo de soluciones backend escalables y el aseguramiento de la calidad (QA) mediante frameworks de automatización robustos y arquitectura de microservicios.'
  },
  
  education: [
    {
      institution: 'Universidad Estatal de Milagro',
      period: '2019 - 2023',
      degree: 'INGENIERIA DE SOFTWARE',
      achievement: '1ER. LUGAR EN FERIA DE CIENCIAS Y TECNOLOGÍAS (2022)'
    },
    {
      institution: 'INSTITUTO LIBERTADOR',
      period: '2011 - 2016',
      degree: 'BACHILLER EN CIENCIAS'
    }
  ],

  certifications: [
    { title: 'CI/CD en Gitlab vía FTP', issuer: 'Udemy', date: '2026', category: 'DevOps', icon: 'gitlab' },
    { title: 'Gestión Efectiva del Tiempo', issuer: 'Platzi', date: '2024', category: 'Soft Skills', icon: 'platzi' },
    { title: 'Gestión de proyectos con M365', issuer: 'LinkedIn', date: '2024', category: 'Gestión', icon: 'linkedin' },
    { title: 'Gestión de datos con M365', issuer: 'LinkedIn', date: '2024', category: 'Datos', icon: 'linkedin' },
    { title: 'Aprende Data Science: Conceptos', issuer: 'LinkedIn', date: '2024', category: 'Datos', icon: 'linkedin' },
    { title: 'Fundamentos análisis empresarial', issuer: 'LinkedIn', date: '2024', category: 'Negocio', icon: 'linkedin' },
    { title: 'Fundamentos de análisis empresarial', issuer: 'Microsoft', date: '2024', category: 'Negocio', icon: 'microsoft' },
    { title: 'Product Owner esencial', issuer: 'LinkedIn', date: '2024', category: 'Producto', icon: 'linkedin' },
    { title: 'Liderazgo Proyectos Software', issuer: 'LinkedIn', date: '2023', category: 'Liderazgo', icon: 'linkedin' },
    { title: 'Mastering Visual Studio Code', issuer: 'Udemy', date: '2023', category: 'Herramientas', icon: 'visualstudiocode' },
    { title: 'Liderazgo: Gerencia en Tecnología', issuer: 'Udemy', date: '2023', category: 'Liderazgo', icon: 'udemy' },
    { title: 'Cloud Computing', issuer: 'Google Actívate', date: '2022', category: 'Cloud', icon: 'google' },
    { title: 'Python Programming Beyond Basics', issuer: 'Udemy', date: '2021', category: 'Desarrollo', icon: 'python' },
    { title: 'Microsoft Excel Ultimate 2021', issuer: 'Udemy', date: '2021', category: 'Herramientas', icon: 'microsoftexcel' },
    { title: 'Guide to Cyber Security', issuer: 'Udemy', date: '2021', category: 'Seguridad', icon: 'udemy' },
    { title: 'SQL para Principiantes', issuer: 'Udemy', date: '2021', category: 'Bases de Datos', icon: 'mysql' },
    { title: 'Analista Junior GeneXus 17', issuer: 'GeneXus', date: '2021', category: 'Desarrollo', icon: 'genexus' }
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

  experience: [
    {
      company: 'FUNIBER',
      role: 'Software Developer',
      period: 'abr. 2025 - actualidad',
      achievements: [
        'Implementación de lógica de negocio, controladores y servicios en backend.',
        'Desarrollo y mantenimiento de APIs REST con Node.js, Nestjs y Express.',
        'Integración de servicios externos usando Axios.',
        'Creación y ejecución de migrations y seeds con Sequelize.',
        'Apoyo en despliegues usando Docker y GitLab CI CD.'
      ],
      aptitudes: ['Node.js', 'Administración de bases de datos', 'JavaScript', 'TypeScript', 'Microservicios']
    },
    {
      company: 'FUNIBER',
      role: 'Software Quality Assurance Analyst - Automation Semi-Senior',
      period: 'nov. 2023 - abr. 2025',
      achievements: [
        'Crear Plan de pruebas y testing y simular rendimiento.',
        'Automatización de pruebas con Pytest, Selenium, Playwright, Jest y Unittest.',
        'Desarrollo de scripts para plataforma Moodle.',
        'Automatización de APIs con Postman y Jmeter.',
        'Manejo de Arquitectura de microservicios.'
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
    }
  ]
}
