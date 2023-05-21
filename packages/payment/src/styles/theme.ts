export const colors = {
  PRIMARY: '#2AC1BC',
  PRIMARY_SOFT: '#04C09E',
  GRAY_600: '#D2D2D2',
  GRAY_500: '#E5E5E5',
  GRAY_400: '#94DACD',
  GRAY_300: '#ECEBF1',
  GRAY_200: '#DDDDDD',
  GRAY_100: '#F6F6F6',
  YELLOW_800: '#CBBA64',
  BLACK_500: '#111111',
  BLACK_475: '#333333',
  BLACK_450: '#383838',
  BLACK_400: '#525252',
  BLACK_300: '#737373',
  WHITE: '#FFFFFF',
  none: 'none'
};

export const zIndex = {
  DRAWER: 500,
  TOOLTIP_BOX: 400,
  HEADER: 300
};

export const theme = {
  colors,
  zIndex
} as const;

export type Colors = keyof typeof colors;
