import { useMutation } from '@apollo/client';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Formik } from 'formik';
import {
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  View,
  SafeAreaView,
} from 'react-native';

import { LOGIN_INPUTS, INITIAL_VALUES } from './constants';
import { LOGIN } from './graphql/mutations';

import ButtonLinearGradient from '@/components/ButtonLinearGradient';
import Input from '@/components/Input';
import Pressable from '@/components/Pressable';
import ScannerLogo from '@/components/ScannerLogo';
import { useAuth } from '@/hooks/useAuth';
import { PUBLIC_ROUTES } from '@/navigation/routes';
import { AuthStackParamList } from '@/navigation/types';
import { loginSchema } from '@/utils/validationSchemas/loginValidation';
import { setUser } from '@/zustand/user/actions';

interface FormValues {
  email: string;
  password: string;
}

type Props = NativeStackScreenProps<AuthStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: Props) {
  const { signIn } = useAuth();
  const [loginUser, { loading, error }] = useMutation(LOGIN);

  const login = async (values: FormValues) => {
    const { data } = await loginUser({
      variables: {
        email: values.email,
        password: values.password,
      },
    });
    if (data) {
      signIn(data.login.authToken, data.login.refreshToken);
      setUser(data.login.user);
    } else {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.keyboardAvoidingContainer}>
        <View style={styles.logoContainer}>
          <ScannerLogo />
        </View>
        <Formik
          initialValues={INITIAL_VALUES}
          onSubmit={(values) => {
            login(values);
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
                {LOGIN_INPUTS.map((input) => {
                  const buttonIdentifier =
                    input.identifier as keyof typeof values;
                  return (
                    <Input
                      key={input.label}
                      onChangeText={handleChange(buttonIdentifier)}
                      value={values[buttonIdentifier]}
                      error={errors[buttonIdentifier]}
                      onBlur={handleBlur(buttonIdentifier)}
                      touched={touched[buttonIdentifier]}
                      {...input}
                    />
                  );
                })}
              </View>
              <View style={styles.registrationContainer}>
                <View style={styles.loginButtonContainer}>
                  <ButtonLinearGradient
                    label={loading ? 'Loading' : 'Login'}
                    type="primaryRounded"
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
