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
      // WorkSlop website tokens (light theme): soft paper, fluid panels,
      // brand blue #0a4fe0. No hard borders, no offset black shadows.
      colors: {
        paper: "#FBFCFE",
        panel: "#FFFFFF",
        panel2: "#EDF2FC",
        ink: "#0C1424",
        ink2: "#3D4A63",
        faint: "#5D6F92",
        rule: "#DDE6F5",
        rulestrong: "#BCCDEA",
        brand: "#0A4FE0",
        branddeep: "#073AAB",
        brandwash: "#E7EFFE",
        good: "#0C7A43",
      },
      fontFamily: {
        sans: [
          '"Inter"',
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "sans-serif",
        ],
        mono: [
          '"IBM Plex Mono"',
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(12, 20, 36, 0.06), 0 12px 32px rgba(12, 20, 36, 0.08)",
        "soft-sm": "0 1px 2px rgba(12, 20, 36, 0.05), 0 6px 16px rgba(12, 20, 36, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
