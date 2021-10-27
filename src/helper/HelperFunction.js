import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (settingsOpt, name) => {
    
  try {
    const jsonValue = JSON.stringify(settingsOpt);
    await AsyncStorage.setItem(name, jsonValue);
  } catch (e) {
    e;
  }
};

export const getData = async name => {
  try {
    const storedData = await AsyncStorage.getItem(name);
    
    return storedData != null ? JSON.parse(storedData) : [];
  } catch (e) {
    return [];
  }
};
export const removeStoreData = async name => {
  try {
    const removeData = await AsyncStorage.removeItem(name);
    return storedData != null ? JSON.parse(removeData) : [];
  } catch (e) {
    return [];
  }
};