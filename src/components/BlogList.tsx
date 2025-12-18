import { useNavigate } from "react-router-dom";
import { deleteBlogPost, getBlogsPerUser } from "../firebase/firestore";
import type { Blog } from "../types/blog.type";
import { useAuth } from "../hooks/useAuth";
import { useEffect, useState } from "react";
import Post from "./POst";

const BlogList = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const fetchBlogs = async () => {
      const data = await getBlogsPerUser(user.uid);
      setBlogs(data as Blog[]);
      setLoading(false);
    };

    fetchBlogs();
  }, [user]);

  const handleDelete = async (id: string) => {
    try {
      await deleteBlogPost(id);

      // 🔑 UPDATE UI STATE
      setBlogs((prev: Blog[]) => prev.filter((blog) => blog.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p>Loading blogs...</p>;

  return (
    <div>
      <h2 className="text-xl font-bold">Your Blogs</h2>

      {blogs.length === 0 && <p>No blogs yet</p>}

      {blogs.map((blog) => (
        <Post key={blog.id} blog={blog} onDelete={handleDelete} />
      ))}

      <button onClick={() => navigate("/home")}>Go back</button>
      <button onClick={() => navigate("/new")}>Add new</button>
    </div>
  );
};

export default BlogList;
