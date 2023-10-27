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

import { REGISTRATION_BUTTONS, INITIAL_VALUES } from './Registration.constants';
import ButtonLinearGradient from '../../components/ButtonLinearGradient';
import Header from '../../components/Header';
import Input from '../../components/Input';
import ScannerLogo from '../../components/ScannerLogo';
import { PUBLIC_ROUTES } from '../../navigation/routes';
import { RegistrationScreenNavigationProp } from '../../navigation/types';
import { registrationSchema } from '../../utils/validationSchemas/registrationValidation';

// TODO: Scrollview android?

export default function RegistrationScreen() {
  const navigation = useNavigation<RegistrationScreenNavigationProp>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

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
              navigation.navigate(
                PUBLIC_ROUTES.ORGANIZATION_REGISTRATION_SCREEN,
              );
            }}
            // validationSchema={registrationSchema}
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
                </View>
                <View style={styles.buttonContainer}>
                  <ButtonLinearGradient
                    label="Submit"
                    variant="primaryRounded"
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
