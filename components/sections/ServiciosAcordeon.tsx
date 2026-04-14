"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";
import Contenedor from "@/components/ui/Contenedor";
import { servicios, type Servicio } from "@/data/servicios";
import { cn } from "@/lib/utilidades";

interface PropiedadesServiciosAcordeon {
  conEncabezado?: boolean;
}

/**
 * Sección Servicios — versión acordeón detallado.
 *
 * Layout:
 *  - Lado izquierdo (60%): acordeón con todos los servicios, cada uno
 *    con una mini-imagen ilustrativa, título, chevron desplegable.
 *  - Lado derecho (40%): tarjeta con la imagen del servicio activo +
 *    overlay con frase descriptiva.
 *
 * Comportamiento:
 *  - El primer servicio (Páginas Web) está abierto por defecto
 *  - Si la URL trae hash (#embudos-venta, #google-ads, etc.) abre esa
 *    pestaña automáticamente y hace scroll suave hasta ella
 *  - Solo una pestaña abierta a la vez
 */
export default function ServiciosAcordeon({
  conEncabezado = true,
}: PropiedadesServiciosAcordeon) {
  // El primer servicio abierto por defecto
  const [activoId, establecerActivoId] = useState<string>(
    servicios[0]?.id ?? "",
  );

  // Si la URL trae un hash (ej: /servicios#embudos-venta), abrir esa pestaña
  // y desplazarse hasta ella suavemente.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    const servicioCoincidente = servicios.find((s) => s.id === hash);
    if (servicioCoincidente) {
      establecerActivoId(servicioCoincidente.id);
      // Scroll suave al elemento tras un pequeño delay (espera al render)
      setTimeout(() => {
        const elemento = document.getElementById(`servicio-${hash}`);
        if (elemento) {
          elemento.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 350);
    }
  }, []);

  const alternar = (id: string) => {
    establecerActivoId((prev) => (prev === id ? "" : id));
  };

  const servicioActivo =
    servicios.find((servicio) => servicio.id === activoId) ?? servicios[0];

  return (
    <section id="servicios" className="relative py-14 sm:py-16">
      <Contenedor>
        {conEncabezado && (
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-tinta leading-[1.05] tracking-tight equilibrio-texto">
              Nuestros{" "}
              <span className="texto-gradiente">Servicios</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-tinta-tenue leading-relaxed pretty-texto">
              En nuestra agencia transformamos ideas en soluciones digitales
              efectivas. Creamos sitios web personalizados y estrategias
              diseñadas para atraer, convertir y fidelizar clientes.
            </p>
          </div>
        )}

        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10 items-start">
          {/* ─── Acordeón izquierdo ──────────────────────────────── */}
          <div className="lg:col-span-7 space-y-3">
            {servicios.map((servicio) => (
              <ItemAcordeon
                key={servicio.id}
                servicio={servicio}
                abierto={activoId === servicio.id}
                onAlternar={() => alternar(servicio.id)}
              />
            ))}
          </div>

          {/* ─── Panel derecho con imagen del servicio activo ─────── */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <PanelImagen servicio={servicioActivo!} />
          </div>
        </div>
      </Contenedor>
    </section>
  );
}

/* ─── Subcomponente: item del acordeón ──────────────────────────── */

interface PropiedadesItemAcordeon {
  servicio: Servicio;
  abierto: boolean;
  onAlternar: () => void;
}

function ItemAcordeon({
  servicio,
  abierto,
  onAlternar,
}: PropiedadesItemAcordeon) {
  return (
    <div
      id={`servicio-${servicio.id}`}
      className={cn(
        "rounded-2xl bg-white border transition-all duration-500 overflow-hidden scroll-mt-28",
        abierto
          ? "border-marca-purpura/50 shadow-elevada"
          : "border-superficie-borde shadow-suave hover:border-marca-purpura/25 hover:shadow-tarjeta",
      )}
    >
      {/* Cabecera clicable */}
      <button
        type="button"
        onClick={onAlternar}
        aria-expanded={abierto}
        className={cn(
          "w-full text-left flex items-center gap-4 p-4 sm:p-5 transition-colors duration-500",
          abierto && "bg-gradient-to-r from-marca-purpura/[0.06] to-transparent",
        )}
      >
        {/* Mini imagen del servicio */}
        <div
          className={cn(
            "relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border transition-all duration-500",
            abierto
              ? "border-marca-purpura/40 scale-105"
              : "border-superficie-borde",
          )}
        >
          <Image
            src={servicio.imagen}
            alt={servicio.titulo}
            fill
            sizes="80px"
            className="object-cover"
          />
          {/* Tinte del color del servicio */}
          <div
            className={cn(
              "absolute inset-0 mix-blend-multiply transition-opacity duration-500",
              abierto ? "opacity-0" : "opacity-30",
              servicio.colorIcono.replace("text-", "bg-"),
            )}
          />
        </div>

        {/* Título */}
        <div className="flex-1 min-w-0">
          <div
            className={cn(
              "font-display font-bold text-lg sm:text-xl transition-colors duration-300",
              abierto ? "text-marca-purpura" : "text-tinta",
            )}
          >
            {servicio.titulo}
          </div>
          {!abierto && (
            <div className="text-xs text-tinta-claro mt-0.5 line-clamp-1">
              {servicio.subtitulo}
            </div>
          )}
        </div>

        {/* Chevron */}
        <span
          className={cn(
            "flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-500",
            abierto
              ? "bg-marca-purpura text-white rotate-180"
              : "bg-superficie-suave text-tinta-suave",
          )}
        >
          <ChevronDown className="h-4 w-4" strokeWidth={3} />
        </span>
      </button>

      {/* Cuerpo expandible */}
      <AnimatePresence initial={false}>
        {abierto && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-6 sm:px-6 sm:pb-7 space-y-6 border-t border-superficie-borde pt-5">
              {/* Descripción */}
              <p className="text-sm text-tinta-suave leading-relaxed">
                {servicio.descripcion}
              </p>

              {/* Píldoras "Ideales para" */}
              <div>
                <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-marca-purpura mb-3">
                  Ideales para
                </div>
                <div className="flex flex-wrap gap-2">
                  {servicio.ideales.map((ideal) => (
                    <span
                      key={ideal}
                      className={cn(
                        "px-3 py-1.5 rounded-full text-xs font-bold border",
                        servicio.fondoIcono,
                        servicio.colorIcono,
                        "border-current/20",
                      )}
                    >
                      {ideal}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bullets "Qué incluye" */}
              <div>
                <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-marca-purpura mb-3">
                  Qué incluye
                </div>
                <ul className="grid gap-2.5 sm:grid-cols-2">
                  {servicio.caracteristicas.map((caracteristica) => (
                    <li
                      key={caracteristica}
                      className="flex items-start gap-2.5 text-sm text-tinta-suave"
                    >
                      <span
                        className={cn(
                          "mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center",
                          servicio.fondoIcono,
                        )}
                      >
                        <Check
                          className={cn("h-3 w-3", servicio.colorIcono)}
                          strokeWidth={3}
                        />
                      </span>
                      <span className="leading-snug">{caracteristica}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Subcomponente: panel imagen del servicio activo ───────────── */

interface PropiedadesPanelImagen {
  servicio: Servicio;
}

/**
 * Tarjeta lateral que muestra la imagen del servicio activo con un overlay
 * de texto. Cambia con animación cuando el usuario abre otra pestaña.
 */
function PanelImagen({ servicio }: PropiedadesPanelImagen) {
  return (
    <div className="relative aspect-[4/5] max-w-md mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={servicio.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative w-full h-full rounded-3xl overflow-hidden shadow-elevada border border-superficie-borde"
        >
          {/* Imagen del servicio */}
          <Image
            src={servicio.imagen}
            alt={servicio.titulo}
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
          />

          {/* Overlay degradado oscuro abajo para legibilidad */}
          <div className="absolute inset-0 bg-gradient-to-t from-oscuro/95 via-oscuro/40 to-transparent" />

          {/* Tinte de color del servicio */}
          <div
            className={cn(
              "absolute inset-0 mix-blend-overlay opacity-30",
              servicio.colorIcono.replace("text-", "bg-"),
            )}
          />

          {/* Contenido encima de la imagen */}
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 text-white">
            <div
              className={cn(
                "inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-3 backdrop-blur-md",
                servicio.fondoIcono,
                servicio.colorIcono,
              )}
            >
              {servicio.id === "paginas-web" && "Diseño + Desarrollo"}
              {servicio.id === "embudos-venta" && "Estrategia + Automatización"}
              {servicio.id === "google-ads" && "Tráfico cualificado"}
            </div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl leading-tight">
              {servicio.titulo}
            </h3>
            <p className="mt-2 text-sm text-white/80 leading-relaxed line-clamp-3">
              {servicio.subtitulo}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
