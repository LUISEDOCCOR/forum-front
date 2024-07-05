import { LayoutPost } from "../layout/LayoutPost";
import { Button } from "../components/button";
import toast from "react-hot-toast";
import { EditPostAPI, getOnePost } from "../utils/posts/post";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { Spin } from "../components/spin";

export const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);

  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  const fetchPost = async () => {
    setLoading(true);
    const response = await getOnePost(id);
    setLoading(false);
    if (response.length == 0) {
      navigate("/");
    } else {
      setTitle(response.title);
      setContent(response.content);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [id, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title == "" || content == "") {
      toast.error("Rellene todos los campos");
    } else {
      const ok = await EditPostAPI(title, content, parseInt(id));
      if (ok) {
        e.target.reset();
        const timer = setTimeout(() => {
          clearTimeout(timer);
          navigate("/");
        }, 500);
      }
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="flex h-screen items-center justify-center">
          <Spin />
        </div>
      ) : (
        <LayoutPost type="edit">
          <form onSubmit={(e) => handleSubmit(e)} className="space-y-8">
            <input
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              value={title}
              type="text"
              placeholder="Ingrese el titulo"
              className="w-full max-w-xl rounded-lg border-2 border-cGray bg-transparent px-3 py-2 text-xl font-semibold text-white outline-none placeholder:text-cGray"
            ></input>
            <textarea
              onChange={(e) => {
                setContent(e.target.value);
              }}
              value={content}
              placeholder="Que estás pensando?"
              className="h-96 w-full max-w-xl rounded-lg border-2 border-cGray bg-transparent px-3 py-2 text-xl font-semibold text-white outline-none placeholder:text-cGray"
            ></textarea>
            <Button label="Editar" />
          </form>
        </LayoutPost>
      )}
    </>
  );
};
