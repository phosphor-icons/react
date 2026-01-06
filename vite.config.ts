import { resolve } from "path";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import pkg from "./package.json";

export default defineConfig({
  plugins: [react({ jsxRuntime: "classic" }), dts()],
  build: {
    target: "ES2018",
    lib: {
      name: "Phosphor",
      entry: resolve(__dirname, "src/index.ts"),
      fileName: (format, name) =>
        format === "cjs" ? `${name}.${format}` : `${name}.${format}.js`,
    },
    rollupOptions: {
      external: Object.keys(pkg.peerDependencies),
      input: "./src/index.ts",
      output: [
        {
          format: "es",
          preserveModules: true,
          preserveModulesRoot: "src",
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
          },
        },
        {
          format: "cjs",
          name: "Phosphor",
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
          },
        },
        {
          format: "umd",
          name: "Phosphor",
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
          },
        },
      ],
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
});
