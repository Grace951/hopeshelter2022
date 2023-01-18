import { DefaultTheme, ThemeLayout, Breakpoint, Font } from 'styled-components';

export const breakpoint: Breakpoint = {
  bigDesktop: 1800,
  desktop: 1440,
  laptop: 1280,
  tablet: 800,
  mobile: 640,
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
    secondary: '#111',
    logoGreen: '#7fbf34',
    logoBrown: '#9f5a04',
    lightGray: '#ddd',
    dark: '#646464',
    mostDark: '#383838',
    light: '#fff',
  },
  bgColors: {
    primary: '#fff',
    secondary: '#fff',
    dark: '#2e2e2e',
    light: '#efefef',
  },
};

export const dark: DefaultTheme = {
  layout,
  breakpoint,
  font,
  colors: {
    primary: '#eee',
    secondary: '#aaa',
    logoGreen: '#7fbf34',
    logoBrown: '#9f5a04',
    lightGray: '#222',
    dark: '#b1b1b1',
    mostDark: '#222',
    light: '#222',
  },
  bgColors: {
    primary: '#333',
    secondary: '#222',
    dark: '#2e2e2e',
    light: '#222',
  },
};

export * from './functions';
