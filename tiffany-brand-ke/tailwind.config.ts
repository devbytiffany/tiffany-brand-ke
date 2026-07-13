import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0E1420",       // page background
        surface: "#161F30",   // card / panel background
        border: "#232E42",    // hairline borders
        text: "#E9EDF5",      // primary text
        muted: "#8B96AC",     // secondary text
        amber: "#F2A65A",     // primary accent (CTAs, links)
        signal: "#3ECF8E",    // reserved for payment / M-Pesa moments only
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-manrope)", "sans-serif"],
        mono: ["var(--font-jbmono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
