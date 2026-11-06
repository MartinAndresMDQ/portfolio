export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "ITTI Digital",
    role: "Senior Full Stack Developer",
    period: "Dic 2025 – Presente",
    location: "Remoto",
    summary:
      "Squad de Comunicaciones de un grupo financiero: orquestación de campañas, canales y operación del backoffice transaccional.",
    highlights: [
      "Integré el squad de Comunicaciones: Braze, backoffice transaccional y centros de ayuda para múltiples empresas del grupo.",
      "Definí el modelo para que cada empresa opere sus comunicaciones: templates, credenciales, campañas y auditoría.",
      "Desarrollé el flujo de templates de WhatsApp: creación en un backoffice React, procesamiento con Java y envío a Meta para aprobación.",
      "Implementé en Go el webhook que recibe las notificaciones de aprobación de Meta y habilita los templates para campañas multitenant.",
      "Evolucioné el envío de emails, la auditoría de campañas y el backoffice operativo de comunicaciones.",
      "Resolví integraciones entre equipos e incidentes en Braze, backoffice y WhatsApp, con observabilidad en New Relic y despliegue en Nullplatform.",
      "Acompañé al equipo con code reviews, mentoring y seguimiento en Scrum.",
    ],
    stack: [
      "Java",
      "React",
      "Go",
      "Braze",
      "WhatsApp Meta",
      "Nullplatform",
      "New Relic",
    ],
  },
  {
    company: "Gire S.A.",
    role: "Full Stack Developer",
    period: "Abr 2024 – Nov 2025",
    location: "Remoto",
    summary:
      "Desarrollo full stack de una Oficina Virtual multitenant para clientes adheridos a Rapipago, además de soluciones para el ecosistema de pagos.",
    highlights: [
      "Construí end-to-end una Oficina Virtual para clientes adheridos a Rapipago, con backend Java y frontend Angular/TypeScript.",
      "Desarrollé la solución con una arquitectura multitenant para que distintos clientes operen desde espacios virtuales propios.",
      "Construí soluciones full stack desde cero con Java 21, Kafka, APIs REST, Oracle y PostgreSQL, en coordinación con consultoras externas.",
      "Implementé encriptación de datos sensibles y autenticación con AWS Cognito y Google Auth sobre Node.js.",
      "Documenté la metodología de trabajo del equipo y estandaricé prácticas de desarrollo y entrega.",
      "Trabajé codo a codo con DevOps en infraestructura AWS y OpenShift para llevar cambios a producción con trazabilidad.",
    ],
    stack: [
      "Java 21",
      "Angular",
      "TypeScript",
      "Kafka",
      "Node.js",
      "AWS Cognito",
      "Google Auth",
      "Oracle",
      "PostgreSQL",
      "OpenShift",
      "AWS",
      "Grafana",
    ],
  },
  {
    company: "Kolektor / Trimix SRL",
    role: "Desarrollador Backend",
    period: "Jun 2022 – Mar 2024",
    location: "Remoto",
    summary:
      "Backend de un sistema financiero gubernamental de alta criticidad, con foco en calidad, seguridad y operación continua.",
    highlights: [
      "Construí el backend del sistema financiero gubernamental con Java, Spring Boot, Oracle y JasperReports.",
      "Diseñé e implementé APIs y procesos de negocio para operación financiera confiable y auditable.",
      "Aseguré calidad con JUnit, Mockito y prácticas de code review; autenticación con OAuth.",
      "Participé del ciclo de entrega con Jenkins y despliegues en OpenShift bajo Scrum.",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Oracle",
      "JasperReports",
      "JUnit",
      "Mockito",
      "OAuth",
      "Jenkins",
      "OpenShift",
    ],
  },
  {
    company: "Sancor Salud / Trimix SRL",
    role: "Desarrollador Frontend / Referente Técnico",
    period: "Nov 2019 – Jul 2022",
    location: "Remoto",
    summary:
      "Referente técnico en aplicaciones web de gestión y automatización de procesos de actualización de prestaciones para una empresa de salud.",
    highlights: [
      "Lideré proyectos full stack de aplicaciones web de gestión para el dominio de salud.",
      "Desarrollé una plataforma con Java y Angular para automatizar los aumentos de prestaciones y prácticas de prestadores.",
      "Optimicé un proceso manual de meses: al cargar datos esenciales, la plataforma actualizaba millones de registros en horas.",
      "Integré las aplicaciones a bases de datos y sistemas AS400, cuidando estabilidad y experiencia de usuario.",
      "Actué como referente técnico: acompañamiento al equipo, definición de soluciones y trabajo ágil con Scrum.",
    ],
    stack: ["Java", "Angular", "TypeScript", "WebSockets", "AS400", "Scrum"],
  },
  {
    company: "Sistemas MDQ",
    role: "Desarrollador Full Stack",
    period: "Feb 2015 – Oct 2019",
    location: "Mar del Plata",
    summary:
      "Base de la carrera: aplicaciones web y de escritorio, evolución continua del frontend y operación de infraestructura.",
    highlights: [
      "Creé aplicaciones web y de escritorio con Java, Spring Boot y Angular para clientes locales y regionales.",
      "Evolucioné el frontend de Angular 2 a Angular 10, modernizando arquitectura y experiencia de usuario.",
      "Administré servidores Linux, bases MySQL, backups y recursos en Google Cloud.",
      "Asumí ownership end-to-end: desarrollo, despliegue, soporte y mejora continua de los sistemas en producción.",
    ],
    stack: ["Java", "Spring Boot", "Angular", "Linux", "MySQL", "Google Cloud"],
  },
];
