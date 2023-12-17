import { Navigate, Outlet } from "react-router-dom";
import { useAuthentication } from "./hooks/use-authentication/useAuthentication";
import AuthService from "./lib/services/auth/AuthService";

const PrivateRoutes = () => {
  const { isLoggedIn } = useAuthentication();

  if (!isLoggedIn) {
    AuthService.logout();
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoutes;
