import { View, StyleSheet, Dimensions } from 'react-native';

import { useThemeColors } from '@/hooks/useThemeColors';
import { Theme } from '@/theme/Colors';

type Size = 'size30' | 'size20' | 'size10' | 'size5';

type Props = {
  size: Size;
  backgroundColor?: string;
  children: React.ReactNode;
};

const { height: windowHeight } = Dimensions.get('window');

export default function CircularView({
  size,
  backgroundColor,
  children,
}: Props) {
  const themeColors = useThemeColors();
  const styles = makeStyles(themeColors);

  return (
    <View style={[styles.container, { backgroundColor }, styles[size]]}>
      {children}
    </View>
  );
}

const makeStyles = ({ colors }: Theme) =>
  StyleSheet.create({
    container: {
      borderWidth: 1,
      borderColor: colors.border,
      justifyContent: 'center',
      alignItems: 'center',
    },
    size30: {
      height: windowHeight * 0.3,
      width: windowHeight * 0.3,
      borderRadius: (windowHeight * 0.3) / 2,
    },
    size20: {
      height: windowHeight * 0.2,
      width: windowHeight * 0.2,
      borderRadius: (windowHeight * 0.2) / 2,
    },
    size10: {
      height: windowHeight * 0.1,
      width: windowHeight * 0.1,
      borderRadius: (windowHeight * 0.1) / 2,
    },
    size5: {
      height: windowHeight * 0.05,
      width: windowHeight * 0.05,
      borderRadius: (windowHeight * 0.05) / 2,
    },
  });
