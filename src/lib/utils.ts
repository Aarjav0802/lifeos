import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind CSS classes safely.
 *
 * Combines two utilities:
 * - clsx: builds a class string from conditionals, arrays, and objects
 * - tailwind-merge: resolves Tailwind-specific conflicts (e.g. text-sm + text-lg → text-lg)
 *
 * Usage:
 *   cn("px-4 py-2", isActive && "bg-blue-500")
 *   cn("text-sm", className)  ← safe to accept external className props
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}