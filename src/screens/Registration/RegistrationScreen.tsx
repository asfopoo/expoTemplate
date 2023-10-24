import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import {
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView,
} from 'react-native';

import { REGISTRATION_BUTTONS, INITIAL_VALUES } from './Registration.constants';
import Input from '../../components/Input';
import Pressable from '../../components/Pressable';
import { PUBLIC_ROUTES } from '../../navigation/routes';
import { RegistrationScreenNavigationProp } from '../../navigation/types';
import { registrationSchema } from '../../utils/validationSchemas/registrationValidation';

// TODO: Scrollview?

export default function RegistrationScreen() {
  const navigation = useNavigation<RegistrationScreenNavigationProp>();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        // contentContainerStyle={{ flexGrow: 1 }}
      >
        <KeyboardAvoidingView style={styles.loginContainer}>
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
                <Pressable onPress={() => handleSubmit()}>
                  <Text>Submit</Text>
                </Pressable>
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
    marginTop: 20,
  },
  scrollContainer: {
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
