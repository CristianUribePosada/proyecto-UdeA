import type { Handle } from '@sveltejs/kit/hooks';

/**
 * NOTA DE RENDIMIENTO (CLS):
 *
 * Anteriormente este hook reescribía los <link rel="stylesheet"> que SvelteKit
 * inyecta en el <head> para cargarlos de forma asíncrona (preload + onload).
 * Ese patrón provocaba un CLS de ~0.708: el primer pantallazo se pintaba con
 * el CSS crítico inline de src/app.html, pero las utilidades de Tailwind y los
 * estilos de componentes (footer, secciones, .main-content, etc.) llegaban
 * DESPUÉS del primer pintado, refluyendo todo el documento y desplazando el
 * contenido visible.
 *
 * Ahora el CSS se sirve de forma bloqueante (comportamiento por defecto de
 * SvelteKit): el navegador no pinta hasta tener el CSS completo, por lo que
 * no hay reflujo tardío ni cambios de diseño acumulados. El CSS crítico
 * inline de src/app.html se mantiene como optimización de primer pintado y
 * debe sincronizarse con src/routes/layout.css e inicio.css.
 */
export const handle: Handle = async ({ event, resolve }) => {
	return resolve(event);
};
