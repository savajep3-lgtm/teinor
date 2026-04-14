export type CategoriaProyecto =
  | "Onepage"
  | "Multipage"
  | "Portafolio"
  | "Ecommerce"
  | "Embudo"
  | "Aplicación"
  | "Branding";

export type ServicioProyecto =
  | "Páginas Web a Medida"
  | "Embudos de Ventas Automatizados"
  | "Publicidad en Google Ads";

export interface Proyecto {
  id: string;
  nombre: string;
  categoria: CategoriaProyecto;
  servicio: ServicioProyecto;
  extracto: string;
  /** Imagen del proyecto (Unsplash) */
  imagen: string;
}

/**
 * Catálogo de proyectos del portafolio de Teinor.
 * Cada proyecto tiene una imagen real y una categoría que se usa para
 * filtrar la galería en /portafolio.
 */
export const proyectos: Proyecto[] = [
  {
    id: "el-buen-contador",
    nombre: "El Buen Contador",
    categoria: "Multipage",
    servicio: "Páginas Web a Medida",
    extracto:
      "Rediseño corporativo orientado a confianza, captación de leads y mejor claridad de servicios.",
    imagen:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "vital-wellness",
    nombre: "Vital Wellness",
    categoria: "Multipage",
    servicio: "Páginas Web a Medida",
    extracto:
      "Sitio de bienestar con experiencia inmersiva, reservas directas y flujo optimizado para conversión.",
    imagen:
      "https://images.unsplash.com/photo-1540206395-68808572332f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "ips-asesorias",
    nombre: "IPS Asesorías",
    categoria: "Multipage",
    servicio: "Páginas Web a Medida",
    extracto:
      "Web institucional con enfoque B2B, autoridad de marca y formularios estratégicos por servicio.",
    imagen:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "effetha",
    nombre: "Effetha",
    categoria: "Onepage",
    servicio: "Páginas Web a Medida",
    extracto:
      "Landing clara y emocional para campaña de lanzamiento, con mensaje directo y CTA dominante.",
    imagen:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "ti-corporacion",
    nombre: "TI Corporación",
    categoria: "Multipage",
    servicio: "Páginas Web a Medida",
    extracto:
      "Arquitectura escalable para empresa tecnológica con foco en servicios, casos y credibilidad.",
    imagen:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "kare",
    nombre: "Kare Salud",
    categoria: "Onepage",
    servicio: "Páginas Web a Medida",
    extracto:
      "Página de salud optimizada para móvil, atención rápida y agendamiento de pacientes.",
    imagen:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "atelier-couture",
    nombre: "Atelier Couture",
    categoria: "Ecommerce",
    servicio: "Páginas Web a Medida",
    extracto:
      "Tienda online premium con catálogo visual, checkout simple y narrativa de marca elegante.",
    imagen:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "lumina-estudio",
    nombre: "Lúmina Estudio",
    categoria: "Portafolio",
    servicio: "Páginas Web a Medida",
    extracto:
      "Portafolio creativo para mostrar trabajos con impacto, filtros por categoría y contacto directo.",
    imagen:
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "ritmo-fitness",
    nombre: "Ritmo Fitness",
    categoria: "Embudo",
    servicio: "Embudos de Ventas Automatizados",
    extracto:
      "Embudo de captación con lead magnet, secuencia automatizada y cierre por WhatsApp.",
    imagen:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "tekno-saas",
    nombre: "Tekno SaaS",
    categoria: "Aplicación",
    servicio: "Publicidad en Google Ads",
    extracto:
      "Producto web con interfaz SaaS, onboarding guiado y panel para métricas en tiempo real.",
    imagen:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "academia-codex",
    nombre: "Academia Codex",
    categoria: "Multipage",
    servicio: "Páginas Web a Medida",
    extracto:
      "Sitio educativo con rutas por curso, contenido estructurado y generación de registros.",
    imagen:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "marca-pura",
    nombre: "Marca Pura",
    categoria: "Branding",
    servicio: "Publicidad en Google Ads",
    extracto:
      "Proyecto de identidad digital con coherencia visual, posicionamiento y tono de comunicación.",
    imagen:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=1200&q=80",
  },
];
