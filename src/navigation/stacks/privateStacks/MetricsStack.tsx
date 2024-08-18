import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { PRIVATE_ROUTES } from '../../routes';
import { MetricsTabParamList } from '../../types';
import MetricsScreen from '@/screens/Metrics/MetricsScreen';

const MetricsStackNavigator = createNativeStackNavigator<MetricsTabParamList>();

export default function MetricsStack() {
  return (
    <MetricsStackNavigator.Navigator>
      <MetricsStackNavigator.Screen
        name={PRIVATE_ROUTES.METRICS_SCREEN}
        component={MetricsScreen}
        options={{ headerShown: false }}
      />
    </MetricsStackNavigator.Navigator>
  );
}
