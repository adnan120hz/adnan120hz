import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#A9C6DA",
        surface: "#BCD4E4",
        surfacelight: "#D3E3EF",
        ink: "#0F1B28",
        muted: "#47617A",
        line: "#152434",
        accent: "#2E7CD6",
        accentdark: "#174E8F",
        accenttext: "#0C1B2E",
        codegreen: "#2E7D4F",
        codeblue: "#1A56C4",
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "system-ui", "sans-serif"],
        mono: [
          '"SFMono-Regular"',
          "Consolas",
          '"Liberation Mono"',
          "Menlo",
          "monospace",
        ],
      },
      boxShadow: {
        hard: "4px 4px 0 #152434",
        "hard-sm": "3px 3px 0 #152434",
        "hard-lg": "6px 6px 0 #152434",
        "hard-none": "0 0 0 #152434",
      },
    },
  },
  plugins: [],
};

export default config;
