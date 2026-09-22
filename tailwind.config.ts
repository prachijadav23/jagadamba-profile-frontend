import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep Industrial Steel Navy (Sonatek Steels inspired palette)
        navy: {
          950: "#06121E", // Deepest background
          900: "#0A1D33", // Dark steel navy
          850: "#0C2340", // Primary deep corporate navy (Sonatek logo navy)
          800: "#0F2C59", // Rich steel blue-navy
          750: "#133E87", // Vibrant steel blue
          700: "#1A4F9E",
          600: "#2263BD",
          500: "#3178DE",
          400: "#5B96E8",
          200: "#BAD6F9",
          100: "#DBEAFE",
          50: "#EFF6FF",
        },
        // Steel Blue Accent Colors
        steel: {
          950: "#08101A",
          900: "#0F1E2E",
          800: "#1B3048",
          700: "#2D4B6E",
          600: "#446B96",
          500: "#608AB8",
          400: "#8CAED6",
          300: "#B8D1EF",
          200: "#D6E4F7",
          100: "#EBF2FA",
          50: "#F4F7FB", // Ice cool steel gray
        },
        // Gold / Amber Accent Palette (Photo 1 SS Importers theme)
        gold: {
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B", // Primary warm stainless steel gold
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
          900: "#78350F",
        },
        // Primary Brand Action / Industrial Palette
        brand: {
          gold: "#F59E0B",
          goldHover: "#D97706",
          goldLight: "#FEF3C7",
          navy: "#0C2340",
          navyDark: "#0A1D33",
          blue: "#133E87",
          accent: "#1E40AF",
          light: "#EBF2FA",
        },
        // Clean neutral surfaces
        surface: {
          primary: "#FFFFFF",
          secondary: "#F4F7FB",
          tertiary: "#EBF1F6",
          dark: "#0A1D33",
          deep: "#06121E",
          brand: "#0C2340",
        },
        // High contrast readable text
        ink: {
          primary: "#0A1D33",
          secondary: "#2D4B6E",
          muted: "#5B738E",
          subtle: "#8CA0B4",
          navy: "#0C2340",
          blue: "#133E87",
        },
        // Engineering hairline borders
        hairline: {
          light: "#E2E8F0",
          medium: "#CBD5E1",
          navy: "#BAD6F9",
          steel: "#D6E4F7",
          dark: "#1B3048",
        },
      },
      fontFamily: {
        display: ["var(--font-manrope)", "Manrope", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "hero-mobile": ["36px", { lineHeight: "1.08", letterSpacing: "-0.03em" }],
        hero: ["68px", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "h2-mobile": ["28px", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        h2: ["44px", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "h3-mobile": ["22px", { lineHeight: "1.25" }],
        h3: ["28px", { lineHeight: "1.22" }],
        "h4-mobile": ["18px", { lineHeight: "1.3" }],
        h4: ["22px", { lineHeight: "1.28" }],
        "stat-mobile": ["36px", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        stat: ["52px", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
      },
      maxWidth: {
        container: "1280px",
      },
      borderRadius: {
        xs: "4px",
        btn: "6px",
        card: "8px",
        block: "10px",
      },
      boxShadow: {
        subtle: "0 1px 3px rgba(12, 35, 64, 0.05), 0 1px 2px rgba(12, 35, 64, 0.03)",
        card: "0 4px 14px rgba(12, 35, 64, 0.07)",
        "card-hover": "0 10px 24px rgba(12, 35, 64, 0.13)",
        "blue-glow": "0 6px 20px rgba(19, 62, 135, 0.3)",
        "navy-glow": "0 6px 20px rgba(12, 35, 64, 0.35)",
        "gold-glow": "0 6px 24px rgba(245, 158, 11, 0.4)",
      },
      backgroundImage: {
        "grad-navy": "linear-gradient(135deg, #0C2340 0%, #133E87 100%)",
        "grad-dark-navy": "linear-gradient(160deg, #06121E 0%, #0A1D33 55%, #133E87 120%)",
        "grad-steel": "linear-gradient(135deg, #0F2C59 0%, #1A4F9E 100%)",
      },
      transitionTimingFunction: {
        engineered: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
