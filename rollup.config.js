// rollup.config.js

import svelte from 'rollup-plugin-svelte-hot';
import resolve from '@rollup/plugin-node-resolve';
import serve from 'rollup-plugin-serve';
import reload from 'rollup-plugin-livereload';

export default {
	input: 'main.js',
	output: {
		file: 'public/build/bundle.js',
		format: 'iife'
	},
	plugins: [resolve(), svelte({ hot: true }), serve('public'), reload()]
};
