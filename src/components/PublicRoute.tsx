import type { JSX } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PublicRoute = ({ children }: { children: JSX.Element }) => {
  const { user, loading } = useAuth();

  if (loading) return <p>Checking auth...</p>;

  // If logged in, redirect to dashboard
  if (user) return <Navigate to="/home" replace />;

  return children;
};

export default PublicRoute;
