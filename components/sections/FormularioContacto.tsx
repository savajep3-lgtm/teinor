"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  Building2,
  MessageSquare,
  type LucideIcon,
} from "lucide-react";
import Contenedor from "@/components/ui/Contenedor";
import Boton from "@/components/ui/Boton";
import { cn } from "@/lib/utilidades";
import { servicios } from "@/data/servicios";

interface DatosContacto {
  icono: LucideIcon;
  titulo: string;
  valor: string;
  enlace?: string;
  fondo: string;
  color: string;
}

const datosContacto: DatosContacto[] = [
  {
    icono: Mail,
    titulo: "Email",
    valor: "contacto@teinor.com",
    enlace: "mailto:contacto@teinor.com",
    fondo: "bg-marca-cian/10",
    color: "text-marca-cian",
  },
  {
    icono: Phone,
    titulo: "Teléfono",
    valor: "+00 000 000 000",
    enlace: "tel:+0000000000",
    fondo: "bg-marca-purpura/10",
    color: "text-marca-purpura",
  },
  {
    icono: MapPin,
    titulo: "Ubicación",
    valor: "Trabajamos globalmente",
    fondo: "bg-marca-magenta/10",
    color: "text-marca-magenta",
  },
];

/**
 * Formulario de contacto + datos directos.
 *
 * Layout en dos columnas: a la izquierda los datos de contacto en tarjetas,
 * a la derecha el formulario en una tarjeta blanca con sombra.
 *
 * Nota: el envío del formulario es solo demo (no se conecta a backend).
 * Sustituye `manejarEnvio` por una llamada real a tu API o servicio
 * cuando esté disponible.
 */
