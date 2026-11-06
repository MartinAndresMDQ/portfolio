export type Project = {
  title: string;
  description: string;
  tech: string[];
};

export const projects: Project[] = [
  {
    title: "Plataforma multitenant de campañas de WhatsApp",
    description:
      "Desarrollé el flujo de gestión de templates de WhatsApp: creación desde un backoffice en React, procesamiento con Java y envío a Meta para aprobación. Un webhook en Go recibe las notificaciones de aprobación y habilita su uso en campañas multitenant para distintas empresas.",
    tech: ["Java", "React", "Go", "WhatsApp Meta", "Multitenancy"],
  },
  {
    title: "Oficina Virtual Multitenant — Rapipago",
    description:
      "Solución end-to-end para clientes adheridos a Rapipago. Desarrollé el backend en Java y el frontend en Angular con TypeScript para ofrecer a cada cliente un espacio virtual propio, integrado al ecosistema de pagos y preparado para operar con múltiples tenants.",
    tech: ["Java", "Angular", "TypeScript", "Kafka", "APIs REST"],
  },
  {
    title: "Sistema Financiero Gubernamental",
    description:
      "Backend de un sistema financiero para el sector público: APIs robustas, reportes con JasperReports, autenticación OAuth y operación continua sobre OpenShift.",
    tech: ["Java", "Spring Boot", "Oracle", "JasperReports", "Jenkins", "OpenShift"],
  },
  {
    title: "Plataforma de Pagos & Auth",
    description:
      "Soluciones full stack desde cero con Java 21 y Kafka, protegiendo datos sensibles con encriptación, AWS Cognito y Google Auth en Node.js.",
    tech: ["Java 21", "Kafka", "Node.js", "AWS Cognito", "PostgreSQL", "Oracle"],
  },
  {
    title: "Automatización de aumentos de prestaciones",
    description:
      "Plataforma para automatizar los aumentos de prestaciones y prácticas de prestadores de salud. Con la carga de datos esenciales, procesaba y actualizaba millones de registros en horas, reemplazando un proceso manual que podía llevar meses.",
    tech: ["Java", "Angular", "TypeScript", "Automatización"],
  },
  {
    title: "Plataforma online de juegos de mesa",
    description:
      "Proyecto personal para jugar juegos de mesa en línea, con una experiencia web desarrollada en React y servicios backend en Node.js.",
    tech: ["React", "Node.js"],
  },
];
