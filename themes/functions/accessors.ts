import { path, pipe } from 'ramda';
import { px } from './helpers';

export const theme =
  (keys: string[] = []) =>
  (props) =>
    path(['theme', ...keys], props);

export const breakpoint = (key: string) => pipe(theme(['breakpoint', key]), px);

export const space = (multiplier = 10) =>
  pipe((x: number) => x * multiplier, px);
