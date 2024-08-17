import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ScannerScreen from '../../../screens/ScannerScreen';
import { PRIVATE_ROUTES } from '../../routes';
import { ScannerTabParamList } from '../../types';

const ScannerStackNavigator = createNativeStackNavigator<ScannerTabParamList>();

export default function ScannerStack() {
  return (
    <ScannerStackNavigator.Navigator>
      <ScannerStackNavigator.Screen
        name={PRIVATE_ROUTES.SCANNER_SCREEN}
        component={ScannerScreen}
        options={{ headerShown: false }}
      />
    </ScannerStackNavigator.Navigator>
  );
}
