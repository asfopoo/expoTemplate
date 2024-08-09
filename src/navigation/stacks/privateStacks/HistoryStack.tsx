import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HistoryScreen from '../../../screens/HistoryScreen';
import { PRIVATE_ROUTES } from '../../routes';
import { HistoryTabParamList } from '../../types';

const HistoryStackNavigator = createNativeStackNavigator<HistoryTabParamList>();

export default function HistoryStack() {
  return (
    <HistoryStackNavigator.Navigator>
      <HistoryStackNavigator.Screen
        name={PRIVATE_ROUTES.HISTORY_SCREEN}
        component={HistoryScreen}
      />
    </HistoryStackNavigator.Navigator>
  );
}
