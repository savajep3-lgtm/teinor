import Link from "next/link";
import { cn } from "@/lib/utilidades";

type VarianteBoton = "primario" | "secundario" | "contorno" | "fantasma" | "oscuro";
type TamanoBoton = "sm" | "md" | "lg";

interface PropiedadesBoton
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variante?: VarianteBoton;
  tamano?: TamanoBoton;
  href?: string;
  iconoIzquierda?: React.ReactNode;
  iconoDerecha?: React.ReactNode;
  children: React.ReactNode;
}

/**
 * Botón polimórfico de Teinor.
 *
 * Variantes:
 *  - primario   → fondo púrpura sólido (acción principal sobre fondos claros)
 *  - secundario → fondo blanco con texto oscuro (acción principal sobre fondos oscuros)
 *  - contorno   → fondo transparente con borde sutil
 *  - fantasma   → solo texto, sin fondo
 *  - oscuro     → fondo casi negro (CTA fuerte sobre claro)
 *
 * Si recibe `href` se renderiza como Link de Next.js.
 */
export default function Boton({
  variante = "primario",
  tamano = "md",
  href,
  iconoIzquierda,
  iconoDerecha,
  className,
  children,
  ...resto
}: PropiedadesBoton) {
  const clasesBase =
    "relative inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 group whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-marca-purpura/40 focus:ring-offset-2 focus:ring-offset-superficie";

  const clasesPorTamano: Record<TamanoBoton, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const clasesPorVariante: Record<VarianteBoton, string> = {
    primario:
      "bg-marca-purpura text-white hover:bg-marca-purpura-oscuro shadow-marca-suave hover:shadow-marca hover:-translate-y-0.5 active:translate-y-0",
    secundario:
      "bg-white text-tinta hover:bg-superficie-suave shadow-tarjeta hover:shadow-elevada hover:-translate-y-0.5 active:translate-y-0",
    contorno:
      "bg-transparent text-tinta border border-superficie-borde hover:border-marca-purpura hover:text-marca-purpura hover:bg-marca-purpura/5",
    fantasma:
      "text-tinta-suave hover:text-tinta hover:bg-superficie-suave",
    oscuro:
      "bg-oscuro text-white hover:bg-oscuro-suave shadow-tarjeta hover:shadow-elevada hover:-translate-y-0.5 active:translate-y-0",
  };

  const clases = cn(
    clasesBase,
    clasesPorTamano[tamano],
    clasesPorVariante[variante],
    className,
  );

  const contenido = (
    <>
      {iconoIzquierda && <span className="shrink-0">{iconoIzquierda}</span>}
      <span>{children}</span>
      {iconoDerecha && (
        <span className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5">
          {iconoDerecha}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={clases}>
        {contenido}
      </Link>
    );
  }

  return (
    <button className={clases} {...resto}>
      {contenido}
    </button>
  );
}
