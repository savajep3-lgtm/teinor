"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Contenedor from "@/components/ui/Contenedor";
import Boton from "@/components/ui/Boton";

interface PropiedadesAunTienesDudas {
  fondoAlterno?: boolean;
}

/**
 * Bloque CTA compacto "¿Aún tienes dudas?".
 *
 * Diseñado para usarse al final de páginas internas (Servicios, Portafolio,
 * Blog) como invitación final a contactar. Reutilizable para evitar duplicar
 * el mismo bloque en cada página.
 *
 * Layout horizontal: texto a la izquierda, imagen del equipo a la derecha.
 */
export default function AunTienesDudas({
  fondoAlterno = false,
}: PropiedadesAunTienesDudas) {
  return (
    <section className={`relative py-12 sm:py-14 ${fondoAlterno ? "bg-superficie-suave" : ""}`}>
      <Contenedor>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative rounded-3xl bg-white border border-superficie-borde shadow-tarjeta overflow-hidden"
        >
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-0 items-center">
            {/* ─── Texto ──────────────────────────────────────────── */}
            <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12">
              <div className="text-xs font-bold uppercase tracking-wider text-marca-purpura mb-3">
                Tu web lista en 7 a 15 días hábiles
              </div>
              <h3 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-tinta leading-[1.05] equilibrio-texto">
                ¿Aún tienes dudas?{" "}
                <span className="texto-gradiente">
                  Te ayudamos a encontrar la mejor solución
                </span>
              </h3>
              <p className="mt-4 text-base text-tinta-tenue leading-relaxed max-w-lg">
                Cuéntanos sobre tu proyecto y te respondemos en menos de 24
                horas con una propuesta clara y sin compromiso.
              </p>
              <div className="mt-7">
                <Boton
                  href="/contacto"
                  variante="primario"
                  tamano="lg"
                  iconoDerecha={<ArrowRight className="h-5 w-5" />}
                >
                  Contacto
                </Boton>
              </div>
            </div>

            {/* ─── Imagen ─────────────────────────────────────────── */}
            <div className="lg:col-span-5 relative h-56 lg:h-full lg:min-h-[300px]">
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80"
                alt="Equipo Teinor disponible para ayudarte"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
              {/* Velo lateral hacia el blanco para fundir con la columna del texto */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/10 lg:bg-gradient-to-r lg:from-white lg:via-white/40 lg:to-transparent" />
            </div>
          </div>
        </motion.div>
      </Contenedor>
    </section>
  );
}
