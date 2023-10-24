import { View, Text, SafeAreaView } from 'react-native';

import useAsyncStorage from '../hooks/useAsyncStorage';

export default function CountScreen() {
  const { getData, storeData } = useAsyncStorage('count', 0);
  const count = parseInt(getData, 10);

  const incrementCount = () => {
    storeData((count + 1).toString());
  };

  const decrementCount = () => {
    if (count === 0) return;
    storeData((count - 1).toString());
  };

  const resetCount = () => {
    storeData('0');
  };

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Text>Count screen</Text>
      <Text>Count: {count}</Text>
      <Text onPress={incrementCount}>Press to increment</Text>
      <Text onPress={decrementCount}>Press to decrement</Text>
      <Text onPress={resetCount}>Press to reset</Text>
    </SafeAreaView>
  );
}
