import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';
import { useColorScheme } from 'react-native';

import { Colors } from '@/theme/Colors';
import { selectSettings } from '@/zustand/settings/selectors';
import { useBoundStore } from '@/zustand/store';

export const navigationThemeLight = {
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

export const navigationThemeDark = {
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

const initialTheme = {
  ...navigationThemeLight,
};

// Create a context for the theme
export const ThemeContext = createContext(initialTheme);

// Create a theme provider component
const ThemeProvider = ({ children }: PropsWithChildren) => {
  const storedTheme = useBoundStore((state) => state.settings.theme);
  const systemTheme = useColorScheme();
  const derivedTheme = storedTheme || systemTheme || 'light';
  const [theme, setTheme] = useState(
    derivedTheme === 'dark' ? navigationThemeDark : navigationThemeLight,
  );

  useEffect(() => {
    const derivedTheme = storedTheme || systemTheme || 'light';
    setTheme(
      derivedTheme === 'dark' ? navigationThemeDark : navigationThemeLight,
    );
  }, [storedTheme]);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
