import { useBoundStore } from '../store';

export function selectSettings() {
  return useBoundStore.getState().settings;
}

export function selectTheme() {
  return useBoundStore.getState().settings.theme;
}
