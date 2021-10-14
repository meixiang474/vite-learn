import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  // 配置别名，支持在css中引用
  resolve: {
    alias: {
      "@styles": "/src/styles",
    },
  },
});
