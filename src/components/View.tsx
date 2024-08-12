import { View as RNView, type ViewProps } from 'react-native';

import { useThemeColors } from '@/hooks/useThemeColors';

export function View({ style, ...otherProps }: ViewProps) {
  const themeColors = useThemeColors();
  const backgroundColor = themeColors.colors.background;

  return <RNView style={[{ backgroundColor }, style]} {...otherProps} />;
}
