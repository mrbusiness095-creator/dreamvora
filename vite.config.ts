import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import netlify from "@netlify/vite-plugin-tanstack-start";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },

  build: {
    cssMinify: false,
  },

  plugins: [
    tanstackStart(),
    tailwindcss(),
    netlify(),
    react(),
  ],
});
