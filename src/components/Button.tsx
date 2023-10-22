import { Pressable, Text, StyleSheet, PressableProps } from 'react-native';

type ButtonVariants =
  | 'primary'
  | 'secondary'
  | 'primaryRounded'
  | 'secondaryRounded';

type Props = PressableProps & {
  variant?: ButtonVariants;
  styleProp?: any;
  label: string;
};

export default function Button(props: Props) {
  const { variant = 'primary', label, styleProp, ...rest } = props;
  const style = [styles[variant], styleProp];

  return (
    <Pressable style={style} {...rest}>
      <Text>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  primaryRounded: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'gray',
  },
  secondaryRounded: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  primary: {
    borderWidth: 1,
    borderColor: 'black',
  },
  secondary: {
    borderWidth: 1,
    borderColor: 'black',
  },
});
