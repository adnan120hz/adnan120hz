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
        paper: "var(--background)",
        surface: "var(--surface)",
        surfacelight: "var(--surface-light)",
        ink: "var(--foreground)",
        muted: "var(--foreground-muted)",
        line: "var(--border)",
        accent: "var(--accent)",
        accentdark: "var(--accent-dark)",
        accenttext: "var(--accent-text)",
        codegreen: "var(--code-green)",
        codeblue: "var(--code-blue)",
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
        hard: "4px 4px 0 var(--border)",
        "hard-sm": "3px 3px 0 var(--border)",
        "hard-lg": "6px 6px 0 var(--border)",
        "hard-none": "0 0 0 var(--border)",
      },
    },
  },
  plugins: [],
};

export default config;
