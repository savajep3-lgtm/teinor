export interface Testimonio {
  id: string;
  nombre: string;
  cargo: string;
  empresa: string;
  inicial: string;
  contenido: string;
  acentoGradiente: string;
}

/**
 * Testimonios de clientes (placeholder).
 * El campo `inicial` se usa como avatar circular cuando no hay foto.
 */
export const testimonios: Testimonio[] = [
  {
    id: "1",
    nombre: "Lucía Mendoza",
    cargo: "Fundadora",
    empresa: "Atelier Couture",
    inicial: "L",
    contenido:
      "El equipo de Teinor superó todas mis expectativas. Entendieron la esencia de mi marca y crearon una tienda online que enamora a cada visitante.",
    acentoGradiente: "from-marca-cian to-marca-purpura",
  },
  {
    id: "2",
    nombre: "Carlos Ríos",
    cargo: "Director Comercial",
    empresa: "Nova Finanzas",
    inicial: "C",
    contenido:
      "Profesionalismo absoluto. La plataforma que nos entregaron es rápida, intuitiva y nuestros usuarios la adoran. Triplicamos las conversiones en tres meses.",
    acentoGradiente: "from-marca-purpura to-marca-magenta",
  },
  {
    id: "3",
    nombre: "Marina Torres",
    cargo: "CEO",
    empresa: "Lúmina Estudio",
    inicial: "M",
    contenido:
      "Trabajar con Teinor fue una experiencia única. Cada detalle fue cuidado al máximo y el resultado refleja exactamente lo que imaginaba.",
    acentoGradiente: "from-marca-magenta to-marca-rosa",
  },
  {
    id: "4",
    nombre: "Diego Palma",
    cargo: "Gerente",
    empresa: "Ritmo Fitness",
    inicial: "D",
    contenido:
      "El embudo que construyeron multiplicó nuestras altas un 280%. Estrategia, diseño y desarrollo de primer nivel. Recomendados al 100%.",
    acentoGradiente: "from-marca-azul to-marca-purpura",
  },
];
