import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AboutScreen from '../../../screens/Settings/AboutScreen';
import ScannerSettingsScreen from '../../../screens/Settings/ScannerSettingsScreen';
import SettingsScreen from '../../../screens/Settings/SettingsScreen';
import { PRIVATE_ROUTES } from '../../routes';
import { SettingsTabParamList } from '../../types';

import AppearanceSettingsScreen from '@/screens/Settings/AppearanceSettingsScreen';

const SettingsStackNavigator =
  createNativeStackNavigator<SettingsTabParamList>();

export default function SettingsStack() {
  return (
    <SettingsStackNavigator.Navigator>
      <SettingsStackNavigator.Screen
        name={PRIVATE_ROUTES.SETTINGS_SCREEN}
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
      <SettingsStackNavigator.Screen
        name={PRIVATE_ROUTES.ABOUT_SCREEN}
        component={AboutScreen}
        options={{ headerShown: false }}
      />
      <SettingsStackNavigator.Screen
        name={PRIVATE_ROUTES.SCANNER_SETTINGS_SCREEN}
        component={ScannerSettingsScreen}
        options={{ headerShown: false }}
      />
      <SettingsStackNavigator.Screen
        name={PRIVATE_ROUTES.APPEARANCE_SETTINGS_SCREEN}
        component={AppearanceSettingsScreen}
        options={{ headerShown: false }}
      />
    </SettingsStackNavigator.Navigator>
  );
}
