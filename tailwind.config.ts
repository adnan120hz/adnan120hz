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
        paper: "#9CC2F8",
        surface: "#C4DBFC",
        surfacelight: "#E6F0FE",
        ink: "#0F1B28",
        muted: "#3D5A80",
        line: "#152434",
        accent: "#1B74EE",
        accentdark: "#0E5FE3",
        accenttext: "#FFFFFF",
        codegreen: "#2E7D4F",
        codeblue: "#0E5FE3",
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
