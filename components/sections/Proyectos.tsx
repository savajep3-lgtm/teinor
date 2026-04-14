"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import Contenedor from "@/components/ui/Contenedor";
import {
  proyectos,
  type Proyecto,
  type ServicioProyecto,
} from "@/data/proyectos";
import { cn } from "@/lib/utilidades";

interface PropiedadesProyectos {
  /** Si se pasa, solo se muestran los primeros N proyectos (para el home) */
  limite?: number;
  conEncabezado?: boolean;
}

/**
 * Cuántos proyectos por página en la vista paginada.
 */
const PROYECTOS_POR_PAGINA = 9;

type Filtro = "Todo" | ServicioProyecto;

const filtros: Filtro[] = [
  "Todo",
  "Páginas Web a Medida",
  "Embudos de Ventas Automatizados",
  "Publicidad en Google Ads",
];

/**
 * Sección Proyectos / Portafolio.
 *
 * Galería de proyectos con:
 *  - Filtros por categoría arriba (píldoras estilo Consigue Ventas)
 *  - Tarjetas con imagen real (no letras) y categoría flotante
 *  - Paginación inferior cuando hay más proyectos que PROYECTOS_POR_PAGINA
 *  - Las tarjetas NO son clicables: solo muestran información
 *
 * En el modo home (`limite`) se muestra solo una rejilla compacta sin
 * filtros ni paginación.
 */
export default function Proyectos({
  limite,
  conEncabezado = true,
}: PropiedadesProyectos) {
  const [filtroActivo, establecerFiltroActivo] = useState<Filtro>("Todo");
  const [pagina, establecerPagina] = useState(1);

  // Filtrado por categoría
  const proyectosFiltrados = useMemo(() => {
    if (filtroActivo === "Todo") return proyectos;
    return proyectos.filter((p) => p.servicio === filtroActivo);
  }, [filtroActivo]);

  // Si hay límite, omitimos paginación
  const proyectosVisibles = useMemo(() => {
    if (limite) return proyectosFiltrados.slice(0, limite);
    const inicio = (pagina - 1) * PROYECTOS_POR_PAGINA;
    return proyectosFiltrados.slice(inicio, inicio + PROYECTOS_POR_PAGINA);
  }, [proyectosFiltrados, pagina, limite]);

  const totalPaginas = Math.ceil(
    proyectosFiltrados.length / PROYECTOS_POR_PAGINA,
  );
  const mostrarPaginacion = !limite && totalPaginas > 1;

  const cambiarFiltro = (filtro: Filtro) => {
    establecerFiltroActivo(filtro);
    establecerPagina(1);
  };

  return (
    <section id="proyectos" className="relative py-14 sm:py-16">
      <Contenedor>
        {conEncabezado && (
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-tinta leading-[1.05] tracking-tight equilibrio-texto">
              Nuestros{" "}
              <span className="texto-gradiente">Proyectos</span>
            </h2>
          </div>
        )}

        {/* Filtros (solo en modo completo, no en home) */}
        {!limite && (
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
            {filtros.map((filtro) => {
              const esActivo = filtro === filtroActivo;
              return (
                <button
                  key={filtro}
                  type="button"
                  onClick={() => cambiarFiltro(filtro)}
                  className={cn(
                    "px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-sm font-bold transition-all duration-300",
                    esActivo
                      ? "bg-marca-purpura text-white shadow-marca-suave scale-105"
                      : "bg-white text-tinta-suave border border-superficie-borde hover:border-marca-purpura/40 hover:text-marca-purpura",
                  )}
                >
                  {filtro}
                </button>
              );
            })}
          </div>
        )}

        {/* Rejilla de proyectos */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {proyectosVisibles.map((proyecto) => (
            <TarjetaProyecto key={proyecto.id} proyecto={proyecto} />
          ))}
        </div>

        {/* Mensaje de vacío */}
        {proyectosFiltrados.length === 0 && (
          <div className="text-center py-16 text-tinta-tenue">
            No encontramos proyectos en esta categoría todavía.
          </div>
        )}

        {/* Paginación */}
        {mostrarPaginacion && (
          <div className="mt-12 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => establecerPagina(Math.max(1, pagina - 1))}
              disabled={pagina === 1}
              aria-label="Página anterior"
              className="w-10 h-10 rounded-full bg-white border border-superficie-borde flex items-center justify-center text-tinta hover:bg-marca-purpura hover:text-white hover:border-marca-purpura disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-tinta disabled:hover:border-superficie-borde transition-all duration-300"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            {Array.from({ length: totalPaginas }).map((_, indice) => {
              const numero = indice + 1;
              const esActiva = numero === pagina;
              return (
                <button
                  key={numero}
                  type="button"
                  onClick={() => establecerPagina(numero)}
                  className={cn(
                    "w-10 h-10 rounded-full text-sm font-bold transition-all duration-300",
                    esActiva
                      ? "bg-marca-purpura text-white shadow-marca-suave"
                      : "bg-white border border-superficie-borde text-tinta-suave hover:border-marca-purpura hover:text-marca-purpura",
                  )}
                >
                  {numero}
                </button>
              );
            })}

            <button
              type="button"
              onClick={() =>
                establecerPagina(Math.min(totalPaginas, pagina + 1))
              }
              disabled={pagina === totalPaginas}
              aria-label="Página siguiente"
              className="w-10 h-10 rounded-full bg-white border border-superficie-borde flex items-center justify-center text-tinta hover:bg-marca-purpura hover:text-white hover:border-marca-purpura disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-tinta disabled:hover:border-superficie-borde transition-all duration-300"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </Contenedor>
    </section>
  );
}

/* ─── Subcomponente: tarjeta de proyecto ────────────────────────── */

interface PropiedadesTarjetaProyecto {
  proyecto: Proyecto;
}

function TarjetaProyecto({ proyecto }: PropiedadesTarjetaProyecto) {
  const colorBotonServicio: Record<ServicioProyecto, string> = {
    "Páginas Web a Medida": "bg-marca-purpura text-white hover:bg-marca-purpura-oscuro",
    "Embudos de Ventas Automatizados": "bg-marca-cian text-white hover:bg-[#1f9fc8]",
    "Publicidad en Google Ads": "bg-marca-azul text-white hover:bg-[#2f6be9]",
  };

  return (
    <article className="group overflow-hidden rounded-2xl border border-superficie-borde bg-white shadow-tarjeta transition-all duration-300 hover:-translate-y-1 hover:border-marca-purpura/35 hover:shadow-tarjeta-hover">
      <Link
        href={`/portafolio/${proyecto.id}`}
        className="relative block aspect-[16/10] overflow-hidden"
        aria-label={`Ver detalle de ${proyecto.nombre}`}
      >
        <Image
          src={proyecto.imagen}
          alt={proyecto.nombre}
          fill
          quality={65}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-oscuro/65 via-oscuro/10 to-transparent" />
        <span className="absolute left-4 top-4 inline-flex items-center rounded-md bg-lime-300 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-oscuro shadow-sm">
          {proyecto.categoria}
        </span>
      </Link>

      <div className="p-5 sm:p-6">
        <h3 className="font-display text-2xl font-bold leading-tight text-tinta">
          {proyecto.nombre}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-tinta-tenue">
          {proyecto.extracto}
        </p>

        <div className="mt-4">
          <Link
            href={`/portafolio/${proyecto.id}`}
            className={cn(
              "inline-flex w-full items-center justify-center gap-1.5 rounded-xl px-4 py-3 text-sm font-semibold transition-all",
              colorBotonServicio[proyecto.servicio],
            )}
          >
            Ver detalle
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
