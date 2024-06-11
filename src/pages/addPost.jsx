import { LayoutPost } from "../layout/LayoutPost"
import { Button } from "../components/button"
import { Input } from "../components/input"
import { useRef } from "react"
import toast from "react-hot-toast"
import { AddPostAPI } from "../utils/posts/post"
import { useNavigate } from "react-router-dom"

export const AddPost = () => {
    const navigate = useNavigate()

    const titleRef = useRef("")
    const contentRef = useRef("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        const title = titleRef.current.value
        const content = contentRef.current.value

        if (title == "" || content == ""){
            toast.error("Rellene todos los campos")
        }else{
            const ok = await AddPostAPI(title, content)
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
        <LayoutPost type="add">
            <form onSubmit={e => handleSubmit(e)} className="space-y-8">
                <Input reference={titleRef} type="text" placeholder="Ingresa el titulo" />
                <textarea ref={contentRef} placeholder="Que estás pensando?" 
                className="bg-transparent text-white w-full max-w-xl h-96 text-xl font-semibold py-2 px-3
                rounded-lg outline-none border-2 border-cGray placeholder:text-cGray"
                ></textarea>
                <Button label="Publicar"/>
            </form>
        </LayoutPost>
    )
}