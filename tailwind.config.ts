import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#262E3D",
        "primary-light": "#1E2738",
        secondary: "#005843",
        brand: "#FF6900",
        "brand-h": "#E05500",
      },
    },
  },
  plugins: [],
};
export default config;
