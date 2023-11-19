import { createContext } from 'react';

import useAsyncStorage from '../hooks/useAsyncStorage';
import { SettingsContextType } from '../types/settingsTypes';

export const SettingsContext = createContext({} as SettingsContextType);

type Props = {
  children: React.ReactNode;
};

export function SettingsProvider({ children }: Props) {
  const { getStoredData } = useAsyncStorage();

  const getSettings = async () => {
    const settings = await getStoredData('settings');
    return settings;
  };

  return (
    <SettingsContext.Provider
      value={{
        getSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}
