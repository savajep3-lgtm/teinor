import Image from "next/image";
import { cn } from "@/lib/utilidades";

interface PropiedadesLogoTeinor {
  className?: string;
  conTexto?: boolean;
  modoOscuro?: boolean;
}

/**
 * Logotipo de Teinor.
 * Usa el isotipo oficial en PNG + wordmark estilizado en claro.
 */
export default function LogoTeinor({
  className,
  conTexto = true,
  modoOscuro = false,
}: PropiedadesLogoTeinor) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <Image
        src="/branding/logo-teinor.png"
        alt="Logo Teinor"
        width={56}
        height={40}
        className="h-9 w-auto"
        priority
      />

      {conTexto && (
        <span
          className={cn(
            "font-display font-bold text-2xl tracking-tight leading-none",
            modoOscuro && "drop-shadow-[0_1px_2px_rgba(255,255,255,0.2)]",
          )}
        >
          <>
            <span className={cn(modoOscuro ? "text-white" : "text-[#111111]")}>Te</span>
            <span
              className={cn(
                "relative inline-block",
                modoOscuro ? "text-white" : "text-[#111111]",
              )}
            >
              i
            </span>
            <span className="bg-gradient-to-r from-marca-cian to-marca-azul bg-clip-text text-transparent">
              nor
            </span>
          </>
        </span>
      )}
    </div>
  );
}
