export interface PreguntaFrecuente {
  id: string;
  pregunta: string;
  respuesta: string;
}

/**
 * Preguntas frecuentes habituales que recibe Teinor de sus clientes.
 */
export const preguntasFrecuentes: PreguntaFrecuente[] = [
  {
    id: "tiempo",
    pregunta: "¿Cuánto tarda en estar lista mi página web?",
    respuesta:
      "El tiempo depende del alcance del proyecto. Una landing puede estar lista en 1-2 semanas, mientras que un sitio corporativo o e-commerce suele tomar entre 3 y 6 semanas. Te entregamos un cronograma claro al iniciar.",
  },
  {
    id: "tecnologias",
    pregunta: "¿Qué tecnologías utilizan en sus desarrollos?",
    respuesta:
      "Trabajamos con tecnologías modernas como Next.js, React, TypeScript, Tailwind CSS y Node.js. Esto garantiza sitios rápidos, seguros y preparados para escalar.",
  },
  {
    id: "diseno-personalizado",
    pregunta: "¿Los diseños son completamente personalizados?",
    respuesta:
      "Sí. Cada proyecto es 100% a medida. No usamos plantillas: diseñamos desde cero para reflejar la identidad y objetivos únicos de tu marca.",
  },
  {
    id: "soporte",
    pregunta: "¿Ofrecen soporte después de entregar el proyecto?",
    respuesta:
      "Por supuesto. Todos nuestros planes incluyen un período de soporte post-entrega y ofrecemos planes de mantenimiento mensuales para mantener tu sitio actualizado y seguro.",
  },
  {
    id: "hosting",
    pregunta: "¿Se encargan del hosting y dominio?",
    respuesta:
      "Sí, te ayudamos con la configuración completa de hosting, dominio y certificados SSL. En el plan Esencial el primer año está incluido.",
  },
  {
    id: "pago",
    pregunta: "¿Cómo funciona el proceso de pago?",
    respuesta:
      "Trabajamos con un esquema flexible: 50% al iniciar el proyecto y 50% al entregarlo. Para proyectos grandes podemos definir hitos de pago intermedios.",
  },
];
