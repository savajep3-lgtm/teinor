import { cn } from "@/lib/utilidades";

interface PropiedadesEtiqueta {
  children: React.ReactNode;
  icono?: React.ReactNode;
  variante?: "claro" | "oscuro";
  className?: string;
}

/**
 * Insignia/etiqueta pequeña usada para encabezar secciones.
 * Variante "claro" para fondos blancos, "oscuro" para fondos oscuros.
 */
export default function Etiqueta({
  children,
  icono,
  variante = "claro",
  className,
}: PropiedadesEtiqueta) {
  const clasesPorVariante = {
    claro:
      "bg-marca-purpura/8 border border-marca-purpura/15 text-marca-purpura",
    oscuro:
      "bg-white/10 border border-white/15 text-white/90 backdrop-blur-md",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-4 py-1.5 rounded-full",
        "text-xs font-semibold uppercase tracking-wider",
        clasesPorVariante[variante],
        className,
      )}
    >
      {icono && (
        <span className="[&>svg]:h-3.5 [&>svg]:w-3.5">{icono}</span>
      )}
      {children}
    </div>
  );
}
