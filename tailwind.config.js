module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      display: ["Open Sans", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
    extend: {
      fontSize: {
        14: "14px",
      },
      backgroundColor: {
        "main-bg": "#fafbfb",
        "main-dark-bg": "#20232a",
        "secondry-dark-bg": "#33373e",
        "light-gray": "#f7f7f7",
        "half-transparent": "rgba(0 0 0 /.5)",
      },
      borderWidth: {
        1: "1px",
      },
      borderColor: {
        color: "rgba(0 0 0 /.1)",
      },
      width: {
        400: "400px",
        760: "760px",
        780: "780px",
        800: "800px",
        1000: "1000px",
        1200: "1200px",
        1400: "1400px",
      },
      height: {
        80: "80px",
      },
      minHeight: {
        590: "590px",
      },
      backgroundImage: {
        "hero-pattern":
          "url('https://raw.githubusercontent.com/adrianhajdin/project_syncfusion_dashboard/faed19214fdd19a6accf73954ca5fe23a01e2da7/src/data/welcome-bg.svg')",
      },
      transitionProperty: {
        'width': 'width',
        'spacing': 'margin, padding',
      }
    },
  },
  plugins: [],
};
