"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Plus, ArrowRight } from "lucide-react";
import Contenedor from "@/components/ui/Contenedor";
import Boton from "@/components/ui/Boton";
import { servicios, type Servicio } from "@/data/servicios";
import { cn } from "@/lib/utilidades";

/**
 * Sección "Elige el servicio perfecto para ti".
 *
 * Tarjetas grandes (una por servicio) inspiradas en Consigue Ventas:
 *  - Banda superior con etiqueta corta + botón "+"
 *  - Título grande del servicio en blanco
 *  - Imagen del servicio recortada en la parte inferior
 *
 * Cada tarjeta es clicable y enlaza a /servicios#id para abrir esa
 * pestaña concreta del acordeón en la página de servicios.
 */
export default function EligeServicio() {
  return (
    <section className="relative py-14 sm:py-16 bg-superficie-suave">
      <Contenedor>
        {/* Encabezado */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-tinta leading-[1.05] tracking-tight equilibrio-texto max-w-2xl">
            Elige el servicio{" "}
            <span className="texto-gradiente">perfecto para ti</span>
          </h2>

          <Boton
            href="/servicios"
            variante="primario"
            iconoDerecha={<ArrowRight className="h-4 w-4" />}
          >
            Ver todos
          </Boton>
        </div>

        {/* Rejilla de tarjetas */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicios.map((servicio, indice) => (
            <TarjetaServicio
              key={servicio.id}
              servicio={servicio}
              indice={indice}
            />
          ))}
        </div>
      </Contenedor>
    </section>
  );
}

/* ─── Subcomponente: tarjeta grande de servicio ─────────────────── */

interface PropiedadesTarjetaServicio {
  servicio: Servicio;
  indice: number;
}

function TarjetaServicio({ servicio, indice }: PropiedadesTarjetaServicio) {
  // Etiqueta corta para la banda superior según el servicio
  const etiquetaCorta: Record<string, string> = {
    "paginas-web": "Multipage",
    "embudos-venta": "Captación",
    "google-ads": "Estrategia",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: indice * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      <Link
        href={`/servicios#${servicio.id}`}
        className="group relative block aspect-[4/5] rounded-3xl overflow-hidden shadow-tarjeta hover:shadow-elevada hover:-translate-y-1 transition-all duration-500"
      >
        {/* Fondo: imagen del servicio */}
        <Image
          src={servicio.imagen}
          alt={servicio.titulo}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Velo oscuro inferior para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-oscuro/20 via-oscuro/60 to-oscuro/95" />

        {/* Tinte sutil del color del servicio */}
        <div
          className={cn(
            "absolute inset-0 mix-blend-overlay opacity-25",
            servicio.colorIcono.replace("text-", "bg-"),
          )}
        />

        {/* Banda superior con etiqueta y botón "+" */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <span
            className={cn(
              "inline-flex items-center px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider backdrop-blur-md",
              servicio.fondoIcono,
              servicio.colorIcono,
            )}
          >
            {etiquetaCorta[servicio.id] ?? "Servicio"}
          </span>

          <span
            className={cn(
              "w-9 h-9 rounded-full flex items-center justify-center bg-white text-tinta shadow-tarjeta group-hover:bg-marca-purpura group-hover:text-white group-hover:rotate-90 transition-all duration-500",
            )}
          >
            <Plus className="h-4 w-4" strokeWidth={3} />
          </span>
        </div>

        {/* Título inferior */}
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-white leading-tight">
            {servicio.titulo}
          </h3>
          <p className="mt-2 text-sm text-white/75 line-clamp-2">
            {servicio.subtitulo}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
