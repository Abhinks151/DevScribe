import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import type { Blog } from "../types/blog.type";
import { deleteBlogPost, getBlogsPerUser } from "../firebase/firestore";
import Post from "./Post";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) navigate("/");
  }, [user, navigate]);

  useEffect(() => {
    if (!user) return;

    getBlogsPerUser(user.uid).then((data) => {
      setBlogs(data as Blog[]);
      setLoading(false);
    });
  }, [user]);

  async function handleDelete(id: string) {
    try {
      await deleteBlogPost(id);
      setBlogs((prev) => prev.filter((blog) => blog.id !== id));
    } catch (err) {
      console.error("Delete failed", err);
    }
  }

  const recentBlogs = blogs.slice(0, 3);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navbar */}
      <nav className="border-b border-white/10 backdrop-blur">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide">DevScribe</h1>

          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-300">{user?.email}</span>
            <button
              onClick={logout}
              className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-5xl font-bold mb-3">Your Recent Blogs</h2>
            <p className="text-gray-300">
              Write, edit and manage your technical articles
            </p>
          </div>

          <button
            onClick={() => navigate("/new")}
            className="mt-6 md:mt-0 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-lg transition"
          >
            Create New Article
          </button>
        </div>

        {loading && (
          <p className="text-gray-300 text-lg">Loading your blogs...</p>
        )}

        {!loading && recentBlogs.length === 0 && (
          <div className="bg-white/10 backdrop-blur rounded-xl p-8 text-center">
            <p className="text-gray-300 mb-4">
              You haven’t written any blogs yet.
            </p>
            <button
              onClick={() => navigate("/new")}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg"
            >
              Write your first blog →
            </button>
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-8">
          {recentBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white/10 backdrop-blur border border-white/10 rounded-xl hover:bg-white/15 transition"
            >
              <Post blog={blog} onDelete={handleDelete} />
            </div>
          ))}
        </div>

        {blogs.length > 3 && (
          <div className="mt-16 text-center">
            <button
              onClick={() => navigate("/all")}
              className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-xl text-lg transition"
            >
              View all blogs →
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
