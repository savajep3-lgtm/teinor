import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Monitor,
  SearchCheck,
  Cpu,
  Gauge,
  Target,
  BarChart3,
} from "lucide-react";
import Contenedor from "@/components/ui/Contenedor";
import AcordeonFaq from "@/components/ui/AcordeonFaq";
import { proyectos, type Proyecto } from "@/data/proyectos";

interface PropiedadesPaginaProyecto {
  params: Promise<{ slug: string }>;
}

const tecnologiasPorCategoria: Record<Proyecto["categoria"], string[]> = {
  Onepage: ["Next.js", "Tailwind", "SEO On-Page"],
  Multipage: ["Next.js", "TypeScript", "CMS"],
  Portafolio: ["React", "Animaciones", "Optimización web"],
  Ecommerce: ["Catálogo", "Checkout", "Analítica"],
  Embudo: ["Landing", "Automatización", "CRM"],
  "Aplicación": ["Arquitectura SaaS", "Auth", "Dashboard"],
  Branding: ["Dirección visual", "Sistema de marca", "UI Kit"],
};

const resultadosPorCategoria: Record<Proyecto["categoria"], string[]> = {
  Onepage: ["Mejor claridad de oferta", "Más clics en CTA", "Carga veloz en móvil"],
  Multipage: ["Navegación más clara", "Mayor tiempo en sitio", "Leads más calificados"],
  Portafolio: ["Mayor percepción premium", "Mejor presentación de casos", "Más consultas directas"],
  Ecommerce: ["Más productos vistos", "Menos abandono", "Mejor experiencia de compra"],
  Embudo: ["Más registros", "Seguimiento automatizado", "Mejor conversión final"],
  "Aplicación": ["Onboarding más simple", "Uso constante", "Mejor retención"],
  Branding: ["Identidad coherente", "Diferenciación clara", "Comunicación sólida"],
};

const preguntasProyecto = [
  {
    pregunta: "¿Cuánto tarda un proyecto así?",
    respuesta:
      "Dependiendo del alcance, normalmente entre 2 y 6 semanas. Definimos cronograma, hitos y entregables desde el inicio.",
  },
  {
    pregunta: "¿Puedo solicitar cambios después?",
    respuesta:
      "Sí. Incluimos rondas de ajuste para afinar diseño, contenido y experiencia sin perder el enfoque de resultados.",
  },
  {
    pregunta: "¿También incluye versión móvil?",
    respuesta:
      "Siempre. Diseñamos y optimizamos cada proyecto para móviles, tablets y escritorio con rendimiento alto.",
  },
];

const iconoTecnologia = [Monitor, SearchCheck, Cpu];
const iconoResultados = [Gauge, Target, BarChart3];

export async function generateStaticParams() {
  return proyectos.map((proyecto) => ({ slug: proyecto.id }));
}

export async function generateMetadata({
  params,
}: PropiedadesPaginaProyecto): Promise<Metadata> {
  const { slug } = await params;
  const proyecto = proyectos.find((item) => item.id === slug);

  if (!proyecto) return { title: "Proyecto no encontrado" };

  return {
    title: `${proyecto.nombre} · Portafolio`,
    description: proyecto.extracto,
  };
}

