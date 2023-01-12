import { DefaultTheme, ThemeLayout, Breakpoint, Font } from 'styled-components';

export const breakpoint: Breakpoint = {
  bigDesktop: 1800,
  desktop: 1440,
  laptop: 1200,
  tablet: 800,
  mobile: 540,
};

export type BreakpointKey = keyof Breakpoint;

const font: Font = {
  size: {
    base: 'calc(0.8rem + 0.2vw)',
    small: 'calc(0.8rem + 0.1vw)',
    large: 'calc(1rem + 0.4vw)',
    xlarge: 'calc(1.8rem + 0.5vw)',
  },
  weight: {
    light: 300,
    regular: 400,
    bold: 700,
  },
};

const layout: ThemeLayout = {
  spacing: (x1: number, x2?: number, x3?: number, x4?: number) =>
    `${10 * x1}px ${10 * (x2 === undefined ? x1 : x2)}px ${
      10 * (x3 === undefined ? x1 : x3)
    }px ${10 * (x4 === undefined ? (x2 === undefined ? x1 : x2) : x4)}px`,
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
