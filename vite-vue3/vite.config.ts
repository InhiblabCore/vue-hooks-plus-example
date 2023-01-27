import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import { VueHooksPlusResolver } from '@vue-hooks-plus/resolvers'

export const AutoImportDeps = () =>
	AutoImport({
		imports: ['vue'],
		include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
		dts: 'src/auto-imports.d.ts',
		resolvers: [VueHooksPlusResolver()],
	})

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), AutoImportDeps()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
})
