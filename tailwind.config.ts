import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: "var(--font-lexend-deca)",
        bigShoulder: "var(--font-big-shoulders)",
      },
      fontSize: {
        "card-heading": ["2.5rem", { fontWeight: 700, lineHeight: "normal" }],
        "card-description": [
          ".9375rem",
          { fontWeight: 400, lineHeight: "25px" },
        ],
        "card-button": [".9375rem", { fontWeight: 400, lineHeight: "25px" }],
      },
    },
  },
  plugins: [],
};
export default config;
