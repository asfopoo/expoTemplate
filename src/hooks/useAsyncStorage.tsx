import AsyncStorage from '@react-native-async-storage/async-storage';

export default function useAsyncStorage() {
  const getStoredData = async (key: string) => {
    try {
      const storedData = await AsyncStorage.getItem(key);
      if (storedData) {
        if (isJSON(storedData)) {
          return JSON.parse(storedData);
        } else {
          return JSON.parse(storedData);
        }
      }
    } catch (e) {
      console.log(e);
    }
    return null;
  };

  const storeData = async (key: string, value: any) => {
    try {
      const valueString = JSON.stringify(value);
      await AsyncStorage.setItem(key, valueString);
    } catch (e) {
      console.log(e);
    }
  };

  const clearData = async (key: string) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      console.log(e);
    }
  };

  return { getStoredData, storeData, clearData };
}

function isJSON(str: string) {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
}
