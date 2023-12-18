import { Navigate } from "react-router-dom";
import { useAuthentication } from "./hooks/use-authentication/useAuthentication";
import AuthService from "./lib/services/auth/AuthService";
import RootLayout from "./components/common/layout/root-layout/RootLayout";

const PrivateRoutes = () => {
  const { isLoggedIn } = useAuthentication();

  if (!isLoggedIn) {
    AuthService.logout();
    return <Navigate to="/login" />;
  }

  return <RootLayout />;
};

export default PrivateRoutes;
