import type { Metadata } from "next";
import HeroPagina from "@/components/layout/HeroPagina";
import Articulos from "@/components/sections/Articulos";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Aprende a crecer en el mundo digital con los artículos del blog de Teinor: diseño web, desarrollo, marketing, e-commerce, branding y más.",
};

/**
 * Página /blog — listado completo de artículos del blog.
 */
export default function PaginaBlog() {
  return (
    <>
      <HeroPagina
        titulo="Aprende a hacer crecer tu negocio digital"
        palabraDestacada="crecer tu negocio digital"
        descripcion="Consejos prácticos, tendencias y guías sobre diseño, desarrollo y estrategia digital escritas por nuestro equipo."
      />
      <Articulos conEncabezado={false} />
    </>
  );
}
