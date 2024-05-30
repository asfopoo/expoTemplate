import { useCallback } from 'react';

import { Settings } from './createSlice';
import { useBoundStore } from '../store';

export function useSetSettings() {
  return useCallback(
    (settings: Settings) => useBoundStore.setState(() => ({ settings })),
    [],
  );
}

export function useSetIncrementCounterOnScanSetting() {
  return useCallback(
    (incrementCounterOnScan: boolean) =>
      useBoundStore.setState((state) => ({
        settings: { ...state.settings, incrementCounterOnScan },
      })),
    [],
  );
}
