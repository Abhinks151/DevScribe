import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  return (
    <nav className="border-b border-white/10 backdrop-blur">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1
          onClick={() => navigate("/home")}
          className="text-2xl font-bold tracking-wide cursor-pointer"
        >
          DevScribe
        </h1>

        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-300">{user?.email}</span>

          <button
            onClick={() => navigate("/new")}
            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
          >
            + New Blog
          </button>

          <button
            onClick={logout}
            className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
