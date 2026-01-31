import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./styles/**/*.{css}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAFBFF",
        surface: "#FFFFFF",
        "surface-muted": "#F4F6FF",
        primary: "#FF6FAE",
        "primary-strong": "#E25595",
        "primary-soft": "rgba(255, 111, 174, 0.12)",
        secondary: "#5ED3F3",
        "secondary-soft": "rgba(94, 211, 243, 0.12)",
        "accent-mint": "#4EE1C1",
        "accent-yellow": "#FFD84D",
        "accent-purple": "#8B5CF6",
        "text-main": "#1E1E2F",
        "text-muted": "rgba(30, 30, 47, 0.7)",
        "text-soft": "rgba(30, 30, 47, 0.5)",
        "border-subtle": "rgba(30, 30, 47, 0.08)",
        "border-strong": "rgba(30, 30, 47, 0.16)",
        "focus-ring": "#5ED3F3"
      },
      borderRadius: {
        xs: "8px",
        sm: "12px",
        md: "16px",
        lg: "20px",
        xl: "24px"
      },
      boxShadow: {
        xs: "0 2px 4px rgba(15, 23, 42, 0.06)",
        sm: "0 4px 8px rgba(15, 23, 42, 0.08)",
        md: "0 10px 20px rgba(15, 23, 42, 0.10)",
        lg: "0 16px 32px rgba(15, 23, 42, 0.14)",
        "glow-yellow": "0 0 24px rgba(255, 216, 77, 0.65)"
      }
    }
  },
  plugins: []
};

export default config;
