
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
			padding: '2rem', // Default padding for containers
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
        // Defined in index.css via CSS variables, but good to have here for reference or direct use
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))', // white
				foreground: 'hsl(var(--foreground))', // charcoal
				primary: { // deep-teal
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
				accent: { // deep-teal for accents if not primary
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
        // Custom colors
        charcoal: '#333333',
        'deep-teal': '#007A75',
			},
			fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      lineHeight: {
        'heading': '1.4',
        'body': '1.6',
      },
			borderRadius: {
				lg: 'var(--radius)', // 0.5rem by default in index.css
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
        '2xl': '1rem', // For 2xl rounded corners
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
			},
      scale: {
        '102': '1.02',
      },
      boxShadow: {
        soft: '0 4px 12px rgba(0, 0, 0, 0.08)', // Softer shadow
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)', // Tailwind's default 2xl, can adjust if needed
      }
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
