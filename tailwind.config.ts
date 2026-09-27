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
        paper: "#070708",
        surface: "#101013",
        surfacelight: "#17171C",
        ink: "#E9E9E7",
        muted: "#8B8B93",
        line: "#2C2C33",
        accent: "#E0AA2E",
        accentdark: "#C04534",
        accenttext: "#1C1408",
        codegreen: "#46C98A",
        codeblue: "#6AAED6",
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
        hard: "4px 4px 0 #0E2A1C",
        "hard-sm": "3px 3px 0 #0E2A1C",
        "hard-lg": "6px 6px 0 #0E2A1C",
        "hard-none": "0 0 0 #0E2A1C",
      },
    },
  },
  plugins: [],
};

export default config;
