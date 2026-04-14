"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utilidades";
import LogoTeinor from "@/components/ui/LogoTeinor";
import Boton from "@/components/ui/Boton";

interface EnlaceNavegacion {
  etiqueta: string;
  ruta: string;
}

const enlacesNavegacion: EnlaceNavegacion[] = [
  { etiqueta: "Inicio", ruta: "/" },
  { etiqueta: "Servicios", ruta: "/servicios" },
  { etiqueta: "Portafolio", ruta: "/portafolio" },
  { etiqueta: "Blog", ruta: "/blog" },
];

/**
 * Cabecera principal del sitio.
 *
 * - Sticky con efecto blur al hacer scroll
 * - Enlaces inline (sin contenedor con forma de píldora) — diseño limpio
 * - Sobre el hero del Inicio queda transparente con texto blanco;
 *   tras hacer scroll o en otras páginas se vuelve blanca translúcida
 * - Indicador de página activa con cambio sutil de fondo y color
 */
export default function Cabecera() {
  const rutaActual = usePathname();
  const router = useRouter();
  const esInicio = rutaActual === "/";

  const [conScroll, establecerConScroll] = useState(false);
  const [menuAbierto, establecerMenuAbierto] = useState(false);

  useEffect(() => {
    const alHacerScroll = () => {
      establecerConScroll(window.scrollY > 60);
    };
    alHacerScroll();
    window.addEventListener("scroll", alHacerScroll, { passive: true });
    return () => window.removeEventListener("scroll", alHacerScroll);
  }, []);

  // Bloquear scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = menuAbierto ? "hidden" : "";
    document.body.classList.toggle("menu-movil-abierto", menuAbierto);
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("menu-movil-abierto");
    };
  }, [menuAbierto]);

  // Cerrar el menú móvil al cambiar de ruta
  useEffect(() => {
    establecerMenuAbierto(false);
  }, [rutaActual]);

  // Prefetch manual para que el cambio de página se sienta más rápido
  useEffect(() => {
    enlacesNavegacion.forEach((enlace) => {
      router.prefetch(enlace.ruta);
    });
    router.prefetch("/contacto");
  }, [router]);

  // Sobre el hero del Inicio (sin scroll) la cabecera queda transparente.
  // En el resto de páginas o tras hacer scroll, fondo blanco translúcido.
  const fondoClaro = !esInicio || conScroll;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
        fondoClaro
          ? "py-3 backdrop-blur-2xl bg-white/95 border-b border-tinta/[0.06] shadow-[0_4px_24px_-12px_rgba(15,23,42,0.10)]"
          : "py-5 bg-transparent",
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="relative z-50 group"
          aria-label="Inicio Teinor"
        >
          <LogoTeinor
            modoOscuro={!fondoClaro}
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Navegación escritorio */}
        <nav className="hidden lg:flex items-center gap-1">
          {enlacesNavegacion.map((enlace) => {
            const esActiva =
              enlace.ruta === "/"
                ? rutaActual === "/"
                : rutaActual.startsWith(enlace.ruta);
            return (
              <Link
                key={enlace.ruta}
                href={enlace.ruta}
                className={cn(
                  "px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300",
                  fondoClaro
                    ? esActiva
                      ? "text-marca-purpura-oscuro bg-marca-purpura/14 shadow-[inset_0_0_0_1px_rgba(124,58,237,0.20)]"
                      : "text-tinta-suave hover:text-marca-purpura hover:bg-marca-purpura/[0.08]"
                    : esActiva
                      ? "text-white bg-white/15 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18)]"
                      : "text-white/75 hover:text-white hover:bg-white/10",
                )}
              >
                {enlace.etiqueta}
              </Link>
            );
          })}
        </nav>

        {/* CTA escritorio */}
        <div className="hidden lg:block">
          <Boton
            href="/contacto"
            variante={fondoClaro ? "primario" : "secundario"}
            tamano="sm"
            iconoDerecha={<ArrowRight className="h-4 w-4" />}
          >
            Hablemos
          </Boton>
        </div>

        {/* Botón menú móvil */}
        <button
          type="button"
          onClick={() => establecerMenuAbierto(!menuAbierto)}
          className={cn(
            "lg:hidden relative z-50 p-2 transition-colors",
            menuAbierto || fondoClaro ? "text-tinta" : "text-white",
          )}
          aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
        >
          {menuAbierto ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Menú móvil desplegable */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-[95] transition-all duration-500",
          menuAbierto
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        <div
          className="absolute inset-0 bg-oscuro/35 backdrop-blur-[1px]"
          onClick={() => establecerMenuAbierto(false)}
        />
        <nav className="absolute right-0 top-0 h-[100dvh] w-[86%] max-w-[360px] bg-white border-l border-superficie-borde shadow-[-12px_0_40px_-18px_rgba(15,23,42,0.22)] flex flex-col">
          <div className="flex items-center justify-between border-b border-superficie-borde px-5 py-4">
            <LogoTeinor />
            <button
              type="button"
              onClick={() => establecerMenuAbierto(false)}
              className="rounded-full p-2 text-tinta hover:bg-superficie-suave"
              aria-label="Cerrar menú"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex flex-1 flex-col justify-center px-7">
          {enlacesNavegacion.map((enlace, indice) => {
            const esActiva =
              enlace.ruta === "/"
                ? rutaActual === "/"
                : rutaActual.startsWith(enlace.ruta);
            return (
              <Link
                key={enlace.ruta}
                href={enlace.ruta}
                onClick={() => establecerMenuAbierto(false)}
                className={cn(
                  "block py-3 text-[2rem] leading-none font-display font-bold transition-all duration-300",
                  esActiva
                    ? "text-marca-purpura"
                    : "text-tinta hover:text-marca-purpura",
                  menuAbierto && "animate-aparecer-arriba",
                )}
                style={{ animationDelay: `${indice * 80}ms` }}
              >
                {enlace.etiqueta}
              </Link>
            );
          })}
          </div>

          <div className="border-t border-superficie-borde px-7 py-6">
            <Boton
              href="/contacto"
              variante="primario"
              tamano="lg"
              iconoDerecha={<ArrowRight className="h-5 w-5" />}
              className="w-full"
            >
              Hablemos
            </Boton>
          </div>
        </nav>
      </div>
    </header>
  );
}
