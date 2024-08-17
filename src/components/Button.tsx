import {
  Pressable,
  Text,
  StyleSheet,
  PressableProps,
  ViewStyle,
} from 'react-native';

import { useThemeColors } from '@/hooks/useThemeColors';
import { Theme } from '@/theme/colors';

type ButtonTypes =
  | 'primaryRounded'
  | 'secondaryRounded'
  | 'secondaryRoundedShadow';

type Props = PressableProps & {
  type?: ButtonTypes;
  styleProp?: ViewStyle;
  label: string;
};

export default function Button(props: Props) {
  const themeColors = useThemeColors();
  const styles = makeStyles(themeColors);
  const { type = 'primaryRounded', label, styleProp, ...rest } = props;
  const style = [styles[type], styleProp];

  return (
    <Pressable style={style} {...rest}>
      <Text style={styles[`${type}Text`]}>{label}</Text>
    </Pressable>
  );
}

const makeStyles = ({ colors }: Theme) =>
  StyleSheet.create({
    primaryRounded: {
      borderRadius: 25,
      borderWidth: 1,
      borderColor: colors.icon,
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: colors.tint,
      height: 50,
      width: '90%',
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
      color: colors.tint,
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
      shadowColor: colors.tabIconDefault,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    secondaryRoundedShadowText: {
      color: colors.tint,
      fontWeight: 'bold',
    },
  });
