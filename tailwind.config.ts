import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'darkBackground': '#020617',
      'elementBackground': '#0F172A',
      'darkGray': '#1E293B',
      'midGray': '#334155',
      'lightGray': '#475569',
      'writingGray': '#94A3B8',
      'grayBorder': '#334155',
      'mintGreen': '#16A34A',
      'lightMintGreen': '#50C079',
      'lightGreen': '#86EFAC',
      'darkGreen': '#14532D',
      'darkPurple': '#1E1B4B',
      'lightPurple': '#4F46E5',
      'hoverPurple': '#746DE4',
      'black': '#000',
      'white': '#FFF',
      'transparent': '#00000000',




      'red': '#FF0000',
      'yellow': '#FFFF00',

    },
    extend: {
      boxShadow: {
        'full-around': '0 0 25px rgba(0, 0, 0, 0.001), 0 0 25px rgba(0, 0, 0, 0.001), 0 0 25px rgba(0, 0, 0, 0.001), 0 0 25px rgba(0, 0, 0, 0.001)'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primaryColor1: "blue",
        secColor1: "red",
      },
    },
  },
  plugins: [],
};
export default config;
