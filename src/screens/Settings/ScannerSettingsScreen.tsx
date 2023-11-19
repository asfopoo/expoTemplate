import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { Text, StyleSheet, SafeAreaView, View, Switch } from 'react-native';

import Header from '../../components/Header';
import { useSettings } from '../../hooks/useSettings';
import { COLORS } from '../../theme/colors';

const ActionTypes = {
  TOGGLE_INCREMENT_COUNTER_ON_SCAN: 'incrementCounterOnScan',
};

export default function ScannerSettingsScreen() {
  const navigation = useNavigation();
  const { settings, updateSettings } = useSettings();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  const handleValueChange = (
    actionType: (typeof ActionTypes)[keyof typeof ActionTypes],
  ) => {
    const updatedSettings = {
      ...settings,
      [actionType]: !settings[actionType],
    };
    updateSettings(updatedSettings);
  };

  return (
    <SafeAreaView>
      <Header {...{ navigation }} />
      <View style={styles.rowContainer}>
        <Text style={styles.text16}>Increment Counter on Scan</Text>
        <Switch
          trackColor={{ true: COLORS.BRIGHT_BLUE }}
          thumbColor={COLORS.WHITE}
          onValueChange={() =>
            handleValueChange(ActionTypes.TOGGLE_INCREMENT_COUNTER_ON_SCAN)
          }
          value={settings?.incrementCounterOnScan}
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
