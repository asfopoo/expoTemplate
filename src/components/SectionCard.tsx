import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { View, StyleSheet, DimensionValue } from 'react-native';

import { useThemeColors } from '@/hooks/useThemeColors';
import { Theme } from '@/theme/colors';

type Props = {
  height?: DimensionValue;
  children: React.ReactNode;
};

export default function SectionCard({ height = '45%', children }: Props) {
  const themeColors = useThemeColors();
  const styles = makeStyles(themeColors);
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <View style={[styles.container, { paddingBottom: tabBarHeight, height }]}>
      {children}
    </View>
  );
}

const makeStyles = ({ colors }: Theme) =>
  StyleSheet.create({
    container: {
      borderColor: colors.border,
      borderWidth: 1,
      width: '100%',
      position: 'absolute',
      bottom: 0,
      backgroundColor: colors.background,
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      padding: 20,
      shadowColor: colors.icon,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
