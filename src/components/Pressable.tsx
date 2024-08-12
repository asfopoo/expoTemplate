import React from 'react';
import { Pressable as RNPressable, PressableProps } from 'react-native';

import { useThemeColors } from '@/hooks/useThemeColors';

export default function Pressable({
  children,
  style,
  ...rest
}: PressableProps) {
  const themeColors = useThemeColors();
  const backgroundColor = themeColors.colors.background;

  return (
    <RNPressable
      {...rest}
      style={(args) => {
        const appliedStyle = typeof style === 'function' ? style(args) : style;
        if (args.pressed) {
          return [appliedStyle, { opacity: 0.5, backgroundColor }];
        }
        return [appliedStyle, { backgroundColor }];
      }}
    >
      {children}
    </RNPressable>
  );
}
