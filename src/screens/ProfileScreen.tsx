import { Text, SafeAreaView } from 'react-native';

export default function ProfileScreen() {
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
