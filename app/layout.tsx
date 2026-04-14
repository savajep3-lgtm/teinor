import type { Metadata, Viewport } from "next";
import { fuenteSans, fuenteDisplay } from "./fuentes";
import "./globals.css";
import Cabecera from "@/components/layout/Cabecera";
import PieDePagina from "@/components/layout/PieDePagina";
import BotonWhatsApp from "@/components/layout/BotonWhatsApp";
import Preloader from "@/components/layout/Preloader";

/**
 * Metadatos globales del sitio Teinor.
 */
export const metadata: Metadata = {
  title: {
    default: "Teinor — Soluciones digitales que impulsan tu marca",
    template: "%s · Teinor",
  },
  description:
    "En Teinor diseñamos y desarrollamos páginas web exclusivas, embudos de venta, tiendas online y experiencias digitales hechas a medida para hacer crecer tu negocio.",
  keywords: [
    "Teinor",
    "agencia digital",
    "diseño web",
    "páginas web",
    "embudos de venta",
    "desarrollo web",
    "branding",
    "tiendas online",
  ],
  authors: [{ name: "Teinor" }],
  openGraph: {
    title: "Teinor — Soluciones digitales premium",
    description:
      "Diseño y desarrollo web exclusivo. Llevamos tu marca al siguiente nivel.",
    type: "website",
    locale: "es_ES",
  },
};

/**
 * Configuración de viewport (separada de metadata en Next.js 14+).
 */
export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

/**
 * Disposición raíz del sitio.
 * Aplica fuentes, cabecera global y pie de página global a todas las páginas.
 */
export default function DisposicionRaiz({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${fuenteSans.variable} ${fuenteDisplay.variable}`}
    >
      <body className="min-h-screen overflow-x-hidden flex flex-col">
        <Preloader />
        <Cabecera />
        <main className="flex-1">{children}</main>
        <PieDePagina />
        <BotonWhatsApp />
      </body>
    </html>
  );
}
