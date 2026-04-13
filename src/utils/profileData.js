/**
 * Perfil Profesional Exhaustivo de Hector Arismendi.
 */
export const profile = {
  identity: {
    firstName: 'HECTOR',
    lastName: 'ARISMENDI',
    title: 'Software Developer | QA Automation Engineer',
    email: 'arismendiramses@gmail.com',
    phone: '+593-961613564',
    linkedin: 'https://www.linkedin.com/in/hector-arismendi-469551167/',
    description: 'Ingeniero de Software con amplia trayectoria en el ciclo de vida del desarrollo. Especialista en Backend, QA Automation y Ciencia de Datos, con un enfoque fuerte en la arquitectura, el liderazgo técnico y la mejora continua.'
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
    { title: 'Liderazgo: Gerencia en Tecnología', issuer: 'Udemy', date: '2023', category: 'Liderazgo', icon: 'udemy' },
    { title: 'Product Owner esencial', issuer: 'LinkedIn', date: '2024', category: 'Gestión', icon: 'linkedin' },
    { title: 'Fundamentos de análisis empresarial', issuer: 'Microsoft', date: '2024', category: 'Negocio', icon: 'microsoft' },
    { title: 'Aprende Data Science: Conceptos Básicos', issuer: 'LinkedIn', date: '2024', category: 'Datos', icon: 'linkedin' },
    { title: 'Python Beyond The Basics', issuer: 'Udemy', date: '2021', category: 'Desarrollo', icon: 'python' },
    { title: 'Cloud Computing', issuer: 'Google', date: '2022', category: 'Cloud', icon: 'google' },
    { title: 'Analista Junior GeneXus 17', issuer: 'GeneXus', date: '2021', category: 'Desarrollo', icon: 'genexus' }
  ],

  skills: {
    backend: [
      { name: 'JavaScript', level: 90, icon: 'javascript' },
      { name: 'Node.js', level: 90, icon: 'nodedotjs' },
      { name: 'TypeScript', level: 85, icon: 'typescript' },
      { name: 'Python', level: 95, icon: 'python' },
      { name: 'NestJS', level: 85, icon: 'nestjs' },
      { name: 'Express.js', level: 90, icon: 'express' },
      { name: 'PHP', level: 75, icon: 'php' },
      { name: 'Flask / FastAPI', level: 80, icon: 'fastapi' }
    ],
    frontend: [
      { name: 'Vue', level: 85, icon: 'vuedotjs' },
      { name: 'React.js', level: 70, icon: 'react' },
      { name: 'Bootstrap', level: 80, icon: 'bootstrap' },
      { name: 'HTML5', level: 95, icon: 'html5' }
    ],
    testing: [
      { name: 'Pytest', level: 95, icon: 'pytest' },
      { name: 'Selenium', level: 90, icon: 'selenium' },
      { name: 'Playwright', level: 85, icon: 'playwright' },
      { name: 'Cypress', level: 85, icon: 'cypress' },
      { name: 'Jest', level: 80, icon: 'jest' },
      { name: 'Postman', level: 90, icon: 'postman' },
      { name: 'SonarQube', level: 80, icon: 'sonarqube' }
    ],
    dataIA: [
      { name: 'TensorFlow', level: 75, icon: 'tensorflow' },
      { name: 'NumPy', level: 85, icon: 'numpy' },
      { name: 'Pandas', level: 85, icon: 'pandas' },
      { name: 'Matplotlib', level: 80, icon: 'matplotlib' }
    ],
    databases: [
      { name: 'MySQL', level: 90, icon: 'mysql' },
      { name: 'SQL Server', level: 85, icon: 'microsoftsqlserver' },
      { name: 'MongoDB', level: 80, icon: 'mongodb' },
      { name: 'Sequelize', level: 90, icon: 'sequelize' },
      { name: 'SQLAlchemy', level: 85, icon: 'python' }
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
    'Adaptación al Cambio', 'Trabajo en Equipo', 'Obtención de Requisitos', 
    'Gestión de Proyectos', 'Comunicación Efectiva'
  ],

  experience: [
    {
      company: 'FUNIBER',
      role: 'Software Developer',
      period: 'abr. 2025 - actualidad',
      achievements: [
        'Desarrollo de APIs REST con Node.js, Nestjs y Express.',
        'Diseño de esquemas de BD y ORM con Sequelize.',
        'Integración de servicios externos y optimización de controladores.'
      ]
    },
    {
      company: 'FUNIBER',
      role: 'QA Automation Semi-Senior',
      period: 'nov. 2023 - abr. 2025',
      achievements: [
        'Automatización E2E con Selenium, Playwright y Pytest.',
        'Estrategias de pruebas de rendimiento y microservicios.',
        'Mejora de calidad de código con SonarQube.'
      ]
    }
  ],

  projects: [
    {
      id: 1,
      name: 'Automatización E2E',
      description: 'Framework avanzado con Selenium y Pytest bajo patrón POM.',
      github: 'https://github.com/hramses1/automationE2E',
      tags: [{ name: 'QA', icon: 'testcafe' }, { name: 'Python', icon: 'python' }, { name: 'POM', icon: 'robotframework' }]
    },
    {
      id: 2,
      name: 'Rabbit Alerts WhatsApp',
      description: 'Sistema de monitoreo y alertas de RabbitMQ hacia WhatsApp.',
      github: 'https://github.com/hramses1/Rabbit-Alerts',
      tags: [{ name: 'RabbitMQ', icon: 'rabbitmq' }, { name: 'WhatsApp', icon: 'whatsapp' }, { name: 'Node.js', icon: 'nodedotjs' }]
    },
    {
      id: 3,
      name: 'IA Regresión Lineal',
      description: 'Modelo predictivo desarrollado con TensorFlow y NumPy.',
      github: 'https://github.com/hramses1',
      tags: [{ name: 'IA', icon: 'tensorflow' }, { name: 'Python', icon: 'python' }, { name: 'Math', icon: 'numpy' }]
    },
    {
      id: 4,
      name: 'Telegram Search Bot',
      description: 'Bot de búsqueda automatizada de personas y placas via API.',
      github: 'https://github.com/hramses1/bot-telegram-search-person-ec',
      tags: [{ name: 'Bots', icon: 'telegram' }, { name: 'API', icon: 'postman' }, { name: 'Python', icon: 'python' }]
    },
    {
      id: 5,
      name: 'Convertidor YT Tkinter',
      description: 'Herramienta de escritorio para descarga y conversión de medios.',
      github: 'https://github.com/hramses1',
      tags: [{ name: 'GUI', icon: 'python' }, { name: 'Tools', icon: 'python' }]
    },
    {
      id: 6,
      name: 'Discord Interaction Bot',
      description: 'Bot para gestión de comunidades y automatización de tareas en Discord.',
      github: 'https://github.com/hramses1',
      tags: [{ name: 'Discord', icon: 'discord' }, { name: 'Node.js', icon: 'nodedotjs' }]
    }
  ]
}
