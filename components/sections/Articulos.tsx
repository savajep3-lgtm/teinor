"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Search, SlidersHorizontal } from "lucide-react";
import Contenedor from "@/components/ui/Contenedor";
import { articulos, categoriasArticulos, type Articulo } from "@/data/articulos";
import { cn } from "@/lib/utilidades";

interface PropiedadesArticulos {
  limite?: number;
  fondoAlterno?: boolean;
  conEncabezado?: boolean;
}

export default function Articulos({
  limite,
  fondoAlterno = false,
  conEncabezado = true,
}: PropiedadesArticulos) {
  const [textoBusqueda, establecerTextoBusqueda] = useState("");
  const [categoriaActiva, establecerCategoriaActiva] = useState("Todos");

  const listaBase = limite ? articulos.slice(0, limite) : articulos;

  const listaFiltrada = useMemo(() => {
    return listaBase.filter((articulo) => {
      const coincideCategoria =
        categoriaActiva === "Todos" || articulo.categoria === categoriaActiva;
      const valor = textoBusqueda.trim().toLowerCase();
      const coincideTexto =
        !valor ||
        articulo.titulo.toLowerCase().includes(valor) ||
        articulo.resumen.toLowerCase().includes(valor);

      return coincideCategoria && coincideTexto;
    });
  }, [categoriaActiva, listaBase, textoBusqueda]);

  return (
    <section
      className={cn(
        "relative py-14 sm:py-16",
        fondoAlterno && "bg-superficie-suave",
      )}
    >
      <Contenedor>
        <div className={cn("space-y-8", conEncabezado && "pt-2")}>
          <div className="rounded-3xl border border-superficie-borde bg-white p-5 shadow-tarjeta sm:p-7">
            <div className="grid gap-5 lg:grid-cols-[1.3fr_1fr]">
              <label className="block">
                <span className="mb-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-tinta-claro">
                  <Search className="h-3.5 w-3.5" />
                  Buscar
                </span>
                <div className="relative">
                  <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-tinta-claro" />
                  <input
                    value={textoBusqueda}
                    onChange={(evento) =>
                      establecerTextoBusqueda(evento.target.value)
                    }
                    placeholder="Escribe una palabra clave..."
                    className="h-12 w-full rounded-2xl border border-superficie-borde bg-superficie px-11 text-sm text-tinta placeholder:text-tinta-claro transition-all focus:outline-none focus:border-marca-purpura focus:ring-4 focus:ring-marca-purpura/10"
                  />
                </div>
              </label>

              <label className="block">
                <span className="mb-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-tinta-claro">
                  <SlidersHorizontal className="h-3.5 w-3.5" />
                  Filtrar por
                </span>
                <select
                  value={categoriaActiva}
                  onChange={(evento) =>
                    establecerCategoriaActiva(evento.target.value)
                  }
                  className="h-12 w-full rounded-2xl border border-superficie-borde bg-superficie px-4 text-sm font-medium text-tinta transition-all focus:outline-none focus:border-marca-purpura focus:ring-4 focus:ring-marca-purpura/10"
                >
                  {categoriasArticulos.map((categoria) => (
                    <option key={categoria} value={categoria}>
                      {categoria}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-tinta">
            ULTIMAS NOVEDADES
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {listaFiltrada.map((articulo, indice) => (
              <TarjetaArticulo key={articulo.id} articulo={articulo} indice={indice} />
            ))}
          </div>

          {listaFiltrada.length === 0 && (
            <div className="rounded-2xl border border-superficie-borde bg-white px-6 py-12 text-center text-tinta-tenue">
              No encontramos artículos con ese filtro. Prueba otra categoría.
            </div>
          )}
        </div>
      </Contenedor>
    </section>
  );
}

interface PropiedadesTarjetaArticulo {
  articulo: Articulo;
  indice: number;
}

function TarjetaArticulo({ articulo, indice }: PropiedadesTarjetaArticulo) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay: indice * 0.05 }}
      className="group"
    >
      <Link
        href={`/blog/${articulo.id}`}
        className="block h-full overflow-hidden rounded-2xl border border-superficie-borde bg-white shadow-tarjeta transition-all duration-300 hover:-translate-y-1 hover:shadow-tarjeta-hover hover:border-marca-purpura/35"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={articulo.imagen}
            alt={articulo.titulo}
            fill
            quality={65}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-black/40 to-transparent" />
          <span className="absolute left-4 top-3 rounded-full bg-lime-300 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-oscuro">
            {articulo.categoria}
          </span>
        </div>

        <div className="p-6">
          <h3 className="font-display text-2xl font-bold leading-tight text-tinta line-clamp-2">
            {articulo.titulo}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-tinta-tenue line-clamp-3">
            {articulo.resumen}
          </p>

          <span className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-tinta/20 px-5 py-2 text-sm font-semibold text-tinta transition-all group-hover:border-marca-purpura group-hover:text-marca-purpura">
            Ver mas
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