export default async function PaginaDetalleProyecto({
  params,
}: PropiedadesPaginaProyecto) {
  const { slug } = await params;
  const proyecto = proyectos.find((item) => item.id === slug);

  if (!proyecto) notFound();

  const relacionados = proyectos
    .filter((item) => item.id !== proyecto.id && item.categoria === proyecto.categoria)
    .slice(0, 3);

  return (
    <article className="pb-16 pt-28 sm:pt-32">
      <Contenedor>
        <Link
          href="/portafolio"
          className="inline-flex items-center gap-2 text-sm font-semibold text-tinta-suave transition-colors hover:text-marca-purpura"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver al portafolio
        </Link>

        <div className="mt-6 overflow-hidden rounded-3xl border border-superficie-borde bg-white shadow-tarjeta">
          <div className="relative aspect-[18/7] min-h-[260px]">
            <Image
              src={proyecto.imagen}
              alt={proyecto.nombre}
              fill
              quality={70}
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-oscuro/85 via-oscuro/45 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10 text-white">
              <Image
                src="/branding/logo-teinor.png"
                alt="Teinor"
                width={42}
                height={30}
                className="mb-3 h-8 w-auto"
              />
              <span className="inline-flex rounded-full bg-lime-300 px-3 py-1 text-xs font-bold uppercase tracking-wider text-oscuro">
                {proyecto.categoria}
              </span>
              <h1 className="mt-4 max-w-4xl font-display text-3xl font-bold leading-tight sm:text-5xl">
                {proyecto.nombre}
              </h1>
              <p className="mt-4 max-w-2xl text-sm text-white/85 sm:text-base">
                {proyecto.extracto}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            {
              titulo: "Diseño orientado a conversión",
              detalle: "Jerarquía visual enfocada en CTA y claridad comercial.",
              icono: Target,
            },
            {
              titulo: "Rendimiento móvil real",
              detalle: "Optimización de carga e interacción para cualquier pantalla.",
              icono: Gauge,
            },
            {
              titulo: "Estructura escalable",
              detalle: "Arquitectura pensada para crecer sin rehacer el sitio.",
              icono: Cpu,
            },
          ].map((item) => {
            const Icono = item.icono;
            return (
              <div
                key={item.titulo}
                className="rounded-2xl border border-superficie-borde bg-white p-5 shadow-suave"
              >
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-marca-purpura/10 text-marca-purpura">
                  <Icono className="h-4 w-4" />
                </div>
                <p className="mt-3 text-sm font-semibold text-tinta">{item.titulo}</p>
                <p className="mt-1 text-xs leading-relaxed text-tinta-tenue">{item.detalle}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <div className="rounded-2xl border border-superficie-borde bg-superficie-suave p-5 lg:sticky lg:top-28">
              <h2 className="text-sm font-bold uppercase tracking-wider text-tinta">Ficha rápida</h2>
              <ul className="mt-4 space-y-2 text-sm text-tinta-suave">
                <li>
                  <span className="font-semibold text-tinta">Proyecto:</span> {proyecto.nombre}
                </li>
                <li>
                  <span className="font-semibold text-tinta">Categoría:</span> {proyecto.categoria}
                </li>
                <li>
                  <span className="font-semibold text-tinta">Estado:</span> Completado
                </li>
              </ul>
            </div>
          </aside>

          <div className="lg:col-span-9 space-y-10">
            <section>
              <h2 className="font-display text-3xl font-bold text-tinta">Resumen del proyecto</h2>
              <p className="mt-4 text-base leading-relaxed text-tinta-suave">
                {proyecto.extracto} Diseñamos este caso para equilibrar impacto visual,
                claridad comercial y una navegación fluida que guíe al usuario hacia
                la acción principal.
              </p>
            </section>

            <section className="grid gap-5 sm:grid-cols-3">
              <div className="rounded-2xl border border-superficie-borde bg-white p-6 sm:col-span-1">
                <h3 className="font-display text-xl font-bold text-tinta">Antes</h3>
                <p className="mt-3 text-sm leading-relaxed text-tinta-tenue">
                  El proyecto tenía navegación confusa, mensaje comercial débil y
                  baja claridad sobre la propuesta de valor.
                </p>
              </div>
              <div className="rounded-2xl border border-superficie-borde bg-white p-6 sm:col-span-1">
                <h3 className="font-display text-xl font-bold text-tinta">Qué hicimos</h3>
                <p className="mt-3 text-sm leading-relaxed text-tinta-tenue">
                  Rediseñamos arquitectura, estructura de contenido y diseño visual
                  para conectar mejor con el usuario ideal.
                </p>
              </div>
              <div className="rounded-2xl border border-superficie-borde bg-white p-6 sm:col-span-1">
                <h3 className="font-display text-xl font-bold text-tinta">Resultado</h3>
                <p className="mt-3 text-sm leading-relaxed text-tinta-tenue">
                  Mayor confianza de marca, recorrido más claro y mejor desempeño en
                  captación de contactos.
                </p>
              </div>
            </section>

            <section className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-superficie-borde bg-white p-6">
                <h3 className="font-display text-2xl font-bold text-tinta">Tecnologías</h3>
                <ul className="mt-4 grid gap-3 text-sm text-tinta-suave sm:grid-cols-2">
                  {tecnologiasPorCategoria[proyecto.categoria].map((item, indice) => {
                    const Icono = iconoTecnologia[indice % iconoTecnologia.length]!;
                    return (
                      <li key={item} className="flex items-center gap-2 rounded-xl border border-superficie-borde bg-superficie p-3">
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-marca-purpura/10 text-marca-purpura">
                          <Icono className="h-3.5 w-3.5" />
                        </span>
                        <span>{item}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="rounded-2xl border border-superficie-borde bg-white p-6">
                <h3 className="font-display text-2xl font-bold text-tinta">Resultados</h3>
                <ul className="mt-4 grid gap-3 text-sm text-tinta-suave sm:grid-cols-2">
                  {resultadosPorCategoria[proyecto.categoria].map((item, indice) => {
                    const Icono = iconoResultados[indice % iconoResultados.length]!;
                    return (
                      <li key={item} className="flex items-center gap-2 rounded-xl border border-superficie-borde bg-superficie p-3">
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-marca-cian/15 text-marca-cian">
                          <Icono className="h-3.5 w-3.5" />
                        </span>
                        <span>{item}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-display text-3xl font-bold text-tinta">
                Preguntas frecuentes del proyecto
              </h2>
              <div className="mt-6">
                <AcordeonFaq items={preguntasProyecto} />
              </div>
            </section>
          </div>
        </div>

        {relacionados.length > 0 && (
          <section className="mt-14">
            <h2 className="font-display text-3xl font-bold text-tinta">Proyectos relacionados</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relacionados.map((item) => (
                <Link
                  key={item.id}
                  href={`/portafolio/${item.id}`}
                  className="group overflow-hidden rounded-2xl border border-superficie-borde bg-white shadow-tarjeta transition-all hover:-translate-y-1 hover:shadow-tarjeta-hover"
                >
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={item.imagen}
                      alt={item.nombre}
                      fill
                      sizes="(max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-marca-purpura">
                      {item.categoria}
                    </p>
                    <h3 className="mt-1 font-display text-xl font-bold text-tinta">
                      {item.nombre}
                    </h3>
                    <p className="mt-2 text-sm text-tinta-tenue line-clamp-2">{item.extracto}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-marca-purpura">
                      Ver caso
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </Contenedor>
    </article>
  );
}
