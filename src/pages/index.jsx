import { LayoutForum } from "../layout/LayoutForum"
import { useGetPosts } from "../hooks/useGetPosts"
import { ContainerPosts } from "../components/containerPosts"

export const HomePage = () => {
    const { Posts, isLoading } = useGetPosts()

    return (
        <LayoutForum header="Todas las publicaciones ">
            <ContainerPosts Posts={Posts} isLoading={isLoading}/>
        </LayoutForum>
    )
}