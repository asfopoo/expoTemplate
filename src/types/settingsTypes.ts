export type SettingsAction =
  | { type: 'GET_SETTINGS'; settings: Settings }
  | { type: 'UPDATE_SETTINGS'; settings: Settings }
  | { type: 'CLEAR_SETTINGS' };

export type SettingsContextType = {
  getSettings: () => Promise<Settings>;
};

export type Settings = {
  incrementCounterOnScan: boolean;
};
