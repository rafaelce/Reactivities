import React from "react";
import { useStore } from "../stores/store";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function RequireAuth() {
  const {
    userStore: { isLoggedIn },
  } = useStore();
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return <Outlet />;
}
