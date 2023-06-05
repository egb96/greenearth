import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      devOptions: {
        enabled: true,
      },
      includeAssets: ["img/logo.png"],
      manifest: {
        name: "My Awesome App",
        short_name: "MyApp",
        description: "My Awesome App description",
        theme_color: "#ffffff",
        icons: [
          {
            src: "img/logo.png",
            sizes: "225x225",
            type: "image/png",
          },
          {
            src: "img/logo.png",
            sizes: "225x225",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
