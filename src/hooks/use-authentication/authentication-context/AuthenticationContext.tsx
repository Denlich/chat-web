import {
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";
import { AuthenticationContext } from "../types";
import { User } from "../../../types/user";
import StorageUtil from "../../../lib/utils/StorageUtil";
import { useQuery } from "@tanstack/react-query";
import AuthAPI from "../../../lib/api/auth/AuthAPI";
import { AxiosError } from "axios";

const authenticationContext = createContext<AuthenticationContext>({
  user: {} as User,
  update: () => new Promise(() => {}),
});

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthenticationContext = () => useContext(authenticationContext);

const AuthenticationProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [jwt, setJwt] = useState(StorageUtil.getTokens());

  const { error, data, isFetching, refetch, isError, isFetched } = useQuery({
    queryKey: ["oauth", jwt?.accessToken, jwt?.refreshToken],
    queryFn: () => AuthAPI.getMe(),
    retry: false,
    refetchOnWindowFocus: false,
  });

  if (error && isFetching) {
    const status = (error as AxiosError).response?.status;
    if (jwt && status === 401) {
      AuthAPI.refreshAccessToken(jwt.accessToken)
        .then(async ({ accessToken }) => {
          StorageUtil.setTokens(accessToken, jwt?.refreshToken);
          await refetch();
        })
        .catch(async () => {
          StorageUtil.deleteTokens();
        });
    } else {
      StorageUtil.deleteTokens();
    }
  }

  const context: AuthenticationContext = useMemo(
    () => ({
      user: data as User,
      update: async () => {
        setJwt(StorageUtil.getTokens());
        await refetch();
      },
    }),
    [data, refetch]
  );

  return (
    <authenticationContext.Provider value={context}>
      {(isFetched || isError) && children}
    </authenticationContext.Provider>
  );
};

export default AuthenticationProvider;
