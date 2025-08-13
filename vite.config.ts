/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { configDefaults } from "vitest/config";
import dotenv from "dotenv";

dotenv.config(); // Load variables from .env
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setup.jsx"],
    exclude: [
      ...configDefaults.exclude,
      "src/shared/ui/logos",
      "src/shared/ui/icons",
    ],
    coverage: {
      provider: "v8",
      reporter: ["text", "html", "lcov"],
      exclude: [
        "public/*",
        "src/shared/*",
        "postcss.config.cjs",
        "tailwind.config.cjs",
        "vite.config.ts",
      ],
      thresholds: {
        lines: 60,
      },
    },
  },
  resolve: {
    alias: {
      "@utils": resolve(__dirname, "src/shared/utils"),
      "@ui": resolve(__dirname, "src/shared/ui"),
      "@api-services": resolve(__dirname, "src/shared/api-services"),
      "@constants": resolve(__dirname, "src/constants"),
      "~": resolve(__dirname, "src"),
    },
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
  build: {
    assetsInlineLimit: 8192,
    sourcemap: false,
  },
});
