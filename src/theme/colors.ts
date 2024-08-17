const white = '#fff';
const black = '#000';
const lightGray = '#ECEDEE';
const mediumGray = '#9BA1A6';
const darkGray = '#151718';
const red = '#ff0000';
const lightYellow = '#F7E9B7';
const bronze = '#CD7F32';
const brightYellow = '#FFD700';

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
      text: black,
      background: white,
      tint: lightYellow,
      card: lightGray,
      notification: red,
      error: red,
      primary: bronze,
      secondary: brightYellow,
      border: bronze,
      icon: bronze,
      tabIconDefault: mediumGray,
      tabIconSelected: bronze,
    },
  },
  dark: {
    colors: {
      text: white,
      background: black,
      tint: lightYellow,
      primary: bronze,
      secondary: brightYellow,
      card: darkGray,
      border: bronze,
      notification: red,
      icon: bronze,
      tabIconDefault: mediumGray,
      tabIconSelected: bronze,
      error: red,
    },
  },
};

// Theme requirement for react-navigation
export const _navigationThemeLight = {
  dark: false,
  colors: {
    primary: Colors.light.colors.primary,
    background: Colors.light.colors.background,
    card: Colors.light.colors.card,
    text: Colors.light.colors.text,
    border: Colors.light.colors.border,
    notification: Colors.light.colors.notification,
  },
};

export const _navigationThemeDark = {
  dark: true,
  colors: {
    primary: Colors.dark.colors.primary,
    background: Colors.dark.colors.background,
    card: Colors.dark.colors.card,
    text: Colors.dark.colors.text,
    border: Colors.dark.colors.border,
    notification: Colors.dark.colors.notification,
  },
};
