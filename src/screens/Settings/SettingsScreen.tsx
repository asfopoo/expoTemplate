import { NavigationProp } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

import { settingsOptions } from './constants';

import OptionsList from '@/components/OptionsList';
import { useAuth } from '@/hooks/useAuth';
import { RootStackParamList } from '@/navigation/types';
import { SafeAreaView } from '@/components/SafeAreaView';
import { View } from '@/components/View';

type Props = {
  navigation: NavigationProp<RootStackParamList, 'Settings Tab'>;
};

export default function SettingsScreen({ navigation }: Props) {
  const { signOut } = useAuth();

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
