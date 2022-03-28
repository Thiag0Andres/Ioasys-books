import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export const PrivateRoute: React.FC = () => {
  const { authenticated } = useSelector((state: RootState) => state.auth);

  return authenticated ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
