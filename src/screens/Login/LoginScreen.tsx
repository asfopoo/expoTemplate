import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Formik } from 'formik';
import {
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  View,
  SafeAreaView,
} from 'react-native';

import { LOGIN_BUTTONS, INITIAL_VALUES } from './Login.constants';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Pressable from '../../components/Pressable';
import { useAuth } from '../../hooks/useAuth';
import { PUBLIC_ROUTES } from '../../navigation/routes';
import { AuthStackParamList } from '../../navigation/types';
import { loginSchema } from '../../utils/validationSchemas/loginValidation';

type Props = NativeStackScreenProps<AuthStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: Props) {
  const { signIn } = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.keyboardAvoidingContainer}>
        <Formik
          initialValues={INITIAL_VALUES}
          onSubmit={(values) => {
            signIn();
          }}
          validationSchema={loginSchema}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <View style={styles.buttonContainer}>
                {LOGIN_BUTTONS.map((button) => {
                  const buttonIdentifier =
                    button.identifier as keyof typeof values;
                  return (
                    <Input
                      key={button.label}
                      onChangeText={handleChange(buttonIdentifier)}
                      value={values[buttonIdentifier]}
                      error={errors[buttonIdentifier]}
                      onBlur={handleBlur(buttonIdentifier)}
                      touched={touched[buttonIdentifier]}
                      {...button}
                    />
                  );
                })}
              </View>
              <Button
                label="Login"
                variant="primaryRounded"
                onPress={() => handleSubmit()}
              />
            </>
          )}
        </Formik>
      </KeyboardAvoidingView>
      <View style={styles.registrationContainer}>
        {/* <Pressable onPress={() => console.log('pressed')}>
          <Text>Forgot your password?</Text>
        </Pressable> */}
        <Pressable
          onPress={() => navigation.navigate(PUBLIC_ROUTES.REGISTRATION_SCREEN)}
        >
          <Text>Dont have an account yet?</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardAvoidingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginBottom: 20,
  },
  registrationContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },
});
