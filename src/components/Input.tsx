import {
  TextInput,
  TextInputProps,
  Text,
  View,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';

import { useThemeColors } from '@/hooks/useThemeColors';
import { Theme } from '@/theme/colors';

type InputProps = TextInputProps & {
  identifier?: string;
  label?: string;
  error?: string;
  touched?: boolean;
};

export default function Input(props: InputProps) {
  const { label, error, touched, ...rest } = props;
  const themeColors = useThemeColors();
  const styles = makeStyles(themeColors);
  const { width } = useWindowDimensions();

  return (
    <View>
      {label && <Text>{label}</Text>}
      <TextInput
        style={[
          styles.inputStyle,
          { width: width - 60 },
          { borderColor: error && touched ? 'red' : 'gray' },
        ]}
        {...rest}
      />
      {error && touched && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const makeStyles = ({ colors }: Theme) =>
  StyleSheet.create({
    errorText: {
      color: colors.error,
    },
    inputStyle: {
      height: 40,
      borderBottomWidth: 1,
      paddingHorizontal: 10,
      marginVertical: 5,
    },
  });
