import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "./components/common/layout/auth-layout/AuthLayout";
import LoginPage from "./components/pages/login-page";
import RegisterPage from "./components/pages/register-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,

    children: [
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
    ],
  },
]);

export default router;
