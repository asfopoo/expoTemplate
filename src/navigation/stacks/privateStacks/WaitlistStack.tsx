import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { PRIVATE_ROUTES } from '../../routes';
import { WaitlistTabParamList } from '../../types';

import WaitlistScreen from '@/screens/Waitlist/WaitlistScreen';

const WaitlistStackNavigator =
  createNativeStackNavigator<WaitlistTabParamList>();

export default function WaitlistStack() {
  return (
    <WaitlistStackNavigator.Navigator>
      <WaitlistStackNavigator.Screen
        name={PRIVATE_ROUTES.WAITLIST_SCREEN}
        component={WaitlistScreen}
        options={{ headerShown: false }}
      />
    </WaitlistStackNavigator.Navigator>
  );
}
