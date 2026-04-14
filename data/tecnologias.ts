export interface Tecnologia {
  nombre: string;
  // SVG path simplificado o letra para mostrar como icono
  iniciales: string;
  acentoGradiente: string;
}

/**
 * Stack de tecnologías que Teinor utiliza en sus proyectos.
 * Se renderizan como tarjetas pequeñas con gradiente sutil.
 */
export const tecnologias: Tecnologia[] = [
  { nombre: "Next.js", iniciales: "N", acentoGradiente: "from-marca-cian to-marca-azul" },
  { nombre: "React", iniciales: "R", acentoGradiente: "from-marca-azul to-marca-cian" },
  { nombre: "TypeScript", iniciales: "TS", acentoGradiente: "from-marca-azul to-marca-purpura" },
  { nombre: "Tailwind", iniciales: "TW", acentoGradiente: "from-marca-cian to-marca-purpura" },
  { nombre: "Node.js", iniciales: "JS", acentoGradiente: "from-marca-purpura to-marca-magenta" },
  { nombre: "Figma", iniciales: "F", acentoGradiente: "from-marca-magenta to-marca-rosa" },
  { nombre: "WordPress", iniciales: "W", acentoGradiente: "from-marca-azul to-marca-violeta" },
  { nombre: "Shopify", iniciales: "SH", acentoGradiente: "from-marca-violeta to-marca-rosa" },
];
