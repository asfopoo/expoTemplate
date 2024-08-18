export type ThemeOption = {
  theme: 'light' | 'dark' | undefined;
};

export type Settings = {
  theme: ThemeOption['theme'];
};

export type SettingsSlice = {
  settings: Settings;
};

export const createSettingsSlice = () => ({
  settings: {
    theme: undefined,
  },
});
