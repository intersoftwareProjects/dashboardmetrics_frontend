import {nextui} from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
      extend: {}
  },
  darkMode: "class",
  plugins: [
      nextui({
          themes: {
              "intersoftware": {
                  extend: "light", // <- inherit default values from dark theme
                  colors: {
                      background: "#ffffff",
                      foreground: "#FFFFFF",
                      primary: {
                          50: "#1B1D36",
                          100: "#520F83",
                          200: "#7318A2",
                          300: "#9823C2",
                          400: "#c031e2",
                          500: "#DD62ED",
                          600: "#F182F6",
                          700: "#FCADF9",
                          800: "#FDD5F9",
                          900: "#2B1211",
                          999: "#FF0000",
                          DEFAULT: "#ffffff",
                          foreground: "#ffffff",
                      },
                      secondary: {
                          DEFAULT: "#525E73",
                      },

                      focus: "#F182F6",
                  },
                  layout: {
                      disabledOpacity: "0.3",
                      radius: {
                          small: "4px",
                          medium: "6px",
                          large: "8px",
                      },
                      borderWidth: {
                          small: "1px",
                          medium: "2px",
                          large: "3px",
                      },
                      fontSize: {
                          small: "12px",
                          medium: "16px",
                          large: "24px",
                      }
                  },
              },
          },
      }),
  ],
}
