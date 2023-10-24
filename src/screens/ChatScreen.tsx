import { Text, SafeAreaView } from 'react-native';

export default function ChatScreen() {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Text>Chat screen</Text>
      <Text>Subscribe to enable chat within your organization</Text>
    </SafeAreaView>
  );
}
