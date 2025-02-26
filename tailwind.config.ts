import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:{
          DEFAULT: 'hsl(var(--primary))',
          foregorund: 'hsl(var(--primary-foreground))',
        },
        secondary:'hsl(var(--secondary))',
        accent:{
          DEFAULT: 'hsl(var(--accent))',
          foregorund: 'hsl(var(--accent-foreground))',
        },
        darkmode: 'hsl(var(--darkmode))',
        
      },
    },
  },
  plugins: [],
} satisfies Config;
