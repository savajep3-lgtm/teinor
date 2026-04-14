"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import Contenedor from "@/components/ui/Contenedor";
import Boton from "@/components/ui/Boton";

interface PreocupacionCliente {
  cita: string;
  solucion: string;
}

/**
 * Citas reales de clientes potenciales + cómo lo resuelve Teinor.
 * Solo decorativas: NO son links, no navegan a ningún lado.
 */
const preocupaciones: PreocupacionCliente[] = [
  {
    cita: "Tengo un sitio web, pero no tengo muchas ventas.",
    solucion: "Optimizamos tu sitio para convertir visitantes en clientes reales.",
  },
  {
    cita: "Mi negocio está creciendo, necesito una web profesional.",
    solucion: "Diseñamos páginas web exclusivas y modernas que reflejan tu marca.",
  },
  {
    cita: "No sé por dónde empezar con la automatización de ventas.",
    solucion: "Implementamos embudos para automatizar tus procesos.",
  },
  {
    cita: "Me ofrecieron páginas económicas que no funcionan.",
    solucion: "Creamos sitios optimizados que generan resultados reales.",
  },
];

/**
 * Sección "¿Cómo podemos ayudarte?" del Inicio.
 *
 * Layout en dos columnas:
 *  - Izquierda: título grande + descripción + CTA
 *  - Derecha: una imagen central con 4 quote cards CLARAS superpuestas en
 *    las esquinas (estilo Consigue Ventas). Las tarjetas son decorativas,
 *    no llevan a ningún lado.
 */
export default function ComoPodemosAyudarte() {
  return (
    <section className="relative py-14 sm:py-20 overflow-hidden">
      <Contenedor className="relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* ─── Izquierda: título + descripción ─────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5 space-y-6"
          >
            <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight equilibrio-texto text-tinta">
              ¿Cómo podemos{" "}
              <span className="texto-gradiente">ayudarte?</span>
            </h2>

            <p className="text-base sm:text-lg text-tinta-tenue leading-relaxed pretty-texto max-w-md">
              Nos especializamos en potenciar la presencia en línea de tu
              negocio. Nuestro objetivo es transformar tu sitio web en una
              herramienta efectiva que atraiga tráfico cualificado y convierta
              visitantes en clientes.
            </p>

            <div className="pt-2">
              <Boton
                href="/servicios"
                variante="primario"
                tamano="lg"
                iconoDerecha={<ArrowRight className="h-5 w-5" />}
              >
                Ver nuestros servicios
              </Boton>
            </div>
          </motion.div>

          {/* ─── Derecha: imagen central con quote cards superpuestas ─ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7 relative lg:min-h-[520px]"
          >
            {/* Imagen central */}
            <div className="relative mx-auto h-[340px] w-[56%] max-w-[260px] rounded-3xl overflow-hidden shadow-elevada border-4 border-white sm:h-[400px] sm:max-w-[300px] lg:absolute lg:inset-x-1/4 lg:inset-y-10 lg:h-auto lg:w-auto lg:max-w-none">
              <Image
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80"
                alt="Persona pensando en hacer crecer su negocio"
                fill
                quality={70}
                sizes="(max-width: 1024px) 50vw, 30vw"
                className="object-cover"
              />
              {/* Forma decorativa de marca por detrás */}
              <div className="absolute inset-0 bg-gradient-to-tr from-marca-purpura/10 via-transparent to-marca-cian/10 mix-blend-overlay" />
            </div>

            {/* Bloque de color decorativo púrpura claro detrás */}
            <div className="hidden lg:block absolute inset-x-[20%] inset-y-12 -z-10 rounded-3xl bg-gradiente-marca-suave" />

            {/* ─── Quote cards superpuestas ───────────────────────── */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:mt-0 lg:block">
              <TarjetaPreocupacion
                preocupacion={preocupaciones[0]!}
                indice={0}
                className="lg:absolute lg:top-0 lg:left-0 lg:max-w-[230px]"
              />

              <TarjetaPreocupacion
                preocupacion={preocupaciones[1]!}
                indice={1}
                className="lg:absolute lg:top-2 lg:right-0 lg:max-w-[230px]"
              />

              <TarjetaPreocupacion
                preocupacion={preocupaciones[2]!}
                indice={2}
                className="lg:absolute lg:bottom-0 lg:left-0 lg:max-w-[230px]"
              />

              <TarjetaPreocupacion
                preocupacion={preocupaciones[3]!}
                indice={3}
                className="lg:absolute lg:bottom-2 lg:right-0 lg:max-w-[230px]"
              />
            </div>
          </motion.div>
        </div>
      </Contenedor>
    </section>
  );
}

/* ─── Subcomponente: tarjeta de cita (light, compacta) ─────────── */

interface PropiedadesTarjetaPreocupacion {
  preocupacion: PreocupacionCliente;
  indice: number;
  className?: string;
}

function TarjetaPreocupacion({
  preocupacion,
  indice,
  className = "",
}: PropiedadesTarjetaPreocupacion) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.3 + indice * 0.1 }}
      className={className}
    >
      <div className="relative p-4 rounded-2xl bg-white border border-superficie-borde shadow-elevada overflow-hidden">
        {/* Comilla decorativa de fondo */}
        <Quote
          className="absolute -top-1 -right-1 h-12 w-12 text-marca-purpura/10 rotate-180"
          strokeWidth={1}
        />

        {/* Cita del cliente */}
        <p className="relative font-display font-bold text-xs sm:text-sm text-tinta leading-snug">
          &ldquo;{preocupacion.cita}&rdquo;
        </p>

        {/* Línea separadora */}
        <div className="my-2 flex items-center gap-2">
          <div className="h-px flex-1 bg-superficie-borde" />
          <div className="w-1 h-1 rounded-full bg-marca-purpura" />
        </div>

        {/* Solución */}
        <p className="text-[11px] text-tinta-tenue leading-relaxed">
          {preocupacion.solucion}
        </p>
      </div>
    </motion.div>
  );
}
