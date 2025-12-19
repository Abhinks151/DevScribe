import { useNavigate } from "react-router-dom";
import type { Blog } from "../types/blog.type";

const Post = ({
  blog,
  onDelete,
}: {
  blog: Blog;
  onDelete: (id: string) => void;
}) => {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h3 className="text-2xl font-semibold text-white mb-3">
        {blog.title}
      </h3>

      <p className="text-gray-300 text-sm line-clamp-4 mb-6">
        {blog.post}
      </p>

      <div className="flex justify-between items-center text-sm">
        <button
          onClick={() => navigate(`/edit/${blog.id}`)}
          className="text-blue-400 hover:text-blue-300 transition"
        >
          Edit →
        </button>

        <button
          onClick={() => onDelete(blog.id)}
          className="text-red-400 hover:text-red-300 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Post;
