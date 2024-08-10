import { LinearGradient } from 'expo-linear-gradient';
import { Text, StyleSheet, PressableProps, ViewStyle } from 'react-native';

import Pressable from './Pressable';

import { useThemeColors } from '@/hooks/useThemeColors';
import { Theme } from '@/theme/Colors';

type ButtonTypes =
  | 'primaryRounded'
  | 'secondaryRounded'
  | 'secondaryRoundedShadow';

type Props = PressableProps & {
  type?: ButtonTypes;
  styleProp?: ViewStyle;
  colors?: string[];
  label: string;
};

export default function ButtonLinearGradient(props: Props) {
  const { type = 'primaryRounded', colors, label, styleProp, ...rest } = props;
  const themeColors = useThemeColors();
  const styles = makeStyles(themeColors);
  const style = [styles[type], styleProp];

  return (
    <LinearGradient
      colors={colors || ['#4c669f', '#3b5998', '#192f6a']}
      style={styles.LinearGradient}
    >
      <Pressable style={style} {...rest}>
        <Text style={styles[`${type}Text`]}>{label}</Text>
      </Pressable>
    </LinearGradient>
  );
}

const makeStyles = ({ colors }: Theme) =>
  StyleSheet.create({
    LinearGradient: {
      borderRadius: 25,
      paddingVertical: 10,
      height: 50,
      width: '90%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    primaryRounded: {
      borderRadius: 25,
      borderWidth: 1,
      borderColor: colors.border,
      paddingVertical: 10,
      paddingHorizontal: 20,
      height: 50,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    secondaryRounded: {
      borderRadius: 25,
      borderWidth: 1,
      borderColor: colors.border,
      paddingVertical: 10,
      paddingHorizontal: 20,
      height: 50,
      width: '90%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    primaryRoundedText: {
      color: colors.text,
    },
    secondaryRoundedText: {
      color: colors.text,
    },
    secondaryRoundedShadow: {
      borderRadius: 25,
      paddingVertical: 10,
      paddingHorizontal: 20,
      height: 50,
      width: '90%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.background,
      shadowColor: colors.tint,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    secondaryRoundedShadowText: {
      color: colors.text,
      fontWeight: 'bold',
    },
  });
