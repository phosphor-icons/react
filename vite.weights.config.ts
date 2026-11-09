import { readdirSync } from "fs";
import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import pkg from "./package.json";

const WEIGHTS = resolve(__dirname, "src/weights");

// Builds src/weights/<Icon>.tsx, which exports each weight of an icon by name.
// Nothing in src/index.ts imports them, so the main build leaves them out, and
// the CJS and UMD bundles stay as they are. This ES-only pass runs after it.
// Their .d.ts files come from the main build, whose dts plugin covers all of src.
export default defineConfig({
  plugins: [react({ jsxRuntime: "classic" })],
  build: {
    target: "ES2018",
    emptyOutDir: false,
    lib: {
      entry: Object.fromEntries(
        readdirSync(WEIGHTS).map((file) => [
          `weights/${file.replace(/\.tsx$/, "")}`,
          resolve(WEIGHTS, file),
        ])
      ),
      formats: ["es"],
      fileName: (format, name) => `${name}.${format}.js`,
    },
    rollupOptions: {
      external: Object.keys(pkg.peerDependencies),
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
      },
    },
  },
});
