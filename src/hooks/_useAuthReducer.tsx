import * as SecureStore from 'expo-secure-store';
import { useReducer } from 'react';

import { AuthAction, AuthState } from '../types/authTypes';

function authReducer(state: AuthState, action: AuthAction) {
  switch (action.type) {
    case 'RESTORE_TOKEN':
      return {
        ...state,
        userToken: action.authToken,
        isLoading: false,
      };
    case 'SIGN_IN':
      SecureStore.setItemAsync('authToken', action.authToken);
      SecureStore.setItemAsync('refreshToken', action.refreshToken);
      return {
        ...state,
        isSignout: false,
        userToken: action.authToken,
      };
    case 'SIGN_OUT':
      SecureStore.deleteItemAsync('authToken');
      return {
        ...state,
        isSignout: true,
        userToken: null,
      };
  }
}

const authInitialState: AuthState = {
  isLoading: true,
  isSignout: false,
  userToken: null,
};

export const _useAuthReducer = () => {
  const [authState, dispatchAuth] = useReducer(authReducer, authInitialState);

  return [authState, dispatchAuth] as const;
};
