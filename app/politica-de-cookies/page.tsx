import type { Metadata } from "next";
import Contenedor from "@/components/ui/Contenedor";
import AcordeonLegal from "@/components/ui/AcordeonLegal";

export const metadata: Metadata = {
  title: "Política de cookies",
  description:
    "Conoce cómo usamos cookies para mejorar tu experiencia en Teinor.",
};

const puntos = [
  {
    pregunta: "¿Qué son las cookies?",
    respuesta:
      "Las cookies son pequeños archivos que se almacenan en tu navegador para recordar preferencias, analizar comportamiento y mejorar tu experiencia.",
  },
  {
    pregunta: "¿Para qué usamos cookies?",
    respuesta:
      "Usamos cookies para que el sitio funcione correctamente, entender el uso real de nuestras páginas y mostrar contenido más relevante para cada usuario.",
  },
  {
    pregunta: "¿Qué tipo de cookies utilizamos?",
    respuesta:
      "Utilizamos cookies esenciales, de rendimiento, analíticas y, en algunos casos, de personalización o terceros para funcionalidades específicas.",
  },
  {
    pregunta: "¿Cómo puedes gestionar o desactivar las cookies?",
    respuesta:
      "Puedes aceptarlas, bloquearlas o eliminarlas desde la configuración de tu navegador. Ten en cuenta que algunas funciones pueden verse limitadas.",
  },
  {
    pregunta: "¿Cuál es la vigencia de esta política?",
    respuesta:
      "Esta política puede actualizarse cuando cambien las tecnologías o normativas aplicables. Te recomendamos revisarla periódicamente.",
  },
];

export default function PaginaPoliticaCookies() {
  return (
    <section className="py-28 sm:py-32">
      <Contenedor className="max-w-4xl">
        <h1 className="font-display text-4xl font-bold text-tinta sm:text-5xl">
          POLITICA DE COOKIES
        </h1>

        <div className="mt-8 space-y-5 text-sm leading-relaxed text-tinta-suave sm:text-base">
          <p>
            En nuestros sitios web utilizamos cookies propias y de terceros para
            brindarte una mejor experiencia de navegacion. Las cookies nos
            permiten mejorar el funcionamiento de nuestros servicios, generar
            estadisticas utiles y ofrecer contenido personalizado basado en tus
            habitos de navegacion.
          </p>
          <p>
            El objetivo de esta politica es explicarte que son las cookies, como
            las usamos y cuales son tus opciones para gestionarlas.
          </p>
        </div>

        <AcordeonLegal titulo="Informacion sobre Cookies" items={puntos} />
      </Contenedor>
    </section>
  );
}
