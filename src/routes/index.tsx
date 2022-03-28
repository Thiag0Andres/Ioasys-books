import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Login, Home } from "../pages";
import PrivateRoute from "./PrivateRoute";

const __Routes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/home" element={<Home />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default __Routes;
