import { GRAPHY_DESIGN_TYPE } from '../constants';

export type ValueOf<T> = T[keyof T];
export type GrapgicDesignType = ValueOf<typeof GRAPHY_DESIGN_TYPE>;
