import { Tokens } from "../../../types/tokens";
import { client } from "../client";
import { LoginBody } from "./types/LoginBody";
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
}

export default new AuthAPI();
