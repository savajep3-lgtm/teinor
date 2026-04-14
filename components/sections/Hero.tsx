"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import Boton from "@/components/ui/Boton";
import Contenedor from "@/components/ui/Contenedor";

/**
 * Sección Hero — bloque de apertura del Inicio.
 *
 * Estructura limpia y enfocada:
 *  - Foto de fondo claramente visible (overlay oscuro suave, no enterrada)
 *  - Titular grande pero proporcionado (cabe en una pantalla)
 *  - Subtítulo conciso
 *  - Doble CTA (primario + contorno con icono play)
 *
 * Sin badge, sin indicadores de confianza, sin marquesina:
 * el cliente busca soluciones, no detalles técnicos.
 */
export default function Hero() {
  // Apariciones escalonadas
  const aparicion = (retraso: number) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay: retraso, ease: [0.21, 0.47, 0.32, 0.98] },
  });

  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] flex items-center pt-28 pb-16 overflow-hidden bg-oscuro text-white"
    >
      {/* ─── Capas de fondo ─────────────────────────────────────── */}
      {/* Foto de fondo (visible) */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=2400&q=80"
          alt=""
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Velo vertical: ligero arriba, más oscuro abajo (la foto se ve) */}
      <div className="absolute inset-0 bg-gradient-to-b from-oscuro/55 via-oscuro/65 to-oscuro/95" />

      {/* Velo lateral suave para contraste del texto */}
      <div className="absolute inset-0 bg-gradient-to-r from-oscuro/85 via-oscuro/40 to-transparent" />

      {/* Toque sutil de marca */}
      <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-marca-purpura/15 blur-[160px] animate-flotar-lento pointer-events-none" />

      {/* ─── Contenido ──────────────────────────────────────────── */}
      <Contenedor className="relative z-10">
        <div className="max-w-3xl space-y-7">
          <motion.h1
            {...aparicion(0)}
            className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] leading-[0.95] tracking-tight equilibrio-texto"
          >
            Creamos sitios web y{" "}
            <span className="texto-gradiente-animado">soluciones digitales</span>
          </motion.h1>

          <motion.p
            {...aparicion(0.15)}
            className="text-base sm:text-lg lg:text-xl text-white/75 max-w-2xl leading-relaxed pretty-texto"
          >
            En Teinor diseñamos páginas web exclusivas, embudos de venta y
            experiencias digitales hechas a medida para que tu marca destaque y
            tu negocio crezca.
          </motion.p>

          <motion.div
            {...aparicion(0.3)}
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >
            <Boton
              href="/contacto"
              variante="primario"
              tamano="lg"
              iconoDerecha={<ArrowRight className="h-5 w-5" />}
            >
              Comenzar mi proyecto
            </Boton>
            <Boton
              href="/portafolio"
              variante="contorno"
              tamano="lg"
              iconoIzquierda={<PlayCircle className="h-5 w-5" />}
              className="!border-white/25 !text-white hover:!bg-white/10 hover:!border-white/40 hover:!text-white"
            >
              Ver nuestro trabajo
            </Boton>
          </motion.div>
        </div>
      </Contenedor>
    </section>
  );
}
