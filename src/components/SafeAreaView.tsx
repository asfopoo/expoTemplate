import { SafeAreaView as RNSafeAreaView, type ViewProps } from 'react-native';

import { useThemeColors } from '@/hooks/useThemeColors';

export function SafeAreaView({ style, ...otherProps }: ViewProps) {
  const themeColors = useThemeColors();
  const backgroundColor = themeColors.colors.background;

  return (
    <RNSafeAreaView style={[{ backgroundColor }, style]} {...otherProps} />
  );
}
