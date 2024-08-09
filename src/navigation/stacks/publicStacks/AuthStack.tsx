import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../../../screens/Login/LoginScreen';
import OrganizationScreen from '../../../screens/Registration/OrganizationScreen';
import RegistrationScreen from '../../../screens/Registration/RegistrationScreen';
import { PUBLIC_ROUTES } from '../../routes';
import { AuthStackParamList } from '../../types';

const AuthStackNavigator = createNativeStackNavigator<AuthStackParamList>();

export default function AuthStack() {
  return (
    <AuthStackNavigator.Navigator>
      <AuthStackNavigator.Screen
        name={PUBLIC_ROUTES.LOGIN_SCREEN}
        component={LoginScreen}
      />
      <AuthStackNavigator.Screen
        name={PUBLIC_ROUTES.REGISTRATION_SCREEN}
        component={RegistrationScreen}
      />
      <AuthStackNavigator.Screen
        name={PUBLIC_ROUTES.ORGANIZATION_REGISTRATION_SCREEN}
        component={OrganizationScreen}
      />
    </AuthStackNavigator.Navigator>
  );
}
