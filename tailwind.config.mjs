/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      gul: {
        25: "#FFFDF1"
        50: "#FCF8DE",
        100: "#FBF5C6",
        200: "#F9E88F",
        300: "#F5F34F",
        400: "#F0BD1F",
        500: "#E0A512",
        600: "#C17F0D",
        700: "#9A5B0E",
        800: "#804813",
        900: "#6D3B16",
        950: "#3F1E09",
      },
      lilla: {
        50: "#FDF4FF",
        100: "#FAE9FE",
        200: "#F4D2FC",
        300: "#EEAEF9",
        400: "#E67EF4",
        500: "#D54CE9",
        600: "#BC2CCD",
        700: "#9F21AA",
        800: "#831D8B",
        900: "#6D1D72",
        950: "#2B042D",
      },
      blaa: {
        50: "#F3F7Fb",
        100: "#E5EBF4",
        200: "#D0DDED",
        300: "#B0C6E0",
        400: "#8AA8D0",
        500: "#6E8DC3",
        600: "#5B76B5",
        700: "#5065A5",
        800: "#465487",
        900: "#3C476C",
        950: "#282E43",
      },
      roed: {
        50: "#FEF2F3",
        100: "#FFE1E3",
        200: "#FFC9CD",
        300: "#FEA3AA",
        400: "#FB6E78",
        500: "#F3404D",
        600: "#DB1F2D",
        700: "#BC1925",
        800: "#9C1822",
        900: "#811B23",
        950: "#46090E",
      },
      graa: {
        50: "#F9F7F3",
        100: "#F2eEDE2",
        200: "#EBE3D3",
        300: "#D3C09E",
        400: "#C0A277",
        500: "#B38B5C",
        600: "#A67950",
        700: "#8A6144",
        800: "#70503C",
        900: "#5B4233",
        950: "#312119",
      },
      farvenavn: {
        hvid: "#FCF8DE",
        blaa: "#B0C6E0",
        lilla: "#2B042D",
        roed: "#DB1F2D",
        lysgraa: "#EBE3D3",
      },
    },

    fontFamily: {
      sans: ["Manrope", "sans-serif"],
      display: ["Londrina solid", "monospace"],
    },

    fontSize: {
      base: ["1rem", { lineHeight: "1.5rem" }],
      herotext: ["9rem", { lineHeight: "5.rem" }],
      xlarge: ["5rem", { lineHeight: "5.rem" }],
      large: ["3.5rem", { lineHeight: "4rem" }],
      medium: ["3rem", { lineHeight: "4rem" }],
      small: ["2rem", { lineHeight: "2.5rem" }],
      xsmall: ["1.5rem", { lineHeight: "2.5rem" }],
      xlfooter: ["15rem", { lineHeight: "20rem" }],
    },

    fontWeight: {
      bold: "800",
      semibold: "600",
      regular: "400",
      light: "100",
    },

    borderWidth: {
      DEFAULT: "2px",
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

    /* Border radius størrelser herunder */
    // borderRadius: {
    //     DEFAULT: '1.25rem',
    //     none: '0px',
    // },

    extend: {
      spacing: {
        margin: "105px",
        voresxs: "24px",
        voress: "44px",
        voresm: "68px",
        voresl: "116px",
      },
      borderRadius: {
        DEFAULT: "1.25rem",
        image: "20px",
        card: "42px",
        none: "0px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
};
