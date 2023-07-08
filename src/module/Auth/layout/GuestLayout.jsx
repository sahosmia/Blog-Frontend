import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../../context/AuthContext";

function GuestLayout() {
  const { token } = useAuthContext();
  if (token != null) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <ul>
        <li>
          <Link to="login">Login</Link>
        </li>

        <li>
          <Link to="register">Register</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}

export default GuestLayout;
