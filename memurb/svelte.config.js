import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    kit: {
        prerender: {
            default: true,
        },
        adapter: adapter({ trailingSlash: 'always' }),

    },
    extensions: ['.svelte', '.md'],
    preprocess: [
        preprocess(),
        mdsvex({
            extensions: ['.md']
        })
    ],
};

export default config;