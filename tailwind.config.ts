import type { Config } from "tailwindcss";

/**
 * Configuración de Tailwind CSS para Teinor.
 *
 * Filosofía visual:
 *  - Light mode como base general (estilo agencia, fresco y profesional).
 *  - Bloques oscuros como contraste (hero, footer, CTA final).
 *  - Color primario sólido (púrpura) para botones y CTAs.
 *  - El degradado de marca (cian → púrpura → magenta) se reserva para
 *    el logotipo, palabras destacadas y detalles decorativos puntuales.
 */
const configuracionTailwind: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ─── Marca Teinor ─────────────────────────────────────────────
        marca: {
          cian: "#06B6D4",
          azul: "#3B82F6",
          purpura: "#7C3AED", // PRIMARIO sólido para botones
          "purpura-oscuro": "#6D28D9",
          "purpura-claro": "#A78BFA",
          violeta: "#8B5CF6",
          magenta: "#EC4899",
          rosa: "#F472B6",
        },

        // ─── Superficies claras (modo claro) ──────────────────────────
        superficie: {
          DEFAULT: "#FFFFFF",
          suave: "#F8F9FB", // alterna secciones para crear ritmo
          alternativa: "#F1F5F9",
          tarjeta: "#FFFFFF",
          borde: "#E5E7EB",
          "borde-suave": "#F1F5F9",
        },

        // ─── Superficies oscuras (bloques de contraste) ───────────────
        oscuro: {
          DEFAULT: "#0A0A14",
          suave: "#11111C",
          tarjeta: "#15151F",
          borde: "#1F1F2E",
        },

        // ─── Texto sobre fondo claro ──────────────────────────────────
        tinta: {
          DEFAULT: "#0A0A14", // titulares
          suave: "#334155", // texto corrido
          tenue: "#64748B", // descripciones secundarias
          claro: "#94A3B8", // metadatos, capciones
        },
      },

      fontFamily: {
        sans: ["var(--fuente-sans)", "system-ui", "sans-serif"],
        display: ["var(--fuente-display)", "system-ui", "sans-serif"],
      },

      backgroundImage: {
        "gradiente-marca":
          "linear-gradient(135deg, #06B6D4 0%, #7C3AED 50%, #EC4899 100%)",
        "gradiente-marca-suave":
          "linear-gradient(135deg, rgba(6,182,212,0.10) 0%, rgba(124,58,237,0.10) 50%, rgba(236,72,153,0.10) 100%)",
        "gradiente-radial-marca":
          "radial-gradient(ellipse at top, rgba(124,58,237,0.18), transparent 60%)",
        "gradiente-malla-oscuro":
          "radial-gradient(at 20% 20%, rgba(6,182,212,0.18) 0px, transparent 50%), radial-gradient(at 80% 30%, rgba(124,58,237,0.25) 0px, transparent 50%), radial-gradient(at 50% 80%, rgba(236,72,153,0.18) 0px, transparent 50%)",
      },

      boxShadow: {
        // Sombras suaves para light mode
        suave: "0 1px 2px 0 rgba(15, 23, 42, 0.04)",
        tarjeta:
          "0 1px 3px rgba(15, 23, 42, 0.04), 0 4px 16px -4px rgba(15, 23, 42, 0.06)",
        "tarjeta-hover":
          "0 4px 8px rgba(15, 23, 42, 0.04), 0 16px 40px -10px rgba(15, 23, 42, 0.12)",
        elevada:
          "0 8px 24px -6px rgba(15, 23, 42, 0.08), 0 24px 60px -12px rgba(15, 23, 42, 0.12)",
        marca: "0 12px 28px -8px rgba(124, 58, 237, 0.45)",
        "marca-suave": "0 6px 20px -8px rgba(124, 58, 237, 0.30)",
      },

      animation: {
        "flotar-lento": "flotar 8s ease-in-out infinite",
        "girar-lento": "girar 25s linear infinite",
        "aparecer-arriba": "aparecerArriba 0.6s ease-out forwards",
        "gradiente-mover": "gradienteMover 8s ease infinite",
        "carrusel-horizontal": "carruselHorizontal 34s linear infinite",
      },

      keyframes: {
        flotar: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        girar: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        aparecerArriba: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        gradienteMover: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        carruselHorizontal: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default configuracionTailwind;
