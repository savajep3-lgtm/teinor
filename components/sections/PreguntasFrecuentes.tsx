"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";
import Contenedor from "@/components/ui/Contenedor";
import TituloSeccion from "@/components/ui/TituloSeccion";
import { preguntasFrecuentes } from "@/data/preguntas";
import { cn } from "@/lib/utilidades";

interface PropiedadesPreguntasFrecuentes {
  fondoAlterno?: boolean;
  mostrarEncabezado?: boolean;
}

/**
 * Sección Preguntas Frecuentes — acordeón con las dudas más comunes.
 * Solo una pregunta abierta a la vez para mejor UX.
 */
export default function PreguntasFrecuentes({
  fondoAlterno = false,
  mostrarEncabezado = true,
}: PropiedadesPreguntasFrecuentes) {
  const [activa, establecerActiva] = useState<string | null>(null);

  const alternar = (id: string) => {
    establecerActiva((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className={cn(
        "relative py-14 sm:py-16",
        fondoAlterno && "bg-superficie-suave",
      )}
    >
      <Contenedor>
        {mostrarEncabezado && (
          <TituloSeccion
            etiqueta="Preguntas frecuentes"
            iconoEtiqueta={<HelpCircle />}
            titulo={
              <>
                Resolvemos tus <span className="texto-gradiente">dudas</span>
              </>
            }
            descripcion="Las preguntas más comunes que recibimos. Si no encuentras la tuya, escríbenos."
          />
        )}

        <div className={cn("max-w-3xl mx-auto space-y-3", mostrarEncabezado && "mt-14")}>
          {preguntasFrecuentes.map((item, indice) => {
            const estaAbierta = activa === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: indice * 0.05 }}
              >
                <button
                  type="button"
                  onClick={() => alternar(item.id)}
                  className={cn(
                    "w-full text-left rounded-2xl bg-white border transition-all duration-300 overflow-hidden",
                    estaAbierta
                      ? "border-marca-purpura/40 shadow-tarjeta"
                      : "border-superficie-borde shadow-suave hover:border-marca-purpura/20 hover:shadow-tarjeta",
                  )}
                >
                  <div className="flex items-center justify-between gap-6 p-6">
                    <span className="text-base lg:text-lg font-display font-semibold text-tinta">
                      {item.pregunta}
                    </span>
                    <span
                      className={cn(
                        "flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-500",
                        estaAbierta
                          ? "bg-marca-purpura"
                          : "bg-marca-purpura/10",
                      )}
                    >
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-all duration-300",
                          estaAbierta && "rotate-180",
                          estaAbierta ? "text-white" : "text-marca-purpura",
                        )}
                      />
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
                        <p className="px-6 pb-6 text-sm text-tinta-tenue leading-relaxed pretty-texto">
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
      </Contenedor>
    </section>
  );
}
