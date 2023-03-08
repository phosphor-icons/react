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
      name: "PhosphorReact",
      formats: ["es"],
      fileName: (format, name) => `${name}.${format}.js`,
    },
    rollupOptions: {
      external: Object.keys(pkg.peerDependencies),
      input: "./src/index.ts",
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
});
