import type { Metadata } from "next";
import HeroPagina from "@/components/layout/HeroPagina";
import Proyectos from "@/components/sections/Proyectos";
import PorQueElegirnos from "@/components/sections/PorQueElegirnos";
import AunTienesDudas from "@/components/sections/AunTienesDudas";

export const metadata: Metadata = {
  title: "Portafolio",
  description:
    "Conoce los proyectos digitales que hemos desarrollado en Teinor: páginas web, e-commerce, embudos de venta y aplicaciones a medida.",
};

/**
 * Página /portafolio — galería completa de trabajos de la agencia.
 */
export default function PaginaPortafolio() {
  return (
    <>
      <HeroPagina
        titulo="Nuestros proyectos hablan por nosotros"
        palabraDestacada="hablan por nosotros"
        descripcion="Cada proyecto es la prueba de nuestro compromiso con la calidad, el diseño y los resultados. Explora algunos de los trabajos que más nos enorgullecen."
      />
      <Proyectos conEncabezado={false} />
      <PorQueElegirnos fondoAlterno />
      <AunTienesDudas />
    </>
  );
}
