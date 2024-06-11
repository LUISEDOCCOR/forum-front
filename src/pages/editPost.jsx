import { LayoutPost } from "../layout/LayoutPost"
import { Button } from "../components/button"
import { Input } from "../components/input"
import { useRef } from "react"
import toast from "react-hot-toast"
import { EditPostAPI, getOnePost } from "../utils/posts/post"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"
import { Spin } from "../components/spin"

export const EditPost = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [isLoading, setLoading] = useState(false)

    const titleRef = useRef("")
    const contentRef = useRef("")

    const fetchPost = async () => {
        setLoading(true)
        const response = await getOnePost(id)
        setLoading(false)
        if(response.length == 0){
            navigate("/")
        }else{
            titleRef.current.value = response.title
            contentRef.current.value = response.content
        }
    }

    useEffect(() => {
        fetchPost()
    },[])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const title = titleRef.current.value
        const content = contentRef.current.value

        if (title == "" || content == ""){
            toast.error("Rellene todos los campos")
        }else{
            const ok = await EditPostAPI(title, content, parseInt(id))
            if(ok){
                e.target.reset()
                const timer = setTimeout(() => {
                    clearTimeout(timer)
                    navigate("/")
                },500)
            }
        }
    }
    
    return (
        <>
            {
                isLoading ? (
                    <div className="h-screen flex justify-center  items-center"><Spin/></div>
                ) : (
                    <LayoutPost type="edit">
                        <form onSubmit={e => handleSubmit(e)} className="space-y-8">
                                    <Input reference={titleRef} type="text" placeholder="Ingresa el titulo" />
                                    <textarea ref={contentRef} placeholder="Que estás pensando?" 
                                    className="bg-transparent text-white w-full max-w-xl h-96 text-xl font-semibold py-2 px-3
                                    rounded-lg outline-none border-2 border-cGray placeholder:text-cGray"
                                    ></textarea>
                                    <Button label="Editar"/>
                            </form>
                    </LayoutPost>
                )
            }
        </>
    )
}