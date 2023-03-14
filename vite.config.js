import { sveltekit } from '@sveltejs/kit/vite';
import basicSsl from '@vitejs/plugin-basic-ssl';

/** @type {import('vite').UserConfig} */
const config = {
	base: '',
	plugins: [sveltekit(), basicSsl()],
	server: {
		port: 5173,
		https: true,
	},
};

export default config;
