import * as SecureStore from 'expo-secure-store';
import { createContext } from 'react';

import { _useAuthReducer } from '../hooks/_useAuthReducer';
import { AuthContextType } from '../types/authTypes';

export const AuthContext = createContext({} as AuthContextType);

type Props = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const [authState, dispatchAuth] = _useAuthReducer();

  const signIn = async (authToken: string, refreshToken: string) => {
    SecureStore.setItemAsync('authToken', authToken);
    SecureStore.setItemAsync('refreshToken', refreshToken);

    dispatchAuth({ type: 'SIGN_IN', authToken, refreshToken });
  };

  const signOut = () => dispatchAuth({ type: 'SIGN_OUT' });

  return (
    <AuthContext.Provider
      value={{
        dispatchAuth,
        authState,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
