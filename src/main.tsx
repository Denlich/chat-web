import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import AuthenticationProvider from "./hooks/use-authentication/authentication-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthenticationProvider>
        <RouterProvider router={router} />
      </AuthenticationProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
