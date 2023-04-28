import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes() {
  const token = JSON.parse(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );
  return token ? <Outlet></Outlet> : <Navigate to={"/login"}></Navigate>;
}

export default PrivateRoutes;
