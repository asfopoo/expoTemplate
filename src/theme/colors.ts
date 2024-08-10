const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export type Theme = {
  colors: {
    text: string;
    background: string;
    tint: string;
    primary: string;
    border: string;
    icon: string;
    tabIconDefault: string;
    tabIconSelected: string;
    error: string;
  };
};

export const Colors = {
  light: {
    colors: {
      text: '#11181C',
      background: '#fff',
      tint: tintColorLight,
      primary: '#0a8ea4',
      border: '#E2E811',
      icon: '#687076',
      tabIconDefault: '#687076',
      tabIconSelected: tintColorLight,
      error: '#ff0000',
    },
  },
  dark: {
    colors: {
      text: '#ECEDEE',
      background: '#151718',
      tint: tintColorDark,
      primary: '#0a8000',
      border: '#E2E811',
      icon: '#9BA1A6',
      tabIconDefault: '#9BA1A6',
      tabIconSelected: tintColorDark,
      error: '#ff0000',
    },
  },
};
