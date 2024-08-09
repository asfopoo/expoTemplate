import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CountScreen from '../../../screens/Count/CountScreen';
import { PRIVATE_ROUTES } from '../../routes';
import { CountTabParamList } from '../../types';

const CountStackNavigator = createNativeStackNavigator<CountTabParamList>();

export default function CountStack() {
  return (
    <CountStackNavigator.Navigator>
      <CountStackNavigator.Screen
        name={PRIVATE_ROUTES.COUNT_SCREEN}
        component={CountScreen}
      />
    </CountStackNavigator.Navigator>
  );
}
