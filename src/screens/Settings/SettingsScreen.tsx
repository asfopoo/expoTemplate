import { StyleSheet, SafeAreaView, View } from 'react-native';

import { settingsOptions } from './Settings.constants';
import OptionsList from '../../components/OptionsList';
import { useAuth } from '../../hooks/useAuth';

export default function SettingsScreen({ navigation }) {
  const { signOut } = useAuth();

  const handlePress = (route: string) => {
    if (route === 'SignOut') {
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
