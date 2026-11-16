import type { Handle } from '@sveltejs/kit/hooks';

/**
 * NOTA DE RENDIMIENTO (FCP / LCP / CLS):
 *
 * El CSS del proyecto se inlinea en el HTML mediante `inlineStyleThreshold`
 * (ver vite.config.ts), por lo que SvelteKit emite los <link rel="stylesheet">
 * externos con `disabled media="(max-width: 0)"` (no bloquean el renderizado) y
 * el CSS real viaja como <style> en el <head>. El primer pintado dispone de
 * todos los estilos, por lo que no hay reflujo tardío (CLS = 0) ni espera a
 * hojas de estilo externas (FCP/LCP rápidos).
 *
 * Este hook se mantiene como pass-through: no hay nada que reescribir porque
 * los <link> externos ya están deshabilitados por SvelteKit.
 */
export const handle: Handle = async ({ event, resolve }) => {
	return resolve(event);
};
