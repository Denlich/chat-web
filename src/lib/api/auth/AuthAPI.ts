import { Tokens } from "../../../types/tokens";
import { client } from "../client";
import { LoginBody } from "./types/LoginBody";

class AuthAPI {
  async login(body: LoginBody) {
    const { data } = await client.post<Tokens>("/auth/login", body);
    return data;
  }
}

export default new AuthAPI();
