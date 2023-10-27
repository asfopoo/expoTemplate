import {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet, Text } from 'react-native';

import SettingsScreen from '../../screens/Settings/SettingsScreen';
import { COLORS } from '../../theme/colors';
import { TAB_ROUTES } from '../routes';
// import ChatStack from '../stacks/privateStacks/ChatStack';
import CountStack from '../stacks/privateStacks/CountStack';
import HistoryStack from '../stacks/privateStacks/HistoryStack';
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
        tabBarLabel(props) {
          // show all labels except scanner tab
          return (
            <View style={styles.buttonContainer}>
              {props.children !== TAB_ROUTES.SCANNER_TAB && (
                <Text>{props.children}</Text>
              )}
            </View>
          );
        },
        tabBarStyle: styles.tabBarStyle,
      }}
    >
      <Tab.Screen
        name={TAB_ROUTES.HISTORY_TAB}
        component={HistoryStack}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="history" {...{ color, size }} />
          ),
        }}
      />
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
          tabBarIcon: ({ color, size }) => (
            <View style={styles.scannerButtonStyle}>
              <MaterialIcons name="qr-code-scanner" {...{ size, color }} />
            </View>
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

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarStyle: {
    backgroundColor: COLORS.WHITE,
    borderTopColor: COLORS.MEDIUM_GRAY,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    elevation: 0,
  },
  scannerButtonStyle: {
    position: 'absolute',
    height: 80,
    width: 80,
    borderRadius: 40,
    borderColor: COLORS.NAVY_BLUE,
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: COLORS.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
