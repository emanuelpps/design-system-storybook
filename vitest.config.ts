import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      setupFiles: "./src/testing/setup.ts",
      environment: "jsdom",
      coverage: {
        thresholds: {
          lines: 50,
          functions: 50,
          branches: 50,
          statements: 50,
        },
      },
    },
  })
);
