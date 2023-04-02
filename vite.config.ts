import { resolve } from "path";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import pkg from "./package.json";

export default defineConfig({
  plugins: [react({ jsxRuntime: "classic" })],
  build: {
    target: "ES2017",
    lib: {
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
          format: "umd",
          name: "PhosphorReact",
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
