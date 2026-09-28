import { useEffect, useState } from "react";

/**
 * El origen de la visita: la etiqueta `?src=` del enlace por el que se llegó.
 *
 * Los enlaces que se reparten fuera —un reel, la bio— llevan
 * `https://foculead.com/?src=reel`. Con esa etiqueta la landing hace dos cosas:
 *
 *  1. cuenta la visita en `app.foculead.com/api/visitas` (un +1 por día y
 *     etiqueta, sin cookies ni nada de la persona);
 *  2. pasa la etiqueta a los botones que llevan al registro, que la guarda con
 *     la cuenta. Así se puede decir cuántas altas trajo cada reel.
 *
 * La forma de la etiqueta tiene que ser la MISMA que acepta el dashboard
 * (`lib/origen.ts` de aquel repo): si aquí se aceptara algo que allí no, la
 * visita se contaría y el alta no.
 */

const APP = "https://app.foculead.com";
export const LOGIN_URL = `${APP}/login`;

export function normalizarOrigen(valor: unknown): string | null {
  if (typeof valor !== "string") return null;
  const v = valor.trim().toLowerCase();
  if (!v || v.length > 40) return null;
  return /^[a-z0-9][a-z0-9_-]*$/.test(v) ? v : null;
}

/**
 * La etiqueta de la URL actual. Se lee tras montar y no durante el render: la
 * página se sirve renderizada en el servidor, que no conoce la URL del
 * navegador, y leerla en el render daría HTML distinto en los dos lados.
 */
export function useOrigen(): string | null {
  const [origen, setOrigen] = useState<string | null>(null);
  useEffect(() => {
    setOrigen(normalizarOrigen(new URLSearchParams(window.location.search).get("src")));
  }, []);
  return origen;
}

/** Añade `src` a un enlace de la app si la visita trae etiqueta. */
export function conOrigen(url: string, origen: string | null): string {
  if (!origen) return url;
  return `${url}${url.includes("?") ? "&" : "?"}src=${encodeURIComponent(origen)}`;
}

export function signupUrl(plan: string, origen: string | null): string {
  const next = encodeURIComponent(`/?checkout=${plan}`);
  return conOrigen(`${LOGIN_URL}?mode=signup&next=${next}`, origen);
}

/**
 * Cuenta la visita. `sendBeacon` con cuerpo `text/plain` es una petición CORS
 * simple: sale sin preflight, no bloquea la carga y sobrevive a que la persona
 * se vaya enseguida. Si falla, no pasa nada: es un contador.
 *
 * Solo desde el dominio de verdad: en la vista previa de Lovable o en local la
 * app lo rechazaría igualmente por el `Origin`, así que ni se intenta.
 */
export function contarVisita(): void {
  try {
    if (!/(^|\.)foculead\.com$/.test(window.location.hostname)) return;
    // Se manda tal cual y decide la app: una etiqueta mal escrita no se cuenta,
    // y normalizarla aquí a «sin etiqueta» la mezclaría con el tráfico normal.
    const src = new URLSearchParams(window.location.search).get("src");
    const cuerpo = new Blob([JSON.stringify(src !== null ? { src } : {})], { type: "text/plain" });
    navigator.sendBeacon?.(`${APP}/api/visitas`, cuerpo);
  } catch {
    // Un contador no puede romper la landing.
  }
}
