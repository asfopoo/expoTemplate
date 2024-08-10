import { StyleSheet, PressableProps } from 'react-native';

import Pressable from './Pressable';

import { useThemeColors } from '@/hooks/useThemeColors';
import { Theme } from '@/theme/Colors';

type Props = PressableProps & {
  children: React.ReactNode;
};

export default function ShadowCard({ children, ...props }: Props) {
  const themeColors = useThemeColors();
  const styles = makeStyles(themeColors);

  return (
    <Pressable style={styles.container} {...props}>
      {children}
    </Pressable>
  );
}

const makeStyles = ({ colors }: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.background,
      borderRadius: 20,
      padding: 20,
      margin: 10,
      shadowColor: colors.border,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
  });
