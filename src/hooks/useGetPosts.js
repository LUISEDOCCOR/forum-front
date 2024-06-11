import { useEffect, useState } from "react"
import { getAllPosts } from "../utils/posts/post"

export const useGetPosts = () => {
    const [Posts, setPosts] = useState([])
    const [isLoading, setLoading] = useState(false)

    const fetchData = async () => {
        setLoading(true)
        const data = await getAllPosts()
        setPosts(data)
        setLoading(false)
    }

    useEffect(() => {
        fetchData()     
    },[])

    return {Posts, isLoading}
}
