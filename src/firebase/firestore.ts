import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  query,
  where,
  serverTimestamp,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import app from "../config/firebase.config";
import type { Blog } from "../types/blog.type";

export const db = getFirestore(app);

export const addBlogPost = async (
  userId: string,
  title: string,
  post: string
) => {
  return addDoc(collection(db, "blogs"), {
    userId,
    title,
    post,
    createdAt: serverTimestamp(),
  });
};

export const getBlogsPerUser = async (userId: string) => {
  const q = query(
    collection(db, "blogs"),
    where("userId", "==", userId)
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const deleteBlogPost = async (id: string) => {
  return deleteDoc(doc(db, "blogs", id));
};



export const updateBlogPost = async (
  id: string,
  title: string,
  post: string
) => {
  const blogRef = doc(db, "blogs", id);

  await updateDoc(blogRef, {
    title,
    post,
  });
};




export const getOneBlogPost = async (id: string): Promise<Blog | null> => {
  const snap = await getDoc(doc(db, "blogs", id));

  if (!snap.exists()) {
    return null;
  }

  const data = snap.data();

  return {
    id: snap.id,
    title: data.title,
    post: data.post,
    userId: data.userId,
    createdAt: data.createdAt,
  };
};