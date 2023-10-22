import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Button from '../../components/Button';
import Pressable from '../../components/Pressable';
import { PUBLIC_ROUTES } from '../../navigation/routes';
import { OrganizationRegistrationScreenNavigationProp } from '../../navigation/types';

export default function OrganizationScreen() {
  const navigation =
    useNavigation<OrganizationRegistrationScreenNavigationProp>();
  const [isOrg, setIsOrg] = useState(false);

  return (
    <View style={styles.container}>
      <Text>Organization screen</Text>
      <Text>Icon here</Text>
      <View style={styles.buttonRow}>
        <Button
          label="yes"
          variant={isOrg ? 'primaryRounded' : 'secondaryRounded'}
          onPress={() => setIsOrg(true)}
        />
        <Button
          label="No"
          variant={isOrg ? 'secondaryRounded' : 'primaryRounded'}
          onPress={() => setIsOrg(false)}
        />
      </View>
      {isOrg && (
        <Text>
          If you answer yes a notification will be sent to the owner of this
          organization for verification. Once verification is recieved, you will
          be added to this organization.
        </Text>
      )}
      <Pressable
        onPress={() => navigation.navigate(PUBLIC_ROUTES.LOGIN_SCREEN)}
      >
        <Text>Submit</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '50%',
  },
});
