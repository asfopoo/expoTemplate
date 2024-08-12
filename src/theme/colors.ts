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
      card: '#ECEDEE',
      notification: '#ff0000',
      error: '#ff0000',
      primary: '#0a8ea4',
      border: '#E2E811',
      icon: '#687076',
      tabIconDefault: '#687076',
      tabIconSelected: tintColorLight,
    },
  },
  dark: {
    colors: {
      text: '#ECEDEE',
      background: '#151718',
      tint: tintColorDark,
      primary: '#0a8000',
      card: '#1D1E20',
      border: '#E2E811',
      notification: '#ff0000',
      icon: '#9BA1A6',
      tabIconDefault: '#9BA1A6',
      tabIconSelected: tintColorDark,
      error: '#ff0000',
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
