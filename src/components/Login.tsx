import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../firebase/auth";
import authSchema from "../validators/authValidator";
import Error from "./Error";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );
  const [formError, setFormError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleLogin = async () => {
    const result = authSchema.safeParse({ email, password });

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({
        email: fieldErrors.email?.[0],
        password: fieldErrors.password?.[0],
      });
      return;
    }

    setErrors({});

    try {
      setFormError(null);
      await login(result.data.email, result.data.password);
    } catch (error: unknown) {
      const errorCode = (error as { code?: string }).code;

      switch (errorCode) {
        case "auth/user-not-found":
          setFormError("No account found with this email.");
          break;

        case "auth/wrong-password":
          setFormError("Incorrect password.");
          break;

        case "auth/invalid-credential":
          setFormError("Invalid email or password.");
          break;

        case "auth/too-many-requests":
          setFormError("Too many attempts. Try again later.");
          break;

        default:
          setFormError("Something went wrong. Please try again.");
      }
    }
  };

  const handleNavigateToRegister = () => {
    navigate("/register");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="w-full max-w-md px-6">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <span className="text-3xl font-bold text-white">DevScribe</span>
          </div>
          <p className="text-gray-400">Welcome back! Sign in to your account</p>
        </div>

        {/* Login Card */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Login
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
              />
            </div>
            <Error message={errors.email} />
            <Error message={errors.password} />
            <Error message={formError} />

            <button
              onClick={handleLogin}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition-colors mt-6"
            >
              Sign In
            </button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              Don't have an account?{" "}
              <button
                onClick={handleNavigateToRegister}
                className="text-purple-400 hover:text-purple-300 font-medium transition-colors"
              >
                Create one
              </button>
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-8">
          &copy; 2026 DevScribe. All rights reserved.
        </p>
      </div>
    </div>
  );
}
