import { createContext } from 'react';

import useAsyncStorage from '../hooks/useAsyncStorage';
import { UserContextType } from '../types/userTypes';

export const UserContext = createContext({} as UserContextType);

type Props = {
  children: React.ReactNode;
};

export function UserProvider({ children }: Props) {
  const { getStoredData } = useAsyncStorage();

  const getUser = async () => {
    const user = await getStoredData('user');
    return user;
  };

  return (
    <UserContext.Provider
      value={{
        getUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
