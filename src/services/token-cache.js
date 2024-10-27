import * as SecureStore from "expo-secure-store";

const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (error) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (error) {
      return null;
    }
  },
};

export default { tokenCache };
