import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Health-Desk-Clinic/",
  plugins: [react()],
  build: {
    target: "esnext"
  }
});
