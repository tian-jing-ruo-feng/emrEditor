import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'
// @ts-expect-error: vite-plugin-eslint 没有类型声明文件
import eslintPlugin from 'vite-plugin-eslint'
import { createHtmlPlugin } from 'vite-plugin-html'
import pkg from './package.json'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production'
    ? '/emrEditor/'  // 替换为您的实际仓库名称
    : '/',
  plugins: [
    vue(),
    createHtmlPlugin({
      inject: {
        data: {
          title: pkg.title,
        },
      },
    }),
    eslintPlugin({
      // 指定 ESLint 配置文件路径
      overrideConfigFile: path.resolve(process.cwd(), '.eslintrc.cjs'),
      include: ['src/**/*.ts', 'src/**/*.vue', 'src/*.ts', 'src/*.vue'],
    }),
    // eslintPlugin(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  server: {
    open: true,
  }
})
