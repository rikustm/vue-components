import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "rikus-vue-components",
      fileName: (format) => `rikus-vue-components.${format}.js`,
    },
    rollupOptions: {
      external: ["vue", "xlsx"],
      output: {
        globals: {
          vue: "Vue",
          xlsx: "XLSX",
        },
      },
    },
  },
});
