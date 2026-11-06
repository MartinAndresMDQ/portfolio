export const profile = {
  name: "Martín Lencina",
  role: "Senior Full Stack Developer",
  location: "Mar del Plata, Buenos Aires, Argentina",
  email: "martinandres987@gmail.com",
  phone: "+54 223-6055332",
  phoneHref: "tel:+542236055332",
  whatsapp: "https://wa.me/542236055332",
  linkedin: "https://www.linkedin.com/in/martin-lencina/",
  github: "https://github.com/MartinAndresMDQ",
  cvUrl: "/CV_Martin_Lencina.pdf",
  headline:
    "Más de 10 años diseñando e implementando soluciones robustas en banca, pagos, salud y sector público.",
  summary:
    "Del backend en Java/Go al frontend en React/Angular/Next.js, con enfoque end-to-end: aprendo lo necesario, lo llevo a producción y cuido la calidad del código junto al equipo.",
  about: [
    "Más de una década resolviendo problemas de punta a punta (end-to-end): desde entender el negocio y definir la solución hasta llevarla a producción, operarla y mejorarla.",
    "Trabajo con autonomía y en equipo: code reviews, mentoring, documentación de decisiones y mejora continua de procesos técnicos. En Scrum, priorizo comunicación clara y entregas con impacto medible.",
    "Hoy integro el squad de Comunicaciones de un grupo financiero: pasarela de webhooks de WhatsApp (Meta) en Go, Braze, backoffice transaccional, auditoría de campañas y microapps con geolocalización.",
    "Antes construí plataformas de pagos y auth (Java 21, Kafka, Cognito), backends financieros gubernamentales (Spring Boot + Oracle) y frontends de gestión en salud (Angular + WebSockets + AS400).",
  ],
  focus: [
    { label: "End-to-end", detail: "De la idea a producción" },
    { label: "Autonomía", detail: "Ownership real del problema" },
    { label: "Calidad", detail: "Reviews, mentoring y procesos" },
    { label: "Impacto", detail: "Banca, pagos, salud y gobierno" },
  ],
  education: [
    {
      title: "Técnico Superior en Programación",
      place: "Universidad Tecnológica Nacional, Mar del Plata",
      period: "2014 – 2017",
    },
  ],
} as const;
