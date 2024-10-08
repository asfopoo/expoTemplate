import { NavigationProp } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

import { getSettingOptions } from './helpers';

import OptionsList from '@/components/OptionsList';
import { SafeAreaView } from '@/components/SafeAreaView';
import { Text } from '@/components/Text';
import { View } from '@/components/View';
import { useAuth } from '@/hooks/useAuth';
import { useThemeColors } from '@/hooks/useThemeColors';
import { RootStackParamList } from '@/navigation/types';

type Props = {
  navigation: NavigationProp<RootStackParamList, 'Settings Tab'>;
};

export default function SettingsScreen({ navigation }: Props) {
  const { signOut } = useAuth();
  const themeColors = useThemeColors();
  const settingsOptions = getSettingOptions({
    iconColor: themeColors.colors.text,
  });

  const handlePress = (route: string) => {
    if (route === 'SignOut') {
      // this is bad -> fix this
      signOut();
      return;
    }
    navigation.navigate(route);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <OptionsList options={settingsOptions} handlePress={handlePress} />
        <View style={{ marginTop: 200 }}>
          <Text>
            Offer access to a library of tutorials or training materials on new
            techniques, styles, or business management tips.
          </Text>
          <Text>
            Offer integration with tax preparation software or services.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
  },
});
