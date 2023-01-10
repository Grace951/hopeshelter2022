import { DefaultTheme, ThemeLayout, Breakpoint, Font } from 'styled-components';

const breakpoint: Breakpoint = {
  bigDesktop: 1800,
  desktop: 1440,
  laptop: 1200,
  tablet: 800,
  mobile: 500,
};
const font: Font = {
  size: {
    base: '16px',
    small: '12px',
    large: '24px',
    xlarge: '48px',
  },
  weight: {
    light: 300,
    regular: 400,
    bold: 700,
  },
};

const layout: ThemeLayout = {
  spacing: (x: number) => `${10 * x}px`,
  footer: {
    height: '40px',
  },
  header: {
    height: '148px',
  },
  content: {
    maxWidth: '1440px',
  },
};

export const light: DefaultTheme = {
  layout,
  breakpoint,
  font,
  colors: {
    primary: '#111',
    secondary: '#0070f3',
    grassGreen: '#7fbf34',
    primaryLink: {
      main: '#000',
      hover: '#111',
    },
    secondaryLink: {
      main: '#8c8c8c',
      hover: '#6c9',
    },
  },
  bgColors: {
    primary: '#fff',
    secondary: '#2e2e2e',
  },
};

export const dark: DefaultTheme = {
  layout,
  breakpoint,
  font,
  colors: {
    primary: '#111',
    secondary: '#0070f3',
    primaryLink: {
      main: '#000',
      hover: '#111',
    },
    secondaryLink: {
      main: '#fff',
      hover: '#6c9',
    },
  },
  bgColors: {
    primary: '#fff',
    secondary: '#2e2e2e',
  },
};

export * from './functions';
