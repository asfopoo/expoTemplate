import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProfileScreen from '../../../screens/ProfileScreen';
import { PRIVATE_ROUTES } from '../../routes';
import { ProfileTabParamList } from '../../types';

const ProfileStackNavigator = createNativeStackNavigator<ProfileTabParamList>();

export default function ProfileStack() {
  return (
    <ProfileStackNavigator.Navigator>
      <ProfileStackNavigator.Screen
        name={PRIVATE_ROUTES.PROFILE_SCREEN}
        component={ProfileScreen}
      />
    </ProfileStackNavigator.Navigator>
  );
}
