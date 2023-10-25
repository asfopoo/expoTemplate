import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Formik } from 'formik';
import { useLayoutEffect } from 'react';
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
import ScannerLogo from '../../components/ScannerLogo';
import { useAuth } from '../../hooks/useAuth';
import { PUBLIC_ROUTES } from '../../navigation/routes';
import { AuthStackParamList } from '../../navigation/types';
import { loginSchema } from '../../utils/validationSchemas/loginValidation';

type Props = NativeStackScreenProps<AuthStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: Props) {
  const { signIn } = useAuth();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.keyboardAvoidingContainer}>
        <View style={styles.logoContainer}>
          <ScannerLogo />
        </View>
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
              <View style={styles.inputContainer}>
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
              {/* <Pressable
                onPress={() => console.log('pressed')}
                style={styles.forgotPasswordContainer}
              >
                <Text>Forgot your password?</Text>
              </Pressable> */}
              <View style={styles.registrationContainer}>
                <View style={styles.loginButtonContainer}>
                  <Button
                    label="Login"
                    variant="primaryRounded"
                    onPress={() => handleSubmit()}
                  />
                </View>
                <Pressable
                  onPress={() =>
                    navigation.navigate(PUBLIC_ROUTES.REGISTRATION_SCREEN)
                  }
                >
                  <Text>Dont have an account yet?</Text>
                </Pressable>
              </View>
            </>
          )}
        </Formik>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardAvoidingContainer: {
    flex: 1,
  },
  logoContainer: {
    height: '30%',
    marginVertical: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    marginBottom: 40,
    alignItems: 'center',
  },
  loginButtonContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  registrationContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-start',
    marginLeft: 30,
  },
});
