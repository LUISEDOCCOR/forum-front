import { useEffect, useState } from "react";
import { previewPosts } from "../utils/posts/post";

export const usePreview = () => {
  const [Posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const data = await previewPosts();
    setPosts(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { Posts, isLoading };
};
