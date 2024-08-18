import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { PRIVATE_ROUTES } from '../../routes';

import { MoneyTabParamList } from '@/navigation/types';
import MoneyScreen from '@/screens/MoneyScreen';

const MoneyStackNavigator = createNativeStackNavigator<MoneyTabParamList>();

export default function MoneyStack() {
  return (
    <MoneyStackNavigator.Navigator>
      <MoneyStackNavigator.Screen
        name={PRIVATE_ROUTES.MONEY_SCREEN}
        component={MoneyScreen}
        options={{ headerShown: false }}
      />
    </MoneyStackNavigator.Navigator>
  );
}
