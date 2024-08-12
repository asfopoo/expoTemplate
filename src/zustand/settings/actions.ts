import { Settings, ThemeOption } from './createSlice';
import { useBoundStore } from '../store';

export function setSettings(settings: Settings) {
  useBoundStore.setState(() => ({ settings }));
}

export function setIncrementCounterOnScan(incrementCounterOnScan: boolean) {
  useBoundStore.setState((state) => ({
    settings: { ...state.settings, incrementCounterOnScan },
  }));
}

export function setTheme(theme: ThemeOption['theme']) {
  useBoundStore.setState((state) => ({
    settings: { ...state.settings, theme },
  }));
}
