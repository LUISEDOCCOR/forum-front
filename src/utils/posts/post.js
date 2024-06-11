import { URL_API } from "../api"; 
import Cookies from "universal-cookie";


export const previewPosts = async () =>{
    const response = await fetch(`${URL_API}/posts/preview`)
    const data = await response.json()
    return data
}

export const getAllPosts = async () => {

    const cookies = new Cookies
    const jwt = cookies.get("jwt")
    if (!jwt){
        return []
    }

    const response = await fetch(`${URL_API}/posts`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${jwt}`,
            'Content-Type': 'application/json'

        }
    })
    if(response.ok){
        const data = await response.json()
        return data
    } return []
}