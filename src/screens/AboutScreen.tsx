import { View, Text } from 'react-native';

export default function AboutScreen() {
  // const version = Constants.manifest?.version ?? 'unknown';
  return (
    <View>
      <Text>About version and some text</Text>
      <Text>
        {' '}
        Ads:
        https://ammarahm-ed.github.io/react-native-admob-native-ads/docs/installation-3/
      </Text>
    </View>
  );
}
