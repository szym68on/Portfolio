/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans", "sans-serif"],
      },
      colors: {
        dark: {
          background: "hsl(260, 14%, 8%)",
          "on-background": "hsl(280, 17%, 90%)",
          surface: "hsl(260, 14%, 8%)",
          "on-surface": "hsl(280, 17%, 90%)",
          "on-surface-variant": "hsl(270, 11%, 79%)",
          "surface-container-low": "hsl(264, 8%, 12%)",
          "surface-container": "hsl(257, 10%, 14%)",
          "surface-bright": "hsl(270, 5%, 23%)",
          primary: "hsl(258, 100%, 87%)",
          "on-primary": "hsl(259, 58%, 28%)",
          outline: "hsl(264, 5%, 58%)",
          "outline-variant": "hsl(264, 7%, 29%)",
        },
        light: {
          background: "hsl(293, 100%, 98%)",
          "on-background": "hsl(264, 8%, 12%)",
          surface: "hsl(293, 100%, 98%)",
          "on-surface": "hsl(264, 8%, 12%)",
          "on-surface-variant": "hsl(264, 7%, 29%)",
          "surface-container-low": "hsl(278, 44%, 96%)",
          "surface-container": "hsl(276, 38%, 95%)",
          "surface-bright": "hsl(293, 100%, 98%)",
          primary: "hsl(256, 34%, 48%)",
          "on-primary": "hsl(0, 0%, 100%)",
          outline: "hsl(270, 4%, 47%)",
          "outline-variant": "hsl(270, 11%, 79%)",
        },
      },
    },
    fontSize: {
      base: "62.5%",
      "display-large": "5.7rem",
      "display-medium": "4.5rem",
      "display-small": "3.6rem",
      "headline-large": "3.2rem",
      "headline-medium": "2.8rem",
      "headline-small": "2.4rem",
      "title-large": "2rem",
      "title-medium": "1.6rem",
      "title-small": "1.4rem",
      "label-large": "1.4rem",
      "label-medium": "1.2rem",
      "label-small": "1.1rem",
      "body-large": "1.6rem",
      "body-medium": "1.4rem",
      "body-small": "1.2rem",
    },
    boxShadow: {
      "elevation-1":
        "0px 1px 3px 1px rgba(0, 0, 0, 0.26), 0px 1px 2px 0px rgba(0, 0, 0, 0.4)",
    },
    animationDuration: {
      "motion-short-1": "100ms",
    },
    animationTimingFunction: {
      "motion-linear": "cubic-bezier(0, 0, 1, 1)",
    },
  },
  plugins: [],
};
