import { useReducer, useEffect, useContext } from 'react';

import useAsyncStorage from './useAsyncStorage';
import { SettingsContext } from '../contextProviders/settingsProvider';
import { Settings } from '../types/settingsTypes';

// Define the actions
const actionTypes = {
  SET_SETTINGS: 'SET_SETTINGS',
  CLEAR_SETTINGS: 'CLEAR_SETTINGS',
};

type Action = {
  type: string;
  payload: any;
};

type State = {
  settings: Settings;
};

// Reducer function
const settingsReducer = (state: State, action: Action) => {
  switch (action.type) {
    case actionTypes.SET_SETTINGS:
      return { ...state, settings: action.payload };
    default:
      return state;
  }
};

export function useSettings() {
  const [state, dispatch] = useReducer(settingsReducer, {
    settings: {
      incrementCounterOnScan: false,
    },
  });

  const { getSettings } = useContext(SettingsContext);
  const { storeData, clearData } = useAsyncStorage();

  // get the initial user from contxt
  useEffect(() => {
    (async () => {
      const settingsFromContext = await getSettings();
      dispatch({
        type: actionTypes.SET_SETTINGS,
        payload: settingsFromContext,
      });
    })();
  }, [getSettings]);

  const updateSettings = (settingsParam: Settings) => {
    storeData('settings', settingsParam);
    dispatch({ type: actionTypes.SET_SETTINGS, payload: settingsParam });
  };

  const clearSettings = () => {
    clearData('settings');
    dispatch({ type: actionTypes.SET_SETTINGS, payload: undefined });
  };

  return {
    settings: state.settings,
    updateSettings,
    clearSettings,
  };
}
