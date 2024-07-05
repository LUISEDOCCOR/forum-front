import { LayoutForum } from "../layout/LayoutForum";
import { usePreview } from "../hooks/usePreview";
import { ContainerPosts } from "../components/containerPosts";
import { useNavigateToHome } from "../hooks/useNavigateToHome";

export const Preview = () => {
  useNavigateToHome();
  const { Posts, isLoading } = usePreview();

  return (
    <LayoutForum header="Algunas de nuestras publicaciones">
      <ContainerPosts Posts={Posts} isLoading={isLoading} />
    </LayoutForum>
  );
};
