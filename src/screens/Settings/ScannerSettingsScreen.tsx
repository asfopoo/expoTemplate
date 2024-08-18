import { useNavigation } from '@react-navigation/native';
import { Text, StyleSheet, SafeAreaView, View, Switch } from 'react-native';

import Header from '@/components/Header';
import { useThemeColors } from '@/hooks/useThemeColors';

export default function ScannerSettingsScreen() {
  const themeColors = useThemeColors();
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Header {...{ navigation }} />
      <View style={styles.rowContainer}>
        <Text style={styles.text16}>Increment Counter on Scan</Text>
        <Switch
          trackColor={{
            true: themeColors.colors.tint,
          }}
          thumbColor={themeColors.colors.background}
        />
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
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  text16: {
    fontSize: 16,
  },
});
