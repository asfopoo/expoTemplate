import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { Text, StyleSheet, SafeAreaView, View, Switch } from 'react-native';

import Header from '@/components/Header';
import { useThemeColors } from '@/hooks/useThemeColors';
import { setIncrementCounterOnScan } from '@/zustand/settings/actions';
import { selectSettings } from '@/zustand/settings/selectors';

const ActionTypes = {
  TOGGLE_INCREMENT_COUNTER_ON_SCAN: 'incrementCounterOnScan',
};

export default function ScannerSettingsScreen() {
  const themeColors = useThemeColors();
  const navigation = useNavigation();
  const settings = selectSettings();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  const handleValueChange = (
    actionType: typeof ActionTypes.TOGGLE_INCREMENT_COUNTER_ON_SCAN,
  ) => {
    switch (actionType) {
      case ActionTypes.TOGGLE_INCREMENT_COUNTER_ON_SCAN:
        setIncrementCounterOnScan(!settings.incrementCounterOnScan);
        break;
      default:
        break;
    }
  };

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
