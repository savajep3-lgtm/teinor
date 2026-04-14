"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utilidades";

interface ItemAcordeonLegal {
  pregunta: string;
  respuesta: string;
}

interface PropiedadesAcordeonLegal {
  titulo: string;
  items: ItemAcordeonLegal[];
}

export default function AcordeonLegal({
  titulo,
  items,
}: PropiedadesAcordeonLegal) {
  const [abierto, establecerAbierto] = useState(0);

  return (
    <div className="mt-10">
      <h2 className="font-display text-2xl font-bold text-tinta sm:text-3xl">
        {titulo}
      </h2>

      <div className="mt-6 space-y-4">
        {items.map((item, indice) => {
          const activo = indice === abierto;
          return (
            <div
              key={item.pregunta}
              className={cn(
                "rounded-3xl border bg-white transition-all duration-300",
                activo
                  ? "border-marca-purpura/40 shadow-tarjeta"
                  : "border-superficie-borde",
              )}
            >
              <button
                type="button"
                onClick={() => establecerAbierto(activo ? -1 : indice)}
                className="flex w-full items-center justify-between gap-4 px-6 py-6 text-left sm:px-8"
              >
                <span className="font-display text-xl font-bold leading-tight text-tinta sm:text-2xl">
                  {item.pregunta}
                </span>

                <span
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 sm:h-12 sm:w-12",
                    activo
                      ? "bg-marca-purpura text-white"
                      : "bg-marca-purpura/10 text-marca-purpura",
                  )}
                >
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 transition-transform duration-300",
                      activo && "rotate-180",
                    )}
                  />
                </span>
              </button>

              {activo && (
                <p className="px-6 pb-7 text-sm leading-relaxed text-tinta-suave sm:px-8 sm:text-base">
                  {item.respuesta}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
