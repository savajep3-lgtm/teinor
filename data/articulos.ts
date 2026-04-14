export interface Articulo {
  id: string;
  titulo: string;
  resumen: string;
  categoria: string;
  imagen: string;
  fecha: string;
  tiempoLectura: string;
  autor: string;
  acentoGradiente: string;
}

/**
 * Artículos del blog de Teinor.
 * Sustitúyelos por contenidos reales cuando los tengas.
 */
export const articulos: Articulo[] = [
  {
    id: "tendencias-diseno-web-2026",
    titulo: "10 tendencias de diseño web que dominarán este año",
    resumen:
      "Desde el bento layout hasta las microinteracciones avanzadas, descubre las tendencias que marcarán el diseño web moderno.",
    categoria: "Diseño",
    imagen:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1400&q=80",
    fecha: "10 abr 2026",
    tiempoLectura: "6 min",
    autor: "Equipo Teinor",
    acentoGradiente: "from-marca-cian to-marca-azul",
  },
  {
    id: "embudo-venta-paso-a-paso",
    titulo: "Cómo construir un embudo de ventas que convierta de verdad",
    resumen:
      "Una guía práctica para diseñar funnels efectivos: desde captar la atención hasta cerrar la venta sin presionar al cliente.",
    categoria: "Marketing",
    imagen:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
    fecha: "02 abr 2026",
    tiempoLectura: "8 min",
    autor: "Equipo Teinor",
    acentoGradiente: "from-marca-purpura to-marca-violeta",
  },
  {
    id: "next-js-vs-wordpress",
    titulo: "Next.js vs WordPress: ¿cuál elegir para tu próximo proyecto?",
    resumen:
      "Comparativa honesta entre las dos tecnologías más populares para sitios web. Ventajas, desventajas y casos de uso ideales.",
    categoria: "Desarrollo",
    imagen:
      "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1400&q=80",
    fecha: "25 mar 2026",
    tiempoLectura: "10 min",
    autor: "Equipo Teinor",
    acentoGradiente: "from-marca-magenta to-marca-rosa",
  },
  {
    id: "errores-comunes-tienda-online",
    titulo: "7 errores comunes al lanzar una tienda online (y cómo evitarlos)",
    resumen:
      "Antes de invertir en tu e-commerce, asegúrate de no cometer estos fallos que arruinan las ventas desde el primer día.",
    categoria: "E-commerce",
    imagen:
      "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=1400&q=80",
    fecha: "18 mar 2026",
    tiempoLectura: "7 min",
    autor: "Equipo Teinor",
    acentoGradiente: "from-marca-azul to-marca-purpura",
  },
  {
    id: "branding-digital-coherente",
    titulo: "La importancia de un branding digital coherente",
    resumen:
      "Tu marca es mucho más que un logo. Aprende a construir una identidad visual consistente que te diferencie de la competencia.",
    categoria: "Branding",
    imagen:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1400&q=80",
    fecha: "10 mar 2026",
    tiempoLectura: "5 min",
    autor: "Equipo Teinor",
    acentoGradiente: "from-marca-violeta to-marca-magenta",
  },
  {
    id: "velocidad-web-importancia",
    titulo: "Por qué la velocidad de tu web te está costando ventas",
    resumen:
      "Cada segundo de carga adicional reduce tus conversiones. Te explicamos cómo medirla, optimizarla y mantenerla en el tiempo.",
    categoria: "Desarrollo",
    imagen:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
    fecha: "01 mar 2026",
    tiempoLectura: "6 min",
    autor: "Equipo Teinor",
    acentoGradiente: "from-marca-rosa to-marca-cian",
  },
];

export const categoriasArticulos = [
  "Todos",
  ...Array.from(new Set(articulos.map((articulo) => articulo.categoria))),
];
