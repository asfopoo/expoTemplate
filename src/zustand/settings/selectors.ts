import { useBoundStore } from '../store';

export function useSelectSettings() {
  return useBoundStore((state) => state.settings);
}

export function useSelectIncrementCounterOnScanSetting() {
  return useBoundStore((state) => state.settings.incrementCounterOnScan);
}
