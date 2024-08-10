import { useMutation } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import { useLayoutEffect } from 'react';
import {
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView,
} from 'react-native';

import { REGISTRATION_INPUTS, INITIAL_VALUES } from './constants';
import { REGISTER } from './graphql/mutations';

import ButtonLinearGradient from '@/components/ButtonLinearGradient';
import Header from '@/components/Header';
import Input from '@/components/Input';
import ScannerLogo from '@/components/ScannerLogo';
import { PUBLIC_ROUTES } from '@/navigation/routes';
import { RegistrationScreenNavigationProp } from '@/navigation/types';
import { registrationSchema } from '@/utils/validationSchemas/registrationValidation';

// TODO: Scrollview android?

export default function RegistrationScreen() {
  const navigation = useNavigation<RegistrationScreenNavigationProp>();

  const [registerUser, { data: registerData, loading, error }] =
    useMutation(REGISTER);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const register = async (values) => {
    const { data } = await registerUser({
      variables: {
        email: values.email.trim(),
        password: values.password.trim(),
        firstname: values.firstname.trim(),
        lastname: values.lastname.trim(),
      },
    });
    if (data.register.id) {
      navigation.navigate(PUBLIC_ROUTES.ORGANIZATION_REGISTRATION_SCREEN);
    } else {
      // TODO error handling
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header {...{ navigation }} />
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.container}
      >
        <KeyboardAvoidingView style={styles.loginContainer}>
          <View style={styles.logoContainer}>
            <ScannerLogo />
          </View>
          <Formik
            initialValues={INITIAL_VALUES}
            onSubmit={(values) => {
              register(values);
            }}
            validationSchema={registrationSchema}
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
                <View style={styles.contentContainer}>
                  {REGISTRATION_INPUTS.map((input) => {
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
                <View style={styles.buttonContainer}>
                  <ButtonLinearGradient
                    label="Submit"
                    type="primaryRounded"
                    onPress={() => handleSubmit()}
                  />
                </View>
              </>
            )}
          </Formik>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  logoContainer: {
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
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
  contentContainer: {
    flex: 1,
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 60,
  },
});
