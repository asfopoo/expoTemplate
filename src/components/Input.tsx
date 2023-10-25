import {
  TextInput,
  TextInputProps,
  Text,
  View,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';

import { COLORS } from '../theme/colors';

type InputProps = TextInputProps & {
  label?: string;
  error?: string;
  touched?: boolean;
};

export default function Input(props: InputProps) {
  const { label, error, touched, ...rest } = props; // TODO label no longer used, remove it
  return (
    <View>
      <TextInput
        style={[
          styles.inputStyle,
          { width: useWindowDimensions().width - 60 },
          { borderColor: error && touched ? 'red' : 'gray' },
        ]}
        {...rest}
      />
      {error && touched && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  errorText: {
    color: COLORS.RED,
  },
  inputStyle: {
    height: 40,
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
});
