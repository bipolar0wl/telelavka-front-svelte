import { sveltekit } from '@sveltejs/kit/vite';
import basicSsl from '@vitejs/plugin-basic-ssl';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), basicSsl()],
	server: {
		port: 5173,
		https: true,
	},
	base: '/bipolar0wl/'
};

export default config;
