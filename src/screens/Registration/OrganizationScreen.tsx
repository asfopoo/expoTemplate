import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect, useReducer } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';

import OrganizationModal from './modals/OrganizationModal';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Pressable from '../../components/Pressable';
import { PUBLIC_ROUTES } from '../../navigation/routes';
import { OrganizationRegistrationScreenNavigationProp } from '../../navigation/types';
import { TEXT_SIZES } from '../../theme/layout';

export default function OrganizationScreen() {
  const [modalVisible, toggleModal] = useReducer((state) => {
    return !state;
  }, false);
  const navigation =
    useNavigation<OrganizationRegistrationScreenNavigationProp>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Header {...{ navigation }} />
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/organizational-design-cover.png')}
          resizeMode="stretch"
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.largeText}>
            Are you registering with an existing organization?
          </Text>
        </View>
        <Text>
          If you answer yes, a notification will be sent to the owner of this
          organization for verification. Once verification is received, you will
          be added to this organization.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.marginBottom}>
          <Button
            label="yes"
            variant="primaryRounded"
            onPress={() => toggleModal()}
          />
        </View>
        <Pressable style={styles.marginBottom}>
          <Text onPress={() => navigation.navigate(PUBLIC_ROUTES.LOGIN_SCREEN)}>
            Skip this step for now.
          </Text>
        </Pressable>
      </View>
      <OrganizationModal {...{ modalVisible, toggleModal }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    width: '100%',
    flex: 1,
    justifyContent: 'flex-end',
  },
  marginBottom: {
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  largeText: {
    fontSize: TEXT_SIZES.TEXT22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    marginBottom: 40,
  },
  titleContainer: {
    marginBottom: 20,
  },
  imageContainer: {
    width: '100%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
