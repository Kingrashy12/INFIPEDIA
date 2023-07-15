/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/scence/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sofia: "'Sofia Sans Semi Condensed', sans-serif",
      poppin: "'Poppins', san serif",
      share: "'Share Tech Mono', monospace",
      mono: "'Segoe UI', Tahoma, sans-serif",
      roboto: "'Roboto Condensed', sans-serif",
    },
    extend: {
      borderWidth: {
        bold: "40px",
        top: "60px",
      },
      colors: {
        navy: "rgba(2, 12, 27, 1)",
        trans: "rgba(0, 0, 0, 0.5)",
        current: "#f95f35",
      },
      backgroundColor: {
        "Bg-current": "linear-gradient(98.63deg, #f99827 0%, #f95f35 100%)",
      },
      height: {
        "50%": "75%",
        18: "4.5rem",
        "80%": "80%",
        100: "30rem",
        "68px": "68px",
        "150px": "150px",
      },
      width: {
        100: "35rem",
        42: "10.8rem",
        "10rem": "10rem",
        45.5: "11.3rem",
        37: "9.5rem",
        "95%": "95%",
        "10.5rem": "10.8rem",
        10.5: "20px",
        46: "11.7rem",
        120: "35rem",
        150: "40rem",
        "68px": "68px",
      },
      spacing: {
        "center-drop": "37%",
        41: "41%",
        "xs-s": "2px",
        3.5: "3.2rem",
        18: "4.5rem",
        10.5: "2.59rem",
        "5rem": "5rem",
      },
      padding: {
        "xs-s": "2px",
      },
      zIndex: {
        "z-70": "70",
      },
      fontSize: {
        base2: "1rem",
      },
      lineHeight: {
        base2H: "1rem",
      },
      borderRadius: {
        base: "4px",
      },
    },
  },
  plugins: [],
};
