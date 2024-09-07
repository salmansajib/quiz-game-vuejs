/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "main-bg-gradient":
          "radial-gradient(circle at 20% 35%, rgba(203, 213, 225, 1), transparent 50%), radial-gradient(circle at 90% 70%, rgba(220, 252, 231, 0.6), transparent 50%), radial-gradient(circle at 50% 50%, rgba(248, 250, 252, 1), transparent 100%)",
      },
    },
  },
  plugins: [],
};
