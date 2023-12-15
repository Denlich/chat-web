import AuthAPI from "../../api/auth/AuthAPI";
import { LoginBody } from "../../api/auth/types/LoginBody";
import { RegisterBody } from "../../api/auth/types/RegisterBody";
import StorageUtil from "../../utils/StorageUtil";

class AuthService {
  async login(body: LoginBody) {
    const tokens = await AuthAPI.login(body);
    StorageUtil.setTokens(tokens.accessToken, tokens.refreshToken);
  }

  logout() {
    StorageUtil.deleteTokens();
  }

  async register(body: RegisterBody) {
    await AuthAPI.register(body);
  }
}

export default new AuthService();
