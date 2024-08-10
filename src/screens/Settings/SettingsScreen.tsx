import { NavigationProp } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';

import { settingsOptions } from './constants';

import OptionsList from '@/components/OptionsList';
import { useAuth } from '@/hooks/useAuth';
import { RootStackParamList } from '@/navigation/types';

type Props = {
  navigation: NavigationProp<RootStackParamList, 'Settings Tab'>;
};

export default function SettingsScreen({ navigation }: Props) {
  const { signOut } = useAuth();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  const handlePress = (route: string) => {
    if (route === 'SignOut') {
      // this is bad -> fix this
      signOut();
      return;
    }
    navigation.navigate(route);
  };

  /* 
  <Text>delete account</Text>
   */

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <OptionsList options={settingsOptions} handlePress={handlePress} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
  },
});
