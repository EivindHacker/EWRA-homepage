import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

const dev = process.argv.includes('dev');
// Hvis du **ikke** bruker eget domene og publiserer til repoet ditt (project pages),
// sett base til '/<repo-navn>' i prod. Med eget domene, la base være ''.
const base = dev ? '' : '/<repo-navn>'; // fjern/erstatt hvis du bruker custom domain

export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html', // GitHub Pages bruker 404.html som SPA-fallback
      precompress: true
    }),
    paths: { base }
  }
};

export default config;
