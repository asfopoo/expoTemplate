import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useLayoutEffect } from 'react';
import { Text, SafeAreaView } from 'react-native';

import { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Profile Tab'>;

export default function ProfileScreen({ navigation }: Props) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Text>profile image</Text>
      <Text>name</Text>
      <Text>email</Text>
      <Text>Reset password</Text>

      <Text>Organization</Text>
      <Text>Transfer Org ownership</Text>
      <Text>Manage org members</Text>
      <Text>Leave org </Text>

      <Text>Subscription</Text>
      <Text>delete account</Text>
    </SafeAreaView>
  );
}