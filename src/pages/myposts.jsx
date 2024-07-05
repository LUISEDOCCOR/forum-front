import { ContainerPosts } from "../components/containerPosts";
import { useGetMyPosts } from "../hooks/useGetMyPosts";
import { LayoutForum } from "../layout/LayoutForum";
import { Link } from "react-router-dom";

export const MyPosts = () => {
  const { Posts, fetchData, isLoading } = useGetMyPosts();

  return (
    <LayoutForum header="Tus publicaciones">
      {Posts.length > 0 ? (
        <ContainerPosts
          Posts={Posts}
          isLoading={isLoading}
          fetchData={fetchData}
        />
      ) : (
        <section className="flex flex-col items-center gap-6">
          <h3 className="text-2xl">Aún no has publicado nada</h3>
          <Link to="/addpost" className="text-xl font-semibold">
            Publicar algo
          </Link>
        </section>
      )}
    </LayoutForum>
  );
};
