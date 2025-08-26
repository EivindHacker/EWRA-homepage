// svelte.config.js
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

// Bruk dette bare hvis du *ikke* har eget domene og publiserer til
// https://USERNAME.github.io/EWRA-homepage
const dev = process.argv.includes('dev');
const base = dev ? '' : '/EWRA-homepage';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    // Hvis du har *eget domene*, fjern linjen under:
    paths: { base },

    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html', // GitHub Pages bruker 404.html som SPA-fallback
      precompress: true,
      // Viktig: la oss tillate dynamiske ruter (SPA) på statisk hosting
      strict: false
    })
  }
};

export default config;
