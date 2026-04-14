import type { Metadata } from "next";
import HeroPagina from "@/components/layout/HeroPagina";
import FormularioContacto from "@/components/sections/FormularioContacto";
import PreguntasFrecuentes from "@/components/sections/PreguntasFrecuentes";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "¿Tienes un proyecto en mente? Hablemos. En Teinor te respondemos en menos de 24 horas con una propuesta personalizada.",
};

/**
 * Página /contacto — formulario y datos de contacto + FAQ.
 *
 * Notar que esta página NO incluye la sección LlamadaAccion al final
 * (sería redundante con el formulario que ya es la propia llamada a acción).
 */
export default function PaginaContacto() {
  return (
    <>
      <HeroPagina
        titulo="Hablemos de tu próximo proyecto"
        palabraDestacada="próximo proyecto"
        descripcion="Estamos listos para escucharte. Cuéntanos qué necesitas y construyamos juntos algo que enamore a tus clientes."
      />
      <FormularioContacto />
      <PreguntasFrecuentes fondoAlterno mostrarEncabezado={false} />
    </>
  );
}
