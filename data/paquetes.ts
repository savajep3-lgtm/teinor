export interface Paquete {
  id: string;
  nombre: string;
  descripcion: string;
  destacado: boolean;
  caracteristicas: string[];
  textoBoton: string;
}

/**
 * Planes de servicio que Teinor ofrece a sus clientes.
 * El paquete "destacado" recibe estilo especial en la sección de precios.
 */
export const paquetes: Paquete[] = [
  {
    id: "esencial",
    nombre: "Esencial",
    descripcion:
      "Ideal para emprendedores y proyectos que buscan una presencia digital sólida.",
    destacado: false,
    caracteristicas: [
      "Página web de hasta 5 secciones",
      "Diseño responsive premium",
      "Formulario de contacto",
      "Integración con WhatsApp",
      "SEO básico optimizado",
      "Hosting y dominio el primer año",
      "Soporte técnico 30 días",
    ],
    textoBoton: "Empezar ahora",
  },
  {
    id: "profesional",
    nombre: "Profesional",
    descripcion:
      "Para negocios en crecimiento que necesitan herramientas avanzadas y conversión.",
    destacado: true,
    caracteristicas: [
      "Página web de hasta 10 secciones",
      "Diseño exclusivo a medida",
      "Embudo de ventas integrado",
      "Blog con CMS administrable",
      "SEO avanzado + Analytics",
      "Animaciones e interacciones",
      "Integración con CRM",
      "Soporte técnico 90 días",
    ],
    textoBoton: "Quiero este plan",
  },
  {
    id: "premium",
    nombre: "Premium",
    descripcion:
      "Solución integral para empresas que quieren escalar y dominar su mercado.",
    destacado: false,
    caracteristicas: [
      "Sitio web ilimitado a medida",
      "E-commerce completo",
      "Múltiples embudos de venta",
      "Automatizaciones avanzadas",
      "Diseño UX/UI premium",
      "Mantenimiento mensual incluido",
      "Estrategia digital personalizada",
      "Soporte técnico 6 meses",
    ],
    textoBoton: "Contactar equipo",
  },
];
