import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const ASSETS_PATH = path.join(__dirname, "../core/assets");
export const COMPONENTS_PATH = path.join(__dirname, "../src/icons");
export const INDEX_PATH = path.join(__dirname, "../src/index.ts");
