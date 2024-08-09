import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import {
  createEntrantCountSlice,
  EntrantCountSlice,
} from './entrantCount/createSlice';
import { createSettingsSlice, SettingsSlice } from './settings/createSlice';
import { createUserSlice, UserSlice } from './user/createSlice';

type BoundedStoreState = UserSlice & SettingsSlice & EntrantCountSlice;

export const useBoundStore = create(
  persist<BoundedStoreState>(
    (...a) => ({
      ...createUserSlice(),
      ...createSettingsSlice(),
      ...createEntrantCountSlice(),
    }),
    {
      name: 'bound-store',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
