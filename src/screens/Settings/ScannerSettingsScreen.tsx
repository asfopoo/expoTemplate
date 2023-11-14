import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { Text, StyleSheet, SafeAreaView, View } from 'react-native';

import Header from '../../components/Header';

export default function ScannerSettingsScreen() {
  const navigation = useNavigation();
  const tabBarHeight = useBottomTabBarHeight();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <SafeAreaView>
      <Header {...{ navigation }} />
      <View style={styles.container}>
        <Text>sdfalkjadslfkj</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
