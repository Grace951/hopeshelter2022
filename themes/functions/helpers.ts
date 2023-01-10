import { css } from 'styled-components';
import { breakpoint } from './accessors';

export const px = (x: number) => `${x}px`;

export const rem = (x: number) => `${x / 16}rem`;

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
