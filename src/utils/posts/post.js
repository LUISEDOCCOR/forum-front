import toast from "react-hot-toast";
import { URL_API, fecthApiPost, fecthApiPostGet } from "../api";

export const previewPosts = async () => {
  const response = await fetch(`${URL_API}posts/preview`);
  const data = await response.json();
  return data;
};

export const getAllPosts = async () => {
  const response = await fecthApiPostGet("posts");
  return response;
};

export const getMyPosts = async () => {
  const response = await fecthApiPostGet("myposts");
  return response;
};

export const deletePost = async (post_id) => {
  const response = await fecthApiPost(`post/delete/${post_id}`, "DELETE", {});
  if (response.mode == "success") {
    toast.success(response.msg);
    return true;
  } else {
    toast.error(response.msg);
    return false;
  }
};

export const AddPostAPI = async (title, content) => {
  const post = {
    title: title,
    content: content,
  };

  const response = await fecthApiPost(`post/add`, "POST", post);
  if (response.mode == "success") {
    toast.success(response.msg);
    return true;
  } else {
    toast.error(response.msg);
    return false;
  }
};

export const EditPostAPI = async (title, content, post_id) => {
  const post = {
    title: title,
    content: content,
  };

  const response = await fecthApiPost(`post/edit/${post_id}`, "PUT", post);
  if (response.mode == "success") {
    toast.success(response.msg);
    return true;
  } else {
    toast.error(response.msg);
    return false;
  }
};

export const getOnePost = async (post_id) => {
  const response = await fecthApiPostGet(`post/${post_id}`);
  return response;
};
