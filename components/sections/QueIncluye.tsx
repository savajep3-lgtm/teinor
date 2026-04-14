"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Contenedor from "@/components/ui/Contenedor";
import { cn } from "@/lib/utilidades";

interface Beneficio {
  titulo: string;
  descripcion: string;
  imagen: string;
}

const beneficios: Beneficio[] = [
  {
    titulo: "Asesoría gratuita inicial",
    descripcion: "Definimos juntos tus objetivos antes de empezar.",
    imagen:
      "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=800&q=80",
  },
  {
    titulo: "Diseño exclusivo en Figma",
    descripcion: "Web única y personalizada según tu marca.",
    imagen:
      "https://images.unsplash.com/photo-1561070791-2526d30994b8?auto=format&fit=crop&w=800&q=80",
  },
  {
    titulo: "Desarrollo profesional",
    descripcion: "Sitio funcional, rápido y fácil de usar.",
    imagen:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
  },
  {
    titulo: "Video de capacitación",
    descripcion: "Aprende a gestionar tu web sin complicaciones.",
    imagen:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80",
  },
  {
    titulo: "3 meses de soporte gratis",
    descripcion: "Te ayudamos con dudas o ajustes técnicos.",
    imagen:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80",
  },
  {
    titulo: "Hosting + dominio incluidos",
    descripcion: "Todo incluido para que tengas el control total.",
    imagen:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
  },
];

interface PropiedadesQueIncluye {
  fondoAlterno?: boolean;
}

/**
 * Sección "¿Qué incluye trabajar con nosotros?".
 *
 * Rejilla de 6 tarjetas con imagen ilustrativa real (no iconos).
 * Cada tarjeta tiene la imagen arriba y debajo el título y la descripción.
 */
export default function QueIncluye({
  fondoAlterno = false,
}: PropiedadesQueIncluye) {
  return (
    <section
      className={cn(
        "relative py-14 sm:py-16",
        fondoAlterno && "bg-superficie-suave",
      )}
    >
      <Contenedor>
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-tinta leading-[1.05] tracking-tight equilibrio-texto">
            ¿Qué incluye trabajar{" "}
            <span className="texto-gradiente">con nosotros?</span>
          </h2>
          <p className="mt-5 text-base text-tinta-tenue leading-relaxed pretty-texto">
            Nos enfocamos en un proceso pensado para lograr resultados.
          </p>
        </div>

        {/* Rejilla de beneficios */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {beneficios.map((beneficio, indice) => (
            <motion.article
              key={beneficio.titulo}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: indice * 0.07,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="group rounded-2xl bg-white border border-superficie-borde shadow-tarjeta hover:shadow-tarjeta-hover hover:-translate-y-1 hover:border-marca-purpura/30 transition-all duration-500 overflow-hidden"
            >
              {/* Imagen */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={beneficio.imagen}
                  alt={beneficio.titulo}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Tinte sutil de marca */}
                <div className="absolute inset-0 bg-gradient-to-t from-marca-purpura/15 to-transparent opacity-60" />
              </div>

              {/* Texto */}
              <div className="p-6">
                <h3 className="font-display font-bold text-lg text-tinta group-hover:text-marca-purpura transition-colors">
                  {beneficio.titulo}
                </h3>
                <p className="mt-2 text-sm text-tinta-tenue leading-relaxed">
                  {beneficio.descripcion}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </Contenedor>
    </section>
  );
}
