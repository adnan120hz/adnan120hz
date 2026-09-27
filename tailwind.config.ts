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
        paper: "#D8B77C",
        surface: "#E7C996",
        surfacelight: "#F0DDB8",
        ink: "#171512",
        muted: "#655642",
        line: "#201B15",
        accent: "#DFAF2F",
        accentdark: "#A63D32",
        accenttext: "#242016",
        codegreen: "#667D45",
        codeblue: "#1F5FD0",
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
        hard: "4px 4px 0 #201B15",
        "hard-sm": "3px 3px 0 #201B15",
        "hard-lg": "6px 6px 0 #201B15",
        "hard-none": "0 0 0 #201B15",
      },
    },
  },
  plugins: [],
};

export default config;
