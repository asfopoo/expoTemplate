import { useColorScheme } from 'react-native';

import { Colors } from '@/theme/Colors';

type Props = { providedTheme?: 'light' | 'dark' };

export function useThemeColors({ providedTheme }: Props = {}) {
  const deviceTheme = useColorScheme();
  const theme = providedTheme || deviceTheme || 'light';

  return Colors[theme];
}
