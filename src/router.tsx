import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "./components/common/layout/auth-layout/AuthLayout";
import HomePage from "./pages/HomePage";
import PrivateRoutes from "./PrivateRoutes";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";

const router = createBrowserRouter([
  {
    element: <PrivateRoutes />,
    children: [{ path: "/", element: <HomePage /> }],
  },
  {
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
]);

export default router;
