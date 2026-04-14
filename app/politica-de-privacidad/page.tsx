import type { Metadata } from "next";
import Contenedor from "@/components/ui/Contenedor";
import AcordeonLegal from "@/components/ui/AcordeonLegal";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Conoce cómo recopilamos, utilizamos y protegemos tus datos personales en Teinor.",
};

const puntos = [
  {
    pregunta: "¿Qué cubre esta política?",
    respuesta:
      "Esta política explica cómo recopilamos, usamos, almacenamos y protegemos tu información personal cuando interactúas con nuestro sitio y servicios.",
  },
  {
    pregunta: "¿Qué datos personales recolectamos?",
    respuesta:
      "Podemos recolectar datos de contacto, información de navegación y datos que nos compartes de forma voluntaria mediante formularios o solicitudes de atención.",
  },
  {
    pregunta: "¿Para qué usamos tus datos?",
    respuesta:
      "Usamos tus datos para responder consultas, mejorar nuestros servicios, ofrecerte una experiencia personalizada y enviarte información relevante cuando corresponde.",
  },
  {
    pregunta: "¿Con quién compartimos tus datos?",
    respuesta:
      "Solo compartimos información con proveedores tecnológicos o aliados necesarios para operar el servicio, siempre bajo medidas de confidencialidad y seguridad.",
  },
  {
    pregunta: "¿Durante cuánto tiempo conservamos datos?",
    respuesta:
      "Conservamos tus datos únicamente durante el tiempo necesario para cumplir finalidades legítimas, obligaciones legales o requerimientos de seguridad.",
  },
  {
    pregunta: "¿Qué medidas de seguridad aplicamos?",
    respuesta:
      "Aplicamos controles técnicos y organizativos para proteger la información frente a accesos no autorizados, alteración, pérdida o divulgación indebida.",
  },
  {
    pregunta: "¿Cuáles son tus derechos?",
    respuesta:
      "Puedes solicitar acceso, rectificación, actualización o eliminación de tus datos personales, además de oponerte a ciertos usos según la normativa vigente.",
  },
  {
    pregunta: "¿Qué uso damos a las cookies?",
    respuesta:
      "Utilizamos cookies para mejorar rendimiento, medir uso del sitio y personalizar contenido. Puedes gestionarlas desde la configuración de tu navegador.",
  },
];

export default function PaginaPoliticaPrivacidad() {
  return (
    <section className="py-28 sm:py-32">
      <Contenedor className="max-w-4xl">
        <h1 className="font-display text-4xl font-bold text-tinta sm:text-5xl">
          POLITICA DE PRIVACIDAD
        </h1>

        <div className="mt-8 space-y-5 text-sm leading-relaxed text-tinta-suave sm:text-base">
          <p>
            En Consigue Ventas trabajamos constantemente para brindarte una
            mejor experiencia cada vez que utilizas nuestros productos,
            servicios, sitio web o aplicaciones moviles. Proteger los datos
            personales que nos confias es una prioridad fundamental para
            nosotros.
          </p>
          <p>
            Por ello, queremos que sepas como recopilamos, utilizamos y
            protegemos tu informacion personal para ofrecerte una experiencia
            mas segura, eficiente y personalizada.
          </p>
          <p>
            El responsable del tratamiento de tus datos personales es Consigue
            Ventas, con domicilio en Cal. Micaela Bastidas Nro. 636,
            identificado con el numero de RUC 20606936606.
          </p>
          <p>
            Te invitamos a revisar detalladamente nuestra Politica de
            Privacidad. Si tienes dudas o deseas ejercer tus derechos
            relacionados con tus datos personales, puedes comunicarte con
            nosotros al correo electronico: atencion@consigueventas.com.
          </p>
        </div>

        <AcordeonLegal titulo="Guia de Privacidad y Uso de Datos" items={puntos} />
      </Contenedor>
    </section>
  );
}
