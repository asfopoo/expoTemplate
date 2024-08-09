import { useBoundStore } from '../store';

export function selectSettings() {
  return useBoundStore.getState().settings;
}

export function selectIncrementCounterOnScanSetting() {
  return useBoundStore.getState().settings.incrementCounterOnScan;
}
