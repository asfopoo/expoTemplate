export type Settings = {
  incrementCounterOnScan: boolean;
};

export type SettingsSlice = {
  settings: Settings;
};

export const createSettingsSlice = () => ({
  settings: {
    incrementCounterOnScan: true,
  },
});
