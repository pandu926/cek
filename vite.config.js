import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import fs from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Cek apakah sertifikat dan kunci HTTPS ada
const certPath = resolve(__dirname, "./cert.pem");
const keyPath = resolve(__dirname, "./key.pem");

const httpsConfig =
  fs.existsSync(certPath) && fs.existsSync(keyPath)
    ? {
        cert: fs.readFileSync(certPath),
        key: fs.readFileSync(keyPath),
      }
    : undefined;

export default defineConfig({
  base: "/reactjs-js-template/",
  plugins: [react()],
  server: {
    port: 443,
    https: httpsConfig,
    host: "192.168.47.232",
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  publicDir: "./public",
});
