import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      domain: "/src/domain",
      store: "/src/store",
      ui: "/src/ui",
    },
  },
});
