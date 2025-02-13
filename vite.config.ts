import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths(), react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "~/": "/app/*",
    },
  },
});
