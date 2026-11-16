import { enhancedImages } from '@sveltejs/enhanced-img';
import tailwindcss from '@tailwindcss/vite';
import adapter from '@sveltejs/adapter-auto';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	// La config de SvelteKit se pasa al plugin sveltekit() (esta versión no usa
	// svelte.config.js). inlineStyleThreshold inlinea todo el CSS en el HTML,
	// por lo que no hay CSS externo bloqueante ni reflujo tardío (CLS = 0) y el
	// primer pintado es inmediato. El CSS total del proyecto (~23 kB) está muy
	// por debajo del umbral.
	plugins: [
		enhancedImages(),
		tailwindcss(),
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			adapter: adapter(),
			inlineStyleThreshold: 100000
		})
	]
});
