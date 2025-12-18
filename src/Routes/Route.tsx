import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import DevScribeHome from "../components/DevScribeHome";
import Dashboard from "../components/Dashboard";
import ProtectedRoute from "../components/ProtectedRoute";
import PublicRoute from "../components/PublicRoute";

const RouteComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<DevScribeHome />} />

      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />

      <Route
        path="/register"
        element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        }
      />

      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default RouteComponent;
