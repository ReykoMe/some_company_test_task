
// stepper color background rgba(255, 255, 255, 0.3)

import { AppTheme } from "./theme.types";

export const appTheme: AppTheme = {
  colors: {
    background: {
      primary: {
        main: "#101313",
        light: "rgba(250, 250, 250, 0.1)",
      },
      secondary: {
        main: "#2B8CE6",
        light: "rgba(33, 122, 255, 0.1)",
      },
    },
    font: {
      main: "#ffffff",
      secondary: "#101313",
      tertiary: "#2B8CE6",
      grey: "rgba(255, 255, 255, 0.3)",
    },
    border: {
      input: "rgba(255, 255, 255, 0.1)",
      sidebar: " #2D3232",
    },
  },
  decorations: {
    padding: {
      button: "1.3rem 2.4rem",
    },
    borderRadius: {
      normal: "1rem",
      large: "1.6rem",
    },
  },
};
