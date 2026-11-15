import type { Handle } from '@sveltejs/kit/hooks';

/**
 * Reescribe los <link rel="stylesheet"> que SvelteKit inyecta en el <head>
 * para que carguen de forma asíncrona (preload + onload), evitando que
 * bloqueen el renderizado inicial del navegador.
 *
 * El CSS crítico above-the-fold (cabecera, navegación y hero) va inline en
 * src/app.html, por lo que el primer pantallazo se pinta sin esperar a la
 * descarga de los archivos externos.
 *
 * Formato inyectado por SvelteKit: <link href="/_app/immutable/assets/x.css" rel="stylesheet">
 */
export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);
	const contentType = response.headers.get('content-type') ?? '';
	if (!contentType.includes('text/html')) return response;

	const html = await response.text();
	const rewritten = html.replace(/<link\b[^>]*>/g, (tag) => {
		if (!/rel="stylesheet"/.test(tag)) return tag;
		const match = tag.match(/href="([^"]*_app\/immutable\/assets\/[^"]+\.css)"/);
		if (!match) return tag;
		const href = match[1];
		return `<link rel="preload" as="style" href="${href}" onload="this.onload=null;this.rel='stylesheet'" /><noscript><link rel="stylesheet" href="${href}" /></noscript>`;
	});

	const headers = new Headers(response.headers);
	// El HTML reescrito tiene distinta longitud; se elimina para que el runtime la recalcule.
	headers.delete('content-length');

	return new Response(rewritten, {
		status: response.status,
		statusText: response.statusText,
		headers
	});
};
