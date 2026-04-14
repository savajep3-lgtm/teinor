"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utilidades";

interface ItemFaq {
  pregunta: string;
  respuesta: string;
}

interface PropiedadesAcordeonFaq {
  items: ItemFaq[];
}

export default function AcordeonFaq({ items }: PropiedadesAcordeonFaq) {
  const [abierta, establecerAbierta] = useState(-1);

  return (
    <div className="space-y-3">
      {items.map((item, indice) => {
        const activa = abierta === indice;
        return (
          <div
            key={item.pregunta}
            className={cn(
              "rounded-2xl border bg-white transition-all duration-300",
              activa
                ? "border-marca-purpura/40 shadow-tarjeta"
                : "border-superficie-borde",
            )}
          >
            <button
              type="button"
              onClick={() => establecerAbierta(activa ? -1 : indice)}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
            >
              <span className="font-display text-lg font-bold text-tinta sm:text-2xl">
                {item.pregunta}
              </span>
              <span
                className={cn(
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300",
                  activa
                    ? "bg-marca-purpura text-white"
                    : "bg-marca-purpura/10 text-marca-purpura",
                )}
              >
                <ChevronDown
                  className={cn("h-5 w-5 transition-transform", activa && "rotate-180")}
                />
              </span>
            </button>
            {activa && (
              <p className="px-5 pb-6 text-sm leading-relaxed text-tinta-tenue sm:text-base">
                {item.respuesta}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
