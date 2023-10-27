import {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SettingsScreen from '../../screens/Settings/SettingsScreen';
import { COLORS } from '../../theme/colors';
import { TAB_ROUTES } from '../routes';
// import ChatStack from '../stacks/privateStacks/ChatStack';
import CountStack from '../stacks/privateStacks/CountStack';
import ProfileStack from '../stacks/privateStacks/ProfileStack';
import ScannerStack from '../stacks/privateStacks/ScannerStack';
import { TabNavigatorParamList } from '../types';

export function TabNavigator() {
  const Tab = createBottomTabNavigator<TabNavigatorParamList>();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.NAVY_BLUE,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.WHITE,
          borderTopColor: COLORS.MEDIUM_GRAY,
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          elevation: 0,
        },
      }}
    >
      <Tab.Screen
        name={TAB_ROUTES.COUNT_TAB}
        component={CountStack}
        options={{
          tabBarLabel: 'Counter',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="counter" {...{ color, size }} />
          ),
        }}
      />
      <Tab.Screen
        name={TAB_ROUTES.SCANNER_TAB}
        component={ScannerStack}
        options={{
          tabBarLabel: 'Scanner',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="qr-code-scanner" {...{ color, size }} />
          ),
        }}
      />
      {/* <Tab.Screen name={TAB_ROUTES.CHAT_TAB} component={ChatStack} 
            options={{
              tabBarLabel: 'Chat',
              tabBarIcon: ({ color, size }) => (
                <Entypo name="chat" {...{ color, size }} />
              ),
            }} /> */}
      <Tab.Screen
        name={TAB_ROUTES.PROFILE_TAB}
        component={ProfileStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" {...{ color, size }} />
          ),
        }}
      />
      <Tab.Screen
        name={TAB_ROUTES.SETTINGS_TAB}
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-settings-outline" {...{ color, size }} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
