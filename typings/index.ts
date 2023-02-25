import { GRAPHY_DESIGN_TYPE } from '../constants';
import { themes } from '../themes';

export type ValueOf<T> = T[keyof T];
export type GrapgicDesignType = ValueOf<typeof GRAPHY_DESIGN_TYPE>;
export type ThemeType = keyof typeof themes;

export interface MenuItem {
  key: string;
  text: string;
  note?: string;
  subItems?: MenuItem[];
}

export interface WorkDetails {
  index: string;
  title: string;
  desc: string;
  img: string;
  relative?: { img: { src: string; index: string }[] };
}
