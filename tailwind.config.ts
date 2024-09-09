import type { Config } from "tailwindcss";

const TailwindConfig: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        app: {
          backgroundColor: "#101014",
          textColor: "#ffffff",
        },
      },

      maxWidth: {
        "2xl": "1600px",
      },
    },
  },

  plugins: [],
};

export default TailwindConfig;
