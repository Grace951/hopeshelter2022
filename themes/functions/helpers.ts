import { css } from 'styled-components';
import { breakpoint } from './accessors';

export const px = (x: number) => `${x}px`;

export const rem = (x: number) => `${x / 16}rem`;

export const mobileMin = () => css`
  @media all and (max-width: 320px) {
    width: 100%;
    min-width: 320px;
  }
`;

export const mobile = (content: string) => css`
  @media all and (max-width: ${breakpoint('mobile')}) {
    ${content}
  }
`;

export const tablet = (content: string) => css`
  @media all and (max-width: ${breakpoint('tablet')}) {
    ${content}
  }
`;
export const laptop = (content: string) => css`
  @media all and (max-width: ${breakpoint('laptop')}) {
    ${content}
  }
`;
export const desktop = (content: string) => css`
  @media all and (max-width: ${breakpoint('desktop')}) {
    ${content}
  }
`;
export const bigDesktop = (content: string) => css`
  @media all and (max-width: ${breakpoint('bigDesktop')}) {
    ${content}
  }
`;
