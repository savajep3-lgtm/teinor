"use client";

import Image from "next/image";
import { cn } from "@/lib/utilidades";
import Contenedor from "@/components/ui/Contenedor";

interface Beneficio {
  titulo: string;
  descripcion: string;
  imagen: string;
}

const beneficios: Beneficio[] = [
  {
    titulo: "Calidad premium",
    descripcion:
      "Cada proyecto pasa por estrictos controles de calidad para garantizar resultados impecables.",
    imagen:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
  },
  {
    titulo: "Equipo experto",
    descripcion:
      "Diseñadores y desarrolladores senior con años de experiencia trabajando juntos en tu proyecto.",
    imagen:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
  },
  {
    titulo: "Soluciones creativas",
    descripcion:
      "Pensamos fuera de la caja para crear experiencias únicas que diferencien a tu marca.",
    imagen:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=800&q=80",
  },
  {
    titulo: "Soporte cercano",
    descripcion:
      "Comunicación clara, plazos respetados y acompañamiento real antes, durante y después del proyecto.",
    imagen:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
  },
  {
    titulo: "Garantía total",
    descripcion:
      "Si algo falla, lo arreglamos. Tu satisfacción es nuestra mejor carta de presentación.",
    imagen:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
  },
  {
    titulo: "Velocidad real",
    descripcion:
      "Sitios optimizados que cargan en milisegundos. Mejor experiencia y más conversiones.",
    imagen:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
  },
];

interface PropiedadesPorQueElegirnos {
  fondoAlterno?: boolean;
}

export default function PorQueElegirnos({
  fondoAlterno = false,
}: PropiedadesPorQueElegirnos) {
  const carrusel = [...beneficios, ...beneficios];

  return (
    <section
      className={cn(
        "relative overflow-hidden py-14 sm:py-16",
        fondoAlterno && "bg-superficie-suave",
      )}
    >
      <Contenedor>
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="equilibrio-texto font-display text-4xl font-bold leading-[1.05] tracking-tight text-tinta sm:text-5xl lg:text-6xl">
            Razones para <span className="texto-gradiente">elegirnos</span>
          </h2>
          <p className="pretty-texto mt-5 text-base leading-relaxed text-tinta-tenue">
            No solo entregamos proyectos. Construimos relaciones duraderas con
            clientes que vuelven a confiar en nosotros.
          </p>
        </div>
      </Contenedor>

      <div className="group relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-superficie to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-superficie to-transparent" />

        <div className="flex w-max animate-carrusel-horizontal gap-5 px-4 group-hover:[animation-play-state:paused] sm:px-6">
          {carrusel.map((beneficio, indice) => (
            <article
              key={`${beneficio.titulo}-${indice}`}
              className="w-[280px] overflow-hidden rounded-2xl border border-superficie-borde bg-white shadow-tarjeta transition-all duration-300 hover:-translate-y-1 hover:shadow-tarjeta-hover"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={beneficio.imagen}
                  alt={beneficio.titulo}
                  fill
                  sizes="280px"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-tinta">
                  {beneficio.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-tinta-tenue">
                  {beneficio.descripcion}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
