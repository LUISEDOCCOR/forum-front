import { LayoutForum } from "../layout/LayoutForum"
import { usePreview } from "../hooks/usePreview"
import { ContainerPosts } from "../components/containerPosts"

export const Preview = () => {
    const { Posts, isLoading } = usePreview()

    return (
        <LayoutForum header="Algunas de nuestras publicaciones">
            <ContainerPosts Posts={Posts} isLoading={isLoading}/>
        </LayoutForum>
    )
}