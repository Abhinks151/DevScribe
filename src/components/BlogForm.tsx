import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import {
  addBlogPost,
  getOneBlogPost,
  updateBlogPost,
} from "../firebase/firestore";
// import Navbar from "./Navbar";
import blogSchema from "../validators/blogValidator";
import Error from "./Error";

const BlogForm = () => {
  const [title, setTitle] = useState<string | undefined>("");
  const [content, setContent] = useState<string | undefined>("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ title?: string; content?: string }>(
    {}
  );

  const { id } = useParams();
  const isEdit = Boolean(id);

  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (!isEdit || !id) return;

    const fetchBlog = async () => {
      setLoading(true);
      const blog = await getOneBlogPost(id);
      if (!blog) return;

      setTitle(blog.title);
      setContent(blog.post);
      setLoading(false);
    };

    fetchBlog();
  }, [id, isEdit]);

  const handleBlog = async () => {
    if (!user) return;

    const result = blogSchema.safeParse({ title, content });
    if (!result.success) {
      const fieldError = result.error.flatten().fieldErrors;
      setErrors({
        title: fieldError.title?.[0],
        content: fieldError.content?.[0],
      });
      return;
    }

    setErrors({});
    if (!user) return;
    if (!title) return;
    if (!content) return;
    setLoading(true);

    if (isEdit && id) {
      await updateBlogPost(id, title, content);
    } else if (user) {
      await addBlogPost(user.uid, title, content);
    }

    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* <Navbar /> */}

      {/* Main */}
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur border border-white/10 rounded-xl p-8">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-4xl font-bold mb-2">
              {isEdit ? "Edit Blog" : "Create New Blog"}
            </h2>
            <p className="text-gray-300">
              {isEdit
                ? "Update your article content"
                : "Write and publish your technical thoughts"}
            </p>
          </div>

          {/* Form */}
          {loading ? (
            <p className="text-gray-300">Loading...</p>
          ) : (
            <>
              <div className="mb-6">
                <label className="block text-sm text-gray-300 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  placeholder="Enter blog title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div className="mb-8">
                <label className="block text-sm text-gray-300 mb-2">
                  Content
                </label>
                <textarea
                  placeholder="Write your blog content here..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white h-56 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <Error message={errors.title} />
              <Error message={errors.content} />

              {/* Actions */}
              <div className="flex justify-between items-center">
                <button
                  onClick={handleBlog}
                  disabled={loading}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg transition disabled:opacity-50"
                >
                  {isEdit ? "Update Blog" : "Publish Blog"}
                </button>

                <button
                  onClick={() => navigate("/home")}
                  className="px-6 py-3 bg-gray-600 hover:bg-gray-700 rounded-lg transition"
                >
                  Cancel
                </button>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default BlogForm;
