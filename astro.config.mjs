export default defineConfig({
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  }
});