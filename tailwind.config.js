/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "main-bg-gradient":
          "radial-gradient(ellipse at 20% 35%, rgba(96, 165, 250, 0.8), transparent 50%), radial-gradient(ellipse at 90% 70%, rgba(74, 222, 128, 0.6), transparent 50%), radial-gradient(ellipse at 50% 50%, rgba(245, 245, 245, 0.8), transparent 100%)",
      },
    },
  },
  plugins: [],
};
