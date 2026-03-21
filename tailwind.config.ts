import type { Config } from "tailwindcss";

// all in fixtures is set to tailwind v3 as interims solutions

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        minecraft: ["var(--font-minecraft)"],
        headline: ["var(--font-space-grotesk)", "Space Grotesk", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "sans-serif"],
        label: ["var(--font-space-grotesk)", "Space Grotesk", "sans-serif"],
        "space-grotesk": ["var(--font-space-grotesk)", "Space Grotesk", "sans-serif"],
      },
      colors: {
        "primary": "#ffffff",
        "on-primary": "#323200",
        "on-primary-container": "#686800",
        "primary-fixed-dim": "#cdcd00",
        "tertiary-container": "#e2e2e2",
        "surface-container": "#1f1f1f",
        "outline": "#939277",
        "inverse-surface": "#e2e2e2",
        "on-secondary-container": "#b7b5b4",
        "error": "#ffb4ab",
        "primary-container": "#eaea00",
        "on-tertiary-container": "#636565",
        "tertiary": "#ffffff",
        "surface-bright": "#393939",
        "surface": "#131313",
        "on-surface": "#e2e2e2",
        "outline-variant": "#484831",
        "on-secondary": "#303030",
        "tertiary-fixed-dim": "#c6c6c7",
        "surface-container-highest": "#353535",
        "background": "#131313",
        "secondary-fixed": "#e5e2e1",
        "surface-container-lowest": "#0e0e0e",
        "secondary-container": "#474746",
        "surface-dim": "#131313",
        "on-primary-fixed": "#1d1d00",
        "on-primary-fixed-variant": "#494900",
        "on-background": "#e2e2e2",
        "on-error": "#690005",
        "inverse-primary": "#626200",
        "on-tertiary": "#2f3131",
        "primary-fixed": "#eaea00",
        "error-container": "#93000a",
        "surface-variant": "#353535",
        "surface-container-high": "#2a2a2a",
        "on-tertiary-fixed-variant": "#454747",
        "on-error-container": "#ffdad6",
        "on-surface-variant": "#cac8aa",
        "on-secondary-fixed": "#1b1c1c",
        "surface-tint": "#cdcd00",
        "secondary": "#c8c6c5",
        "inverse-on-surface": "#303030",
        "surface-container-low": "#1b1b1b",
        "secondary-fixed-dim": "#c8c6c5",
        "on-tertiary-fixed": "#1a1c1c",
        "tertiary-fixed": "#e2e2e2",
        "on-secondary-fixed-variant": "#474746"
      },
      borderRadius: {
        "DEFAULT": "0px",
        "lg": "0px",
        "md": "0px",
        "sm": "0px",
        "xl": "0px",
        "full": "0px"
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;