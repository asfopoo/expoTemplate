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
    // In a production app, we need to send some data (usually username, password) to server and get a token
    // We will also need to handle errors if sign in failed
    // After getting token, we need to persist the token using `SecureStore`
    // In the example, we'll use a dummy token

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
