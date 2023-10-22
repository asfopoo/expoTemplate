import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import {
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';

import { REGISTRATION_BUTTONS, INITIAL_VALUES } from './constants';
import Input from '../../components/Input';
import Pressable from '../../components/Pressable';
import { PUBLIC_ROUTES } from '../../navigation/routes';
import { RegistrationScreenNavigationProp } from '../../navigation/types';
import { loginSchema } from '../../utils/validationSchemas/loginValidation';

// TODO: Keyboard aware scroll view

export default function RegistrationScreen() {
  const navigation = useNavigation<RegistrationScreenNavigationProp>();
  return (
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView style={styles.loginContainer}>
        <Text>Login Screen</Text>
        <Formik
          initialValues={INITIAL_VALUES}
          onSubmit={(values) => {
            console.log('register');
          }}
          validationSchema={loginSchema} // TODO: registration schema
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
              {REGISTRATION_BUTTONS.map((button) => {
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
              <Pressable onPress={() => handleSubmit()}>Login</Pressable>
            </>
          )}
        </Formik>
      </KeyboardAvoidingView>
      <Pressable
        onPress={() => navigation.navigate(PUBLIC_ROUTES.LOGIN_SCREEN)} // tODO read the docs
      >
        <Text>Submit</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registrationContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },
});
