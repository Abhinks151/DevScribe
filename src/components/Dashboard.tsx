import {  useEffect } from "react";
import { useAuth } from "../hooks/useAuth";

const Dashboard = () => {
  const { user, logout } = useAuth();

  useEffect(() => {
    if (!user) {
      window.location.href = "/";
    }
  }, [user]);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-white">DevScribe</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-gray-300">Welcome, {user?.email}</span>
          <button
            onClick={logout}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Your Dashboard
          </h1>
          <p className="text-xl text-gray-300">
            Manage your documentation projects
          </p>
        </div>

        {/* Dashboard Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 hover:bg-white/15 transition">
            <div className="text-4xl mb-6">📄</div>
            <h3 className="text-2xl font-bold text-white mb-4">Projects</h3>
            <p className="text-gray-300 mb-4">
              View and manage all your documentation projects
            </p>
            <button className="text-purple-400 hover:text-purple-300 transition">
              View All →
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 hover:bg-white/15 transition">
            <div className="text-4xl mb-6">📊</div>
            <h3 className="text-2xl font-bold text-white mb-4">Analytics</h3>
            <p className="text-gray-300 mb-4">
              Track documentation usage and metrics
            </p>
            <button className="text-purple-400 hover:text-purple-300 transition">
              View Stats →
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 hover:bg-white/15 transition">
            <div className="text-4xl mb-6">⚙️</div>
            <h3 className="text-2xl font-bold text-white mb-4">Settings</h3>
            <p className="text-gray-300 mb-4">
              Configure your account and preferences
            </p>
            <button className="text-purple-400 hover:text-purple-300 transition">
              Manage →
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-white/10">
        <div className="text-center text-gray-400">
          <p>&copy; 2024 DevScribe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
