import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { createSettingsSlice, SettingsState } from './settings/createSlice';
import { createUserSlice, UserState } from './user/createSlice';

type BoundedStoreState = UserState & SettingsState;

export const useBoundStore = create(
  persist<BoundedStoreState>(
    (...a) => ({
      ...createUserSlice(),
      ...createSettingsSlice(),
    }),
    {
      name: 'bound-store',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
