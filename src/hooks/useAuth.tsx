import { useContext } from 'react';

import { AuthContext } from '../contextProviders/authProvider';

export const useAuth = () => {
  const { dispatchAuth, authState, signOut } = useContext(AuthContext);
  const { signIn } = useContext(AuthContext);

  return {
    dispatchAuth,
    authState,
    signIn,
    signOut,
  };
};
