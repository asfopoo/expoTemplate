export type ThemeOption = {
  theme: 'light' | 'dark' | undefined;
};

export type Settings = {
  incrementCounterOnScan: boolean;
  theme: ThemeOption['theme'];
};

export type SettingsSlice = {
  settings: Settings;
};

export const createSettingsSlice = () => ({
  settings: {
    incrementCounterOnScan: true,
    theme: undefined,
  },
});
