import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AboutScreen from '../../../screens/AboutScreen';
import SettingsScreen from '../../../screens/Settings/SettingsScreen';
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
      <SettingsStackNavigator.Screen
        name={PRIVATE_ROUTES.ABOUT_SCREEN}
        component={AboutScreen}
      />
    </SettingsStackNavigator.Navigator>
  );
}
