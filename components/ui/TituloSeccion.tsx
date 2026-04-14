import { cn } from "@/lib/utilidades";
import Etiqueta from "./Etiqueta";

interface PropiedadesTituloSeccion {
  etiqueta?: string;
  iconoEtiqueta?: React.ReactNode;
  titulo: React.ReactNode;
  descripcion?: React.ReactNode;
  alineacion?: "centro" | "izquierda";
  varianteEtiqueta?: "claro" | "oscuro";
  modoOscuro?: boolean;
  className?: string;
}

/**
 * Encabezado estándar de sección.
 * Funciona en modo claro (por defecto) y modo oscuro mediante `modoOscuro`.
 */
export default function TituloSeccion({
  etiqueta,
  iconoEtiqueta,
  titulo,
  descripcion,
  alineacion = "centro",
  varianteEtiqueta,
  modoOscuro = false,
  className,
}: PropiedadesTituloSeccion) {
  const esCentrado = alineacion === "centro";
  const varianteFinal = varianteEtiqueta ?? (modoOscuro ? "oscuro" : "claro");

  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        esCentrado ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {etiqueta && (
        <Etiqueta icono={iconoEtiqueta} variante={varianteFinal}>
          {etiqueta}
        </Etiqueta>
      )}

      <h2
        className={cn(
          "font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight equilibrio-texto",
          modoOscuro ? "text-white" : "text-tinta",
          esCentrado ? "max-w-3xl" : "",
        )}
      >
        {titulo}
      </h2>

      {descripcion && (
        <p
          className={cn(
            "text-base sm:text-lg pretty-texto leading-relaxed",
            modoOscuro ? "text-white/70" : "text-tinta-tenue",
            esCentrado ? "max-w-2xl" : "max-w-xl",
          )}
        >
          {descripcion}
        </p>
      )}
    </div>
  );
}
