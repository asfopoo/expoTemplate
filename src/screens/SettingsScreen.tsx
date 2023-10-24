import { View, Text, SafeAreaView } from 'react-native';

import { useAuth } from '../hooks/useAuth';

export default function SettingsScreen() {
  const { signOut } = useAuth();

  const handleSignOut = () => {
    signOut();
  };

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Text>Settings screen</Text>
      <Text>Account - subscription, organization, profile details</Text>
      <Text>
        Settings - theme, subsciption, delete account, scan increments, history
        time reset
      </Text>
      <Text>Notifications - subscribe to enable</Text>
      <Text>Support - contact, submit ticket</Text>
      <Text>Transfer Org ownership</Text>
      <Text>Manage org members</Text>
      <Text>Leave org </Text>
      <Text onPress={handleSignOut}>Sign out</Text>
    </SafeAreaView>
  );
}
