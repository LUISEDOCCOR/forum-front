import toast from "react-hot-toast";
import { URL_API, fecthApiPost, fecthApiPostGet } from "../api"; 
import Cookies from "universal-cookie";


export const previewPosts = async () =>{
    const response = await fetch(`${URL_API}/posts/preview`)
    const data = await response.json()
    return data
}

export const getAllPosts = async () => {
    const response = await fecthApiPostGet("/posts")
    return response
}

export const getMyPosts = async () => {
    const response = await fecthApiPostGet("/myposts")
    return response
}

export const deletePost = async (post_id) => {
    const response = await fecthApiPost(`/post/delete/${post_id}`, "DELETE", {})
    if(response.mode == "success"){
        toast.success(response.msg)
        return true
    }else{
        toast.error(response.msg)
        return false
    }
}   