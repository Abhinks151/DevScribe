import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
const DevScribeHome = lazy(() => import("../components/DevScribeHome"));
const Login = lazy(() => import("../components/Login"));
const Register = lazy(() => import("../components/Register"));
const Dashboard = lazy(() => import("../components/Dashboard"));
const BlogForm = lazy(() => import("../components/BlogForm"));
const BlogList = lazy(() => import("../components/BlogList"));
import ProtectedRoute from "../components/ProtectedRoute";
import PublicRoute from "../components/PublicRoute";

const RouteComponent = () => {
  return (
    <Suspense fallback={<div>Loading page...</div>}>
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

        <Route
          path="/new"
          element={
            <ProtectedRoute>
              <BlogForm />
            </ProtectedRoute>
          }
        />

        <Route
          path="/all"
          element={
            <ProtectedRoute>
              <BlogList />
            </ProtectedRoute>
          }
        />

        <Route
          path="/edit/:id"
          element={
            <ProtectedRoute>
              <BlogForm />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default RouteComponent;
