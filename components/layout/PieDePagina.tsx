import Link from "next/link";
import { Mail, Phone, MapPin, Facebook } from "lucide-react";
import LogoTeinor from "@/components/ui/LogoTeinor";
import Contenedor from "@/components/ui/Contenedor";

interface SeccionEnlaces {
  titulo: string;
  enlaces: { etiqueta: string; href: string }[];
}

const seccionesEnlaces: SeccionEnlaces[] = [
  {
    titulo: "Páginas",
    enlaces: [
      { etiqueta: "Inicio", href: "/" },
      { etiqueta: "Servicios", href: "/servicios" },
      { etiqueta: "Portafolio", href: "/portafolio" },
      { etiqueta: "Blog", href: "/blog" },
    ],
  },
  {
    titulo: "Legal",
    enlaces: [
      { etiqueta: "Política de privacidad", href: "/politica-de-privacidad" },
      { etiqueta: "Política de cookies", href: "/politica-de-cookies" },
    ],
  },
];

/**
 * Pie de página oscuro: marca, enlaces, contacto y redes sociales.
 * Sirve de cierre del sitio creando contraste con el cuerpo claro.
 */
export default function PieDePagina() {
  return (
    <footer className="relative pt-24 pb-10 bg-oscuro text-white overflow-hidden">
      {/* Decoración sutil */}
      <div className="absolute inset-0 patron-rejilla-oscuro opacity-50 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-marca-purpura/40 to-transparent" />

      <Contenedor className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Bloque marca */}
          <div className="lg:col-span-4 space-y-6">
            <LogoTeinor modoOscuro />

            <div className="space-y-3 pt-2">
              <a
                href="mailto:contacto@teinor.com"
                className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors group"
              >
                <span className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-marca-purpura group-hover:border-marca-purpura transition-colors">
                  <Mail className="h-4 w-4" />
                </span>
                contacto@teinor.com
              </a>
              <a
                href="tel:+0000000000"
                className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors group"
              >
                <span className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-marca-purpura group-hover:border-marca-purpura transition-colors">
                  <Phone className="h-4 w-4" />
                </span>
                +00 000 000 000
              </a>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <span className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <MapPin className="h-4 w-4" />
                </span>
                Disponibles globalmente
              </div>
            </div>
          </div>

          {/* Columnas de enlaces */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {seccionesEnlaces.map((seccion) => (
              <div key={seccion.titulo}>
                <h4 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">
                  {seccion.titulo}
                </h4>
                <ul className="space-y-3">
                  {seccion.enlaces.map((enlace) => (
                    <li key={enlace.etiqueta}>
                      {enlace.href.startsWith("http") ? (
                        <a
                          href={enlace.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-white/60 hover:text-white hover:translate-x-0.5 transition-all duration-300 inline-block"
                        >
                          {enlace.etiqueta}
                        </a>
                      ) : (
                        <Link
                          href={enlace.href}
                          className="text-sm text-white/60 hover:text-white hover:translate-x-0.5 transition-all duration-300 inline-block"
                        >
                          {enlace.etiqueta}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h4 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">
                Síguenos
              </h4>
              <a
                href="https://web.facebook.com/profile.php?id=61575988772808"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Teinor"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/75 transition-all duration-300 hover:bg-marca-purpura hover:border-marca-purpura hover:text-white"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 h-px w-full bg-white/10" />
      </Contenedor>
    </footer>
  );
}
