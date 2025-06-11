import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "../types";

const STORAGE_KEY = "@car_brands_app_user";

export const saveUserData = async (userData: User) => {
  try {
    const jsonValue = JSON.stringify(userData);
    await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
  } catch (e) {
    console.error("Failed to save user data:", e);
  }
};

export const getUserData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error("Failed to fetch user data:", e);
  }
};

export const clearUserData = async () => {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error("Failed to clear user data:", e);
  }
};
