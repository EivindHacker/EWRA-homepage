// svelte.config.js
import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';

export default {
  preprocess: sveltePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html', // SPA-fallback
      precompress: true,
      strict: false         // ok med dynamiske ruter (spa)
    })
  }
};
