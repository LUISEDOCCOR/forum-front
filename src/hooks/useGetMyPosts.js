import { useEffect, useState } from "react";
import { getMyPosts } from "../utils/posts/post";

export const useGetMyPosts = () => {
  const [Posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const data = await getMyPosts();
    setPosts(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { Posts, fetchData, isLoading };
};
