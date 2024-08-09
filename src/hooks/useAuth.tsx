import { useContext } from 'react';

import { AuthContext } from '../context/authProvider';

export const useAuth = () => {
  const { dispatchAuth, authState, signOut, signIn } = useContext(AuthContext);

  return {
    dispatchAuth,
    authState,
    signIn,
    signOut,
  };
};
