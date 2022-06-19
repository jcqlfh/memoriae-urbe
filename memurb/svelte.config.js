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
        mdsvex({
            extensions: ['.md']
        }),
        preprocess(),
    ],
};

function markdown() {
    return {
        name: 'markdown',
        transform(content, filename) {
            if (filename.endsWith('.md')) {
                content = marked(content)
                return {
                    code: 'export default ${JSON.stringify(content)}',
                }
            } else return null
        },
    }
}
export default config;