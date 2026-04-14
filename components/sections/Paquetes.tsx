"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import Contenedor from "@/components/ui/Contenedor";
import Boton from "@/components/ui/Boton";
import { paquetes, type Paquete } from "@/data/paquetes";
import { cn } from "@/lib/utilidades";

interface PropiedadesPaquetes {
  fondoAlterno?: boolean;
  conEncabezado?: boolean;
}

/**
 * Sección Paquetes — presenta los planes que Teinor ofrece.
 * Tres columnas, una destacada en oscuro (estilo agencia premium).
 *
 * El encabezado es minimalista: solo el título grande, sin etiqueta
 * ni descripción adicional.
 */
export default function Paquetes({
  fondoAlterno = false,
  conEncabezado = true,
}: PropiedadesPaquetes) {
  return (
    <section
      id="paquetes"
      className={cn(
        "relative py-14 sm:py-16",
        fondoAlterno && "bg-superficie-suave",
      )}
    >
      <Contenedor>
        {conEncabezado && (
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-tinta leading-[1.05] tracking-tight equilibrio-texto">
              El plan <span className="texto-gradiente">perfecto para ti</span>
            </h2>
          </div>
        )}

        <div className="grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {paquetes.map((paquete, indice) => (
            <TarjetaPaquete
              key={paquete.id}
              paquete={paquete}
              indice={indice}
            />
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-tinta-tenue">
          ¿Necesitas algo distinto?{" "}
          <a
            href="/contacto"
            className="text-marca-purpura font-semibold hover:text-marca-purpura-oscuro hover:underline"
          >
            Hablemos de un proyecto a medida
          </a>
        </p>
      </Contenedor>
    </section>
  );
}

interface PropiedadesTarjetaPaquete {
  paquete: Paquete;
  indice: number;
}

function TarjetaPaquete({ paquete, indice }: PropiedadesTarjetaPaquete) {
  const esDestacado = paquete.destacado;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: indice * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={cn("relative h-full", esDestacado && "lg:-translate-y-4")}
    >
      {/* Badge destacado */}
      {esDestacado && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-marca-purpura text-white text-xs font-bold uppercase tracking-wider shadow-marca">
            <Sparkles className="h-3 w-3" />
            Más popular
          </div>
        </div>
      )}

      <div
        className={cn(
          "relative h-full rounded-2xl p-8 lg:p-10 flex flex-col transition-all duration-500",
          esDestacado
            ? "bg-oscuro text-white border border-oscuro-borde shadow-elevada"
            : "bg-white border border-superficie-borde shadow-tarjeta hover:shadow-tarjeta-hover hover:-translate-y-1",
        )}
      >
        {/* Encabezado */}
        <div>
          <h3
            className={cn(
              "text-2xl lg:text-3xl font-display font-bold",
              esDestacado ? "text-white" : "text-tinta",
            )}
          >
            {paquete.nombre}
          </h3>
          <p
            className={cn(
              "mt-3 text-sm leading-relaxed",
              esDestacado ? "text-white/65" : "text-tinta-tenue",
            )}
          >
            {paquete.descripcion}
          </p>
        </div>

        {/* Separador */}
        <div
          className={cn(
            "my-8 h-px",
            esDestacado ? "bg-white/10" : "bg-superficie-borde",
          )}
        />

        {/* Características */}
        <ul className="space-y-3.5 flex-1">
          {paquete.caracteristicas.map((caracteristica) => (
            <li key={caracteristica} className="flex items-start gap-3">
              <span
                className={cn(
                  "mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center",
                  esDestacado ? "bg-marca-purpura" : "bg-marca-purpura/10",
                )}
              >
                <Check
                  className={cn(
                    "h-3 w-3",
                    esDestacado ? "text-white" : "text-marca-purpura",
                  )}
                  strokeWidth={3}
                />
              </span>
              <span
                className={cn(
                  "text-sm",
                  esDestacado ? "text-white/85" : "text-tinta-suave",
                )}
              >
                {caracteristica}
              </span>
            </li>
          ))}
        </ul>

        {/* Botón */}
        <div className="mt-8">
          <Boton
            href="/contacto"
            variante={esDestacado ? "secundario" : "primario"}
            className="w-full"
          >
            {paquete.textoBoton}
          </Boton>
        </div>
      </div>
    </motion.article>
  );
}
