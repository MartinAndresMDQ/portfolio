export type SkillCategory = {
  title: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend / Lenguajes",
    items: ["Java", "Spring Boot", "Go", "Node.js", "TypeScript"],
  },
  {
    title: "Frontend",
    items: ["Angular", "React", "Next.js", "HTML/Sass", "Tailwind CSS", "Flutter"],
  },
  {
    title: "Datos & Cloud",
    items: [
      "Oracle",
      "PostgreSQL",
      "MySQL",
      "AWS",
      "OpenShift",
      "Nullplatform",
      "Docker",
      "Jenkins",
      "Kong",
      "Google Cloud",
    ],
  },
  {
    title: "Herramientas & Ecosistema",
    items: [
      "Kafka",
      "Braze",
      "WhatsApp Meta",
      "Firebase",
      "OAuth",
      "New Relic",
      "SonarQube",
      "Google Maps",
    ],
  },
];
