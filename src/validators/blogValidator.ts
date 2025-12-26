import { z } from "zod";

const blogSchema = z.object({
  title: z.string().min(10, "Title requires atleast 10 characters is required"),
  content: z.string().min(10, "Content requires atleast 10 characters is required"),
});

export default blogSchema;
