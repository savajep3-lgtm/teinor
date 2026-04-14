import type { Metadata } from "next";
import HeroPagina from "@/components/layout/HeroPagina";
import ServiciosAcordeon from "@/components/sections/ServiciosAcordeon";
import Paquetes from "@/components/sections/Paquetes";
import QueIncluye from "@/components/sections/QueIncluye";
import AunTienesDudas from "@/components/sections/AunTienesDudas";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Descubre todos los servicios digitales que ofrece Teinor: páginas web a medida, embudos de ventas automatizados, publicidad en Google Ads y planes adaptados a cada negocio.",
};

/**
 * Página /servicios — catálogo + paquetes + qué incluye + CTA.
 *
 * El acordeón de servicios lee el hash de la URL al cargar para abrir
 * automáticamente la pestaña concreta (ej: /servicios#embudos-venta).
 */
export default function PaginaServicios() {
  return (
    <>
      <HeroPagina
        titulo="Servicios que impulsan tu marca digital"
        palabraDestacada="impulsan tu marca digital"
        descripcion="En Teinor combinamos diseño exclusivo, desarrollo de calidad y estrategia para crear soluciones digitales que realmente generan resultados."
      />
      <ServiciosAcordeon />
      <Paquetes fondoAlterno />
      <QueIncluye />
      <AunTienesDudas fondoAlterno />
    </>
  );
}
