import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./components/pages/login-page";
import RegisterPage from "./components/pages/register-page";
import AuthLayout from "./components/common/layout/auth-layout/AuthLayout";

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
    ],
  },
]);

export default router;
