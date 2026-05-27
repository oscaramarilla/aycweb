import { defineConfig } from "vitest/config";
import path from "path";

// ============================================================
// Vitest config — resuelve el alias @/ igual que tsconfig.json
// "paths": { "@/*": ["./*"] }
// ============================================================

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
  test: {
    environment: "node",
  },
});
