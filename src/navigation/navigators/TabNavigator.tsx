import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SettingsScreen from '../../screens/Settings/SettingsScreen';
import { COLORS } from '../../theme/colors';
import { TAB_ROUTES } from '../routes';
import ChatStack from '../stacks/privateStacks/ChatStack';
import CountStack from '../stacks/privateStacks/CountStack';
import ProfileStack from '../stacks/privateStacks/ProfileStack';
import ScannerStack from '../stacks/privateStacks/ScannerStack';
import { TabNavigatorParamList } from '../types';

export function TabNavigator() {
  const Tab = createBottomTabNavigator<TabNavigatorParamList>();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.RED,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.BLACK,
          borderTopColor: 'transparent',
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          elevation: 0,
        },
      }}
    >
      <Tab.Screen name={TAB_ROUTES.COUNT_TAB} component={CountStack} />
      <Tab.Screen name={TAB_ROUTES.SCANNER_TAB} component={ScannerStack} />
      {/* <Tab.Screen name={TAB_ROUTES.CHAT_TAB} component={ChatStack} /> */}
      <Tab.Screen name={TAB_ROUTES.PROFILE_TAB} component={ProfileStack} />
      <Tab.Screen name={TAB_ROUTES.SETTINGS_TAB} component={SettingsScreen} />
    </Tab.Navigator>
  );
}
