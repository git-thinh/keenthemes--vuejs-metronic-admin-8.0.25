import path from 'path'
import {
	defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	root: path.resolve(__dirname, 'src'),
	build: {
		minify: true,
		emptyOutDir: true,
		outDir: '../dist',
	},
	server: {
		port: 80
	}
})