import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { createUserSlice, UserState } from './user/createSlice';

type BoundedStoreState = UserState;

export const useBoundStore = create(
  persist<BoundedStoreState>(
    (...a) => ({
      ...createUserSlice(),
    }),
    {
      name: 'bound-store',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
