import { Pressable, Text, StyleSheet, PressableProps } from 'react-native';
import { COLORS } from '../theme/colors';

type ButtonVariants = 'primaryRounded' | 'secondaryRounded';

type Props = PressableProps & {
  variant?: ButtonVariants;
  styleProp?: any;
  label: string;
};

export default function Button(props: Props) {
  const { variant = 'primaryRounded', label, styleProp, ...rest } = props;
  const style = [styles[variant], styleProp];

  return (
    <Pressable style={style} {...rest}>
      <Text style={styles[`${variant}Text`]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  primaryRounded: {
    borderRadius: 25,
    borderWidth: 1,
    borderColor: COLORS.NAVY_BLUE,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: COLORS.NAVY_BLUE,
    height: 50,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryRounded: {
    borderRadius: 25,
    borderWidth: 1,
    borderColor: COLORS.NAVY_BLUE,
    paddingVertical: 10,
    paddingHorizontal: 20,
    height: 50,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryRoundedText: {
    color: COLORS.WHITE,
  },
  secondaryRoundedText: {
    color: COLORS.NAVY_BLUE,
  },
});
