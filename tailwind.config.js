/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        console: "JetBrainsMono",
      },
      colors: {
        background: "#282c34",
        main: "#dcdfe4",
        user: "#98c379",
        path: "#5ca3de",
      },
    },
  },
  plugins: [],
};
