/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      farvenavn: {
        baggrundprimaer: "#hexkode",
        baggrundsekundaer: "#hexkode",
        skriftprimaer: "#hexkode",
        300: "#hexkode",
        400: "#hexkode",
        500: "#hexkode",
        600: "#hexkode",
      },
      //     'white': '#fff',
      //     'black': '#000',
      // },

      /* Tilføj din egen spacing nedenfor */
      // spacing: {
      //     'm': '40px',
      // },

      /* Tilføj fonte herunder - husk også at tilføje webfonte i head-sektionen i MainLayout  */
      // fontFamily: {
      //     sans: ['Prompt', 'sans-serif'],
      //     'display': ['Courier', 'monospace'], /* eksempel på ekstra font */
      // },

      /* Tilføj dit typografiske hierarki herunder */
      // fontSize: {
      //     base: ['1rem', { lineHeight: '1.5rem' }],
      //     large: ['2.5rem', { lineHeight: '3.75rem' }],
      //   },

      /* Tilføj dit fontvægt-hierarki nedenfor */
      //   fontWeight: {
      //     regular: '400',
      //   },

      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        display: ["Londrina solid", "monospace"] /* eksempel på ekstra font */,
      },

      fontSize: {
        base: ["1rem", { lineHeight: "1.5rem" }],
        large: ["2.5rem", { lineHeight: "3.75rem" }],
        maintext: ["1rem", { lineHeight: "1.5rem" }],
        herotext: ["5rem", { lineHeight: "5.rem" }],
        h1text: ["3.5rem", { lineHeight: "4rem" }],
        h2text: ["3rem", { lineHeight: "4rem" }],
        h3text: ["2rem", { lineHeight: "2.5rem" }],
        h4text: ["1.5rem", { lineHeight: "2.5rem" }],
      },

      fontWeight: {
        bold: "800",
        semibold: "600",
        regular: "400",
        light: "100",
      },

      borderWidth: {
        web: "2px",
        mobile: "1px",
      },

      /* Borders - borderstørrelser herunder */
      // borderWidth: {
      //     DEFAULT: '1px',
      //     0: '0px',
      //     2: '2px',
      // },

      /* Border radius størrelser herunder */
      // borderRadius: {
      //     DEFAULT: '1.25rem',
      //     none: '0px',
      // },

      spacing: {
        m: "105px",
      },
      /* Tilføj fonte herunder - husk også at tilføje webfonte i head-sektionen i MainLayout  */
      // fontFamily: {
      //     sans: ['Prompt', 'sans-serif'],
      //     'display': ['Courier', 'monospace'], /* eksempel på ekstra font */
      // },

      /* Tilføj dit fontvægt-hierarki nedenfor */
      //   fontWeight: {
      //     regular: '400',
      //   },

      /* Border radius størrelser herunder */
      // borderRadius: {
      //     DEFAULT: '1.25rem',
      //     none: '0px',
      // },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
};