export default function FormularioContacto() {
  const [enviando, establecerEnviando] = useState(false);
  const [enviado, establecerEnviado] = useState(false);

  const manejarEnvio = async (evento: FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    establecerEnviando(true);
    // TODO: integrar con backend / servicio de email
    await new Promise((resolver) => setTimeout(resolver, 1200));
    establecerEnviando(false);
    establecerEnviado(true);
  };

  return (
    <section className="relative py-14 sm:py-16">
      <Contenedor>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* ─── Columna izquierda — datos de contacto ─────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-tinta">
              Estamos a un{" "}
              <span className="texto-gradiente">mensaje de distancia</span>
            </h2>
            <p className="text-base text-tinta-tenue leading-relaxed pretty-texto">
              Cuéntanos sobre tu proyecto. Te respondemos en menos de 24 horas
              con una propuesta clara, honesta y sin compromiso.
            </p>

            <div className="mt-10 space-y-4">
              {datosContacto.map((dato, indice) => {
                const Icono = dato.icono;
                const Etiqueta = dato.enlace ? "a" : "div";

                return (
                  <motion.div
                    key={dato.titulo}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + indice * 0.1 }}
                  >
                    <Etiqueta
                      {...(dato.enlace ? { href: dato.enlace } : {})}
                      className={cn(
                        "flex items-center gap-4 p-5 rounded-2xl bg-white border border-superficie-borde shadow-tarjeta transition-all duration-300",
                        dato.enlace &&
                          "hover:shadow-tarjeta-hover hover:-translate-y-0.5 hover:border-marca-purpura/30",
                      )}
                    >
                      <div
                        className={cn(
                          "flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center",
                          dato.fondo,
                        )}
                      >
                        <Icono className={cn("h-5 w-5", dato.color)} />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold uppercase tracking-wider text-tinta-tenue">
                          {dato.titulo}
                        </div>
                        <div className="text-base font-semibold text-tinta truncate">
                          {dato.valor}
                        </div>
                      </div>
                    </Etiqueta>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* ─── Columna derecha — formulario ──────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="rounded-2xl bg-white border border-superficie-borde shadow-tarjeta p-8 sm:p-10">
              {enviado ? (
                <MensajeExito />
              ) : (
                <form onSubmit={manejarEnvio} className="space-y-5">
                  <h3 className="font-display font-bold text-2xl text-tinta mb-2">
                    Cuéntanos sobre tu proyecto
                  </h3>
                  <p className="text-sm text-tinta-tenue mb-6">
                    Completa el formulario y nos pondremos en contacto contigo.
                  </p>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <CampoTexto
                      etiqueta="Nombre completo"
                      nombre="nombre"
                      placeholder="María García"
                      icono={User}
                      requerido
                    />
                    <CampoTexto
                      etiqueta="Empresa"
                      nombre="empresa"
                      placeholder="Tu empresa"
                      icono={Building2}
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <CampoTexto
                      etiqueta="Email"
                      nombre="email"
                      tipo="email"
                      placeholder="tu@email.com"
                      icono={Mail}
                      requerido
                    />
                    <CampoTexto
                      etiqueta="Teléfono"
                      nombre="telefono"
                      tipo="tel"
                      placeholder="+00 000 000 000"
                      icono={Phone}
                    />
                  </div>

                  <CampoSelect
                    etiqueta="¿Qué necesitas?"
                    nombre="servicio"
                    opciones={servicios.map((servicio) => servicio.titulo)}
                  />

                  <CampoTextarea
                    etiqueta="Cuéntanos más"
                    nombre="mensaje"
                    placeholder="Describe brevemente tu proyecto, objetivos y plazos..."
                    icono={MessageSquare}
                    requerido
                  />

                  <Boton
                    type="submit"
                    variante="primario"
                    tamano="lg"
                    iconoDerecha={<Send className="h-4 w-4" />}
                    className="w-full"
                  >
                    {enviando ? "Enviando..." : "Enviar mensaje"}
                  </Boton>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </Contenedor>
    </section>
  );
}

/* ─── Subcomponentes del formulario ─────────────────────────────── */

interface PropiedadesCampoTexto {
  etiqueta: string;
  nombre: string;
  tipo?: string;
  placeholder?: string;
  icono?: LucideIcon;
  requerido?: boolean;
}

function CampoTexto({
  etiqueta,
  nombre,
  tipo = "text",
  placeholder,
  icono: Icono,
  requerido,
}: PropiedadesCampoTexto) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-tinta-suave block mb-1.5">
        {etiqueta} {requerido && <span className="text-marca-magenta">*</span>}
      </span>
      <div className="relative">
        {Icono && (
          <Icono className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-tinta-claro pointer-events-none" />
        )}
        <input
          type={tipo}
          name={nombre}
          required={requerido}
          placeholder={placeholder}
          className={cn(
            "w-full rounded-xl border border-superficie-borde bg-superficie-suave px-4 py-3 text-sm text-tinta placeholder:text-tinta-claro",
            "focus:outline-none focus:border-marca-purpura focus:bg-white focus:ring-4 focus:ring-marca-purpura/10",
            "transition-all duration-200",
            Icono && "pl-10",
          )}
        />
      </div>
    </label>
  );
}

interface PropiedadesCampoTextarea {
  etiqueta: string;
  nombre: string;
  placeholder?: string;
  icono?: LucideIcon;
  requerido?: boolean;
}

function CampoTextarea({
  etiqueta,
  nombre,
  placeholder,
  requerido,
}: PropiedadesCampoTextarea) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-tinta-suave block mb-1.5">
        {etiqueta} {requerido && <span className="text-marca-magenta">*</span>}
      </span>
      <textarea
        name={nombre}
        required={requerido}
        rows={5}
        placeholder={placeholder}
        className={cn(
          "w-full rounded-xl border border-superficie-borde bg-superficie-suave px-4 py-3 text-sm text-tinta placeholder:text-tinta-claro resize-none",
          "focus:outline-none focus:border-marca-purpura focus:bg-white focus:ring-4 focus:ring-marca-purpura/10",
          "transition-all duration-200",
        )}
      />
    </label>
  );
}

interface PropiedadesCampoSelect {
  etiqueta: string;
  nombre: string;
  opciones: string[];
}

function CampoSelect({ etiqueta, nombre, opciones }: PropiedadesCampoSelect) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-tinta-suave block mb-1.5">
        {etiqueta}
      </span>
      <select
        name={nombre}
        className={cn(
          "w-full rounded-xl border border-superficie-borde bg-superficie-suave px-4 py-3 text-sm text-tinta",
          "focus:outline-none focus:border-marca-purpura focus:bg-white focus:ring-4 focus:ring-marca-purpura/10",
          "transition-all duration-200",
        )}
      >
        <option value="">Selecciona una opción</option>
        {opciones.map((opcion) => (
          <option key={opcion} value={opcion}>
            {opcion}
          </option>
        ))}
      </select>
    </label>
  );
}

/**
 * Mensaje de éxito que reemplaza al formulario tras enviarlo.
 */
function MensajeExito() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="text-center py-10"
    >
      <div className="inline-flex w-16 h-16 rounded-full bg-marca-purpura/10 items-center justify-center mb-5">
        <Send className="h-7 w-7 text-marca-purpura" />
      </div>
      <h3 className="font-display font-bold text-2xl text-tinta mb-2">
        ¡Mensaje enviado!
      </h3>
      <p className="text-sm text-tinta-tenue max-w-sm mx-auto">
        Hemos recibido tu solicitud. Te responderemos en menos de 24 horas con
        una propuesta personalizada.
      </p>
    </motion.div>
  );
}
