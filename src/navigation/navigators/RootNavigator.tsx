import * as SecureStore from 'expo-secure-store';
import { useEffect } from 'react';

import { TabNavigator } from './TabNavigator';
import { useAuth } from '../../hooks/useAuth';
import AuthStack from '../stacks/publicStacks/AuthStack';

export default function RootNavigator() {
  const { authState, dispatchAuth } = useAuth();

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    (async () => {
      let userToken: string | null = null;

      try {
        const storedToken = await SecureStore.getItemAsync('authToken');
        userToken = storedToken ? storedToken : null;
        // TODO: if token is expired, refresh token
      } catch (e) {
        console.warn(e);
      }

      // This will switch to the App screen or Auth screen
      dispatchAuth({ type: 'RESTORE_TOKEN', authToken: userToken });
    })();
  }, []);

  if (authState.isLoading) {
    // TODO: make a loading screen
    return null;
  }
  return <>{authState.userToken == null ? <AuthStack /> : <TabNavigator />}</>;
}
