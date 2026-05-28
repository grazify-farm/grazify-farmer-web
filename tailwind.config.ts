import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          accent: "#25D366",
          darker: "#029600",
        },
        dark: {
          gray: "#202020",
          medium: "#404040",
          surface: "#1C1C1C",
          bar: "#1A1A1A",
        },
        text: {
          white: "#EEEEEE",
          hint: "#6D6D6D",
        },
        mint: "#EAF8F0",
        "light-bg": "#F7F7F7",
        "light-outline": "#D0D0D0",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        pill: "9999px",
      },
      fontFamily: {
        sans: ["var(--font-quicksand)", "system-ui", "sans-serif"],
        quicksand: ["var(--font-quicksand)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
