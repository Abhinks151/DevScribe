import { useNavigate } from "react-router-dom";
import { deleteBlogPost, getBlogsPerUser } from "../firebase/firestore";
import type { Blog } from "../types/blog.type";
import { useAuth } from "../hooks/useAuth";
import { useEffect, useState } from "react";
import Post from "./Post";

const BlogList = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const fetchBlogs = async () => {
      setLoading(true);
      const data = await getBlogsPerUser(user.uid);
      setBlogs(data as Blog[]);
      setLoading(false);
    };

    fetchBlogs();
  }, [user]);

  const handleDelete = async (id: string) => {
    try {
      await deleteBlogPost(id);
      setBlogs((prev) => prev.filter((blog) => blog.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navbar — SAME AS DASHBOARD */}
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

      {/* Main */}
      <main className="container mx-auto px-6 py-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-5xl font-bold mb-3">All Your Blogs</h2>
            <p className="text-gray-300">
              Manage, edit, or delete your published articles
            </p>
          </div>

          <button
            onClick={() => navigate("/home")}
            className="mt-6 md:mt-0 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl transition"
          >
            ← Back to Dashboard
          </button>
        </div>

        {/* Content */}
        {loading && (
          <p className="text-gray-300 text-lg">Loading blogs...</p>
        )}

        {!loading && blogs.length === 0 && (
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

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white/10 backdrop-blur border border-white/10 rounded-xl hover:bg-white/15 transition"
            >
              <Post blog={blog} onDelete={handleDelete} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BlogList;
