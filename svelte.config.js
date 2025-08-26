// svelte.config.js
import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';

const dev = process.argv.includes('dev');
// Bruk KUN base på GitHub "project pages": https://USERNAME.github.io/EWRA-homepage
const base = dev ? '' : '/EWRA-homepage';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess(),
	kit: {
		// slett denne linjen hvis du bruker eget domene
		paths: { base },

		adapter: adapter({
			pages: 'build',
			assets: 'build',
			// GitHub Pages trenger 404.html som SPA-fallback
			fallback: '404.html',
			precompress: true,
			// tillat dynamiske ruter (SPA) — de prerendres ikke
			strict: false
		})
	}
};

export default config;
