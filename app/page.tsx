import Hero from "@/components/sections/Hero";
import ComoPodemosAyudarte from "@/components/sections/ComoPodemosAyudarte";
import EligeServicio from "@/components/sections/EligeServicio";
import PreguntasFrecuentesHome from "@/components/sections/PreguntasFrecuentesHome";

/**
 * Página de Inicio (/).
 *
 * Estructura mínima y enfocada:
 *  1. Hero — primer impacto
 *  2. ¿Cómo podemos ayudarte? — quote cards sobre imagen
 *  3. Elige el servicio — 3 tarjetas grandes con enlace al detalle
 *  4. Preguntas frecuentes — fondo oscuro con ilustración
 */
export default function PaginaInicio() {
  return (
    <>
      <Hero />
      <ComoPodemosAyudarte />
      <EligeServicio />
      <PreguntasFrecuentesHome />
    </>
  );
}
