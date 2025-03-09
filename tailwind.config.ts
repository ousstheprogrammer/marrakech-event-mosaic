
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'sans': ['Poppins', 'sans-serif'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        morocco: {
          terracotta: "#C35831",
          blue: "#006B94",
          gold: "#DCA968",
          sage: "#7B9178",
          sand: "#E8D4B5",
          navy: "#0F4C81",
          mint: "#BCDFCD",
          clay: "#A65C32",
          blush: "#F4B8A3",
          teal: "#167D7F"
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
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
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        "subtle-pulse": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.02)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-500px 0" },
          "100%": { backgroundPosition: "500px 0" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "fade-up": "fade-up 0.7s ease-out forwards",
        "slide-in-right": "slide-in-right 0.5s ease-out forwards",
        "subtle-pulse": "subtle-pulse 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "spin-slow": "spin-slow 15s linear infinite"
      },
      backgroundImage: {
        'moroccan-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zm-24.595 0L12.143 6.485l1.415 1.414 7.9-7.9h-2.83zm16.97 0l-1.414 1.414 3.657 3.657 1.414-1.414L35.547 0h-2.83zM24.453 0l-1.414 1.414-3.657 3.657 1.414 1.414 5.07-5.07-2.83 0zm8.487 0L30.9 2.04l-1.415-1.414L30.9 0h2.042zM.831 0l-1.414 1.414 4.243 4.242L4.87 4.85 1.828 1.807.83 0zm55.334 0l-4.243 4.242 1.415 1.415 3.657-3.657 3.657-3.657-1.414 1.414L56.0 0h-1.656zm-49.08 7.07l-3.657 3.657 1.414 1.414L18.628 0H15.8l-8.713 8.714zm39.548 0l3.657 3.657-1.414 1.414L0 5.657l1.414-1.414L4.242 0H7.07l3.657 3.657 1.414-1.414L8.714 0h2.828L15.8 4.243l1.414-1.414L12.9 0h2.83L26.1 10.657l-1.414 1.414L16.343 3.7 14.93 5.117l7.07 7.072-1.415 1.414-7.07-7.07-3.657 3.656 1.414 1.414 3.657-3.656 1.414 1.415-3.657 3.657 1.414 1.414 3.657-3.657 1.414 1.415-3.657 3.656 1.415 1.414 3.657-3.657 1.414 1.415-3.657 3.657 1.414 1.414 7.07-7.07L10.658 7.07l-1.414 1.415 11.314 11.314-1.414 1.414-11.314-11.3-1.414 1.413 11.313 11.314-1.414 1.414-11.313-11.313-1.414 1.414 11.313 11.313-1.414 1.414L3.658 14.9l-1.414 1.415 11.313 11.313-1.414 1.414L.83 17.634l1.414-1.414L0 14.113v-2.83L53.172 58.4l-1.414 1.414-7.07-7.07-1.415 1.413 7.07 7.07-1.414 1.415-7.07-7.07-1.415 1.413 7.07 7.07-1.414 1.415-7.07-7.07-1.415 1.414 7.07 7.07-1.414 1.414-7.07-7.07-1.415 1.414 7.07 7.07-1.414 1.414-7.07-7.07-1.414 1.414 7.07 7.07-1.414 1.414-7.07-7.07-1.415 1.414 7.07 7.07-1.414 1.414-7.07-7.07-1.415 1.414 7.07 7.07-1.414 1.414-7.07-7.07-1.414 1.414 7.07 7.07L16.4 59.818 2.144 45.56 0 47.702v-2.83l21.9 21.9L0 45.256v-2.828l20.485 20.485L0 42.427v-2.83l18.244 18.243L0 39.6v-2.83l16 16L0 36.77v-2.83l13.757 13.758L0 33.94v-2.828l11.515 11.515L0 31.113v-2.83l9.272 9.273L0 28.284v-2.83l7.03 7.03L0 25.456v-2.83l4.788 4.787L0 22.627v-2.83l2.546 2.546L0 19.8v-8.687l35.9 35.9 1.414-1.41L14.913 14.2l-1.414 1.413 11.313 11.313-1.414 1.414-11.313-11.312-1.414 1.414 11.313 11.310-1.414 1.416-11.313-11.313-1.414 1.414 11.313 11.314-1.414 1.414-7.07-7.07-1.415 1.414 7.07 7.07-1.414 1.414-7.07-7.07-1.414 1.415 7.07 7.07-1.414 1.414-7.07-7.07-1.414 1.414 7.07 7.07-1.414 1.414-7.07-7.07-1.414 1.414 7.07 7.07-1.414 1.414-7.07-7.07-1.414 1.414 7.07 7.07-1.414 1.414-7.07-7.07L0 73.6 58.9 14.4l-1.414-1.414L11.03 59.442l1.414 1.414L53.9 19.4l-1.414-1.414L11.03 59.440l1.414 1.414L56.7 16.6l-1.414-1.414L11.03 59.437l1.414 1.414L59.447 6.85 58.03 5.434 36.1 27.336l1.414 1.414L60 6.264 58.586 4.85 36.1 27.336l1.414 1.415L60 6.264 58.586 4.85 36.1 27.337l1.414 1.414L60 6.263l-1.414-1.414L36.1 27.337l1.414 1.414L60 6.263l-1.414-1.414L40.143 23.292l1.414 1.414L60 6.263l-1.414-1.414-18.443 18.443 1.414 1.414L60 6.263l-1.414-1.414-18.443 18.443 1.414 1.414L60 6.263l-1.414-1.414-18.443 18.443 1.414 1.414L60 6.263l-1.414-1.414L42.4 20.992l1.414 1.414L60 6.263l-1.414-1.414L33.376 24.06l1.414 1.414 17.828-17.83 1.414 1.416 2.122-2.12-1.414-1.415-2.121 2.12 1.414 1.415-7.07 7.07-1.414-1.414 7.07-7.07-1.415-1.415-7.07 7.07-1.414-1.414 7.07-7.07-1.414-1.415-7.07 7.07-1.415-1.414 7.07-7.07-1.414-1.415-7.07 7.07-1.414-1.414 7.07-7.07-1.414-1.415-7.07 7.07-1.414-1.414 7.07-7.07-1.414-1.415-7.07 7.07-1.414-1.414 7.07-7.07-1.414-1.415-7.07 7.07-1.414-1.414 7.07-7.07-1.414-1.415-7.07 7.07-1.414-1.414 7.07-7.07-1.414-1.415-7.07 7.07-1.414-1.414 7.07-7.07-1.414-1.415-7.07 7.07-1.415-1.414 15.2-15.202L41.55 0H39.7L60 20.298V18.47L39.243 0h-2.828L60 23.127v-2.83L36.414 0h-2.83L60 25.954v-2.83L33.586 0h-2.83L60 28.784v-2.83L30.758 0h-2.83L60 31.612v-2.83L27.93 0h-2.83L60 34.44v-2.83L25.1 0h-2.83L60 37.27v-2.83l-37.73-37.728H19.444L60 40.11Z' fill='%23c35831' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E\")",
        'zellige-pattern': "url(\"data:image/svg+xml,%3Csvg width='32' height='64' viewBox='0 0 32 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 28h20V16h-4v8H4V4h28v28h-4V8H8v20H0v-4zm12 8h20v4H16v24H0v-4h12V36zm16 12h-4v12h8v4H20V44h12v12z' fill='%23006B94' fill-opacity='0.04' fill-rule='evenodd'/%3E%3C/svg%3E\")"
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
