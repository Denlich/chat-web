import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./components/pages/login-page";
import RegisterPage from "./components/pages/register-page";
import AuthLayout from "./components/common/layout/auth-layout/AuthLayout";
import HomePage from "./pages/HomePage";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    element: <PrivateRoutes />,
    children: [{ path: "/", element: <HomePage /> }],
  },
  {
    element: <AuthLayout />,
    children: [
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
    ],
  },
]);

export default router;
