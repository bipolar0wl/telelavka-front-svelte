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
console.log(import.meta.env.BOT_TOKEN)
console.log(import.meta.env.PAYMENTS_PROVIDER_TOKEN)

export default config;
