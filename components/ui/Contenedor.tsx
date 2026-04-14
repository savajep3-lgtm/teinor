import { cn } from "@/lib/utilidades";

interface PropiedadesContenedor {
  children: React.ReactNode;
  className?: string;
  comoEtiqueta?: keyof JSX.IntrinsicElements;
}

/**
 * Contenedor responsivo con ancho máximo y padding lateral consistente.
 * Garantiza la misma alineación horizontal en todas las secciones.
 */
export default function Contenedor({
  children,
  className,
  comoEtiqueta: Etiqueta = "div",
}: PropiedadesContenedor) {
  return (
    <Etiqueta
      className={cn(
        "mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12",
        className,
      )}
    >
      {children}
    </Etiqueta>
  );
}
