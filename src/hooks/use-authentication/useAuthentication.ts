import { useAuthenticationContext } from "./authentication-context";
import { UseAuthenticationReturn } from "./types";

export const useAuthentication = (): UseAuthenticationReturn => {
  const { user, update } = useAuthenticationContext();

  return {
    isLoggedIn: !!user,
    user,
    update,
  };
};
