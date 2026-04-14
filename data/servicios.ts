import { Globe, Filter, Megaphone, type LucideIcon } from "lucide-react";

export interface Servicio {
  id: string;
  titulo: string;
  /** Subtítulo corto que aparece en la home */
  subtitulo: string;
  descripcion: string;
  icono: LucideIcon;
  /** Imagen ilustrativa del servicio (Unsplash) */
  imagen: string;
  /** Píldoras de tipos/subcategorías que se muestran al expandir */
  ideales: string[];
  /** Bullets de qué incluye el servicio */
  caracteristicas: string[];
  /** Clase de fondo del icono (paleta marca, suave) */
  fondoIcono: string;
  /** Clase de color del icono */
  colorIcono: string;
}

/**
 * Catálogo oficial de servicios de Teinor.
 * Solo los 3 servicios principales que la agencia ofrece.
 */
export const servicios: Servicio[] = [
  {
    id: "paginas-web",
    titulo: "Páginas Web a Medida",
    subtitulo: "Sitios corporativos exclusivos, rápidos y optimizados para convertir.",
    descripcion:
      "Sitios corporativos rápidos, modernos y optimizados para convertir visitantes en clientes reales. Cada página se diseña desde cero pensando en tu marca.",
    icono: Globe,
    imagen:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80",
    ideales: ["Onepage", "Multipage", "Corporativas", "Portafolios", "Landing pages"],
    caracteristicas: [
      "Diseño exclusivo a medida en Figma",
      "100% adaptado a móviles, tablets y escritorio",
      "Velocidad de carga optimizada",
      "Capacitación para que puedas administrarlo",
      "Hosting y dominio incluidos el primer año",
      "Soporte post-entrega",
    ],
    fondoIcono: "bg-marca-cian/10",
    colorIcono: "text-marca-cian",
  },
  {
    id: "embudos-venta",
    titulo: "Embudos de Ventas Automatizados",
    subtitulo: "Funnels diseñados con estrategia para captar leads y cerrar ventas.",
    descripcion:
      "Funnels diseñados con estrategia para guiar a tus prospectos hasta la conversión final, automatizando todo el proceso de venta.",
    icono: Filter,
    imagen:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
    ideales: ["Servicios", "Cursos", "Productos digitales", "Webinars", "Lead magnets"],
    caracteristicas: [
      "Captación de leads optimizada",
      "Automatización por WhatsApp y correo",
      "Integración con tu CRM",
      "Flujos pensados para convertir",
      "Métricas y seguimiento en tiempo real",
      "Acompañamiento estratégico",
    ],
    fondoIcono: "bg-marca-magenta/10",
    colorIcono: "text-marca-magenta",
  },
  {
    id: "google-ads",
    titulo: "Publicidad en Google Ads",
    subtitulo: "Campañas pagadas que llevan tráfico cualificado a tu negocio.",
    descripcion:
      "Campañas de publicidad en Google Ads diseñadas para llevar tráfico cualificado a tu sitio web o embudo, con seguimiento real de resultados.",
    icono: Megaphone,
    imagen:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    ideales: ["Web", "Embudo", "Tienda online", "Landing", "App"],
    caracteristicas: [
      "Campañas segmentadas por audiencia",
      "Análisis de palabras clave",
      "Página de destino optimizada",
      "Reportes mensuales detallados",
      "Escala de inversión según resultados",
      "Optimización continua",
    ],
    fondoIcono: "bg-marca-purpura/10",
    colorIcono: "text-marca-purpura",
  },
];
