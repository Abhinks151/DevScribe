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
import AppLayout from "../layouts/AppLayout";
import Loading from "../components/Loader";

const RouteComponent = () => {
  return (
    <Suspense fallback={<Loading/>}>
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
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/home" element={<Dashboard />} />

          <Route path="/new" element={<BlogForm />} />

          <Route path="/all" element={<BlogList />} />

          <Route path="/edit/:id" element={<BlogForm />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default RouteComponent;
