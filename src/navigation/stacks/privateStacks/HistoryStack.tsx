import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../../../screens/HomeScreen';
import { PRIVATE_ROUTES } from '../../routes';
import { HomeTabParamList } from '../../types';

const HomeStackNavigator = createNativeStackNavigator<HomeTabParamList>();

export default function HomeStack() {
  return (
    <HomeStackNavigator.Navigator>
      <HomeStackNavigator.Screen
        name={PRIVATE_ROUTES.HOME_SCREEN}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </HomeStackNavigator.Navigator>
  );
}
