import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const ASSETS_PATH = path.join(__dirname, "../core/assets");
export const DEFS_PATH = path.join(__dirname, "../src/defs");
export const CSR_PATH = path.join(__dirname, "../src/csr");
export const SSR_PATH = path.join(__dirname, "../src/ssr");
export const INDEX_PATH = path.join(__dirname, "../src/index.ts");
