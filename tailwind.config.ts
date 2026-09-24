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
        // Electric Crimson Red Palette (Matching new reference mockup)
        red: {
          50: "#FEF2F2",
          100: "#FEE2E2",
          200: "#FECACA",
          300: "#FCA5A5",
          400: "#F87171",
          500: "#EF4444",
          600: "#E52229", // Primary Electric Crimson Red
          700: "#C81920",
          800: "#991B1B",
          900: "#7F1D1D",
          950: "#450A0A",
        },
        // Soft Sky Tint (Matching new reference hero background)
        skyTint: {
          50: "#F8FBFF",
          100: "#EDF5FD",
          200: "#D5E4F9",
          300: "#BDD5F5",
        },
        // Vibrant Industrial Warm Orange Palette
        orange: {
          50: "#FFF7ED",
          100: "#FFEDD5",
          200: "#FED7AA",
          300: "#FDBA74",
          400: "#FB923C",
          500: "#F97316",
          600: "#E52229", // Mapped to primary electric red
          700: "#C81920",
          800: "#9A3412",
          900: "#7C2D12",
          950: "#431407",
        },
        // Gold / Amber Accent Palette
        gold: {
          50: "#FEF2F2",
          100: "#FEE2E2",
          200: "#FECACA",
          300: "#FCA5A5",
          400: "#F87171",
          500: "#E52229", // Mapped to primary electric red
          600: "#C81920",
          700: "#991B1B",
          800: "#7F1D1D",
          900: "#450A0A",
        },
        // AeroLogix Industrial Palette (From Reference Mockup)
        aeroOrange: {
          50: "#FFF5F2",
          100: "#FFE8E2",
          200: "#FFD1C5",
          300: "#FFA893",
          400: "#FF7D5E",
          500: "#FF5E3A", // Primary AeroLogix Industrial Orange
          600: "#FF6B35",
          700: "#E04B28", // Hover Orange
          800: "#B83A1D",
          900: "#802511",
        },
        petrolNavy: {
          50: "#F0F6F9",
          100: "#DFECF2",
          200: "#BFDAE5",
          300: "#94C0D3",
          400: "#5D9CBD",
          500: "#367B9F",
          600: "#246182",
          700: "#1A4C67",
          800: "#153D50",
          850: "#0F303F", // Primary Deep Petrol Navy
          900: "#0A222D", // Darkest Navy
          950: "#06151D",
        },
        // Primary Brand Action / Industrial Palette
        brand: {
          red: "#FF5E3A",
          redHover: "#E04B28",
          redLight: "#FFE8E2",
          orange: "#FF5E3A",
          orangeHover: "#E04B28",
          orangeLight: "#FFE8E2",
          gold: "#FF5E3A",
          goldHover: "#E04B28",
          goldLight: "#FFE8E2",
          navy: "#0F303F",
          navyDark: "#0A222D",
          navyDeep: "#06151D",
          blue: "#153D50",
          accent: "#FF5E3A",
          light: "#F8FAFC",
        },
        // Clean neutral surfaces
        surface: {
          primary: "#FFFFFF",
          secondary: "#F8FAFC",
          tertiary: "#F1F5F9",
          dark: "#0F303F",
          deep: "#0A222D",
          brand: "#0F303F",
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
        "red-glow": "0 6px 24px rgba(229, 34, 41, 0.4)",
        "orange-glow": "0 6px 24px rgba(229, 34, 41, 0.4)",
        "gold-glow": "0 6px 24px rgba(229, 34, 41, 0.4)",
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
