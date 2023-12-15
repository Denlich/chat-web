import AuthAPI from "../../api/auth/AuthAPI";
import { LoginBody } from "../../api/auth/types/LoginBody";
import StorageUtil from "../../utils/StorageUtil";

class AuthService {
  static async login(body: LoginBody) {
    const tokens = await AuthAPI.login(body);
    StorageUtil.setTokens(tokens.accessToken, tokens.refreshToken);
  }

  static logout() {
    StorageUtil.deleteTokens();
  }
}

export default AuthService;
