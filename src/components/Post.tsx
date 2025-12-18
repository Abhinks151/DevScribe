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
    <div className="mt-4 border p-4">
      <h3 className="font-bold">{blog.title}</h3>
      <p>{blog.post}</p>

      <div className="flex gap-2 mt-2">
        <button onClick={() => navigate(`/edit/${blog.id}`)}>
          Edit
        </button>

        <button onClick={() => onDelete(blog.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Post;
