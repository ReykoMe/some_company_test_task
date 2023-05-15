export type AppTheme = {
  colors: {
    background: {
      primary: {
        main: string;
        dark: string;
        light: string
      };
      secondary: {
        main: string;
        dark: string;
        light: string
      };
    };
    font: {
      main: string;
      secondary: string;
      tertiary: string;
      grey: string;
    };
    border: {
      input: string;
      sidebar: string;
    };
  };
  decorations: {
    padding: {
      button: string;
    };
    borderRadius: {
        normal: string;
        large: string;
    };
  };
};
