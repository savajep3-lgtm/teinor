import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina clases de Tailwind resolviendo conflictos.
 * Uso: cn("px-2", condicion && "px-4") → "px-4"
 */
export function cn(...entradas: ClassValue[]): string {
  return twMerge(clsx(entradas));
}

/**
 * Formatea un número con separadores de miles en español.
 */
export function formatearNumero(valor: number): string {
  return new Intl.NumberFormat("es-ES").format(valor);
}
