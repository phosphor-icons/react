import react from "@vitejs/plugin-react";
import { resolve } from "path";
import preserveDirectives from "rollup-preserve-directives";
import dts from "vite-plugin-dts";
import { defineConfig } from "vitest/config";
import pkg from "./package.json";

export default defineConfig({
  plugins: [react({ jsxRuntime: "classic" }), preserveDirectives(), dts()],
  build: {
    target: "ES2018",
    lib: {
      name: "Phosphor",
      entry: resolve(__dirname, "src/index.ts"),
      fileName: (format, name) => `${name}.${format}.js`,
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
