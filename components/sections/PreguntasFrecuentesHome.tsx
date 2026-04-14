"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Contenedor from "@/components/ui/Contenedor";
import { preguntasFrecuentes } from "@/data/preguntas";
import { cn } from "@/lib/utilidades";

/**
 * Variante de Preguntas Frecuentes para el Inicio.
 *
 * Layout en dos columnas sobre fondo oscuro:
 *  - Izquierda: título + acordeón de preguntas
 *  - Derecha: imagen circular de un hombre pensando
 *
 * Comportamiento:
 *  - Ninguna pregunta abierta por defecto
 *  - Solo una pregunta abierta a la vez
 *  - Iconos chevron arriba/abajo (no "+")
 */
export default function PreguntasFrecuentesHome() {
  const [activa, establecerActiva] = useState<string | null>(null);

  const alternar = (id: string) => {
    establecerActiva((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative py-14 sm:py-16 bg-oscuro text-white overflow-hidden">
      {/* Decoración */}
      <div className="absolute inset-0 patron-rejilla-oscuro opacity-30" />
      <div className="absolute -top-32 -left-20 w-72 h-72 rounded-full bg-marca-cian/15 blur-[140px]" />
      <div className="absolute -bottom-32 -right-20 w-80 h-80 rounded-full bg-marca-purpura/15 blur-[140px]" />

      {/* Símbolos de interrogación decorativos */}
      <div className="absolute top-10 left-10 text-9xl font-display font-bold text-white/[0.025] select-none pointer-events-none">
        ?
      </div>
      <div className="absolute bottom-10 right-1/3 text-7xl font-display font-bold text-white/[0.03] select-none pointer-events-none">
        ?
      </div>

      <Contenedor className="relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* ─── Izquierda: título + acordeón ─────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7"
          >
            <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight equilibrio-texto mb-10">
              Resolvemos tus{" "}
              <span className="texto-gradiente">dudas</span>
            </h2>

            <div className="space-y-3">
              {preguntasFrecuentes.slice(0, 5).map((item, indice) => {
                const estaAbierta = activa === item.id;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.5, delay: indice * 0.05 }}
                  >
                    <button
                      type="button"
                      onClick={() => alternar(item.id)}
                      className={cn(
                        "w-full text-left rounded-2xl bg-white/[0.05] border transition-all duration-300 overflow-hidden backdrop-blur-sm",
                        estaAbierta
                          ? "border-marca-purpura/50 bg-white/[0.08]"
                          : "border-white/10 hover:border-white/25 hover:bg-white/[0.07]",
                      )}
                    >
                      <div className="flex items-center justify-between gap-4 p-5">
                        <span className="text-base font-display font-semibold text-white">
                          {item.pregunta}
                        </span>
                        <span
                          className={cn(
                            "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500",
                            estaAbierta
                              ? "bg-marca-purpura text-white rotate-180"
                              : "bg-white/10 text-white/85",
                          )}
                        >
                          <ChevronDown className="h-4 w-4" strokeWidth={3} />
                        </span>
                      </div>

                      <AnimatePresence initial={false}>
                        {estaAbierta && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              duration: 0.4,
                              ease: [0.21, 0.47, 0.32, 0.98],
                            }}
                            className="overflow-hidden"
                          >
                            <p className="px-5 pb-5 text-sm text-white/65 leading-relaxed pretty-texto">
                              {item.respuesta}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* ─── Derecha: ilustración (hombre pensando) ───────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="hidden lg:block lg:col-span-5"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Imagen circular con borde */}
              <div className="absolute inset-6 rounded-full overflow-hidden border-4 border-white/10 shadow-elevada">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                  alt="Hombre pensando, resolviendo dudas"
                  fill
                  sizes="(max-width: 1024px) 0vw, 35vw"
                  className="object-cover"
                />
                {/* Tinte de marca sutil */}
                <div className="absolute inset-0 bg-gradient-to-tr from-marca-purpura/25 via-transparent to-marca-cian/15 mix-blend-overlay" />
              </div>

              {/* Anillo giratorio */}
              <div className="absolute inset-0 rounded-full border border-dashed border-white/15 animate-girar-lento" />

              {/* Símbolos ? flotantes */}
              <div className="absolute top-2 right-8 w-16 h-16 rounded-full bg-amber-300/95 flex items-center justify-center text-3xl font-display font-bold text-amber-900 shadow-elevada animate-flotar-lento">
                ?
              </div>
              <div
                className="absolute bottom-8 left-2 w-12 h-12 rounded-full bg-marca-cian/95 flex items-center justify-center text-2xl font-display font-bold text-white shadow-elevada animate-flotar-lento"
                style={{ animationDelay: "1s" }}
              >
                ?
              </div>
              <div
                className="absolute top-1/2 -right-2 w-10 h-10 rounded-full bg-marca-magenta/95 flex items-center justify-center text-xl font-display font-bold text-white shadow-elevada animate-flotar-lento"
                style={{ animationDelay: "2s" }}
              >
                ?
              </div>
            </div>
          </motion.div>
        </div>
      </Contenedor>
    </section>
  );
}
