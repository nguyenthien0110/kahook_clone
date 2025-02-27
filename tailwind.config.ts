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
        background: "var(--background)",
        primary: "#2f52cb",
        foreground: "var(--foreground)",
      },
      clipPath: {
        "kahoot-style": "polygon(0 0, 100% 0, 70% 100%, 0 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
