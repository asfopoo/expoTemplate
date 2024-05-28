import { useCallback } from 'react';

import { User } from './createSlice';
import { useBoundStore } from '../store';

export function useSetUser() {
  return useCallback(
    (user: User) => useBoundStore.setState(() => ({ user })),
    [],
  );
}

export function useRemoveUser() {
  return useBoundStore.setState(() => ({ user: undefined }));
}
