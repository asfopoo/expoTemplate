import { StyleSheet, Text, SafeAreaView, View } from 'react-native';

import { settingsOptions } from './Settings.constants';
import OptionsList from '../../components/OptionsList';
import { useAuth } from '../../hooks/useAuth';

export default function SettingsScreen() {
  const { signOut } = useAuth();

  const handlePress = (route: string) => {
    if (route === 'SignOut') {
      signOut();
      return;
    }
    console.log(route);
  };

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
    paddingTop: 20,
  },
});
