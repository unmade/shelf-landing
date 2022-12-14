import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null,
      precompress: false,
      strict: true
    }),
    csp: {
      mode: 'hash',
      directives: { 'script-src': ['self'] }
    }
  },
  preprocess: [
    preprocess({
      postcss: true
    })
  ]
};

export default config;
