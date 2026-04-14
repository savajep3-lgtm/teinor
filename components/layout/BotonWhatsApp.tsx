"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utilidades";

interface PropiedadesBotonWhatsApp {
  /** Número de teléfono en formato internacional, sin "+" ni espacios */
  numero?: string;
  /** Mensaje precargado al abrir el chat */
  mensaje?: string;
}

/**
 * Botón flotante de WhatsApp.
 *
 * - Fijo en la esquina inferior derecha de todas las páginas
 * - Ícono oficial de WhatsApp con su color de marca (#25D366)
 * - Animación de pulso sutil
 * - Burbuja de invitación corta a la IZQUIERDA del botón (no encima)
 *   que aparece tras unos segundos y se puede cerrar con X
 *
 * Sustituye `numero` por el WhatsApp real de Teinor cuando lo tengas.
 */
export default function BotonWhatsApp({
  numero = "0000000000",
  mensaje = "Hola Teinor, me gustaría conocer más sobre sus servicios.",
}: PropiedadesBotonWhatsApp) {
  const [burbujaVisible, establecerBurbujaVisible] = useState(false);

  // Mostrar la burbuja después de 4 segundos
  useEffect(() => {
    const temporizador = setTimeout(() => {
      establecerBurbujaVisible(true);
    }, 4000);
    return () => clearTimeout(temporizador);
  }, []);

  const cerrarBurbuja = (evento: React.MouseEvent) => {
    evento.preventDefault();
    evento.stopPropagation();
    establecerBurbujaVisible(false);
  };

  const enlaceWhatsApp = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

  return (
    <div className="boton-whatsapp-flotante fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Burbuja de invitación a la IZQUIERDA del botón */}
      <div
        className={cn(
          "relative max-w-[230px] rounded-2xl border border-superficie-borde bg-white p-4 pr-9 shadow-elevada transition-all duration-300",
          burbujaVisible
            ? "translate-x-0 scale-100 opacity-100"
            : "pointer-events-none translate-x-4 scale-95 opacity-0",
        )}
      >
        <button
          type="button"
          onClick={cerrarBurbuja}
          className="absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full text-tinta-tenue transition-colors hover:bg-superficie-suave"
          aria-label="Cerrar invitación"
        >
          <X className="h-3.5 w-3.5" />
        </button>
        <div className="text-sm font-bold text-tinta">¿Hablamos?</div>
        <div className="mt-1 text-xs leading-relaxed text-tinta-tenue">
          Cuéntanos sobre tu proyecto.
        </div>
        {/* Pico apuntando al botón (lado derecho) */}
        <div className="absolute top-1/2 -right-1.5 h-3 w-3 -translate-y-1/2 rotate-45 border-r border-t border-superficie-borde bg-white" />
      </div>

      {/* Botón circular */}
      <a
        href={enlaceWhatsApp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className={cn(
          "relative group w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center",
          "bg-[#25D366] shadow-[0_8px_30px_rgba(37,211,102,0.45)]",
          "hover:scale-110 hover:shadow-[0_10px_36px_rgba(37,211,102,0.6)]",
          "transition-all duration-300 active:scale-95",
        )}
      >
        {/* Anillo de pulso */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping [animation-duration:2.5s]" />
        <span className="absolute inset-0 rounded-full ring-2 ring-white/30" />

        {/* Ícono oficial de WhatsApp */}
        <svg
          viewBox="0 0 32 32"
          className="relative w-7 h-7 sm:w-8 sm:h-8 text-white drop-shadow-sm"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.81 2.722.81.4 0 1.247-.045 1.59-.317.233-.215.376-.7.376-1.005 0-.275-.054-.52-.227-.642-.4-.262-2.05-.876-2.337-.95-.18-.04-.328-.078-.474-.078zM16.04 4C9.376 4 4 9.376 4 16.04c0 2.13.557 4.21 1.622 6.05L4 28l6.083-1.598a12.034 12.034 0 0 0 5.957 1.555c6.665 0 12.04-5.376 12.04-12.04S22.704 4 16.04 4zm0 21.985c-1.83 0-3.625-.518-5.18-1.477l-.37-.222-3.85.99 1.025-3.748-.243-.385a9.86 9.86 0 0 1-1.524-5.27c0-5.52 4.494-9.985 9.985-9.985 5.49 0 9.985 4.495 9.985 9.985 0 5.49-4.494 10.112-9.825 10.112z" />
        </svg>
      </a>
    </div>
  );
}
