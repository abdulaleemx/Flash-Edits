import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        golden: {
          DEFAULT: "hsl(var(--golden))",
          bright: "hsl(var(--golden-bright))",
          dark: "hsl(var(--golden-dark))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          dark: "hsl(var(--primary-dark))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-secondary': 'var(--gradient-secondary)',
        'gradient-subtle': 'var(--gradient-subtle)',
        'gradient-golden': 'var(--gradient-golden)',
        'gradient-animated': 'linear-gradient(270deg, hsl(var(--background)), hsl(var(--background)), hsl(var(--primary) / 0.1))',
      },
      boxShadow: {
        'glow': 'var(--shadow-glow)',
        'golden': 'var(--shadow-golden)',
        'elegant': 'var(--shadow-elegant)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        "scale-in": {
          "0%": {
            transform: "scale(0.95)",
            opacity: "0"
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1"
          }
        },
        "glow": {
          "0%, 100%": {
            boxShadow: "0 0 20px hsl(264 100% 50% / 0.2)"
          },
          "50%": {
            boxShadow: "0 0 40px hsl(264 100% 50% / 0.4)"
          }
        },
        "float-slow": {
          "0%, 100%": { 
            transform: "translateY(0px) translateX(0px) rotate(0deg)" 
          },
          "33%": { 
            transform: "translateY(-20px) translateX(10px) rotate(120deg)" 
          },
          "66%": { 
            transform: "translateY(10px) translateX(-15px) rotate(240deg)" 
          }
        },
        "float-medium": {
          "0%, 100%": { 
            transform: "translateY(0px) translateX(0px) rotate(0deg)" 
          },
          "50%": { 
            transform: "translateY(-15px) translateX(8px) rotate(180deg)" 
          }
        },
        "float-fast": {
          "0%, 100%": { 
            transform: "translateY(0px) translateX(0px)" 
          },
          "25%": { 
            transform: "translateY(-10px) translateX(5px)" 
          },
          "75%": { 
            transform: "translateY(5px) translateX(-8px)" 
          }
        },
        "lightning-glow": {
          "0%, 100%": { 
            filter: "drop-shadow(0 0 10px hsl(var(--golden) / 0.8))" 
          },
          "50%": { 
            filter: "drop-shadow(0 0 20px hsl(var(--golden) / 1)) drop-shadow(0 0 30px hsl(var(--golden) / 0.5))" 
          }
        },
        "particle-float": {
          "0%": { 
            transform: "translate(0, 0) rotate(0deg)", 
            opacity: "0" 
          },
          "10%": { 
            opacity: "1" 
          },
          "90%": { 
            opacity: "1" 
          },
          "100%": { 
            transform: "translate(-100px, -100px) rotate(180deg)", 
            opacity: "0" 
          }
        },
        "text-fade-up": {
          "0%": { 
            opacity: "0", 
            transform: "translateY(30px)" 
          },
          "100%": { 
            opacity: "1", 
            transform: "translateY(0)" 
          }
        },
        "gradient-shift": {
          "0%, 100%": { 
            backgroundPosition: "0% 50%" 
          },
          "50%": { 
            backgroundPosition: "100% 50%" 
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out",
        "fade-in": "fade-in 0.4s ease-out",
        "scale-in": "scale-in 0.3s ease-out",
        "glow": "glow 2s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        "float-medium": "float-medium 6s ease-in-out infinite",
        "float-fast": "float-fast 4s ease-in-out infinite",
        "lightning-glow": "lightning-glow 2s ease-in-out infinite",
        "particle-float": "particle-float 4s linear infinite",
        "text-fade-up": "text-fade-up 0.8s ease-out forwards",
        "gradient-shift": "gradient-shift 8s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
