import { useColorScheme } from 'react-native';

import { Colors } from '@/theme/Colors';
import { selectSettings } from '@/zustand/settings/selectors';

type Theme = 'light' | 'dark';

type Props = { providedTheme?: Theme };

export function useThemeColors({ providedTheme }: Props = {}) {
  const deviceTheme = useColorScheme();
  const savedTheme = selectSettings().theme;
  const theme = savedTheme || providedTheme || deviceTheme || 'light';

  return Colors[theme as Theme];
}
