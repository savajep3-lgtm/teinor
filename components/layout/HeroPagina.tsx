"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Contenedor from "@/components/ui/Contenedor";

interface PropiedadesHeroPagina {
  titulo: React.ReactNode;
  /** Palabra(s) que se renderizarán con degradado de marca dentro del título */
  palabraDestacada?: string;
  descripcion?: string;
  /** URL de imagen de fondo (Unsplash u otra). Por defecto usa una neutra */
  imagenFondo?: string;
}

/**
 * Hero compacto para páginas internas.
 *
 * Bloque oscuro con título grande CENTRADO + descripción centrada.
 * Lleva una foto de fondo sutilmente visible (con velo oscuro fuerte)
 * para que no sea solo un color plano y se conecte con el estilo del hero
 * del Inicio.
 *
 * Si pasas `palabraDestacada`, esa cadena se busca en el `titulo` (string)
 * y se reemplaza con un span en degradado.
 */
export default function HeroPagina({
  titulo,
  palabraDestacada,
  descripcion,
  imagenFondo = "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=2400&q=80",
}: PropiedadesHeroPagina) {
  // Renderiza el título separando la palabra destacada con degradado
  const renderizarTitulo = () => {
    if (typeof titulo !== "string" || !palabraDestacada) {
      return titulo;
    }

    const partes = titulo.split(palabraDestacada);
    return (
      <>
        {partes.map((parte, indice) => (
          <span key={indice}>
            {parte}
            {indice < partes.length - 1 && (
              <span className="texto-gradiente-animado">{palabraDestacada}</span>
            )}
          </span>
        ))}
      </>
    );
  };

  return (
    <section className="relative pt-32 pb-16 sm:pt-36 sm:pb-20 bg-oscuro text-white overflow-hidden">
      {/* Foto de fondo sutil */}
      <div className="absolute inset-0">
        <Image
          src={imagenFondo}
          alt=""
          fill
          quality={65}
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Velo oscuro fuerte (la imagen apenas se intuye) */}
      <div className="absolute inset-0 bg-gradient-to-b from-oscuro/85 via-oscuro/90 to-oscuro" />

      {/* Cuadrícula sutil */}
      <div className="absolute inset-0 patron-rejilla-oscuro opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      {/* Halo decorativo */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-marca-purpura/20 blur-[140px]" />

      <Contenedor className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Título centrado */}
          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight equilibrio-texto">
            {renderizarTitulo()}
          </h1>

          {/* Descripción centrada */}
          {descripcion && (
            <p className="mt-6 text-base sm:text-lg lg:text-xl text-white/70 leading-relaxed pretty-texto max-w-2xl mx-auto">
              {descripcion}
            </p>
          )}
        </motion.div>
      </Contenedor>
    </section>
  );
}
