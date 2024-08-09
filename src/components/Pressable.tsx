import React from 'react';
import { Pressable as RNPressable, PressableProps } from 'react-native';

export default function Pressable({
  children,
  style,
  ...rest
}: PressableProps) {
  return (
    <RNPressable
      {...rest}
      style={(args) => {
        const appliedStyle = typeof style === 'function' ? style(args) : style;
        if (args.pressed) {
          return [appliedStyle, { opacity: 0.5 }];
        }
        return appliedStyle;
      }}
    >
      {children}
    </RNPressable>
  );
}
