export type Settings = {
  incrementCounterOnScan: boolean;
};

export type SettingsState = {
  settings: Settings;
};

export const createSettingsSlice = () => ({
  settings: {
    incrementCounterOnScan: true,
  },
});
