/** @type {import('tailwindcss').Config} */
export default {
  prefix: "tw-",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F4511E",
        secondary: "#344051",
        textTitle: "#292929",
        textPrimary: '#535353',
        gray: "#CED2DA",
        quartenery: "#97A1AF",
        borderLight: "#CED2DA",
      },
    },
  },
  plugins: [],
};
