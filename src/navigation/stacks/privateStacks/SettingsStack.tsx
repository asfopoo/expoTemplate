import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SettingsScreen from '../../../screens/ScannerScreen';
import { PRIVATE_ROUTES } from '../../routes';
import { SettingsTabParamList } from '../../types';

const SettingsStackNavigator =
  createNativeStackNavigator<SettingsTabParamList>();

export default function SettingsStack() {
  return (
    <SettingsStackNavigator.Navigator>
      <SettingsStackNavigator.Screen
        name={PRIVATE_ROUTES.SETTINGS_SCREEN}
        component={SettingsScreen}
      />
    </SettingsStackNavigator.Navigator>
  );
}
