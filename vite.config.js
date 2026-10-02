//Imports Vite's configuration helper.
import { defineConfig } from "vite";

//Enables React support
import react from "@vitejs/plugin-react";

//Loads Tailwind's Vite plugin.
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
//Registers both plugins.
  plugins: [
    react(),
    tailwindcss(),
  ],
});