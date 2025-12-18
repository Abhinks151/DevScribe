import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import {
  addBlogPost,
  getOneBlogPost,
  updateBlogPost,
} from "../firebase/firestore";

const BlogForm = () => {
  const [title, setTitle] = useState<string | undefined>("");
  const [content, setContent] = useState<string | undefined>("");

  const { id } = useParams();
  const isEdit = Boolean(id);

  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (!isEdit || !id) return;

    const fetchBlog = async () => {
      const blog = await getOneBlogPost(id);
      if (!blog) return;

      setTitle(blog?.title);
      setContent(blog?.post);
    };

    fetchBlog();
  }, [id, isEdit]);

  const handleBlog = async () => {
    if (!user) return;

    if (!title || !content) return;

    if (isEdit) {
      await updateBlogPost(id!, title, content);
    } else {
      await addBlogPost(user.uid, title, content);
    }

    navigate("/all");
  };

  return (
    <div className="bg-white p-4">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full"
      />

      <textarea
        placeholder="Post"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border p-2 w-full h-40"
      />

      <div className="flex justify-between mt-4">
        <button
          onClick={handleBlog}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {isEdit ? "Update Post" : "Add Post"}
        </button>

        <button
          onClick={() => navigate("/home")}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default BlogForm;
