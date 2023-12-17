import { STORAGE_KEYS } from "../../types/storage";
import { Tokens } from "../../types/tokens";

class StorageUtil {
  setTokens(accessToken: string, refreshToken: string) {
    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, accessToken);
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, refreshToken);
  }

  getTokens(): Tokens | null {
    const accessToken = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
    const refreshToken = localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);

    return accessToken && refreshToken ? { accessToken, refreshToken } : null;
  }

  getAccessToken(): string | null {
    return this.getTokens()?.accessToken || null;
  }

  deleteTokens() {
    localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
    localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
  }
}

export default new StorageUtil();
