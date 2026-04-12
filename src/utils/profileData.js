/**
 * Perfil Profesional de Hector Arismendi.
 */
export const profile = {
  identity: {
    firstName: 'HECTOR',
    lastName: 'ARISMENDI',
    title: 'Software Developer | SDET | QA Automation Engineer',
    email: 'arismendiramses@gmail.com',
    phone: '0961613564',
    location: 'Duran, Cdla Maldonado',
    description: 'Ingeniero de Software especializado en el desarrollo de soluciones backend escalables y el aseguramiento de la calidad (QA) mediante frameworks de automatización robustos.'
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
    {
      title: 'CI/CD en Gitlab vía FTP',
      issuer: 'Udemy',
      date: 'mar. 2026',
      id: 'UC-84c001e7-fe38-4740-a015-81eb5354d997',
      category: 'Cloud & DevOps'
    },
    {
      title: 'Gestión Efectiva del Tiempo',
      issuer: 'Platzi',
      date: 'ago. 2024',
      category: 'Soft Skills'
    },
    {
      title: 'Product Owner esencial',
      issuer: 'LinkedIn',
      date: 'jun. 2024',
      category: 'Management'
    },
    {
      title: 'Fundamentos de análisis empresarial',
      issuer: 'Microsoft / LinkedIn',
      date: 'jul. 2024',
      category: 'Management'
    },
    {
      title: 'Liderazgo para el desarrollo de proyectos de software',
      issuer: 'LinkedIn',
      date: 'sept. 2023',
      category: 'Leadership'
    },
    {
      title: 'Python Programming Beyond The Basics',
      issuer: 'Udemy',
      date: 'oct. 2021',
      category: 'Development'
    },
    {
      title: 'Cloud Computing',
      issuer: 'Google Actívate',
      date: 'nov. 2022',
      category: 'Cloud & DevOps'
    },
    {
      title: 'SQL para Principiantes: Curso práctico',
      issuer: 'Udemy',
      date: 'oct. 2021',
      category: 'Development'
    }
  ],

  skills: {
    backend: [
      { name: 'Node.js', level: 90 },
      { name: 'NestJS', level: 85 },
      { name: 'Express.js', level: 90 },
      { name: 'Python', level: 95 },
      { name: 'TypeScript', level: 85 },
      { name: 'Flask / FastAPI', level: 80 }
    ],
    frontend: [
      { name: 'Vue', level: 80 }
    ],
    databases: [
      { name: 'MySQL', level: 90 },
      { name: 'SQL Server', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'Sequelize / SQLAlchemy', level: 90 }
    ],
    testing: [
      { name: 'Pytest', level: 95 },
      { name: 'Selenium', level: 90 },
      { name: 'Playwright', level: 85 },
      { name: 'Cypress', level: 85 },
      { name: 'Postman / JMeter', level: 90 },
      { name: 'SonarQube', level: 80 }
    ],
    devops: [
      { name: 'Git / GitHub / GitLab', level: 95 },
      { name: 'Docker', level: 80 },
      { name: 'GitLab CI/CD', level: 85 },
      { name: 'RabbitMQ', level: 75 }
    ]
  },

  experience: [
    {
      company: 'Fundación Universitaria Iberoamericana (FUNIBER)',
      role: 'Software Developer',
      period: 'abr. 2025 - actualidad',
      location: 'Guayaquil, Ecuador (Presencial)',
      achievements: [
        'Implementación de lógica de negocio, controladores y servicios en backend.',
        'Desarrollo y mantenimiento de APIs REST con Node.js, Nestjs y Express.',
        'Integración de servicios externos usando Axios.',
        'Diseño y modificación de esquemas de base de datos MySQL con Sequelize (Migrations/Seeds).',
        'Refactorización para mejora de rendimiento y corrección de bugs.',
        'Escritura de pruebas unitarias, de integración y soporte a QA.',
        'Análisis de calidad con SonarQube y gestión bajo metodología Scrum.'
      ]
    },
    {
      company: 'Fundación Universitaria Iberoamericana (FUNIBER)',
      role: 'Software Quality Assurance Analyst - Automation Semi-Senior',
      period: 'nov. 2023 - abr. 2025',
      location: 'Guayaquil, Ecuador (Presencial)',
      achievements: [
        'Creación de planes de pruebas y estrategias de mejora continua.',
        'Automatización de pruebas con Pytest, Selenium, Playwright, Jest y Unittest.',
        'Automatización de APIs con Postman y Jmeter.',
        'Gestión de bases de datos SQL Server, SQLite, MySQL y MongoDB.',
        'Desarrollo de scripts para plataforma Moodle y manejo de microservicios.',
        'Simulación de rendimiento y construcción de tests End-to-End.'
      ]
    },
    {
      company: 'Freelancer',
      role: 'Freelance Developer',
      period: 'ago. 2022 - abr. 2024',
      location: 'Remoto',
      achievements: [
        'Diseño y mantenimiento de sistemas con Flask y FastAPI.',
        'Automatización de pruebas con pytest y Selenium.',
        'Análisis de datos y generación de informes con Pandas y Matplotlib.',
        'Gestión de bases de datos SQL Server, SQLite y MySQL.',
        'Optimización de operaciones empresariales mediante soluciones innovadoras.'
      ]
    }
  ],

  projects: [
    {
      id: 1,
      name: 'Automatización E2E (End-to-End)',
      description: 'Framework de automatización de flujo completo de compra con Selenium, Pytest y POM.',
      github: 'https://github.com/hramses1/automationE2E',
      tags: ['QA', 'Python', 'Selenium', 'POM']
    },
    {
      id: 2,
      name: 'Alertas de Rabbit para WhatsApp',
      description: 'Notificaciones personalizadas de RabbitMQ enviadas directamente a WhatsApp.',
      github: 'https://github.com/hramses1/Rabbit-Alerts',
      tags: ['Backend', 'RabbitMQ', 'WhatsApp_API']
    },
    {
      id: 3,
      name: 'Telegram Search Bot',
      description: 'Bot para búsqueda de personas y placas de vehículos en Ecuador via Telegram API.',
      github: 'https://github.com/hramses1/bot-telegram-search-person-ec',
      tags: ['Python', 'Telegram_API', 'Automation']
    },
    {
      id: 4,
      name: 'API Gestión Usuarios Moodle',
      description: 'API para administración de usuarios y matriculaciones en instancias de Moodle.',
      github: 'https://github.com/hramses1/create-user-moodle-api',
      tags: ['Backend', 'Node.js', 'Moodle_API']
    }
  ]
}
