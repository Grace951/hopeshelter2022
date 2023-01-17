import 'styled-components';

declare module 'styled-components' {
  export interface ThemeLayout {
    spacing: (x: number, x?: number, x?: number, x?: number) => string;
    content: {
      maxWidth: string;
    };
  }
  export interface Breakpoint {
    bigDesktop: number;
    desktop: number;
    laptop: number;
    tablet: number;
    mobile: number;
  }
  export interface Font {
    size: {
      base: string;
      small: string;
      large: string;
      xlarge: string;
    };
    weight: {
      light: number;
      regular: number;
      bold: number;
    };
  }
  export interface DefaultTheme {
    layout: ThemeLayout;
    breakpoint: Breakpoint;
    font: Font;
    colors: {
      primary: string;
      secondary: string;
      logoGreen: string;
      logoBrown: string;
      mostGray: string;
      lightGray: string;
      darkGray: string;
      light: string;
      primaryLink: {
        main: string;
        hover: string;
      };
      secondaryLink: {
        main: string;
        hover: string;
      };
    };
    bgColors: {
      primary: string;
      dark: string;
      light: string;
    };
  }
}
