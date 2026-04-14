import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, Clock3, ArrowLeft, ArrowUpRight } from "lucide-react";
import Contenedor from "@/components/ui/Contenedor";
import { articulos } from "@/data/articulos";
import AcordeonFaq from "@/components/ui/AcordeonFaq";

interface PropiedadesPaginaArticulo {
  params: Promise<{ slug: string }>;
}

const seccionesBase = [
  {
    id: "por-que-importa",
    titulo: "Por que este tema importa hoy",
    contenido:
      "En un entorno digital competitivo, las marcas que planifican su estrategia con enfoque en conversiones y experiencia de usuario se diferencian desde el primer contacto.",
  },
  {
    id: "pasos-practicos",
    titulo: "Pasos practicos para aplicarlo",
    contenido:
      "Define un objetivo medible, crea un flujo claro para el usuario y valida cada punto de friccion con datos. Las mejoras pequenas y constantes generan resultados sostenibles.",
  },
  {
    id: "errores-comunes",
    titulo: "Errores comunes que debes evitar",
    contenido:
      "Evita copiar estructuras sin estrategia, saturar la interfaz con mensajes y olvidar la optimizacion movil. Cada decision debe responder a una meta de negocio.",
  },
  {
    id: "conclusion",
    titulo: "Conclusion",
    contenido:
      "Cuando diseno, contenido y tecnologia trabajan en conjunto, el crecimiento es mas predecible. Este enfoque te permite escalar sin perder coherencia de marca.",
  },
];

export async function generateStaticParams() {
  return articulos.map((articulo) => ({ slug: articulo.id }));
}

export async function generateMetadata({
  params,
}: PropiedadesPaginaArticulo): Promise<Metadata> {
  const { slug } = await params;
  const articulo = articulos.find((item) => item.id === slug);

  if (!articulo) {
    return { title: "Articulo no encontrado" };
  }

  return {
    title: articulo.titulo,
    description: articulo.resumen,
  };
}

export default async function PaginaDetalleArticulo({
  params,
}: PropiedadesPaginaArticulo) {
  const { slug } = await params;
  const articulo = articulos.find((item) => item.id === slug);

  if (!articulo) notFound();

  const preguntasArticulo = [
    {
      pregunta: "Como empiezo sin perder tiempo?",
      respuesta:
        "Empieza con un diagnostico simple, define una metrica principal y ejecuta en iteraciones cortas. Asi avanzas con control, sin depender de suposiciones.",
    },
    {
      pregunta: "Cuanto demora ver resultados?",
      respuesta:
        "Depende del punto de partida, pero con una estrategia clara normalmente ves mejoras tempranas entre las primeras 2 y 6 semanas.",
    },
    {
      pregunta: "Necesito equipo tecnico interno?",
      respuesta:
        "No necesariamente. Puedes empezar con apoyo externo y documentar procesos para escalar de forma ordenada cuando el negocio lo requiera.",
    },
  ];

  const relacionados = articulos
    .filter((item) => item.id !== articulo.id)
    .slice(0, 3);

  return (
    <article className="pb-16 pt-28 sm:pt-32">
      <Contenedor>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-tinta-suave transition-colors hover:text-marca-purpura"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver al blog
        </Link>

        <div className="mt-6 overflow-hidden rounded-3xl border border-superficie-borde bg-white shadow-tarjeta">
          <div className="relative aspect-[18/7] min-h-[260px]">
            <Image
              src={articulo.imagen}
              alt={articulo.titulo}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-oscuro/85 via-oscuro/45 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10 text-white">
              <span className="inline-flex rounded-full bg-lime-300 px-3 py-1 text-xs font-bold uppercase tracking-wider text-oscuro">
                {articulo.categoria}
              </span>
              <h1 className="mt-4 max-w-4xl font-display text-3xl font-bold leading-tight sm:text-5xl">
                {articulo.titulo}
              </h1>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-tinta-tenue">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-4 w-4" />
            {articulo.fecha}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock3 className="h-4 w-4" />
            {articulo.tiempoLectura} de lectura
          </span>
          <span>Por {articulo.autor}</span>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <div className="rounded-2xl border border-superficie-borde bg-superficie-suave p-5 lg:sticky lg:top-28">
              <h2 className="text-sm font-bold uppercase tracking-wider text-tinta">Indice</h2>
              <ul className="mt-4 space-y-2">
                {seccionesBase.map((seccion) => (
                  <li key={seccion.id}>
                    <a
                      href={`#${seccion.id}`}
                      className="text-sm text-tinta-suave transition-colors hover:text-marca-purpura"
                    >
                      {seccion.titulo}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="lg:col-span-9 space-y-10">
            <p className="text-lg leading-relaxed text-tinta-suave">
              {articulo.resumen} Este articulo te comparte una guia clara para
              aplicar estas ideas en tu negocio de forma practica, medible y
              enfocada en resultados.
            </p>

            {seccionesBase.map((seccion) => (
              <section key={seccion.id} id={seccion.id} className="scroll-mt-28">
                <h2 className="font-display text-3xl font-bold text-tinta">
                  {seccion.titulo}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-tinta-suave">
                  {seccion.contenido}
                </p>
                <p className="mt-4 text-base leading-relaxed text-tinta-suave">
                  {`En ${articulo.categoria.toLowerCase()}, este enfoque permite tomar mejores decisiones y priorizar recursos donde realmente impactan las conversiones.`}
                </p>
              </section>
            ))}

            <section>
              <h2 className="font-display text-3xl font-bold text-tinta">
                Preguntas frecuentes sobre este tema
              </h2>

              <div className="mt-6">
                <AcordeonFaq items={preguntasArticulo} />
              </div>
            </section>
          </div>
        </div>

        <section className="mt-14">
          <h2 className="font-display text-3xl font-bold text-tinta">
            Sigue explorando en el blog
          </h2>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relacionados.map((item) => (
              <Link
                key={item.id}
                href={`/blog/${item.id}`}
                className="group overflow-hidden rounded-2xl border border-superficie-borde bg-white shadow-tarjeta transition-all hover:-translate-y-1 hover:shadow-tarjeta-hover"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={item.imagen}
                    alt={item.titulo}
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-lime-300 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-oscuro">
                    {item.categoria}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-bold leading-tight text-tinta line-clamp-2">
                    {item.titulo}
                  </h3>
                  <p className="mt-2 text-sm text-tinta-tenue line-clamp-2">
                    {item.resumen}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-marca-purpura">
                    Leer articulo
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </Contenedor>
    </article>
  );
}
