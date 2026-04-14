import { Inter, Space_Grotesk } from "next/font/google";

/**
 * Fuente principal para texto corrido y UI.
 * Inter — moderna, neutra y legible.
 */
export const fuenteSans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--fuente-sans",
});

/**
 * Fuente para titulares y elementos de display.
 * Space Grotesk — geométrica, con personalidad tech.
 */
export const fuenteDisplay = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--fuente-display",
});
