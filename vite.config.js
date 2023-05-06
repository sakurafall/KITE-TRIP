import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// vantUI -> 按需引入插件 (作用: 在打包的过程中检查引入的组件，如果有使用，会自动按需引入该组件)
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // vant UI 按需加载 配置
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // 定义ip地址和端口号 用于手机端预览
  server: {
    host: '192.168.0.2',
    port: 5173
  }
})
