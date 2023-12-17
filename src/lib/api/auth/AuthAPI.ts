import { Tokens } from "../../../types/tokens";
import { User } from "../../../types/user";
import StorageUtil from "../../utils/StorageUtil";
import { client } from "../client";
import { getAuthorizationHeader } from "../utils";
import { LoginBody } from "./types/LoginBody";
import { RefreshAccessTokenResponse } from "./types/RefreshAccessTokenResponse";
import { RegisterBody } from "./types/RegisterBody";

class AuthAPI {
  async login(body: LoginBody) {
    const { data } = await client.post<Tokens>("/auth/login", body);
    return data;
  }

  async register(body: RegisterBody) {
    const { data } = await client.post<Tokens>("/auth/register", body);
    return data;
  }

  async getMe() {
    const { data } = await client.get<User>(
      "/auth/me",
      getAuthorizationHeader()
    );
    return data;
  }

  async refreshAccessToken(accessToken: string) {
    const { data } = await client.post<RefreshAccessTokenResponse>(
      "/auth/refresh",
      { accessToken },
      {
        headers: {
          Authorization: `Bearer ${StorageUtil.getTokens()?.refreshToken}`,
        },
      }
    );
    return data;
  }
}

export default new AuthAPI();
