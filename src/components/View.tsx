import { View as RNView, type ViewProps } from 'react-native';

import { useThemeColors } from '@/hooks/useThemeColors';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function View({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedViewProps) {
  const themeColors = useThemeColors();
  const backgroundColor = themeColors.colors.background;

  return <RNView style={[{ backgroundColor }, style]} {...otherProps} />;
}
