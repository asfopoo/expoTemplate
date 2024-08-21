import { useColorScheme } from 'react-native';

import { Colors } from '@/theme/colors';
import { useBoundStore } from '@/zustand/store';

type Theme = 'light' | 'dark';

type Props = { providedTheme?: Theme };

export function useThemeColors({ providedTheme }: Props = {}) {
  const deviceTheme = useColorScheme();
  const storedTheme = useBoundStore((state) => state.settings.theme);
  const theme = storedTheme || providedTheme || deviceTheme || 'light';

  return Colors[theme as Theme];
}
