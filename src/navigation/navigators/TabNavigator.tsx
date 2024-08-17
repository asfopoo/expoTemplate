import {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet, Text } from 'react-native';

import { TAB_ROUTES } from '../routes';
// import ChatStack from '../stacks/privateStacks/ChatStack';
import CountStack from '../stacks/privateStacks/CountStack';
import HistoryStack from '../stacks/privateStacks/HistoryStack';
import ProfileStack from '../stacks/privateStacks/ProfileStack';
import ScannerStack from '../stacks/privateStacks/ScannerStack';
import SettingsStack from '../stacks/privateStacks/SettingsStack';
import { TabNavigatorParamList } from '../types';

import { useThemeColors } from '@/hooks/useThemeColors';
import { Theme } from '@/theme/colors';

export default function TabNavigator() {
  const themeColors = useThemeColors();
  const styles = makeStyles(themeColors);
  const Tab = createBottomTabNavigator<TabNavigatorParamList>();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabel(props) {
          return (
            <View style={styles.buttonContainer}>
              <Text>{props.children}</Text>
            </View>
          );
        },
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
          tabBarLabel: 'Scanner',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="qr-code-scanner" {...{ size, color }} />
          ),
        }}
      />
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
        component={SettingsStack}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" {...{ color, size }} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const makeStyles = ({ colors }: Theme) =>
  StyleSheet.create({
    buttonContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
